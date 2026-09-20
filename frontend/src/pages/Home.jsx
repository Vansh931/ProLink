import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthDataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext.jsx";
import Nav from "../components/Nav.jsx";
import profile from "../assets/profile.png";
import { FaPlus } from "react-icons/fa6";
import { LuCamera } from "react-icons/lu";
import { HiPencilAlt } from "react-icons/hi";
import Editprofile from "../components/EditProfile.jsx";

function Home() {
  let { serverUrl } = useContext(AuthDataContext);
  let navigate = useNavigate();
  let { userData, setUserData, edit, setEdit } = useContext(UserDataContext);
  return (
    <div className=" bg-[#f3f2ec] w-full min-h-[100vh] pt-[100px] flex flex-col lg:flex-row justify-center items-start gap-[20px] p-[10px]">
      <Nav />
      {edit && <Editprofile />}
      <div className="lg:w-[25%] w-full min-h-[200px] bg-[white] shadow-lg rounded-lg p-[10px] relative">
        <div className="w-full h-[100px] bg-gray-400 rounded-lg relative cursor-pointer">
          <img src="" alt="" className="w-full" />
          <LuCamera className="w-[20px] h-[20px] absolute right-[15px] top-[10px] w-[30px] h-[30px] p-[5px] text-[white] " />
        </div>
        <div className="relative w-full">
          <div className="w-[70px] h-[70px] overflow-hidden rounded-full absolute top-[-45px] left-[30px] cursor-pointer">
            <img src={profile} alt="Profile" />
          </div>
          <div
            className="w-[20px] h-[20px] bg-[#17c1ff] rounded-full overflow-hidden absolute top-[-5px] left-[78px]
         flex justify-center items-center cursor-pointer "
          >
            <FaPlus className="text-[white]" />
          </div>
        </div>
        <div className="mt-[25px]  text-[20px] font-semibold text-gray-700 font-serif">
          <div className="pl-[15px]">
            {userData.firstName} {userData.lastName}
          </div>
          <div className="text-[16px] pl-[15px] font-semibold text-gray-500">
            {userData.headline || ""}
          </div>
          <div className="text-[16px] pl-[15px] font-semibold text-gray-500">
            {userData.location}
          </div>
          <button
            className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] 
          my-[20px] active:scale-95 transition-transform-ease-in-out duration-500 flex justify-center items-center
           gap-[10px] text-[18px] cursor-pointer"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit Profile <HiPencilAlt />
          </button>
        </div>
      </div>
      <div className="lg:w-[50%] w-full min-h-[200px] bg-[white] shadow-lg"></div>
      <div className="lg:w-[25%] w-full min-h-[200px] bg-[white] shadow-lg"></div>
    </div>
  );
}

export default Home;
