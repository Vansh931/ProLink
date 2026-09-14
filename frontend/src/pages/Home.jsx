import React,{useContext} from 'react'
import axios from 'axios'
import { AuthDataContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import {UserDataContext} from '../context/UserContext.jsx'
import Nav from '../components/Nav.jsx'


function Home() {
  let {serverUrl} = useContext(AuthDataContext)
  let navigate = useNavigate()
  let {userData,setUserData} = useContext(UserDataContext)
  const handleLogOut = async()=>{
    try {
      const data = await axios.post(`${serverUrl}/api/auth/logout`,{},{
        withCredentials:true
      })
      // console.log(data)
      setUserData(null)
      navigate('/login')
    }
    catch (error) {
      console.log(error.response?.data?.message)
    }
  }
  return (
    <div className=' bg-[#f3f2ec] w-full min-h-[100vh] pt-[80px] '>
      <Nav/>

    </div>
  )
}

export default Home
