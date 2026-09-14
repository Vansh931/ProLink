import React,{useContext} from 'react';
import {Navigate,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import {UserDataContext} from './context/UserContext.jsx'
function App() {
  let {userData} = useContext(UserDataContext)
  return (
    <Routes>
      <Route path="/" element={userData?<Home/>:<Navigate to="/login"/>}/>
      <Route path="/signup" element={userData?<Navigate to='/'/>:<Signup/>}/>
      <Route path="/login" element={userData?<Navigate to='/'/>:<Login/>}/>
    </Routes>
  )
}

export default App
