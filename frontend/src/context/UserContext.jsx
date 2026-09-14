import React,{createContext,useContext,useState,useEffect} from 'react'
import {AuthDataContext} from './AuthContext.jsx'
import axios from 'axios'
export const UserDataContext =createContext()
function UserContext({children}) {
    let [userData,setUserData] = useState(null)
    let {serverUrl} = useContext(AuthDataContext)
    const getCurrentUserData = async()=>{
        try{
            let result = await axios.get(serverUrl+"/api/user/currentuser",{
                withCredentials:true
            })
            setUserData(result.data)
            console.log(result.data)
        }
        catch(err){
            console.log(err.response.data.message)
            setUserData(null)
        }
    }
    useEffect(()=>{
        getCurrentUserData()
    },[])
    const val = {
        userData:userData,
        setUserData:setUserData
    }
  return (
    <div>

        <UserDataContext.Provider value = {val}>

            {children}
    
        </UserDataContext.Provider>

    </div>
  )
}

export default UserContext
