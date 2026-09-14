import React,{useState,useContext} from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {AuthDataContext} from '../context/AuthContext.jsx'
import {UserDataContext} from '../context/UserContext.jsx'
function signup() {
    let navigate = useNavigate()
    let {serverUrl} = useContext(AuthDataContext)
    let {userData,setUserData} = useContext(UserDataContext)
    

    let [show, setShow] = useState(false)

    let [firstName,setFirstName] = useState('')
    let [lastName,setLastName] = useState('')
    let [userName,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    let [loading,setLoading] = useState(false)

    let [err,setErr] = useState("")


    let handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const data = await axios.post(serverUrl+'/api/auth/signup',{
                firstName,
                lastName,
                userName,
                email,
                password
            },{withCredentials:true})
            setUserData(data.data)
            setLoading(false)
            navigate('/')
            setErr("")
            console.log(data)
            setFirstName("")
            setLastName("")
            setUserName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error.response?.data?.message)
            setErr(error.response?.data?.message)
            setLoading(false)
    }
}
  return (
    <div className='w-full h-screen bg-[white] flex flex-col justify-start items-center '>
        <div className='w-full h-[70px] p-[25px] lg:p-[30px] flex items-center'>
            <img src={logo} alt="Logo" className="w-[200px] h-[70px] hover:scale-95 transition-transform-ease-in-out duration-500"/>
        </div>
        <form onSubmit={handleSubmit}  className='flex top-0 flex-col justify-center items-center gap-[20px] w-[90%] max-w-[400px] h-[590px] md:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white rounded-[10px]'>
            <h1 className='text-4xl font-bold text-center mb-[50px] '>Sign Up</h1>
            <input type="text" placeholder='First Name' className='w-[90%] h-[50px] rounded-[5px] border-[1px]  border-gray-400  p-[10px]' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required/>
            <input type="text" placeholder='Last Name' className='w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400 p-[10px]'    value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/>
            <input type="text" placeholder='Username' className='w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400  p-[10px]'    value={userName} onChange={(e)=>{setUserName(e.target.value)}} required/>
            <input type="email" placeholder='Email' className='w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400   p-[10px]'     value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <div className='relative w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400'>
                <input type={show?"text":"password"} placeholder='Password' className='w-full h-full rounded-[5px]  p-[10px]' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <span className='absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer text-[#0a66c2] font-semibold' onClick={()=>setShow(s=>!s)}>{show?"Hide":"Show"}</span>
            </div>
            
            {err&&<p className='text-[#D52F3A] text-1xl font-semibold'>*{err}</p>}
            <button type='submit' className='w-[90%] h-[50px] rounded-[10px] bg-[#0a66c2] text-white font-bold text-lg hover:bg-[#004182]' disabled={loading}>{loading?"Loading...":"Sign Up"}</button>
            <p className='text-[15px] text-gray-500' onClick={()=>navigate('/login')}>Already have an account? <span className='text-blue-500 hover:underline'>Log in</span></p>
        </form>
    </div>
  )
}

export default signup
