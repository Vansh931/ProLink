import React,{useState,useContext} from 'react'
import {UserDataContext} from '../context/UserContext'
import logo1 from '../assets/logo-1.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import profile from '../assets/profile.png'
import { IoIosSearch } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import {AuthDataContext} from '../context/AuthContext'
function Nav() {
    let [activeSearch,setActiveSearch] = useState(false)
    let {userData,setUserData} = useContext(UserDataContext)
    let [profilePopUp,setProfilePopUp] = useState(false)
    let {serverUrl} = useContext(AuthDataContext)
    const Exit = async ()=>{
        try {
            
            const d = await axios.post(`${serverUrl}/api/auth/logout`,{},{
                withCredentials:true
            })
            setUserData(null)
            navigate('/login')
            console.log(d)
        } catch (error) {
            console.log(error.response?.data?.message)
        }
    }
  return (
    <div className='w-full bg-[white] h-[80px] shadow-lg fixed top-0 flex justify-between md:justify-around items-center px-[10px]'>
        <div className='flex justify-center items-center'>
        <div onClick={()=>{setActiveSearch(false)}}>
            <img src={logo1} alt="Logo" className="w-[60px]"/>
        </div>
        {!activeSearch&&<div>
            <IoIosSearch className="w-[23px] h-[23px] text-grey-600 md:hidden" onClick={()=>{setActiveSearch(prev=>!prev)}}/>
            </div>
        }
        <form className={`w-[36vw] h-[2.55em] bg-[#eeece2] md:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!activeSearch?"hidden":"flex"}`}>
            <div><IoIosSearch className="w-[23px] h-[23px] text-grey-600"/></div>
            <input type = "text" placeholder="Search..." className="w-[80%] h-full bg-transparent outline-hidden" />
        </form>
        </div>
        <div className='flex gap-[20px] justify-center items-center relative'>
            {
                profilePopUp
                &&
                <div className="w-[300px] h-[300px] bg-[white] absolute shadow-lg rounded-[5px] top-[75px] flex flex-col items-center p-[20px] gap-[20px]">
                    <div className="w-[80px] h-[80px] overflow-hidden rounded-full ">
                        <img src={profile} alt="Profile" />
                    </div>
                    <div className="text-[20px] font-bold text-gray-500 font-serif mt-[-5px]">{userData.firstName} {userData.lastName}</div>
                    <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] active:scale-95 transition-transform-ease-in-out duration-500'>View Profile</button>
                    <div className="w-[100%] h-[2px] bg-gray-400"></div>
                    <div className="flex justify-start items-center text-grey-600 w-full px-[6px]">
                        <div><FaUserFriends className="w-[23px] h-[23px] text-grey-600"/></div>
                        <div>Network</div>
                    </div>
                    <button className='w-[100%] h-[40px] rounded-full border-2 border-[#f41d1d] text-[#ff0000] active:scale-95 transition-transform-ease-in-out duration-500' onClick={()=>{Exit()}}>Sign Out</button>
                </div>
            }
            <div className="lg:flex  flex-col justify-center items-center text-grey-600 hidden hover:translate-y-0.5 transition-transform-ease-in-out duration-400 active:scale-95 transition-transform-ease-in-out duration-500">
                <div><IoIosHome className="w-[23px] h-[23px] text-grey-600"/></div>
                <div>Home</div>
            </div>
            <div className="md:flex  flex-col justify-center items-center text-grey-600 hidden hover:translate-y-0.5 transition-transform-ease-in-out duration-400 active:scale-95 transition-transform-ease-in-out duration-500">
                <div><FaUserFriends className="w-[23px] h-[23px] text-grey-600"/></div>
                <div>Network</div>
            </div>
            <div className="flex  flex-col justify-center items-center text-grey-600 hover:translate-y-0.5 transition-transform-ease-in-out duration-400 active:scale-95 transition-transform-ease-in-out duration-500">
                <div><IoMdNotificationsOutline className="w-[23px] h-[23px] text-grey-600 hidden min-[300px]:block"/></div>
                <div className="hidden md:block">Notifications</div>
            </div>
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full hover:translate-y-0.5 transition-transform-ease-in-out duration-400 active:scale-95 transition-transform-ease-in-out duration-500" onClick={()=>{setProfilePopUp(prev=>!prev)}}>
                <img src={profile} alt="Profile" />
            </div>
        </div>
    </div>
  )
}

export default Nav
