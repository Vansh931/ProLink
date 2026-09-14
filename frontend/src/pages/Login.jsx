import React,{useState,useContext} from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {AuthDataContext} from '../context/AuthContext.jsx'
import {UserDataContext} from '../context/UserContext.jsx'
function login() {
    let {serverUrl} = useContext(AuthDataContext)
    let {userData,setUserData} = useContext(UserDataContext)


    let navigate = useNavigate()


    let [show, setShow] = useState(false)

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    let [loading,setLoading] = useState(false)

    let [err,setErr] = useState("")

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const data = await axios.post(serverUrl+'/api/auth/login',{
                email,
                password
            },{withCredentials:true})
            setUserData(data.data)
            setLoading(false)
            navigate('/')
            setErr("")
            console.log(data)
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
        <div className='w-full h-[80px] p-[30px] lg:p-[35px] flex items-center'>
            <img src={logo} alt="Logo" className="w-[70px] h-[70px]"/>
        </div>
        <form onSubmit={handleSubmit}  className='flex flex-col justify-center items-center gap-[20px] w-[90%] max-w-[400px] h-[600px] md:shadow-[0_0_10px_0_rgba(0,0,0,0.1)] bg-white rounded-[10px]'>
            <h1 className='text-4xl font-bold text-center mb-[50px] '>Sign In</h1>
            <input type="email" placeholder='Email' className='w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400   p-[10px]'     value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <div className='relative w-[90%] h-[50px] rounded-[5px] border-[1px] border-gray-400'>
                <input type={show?"text":"password"} placeholder='Password' className='w-full h-full rounded-[5px]  p-[10px]' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <span className='absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer text-[#0a66c2] font-semibold' onClick={()=>setShow(s=>!s)}>{show?"Hide":"Show"}</span>
            </div>
            {err&&<p className='text-[#D52F3A] text-1xl font-semibold'>*{err}</p>}
            <button type='submit' className='w-[90%] h-[50px] rounded-[10px] bg-[#0a66c2] text-white font-bold text-lg hover:bg-[#004182]' disabled={loading}>{loading?"Loading...":"Sign In"}</button>
            <p className='text-[15px] text-gray-500' onClick={()=>navigate('/signup')}>Want to create a new account? <span className='text-blue-500 hover:underline'>Sign Up</span></p>
        </form>
    </div>
  )
}

export default login
