import React, { useState, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { UserDataContext } from "../context/UserContext.jsx";
import profile from "../assets/profile.png";
import { FaPlus } from "react-icons/fa6";
import { LuCamera } from "react-icons/lu";

function EditProfile() {
  let { edit, setEdit, userData, setUserData } = useContext(UserDataContext);
  let [firstName,setFirstName] = useState(userData.firstName || "")
  let [lastName,setLastName] = useState(userData.lastName || "")
  let [userName,setUserName] = useState(userData.userName || "")
  let [location,setLocation] = useState(userData.location || "")
  let [gender,setGender] = useState(userData.gender || "")
  let [headline,setHeadline] = useState(userData.headline || "")
  let [skills,setSkills] = useState(userData.skills || [])
  let [newSkills,setNewSkills] = useState("")
  let [education,setEducation] = useState(userData.education || [])
  let [newEducation,setNewEducation] = useState({
    college:"",
    degree:"",
    fieldOfStudy:""
  })
  let [experience,setExperience] = useState(userData.experience || [])
  let [newExperience,setNewExperience] = useState({
    role:"",
    company:"",
    description:""
  })
  function addSkill(e){
    e.preventDefault()
    if(newSkills && !skills.includes(newSkills)){
      setSkills([...skills,newSkills])
    }
    setNewSkills("")
  }
  function addEducation(){
    if(newEducation.college && newEducation.degree && !education.includes(newEducation)){
      setEducation([...education,newEducation])
    }
    setNewEducation({
      college:"",
      degree:"",
      fieldOfStudy:""
    })
  }
  function addExperience(){
    if(newExperience.college && newExperience.degree && !experience.includes(newExperience)){
      setExperience([...experience,newExperience])
    }
    setNewExperience({
      role:"",
      company:"",
      description:""
    })
  }
  function removeSkill(skill){
    if(skills.includes(skill)){
      setSkills(skills.filter((s)=>(s!=skill)))
    }
  }
  function removeEducation(edu){
    if(education.includes(edu)){
      setEducation(education.filter((ed)=>(ed!=edu)))
    }
  }
  return (
    <div className="w-full h-[100vh] fixed top-0 z-100 flex justify-center items-center">
      <div className="w-full h-full bg-black opacity-[0.5] absolute"></div>
      <div
        className="w-[90%] max-w-[400px] h-[600px] shadow-lg rounded-lg bg-[white] 
        relative z-[200] p-[10px] relative overflow-auto"
      >
        <div
          className="absolute right-[20px] top-[20px] cursor-pointer"
          onClick={() => {
            setEdit(false);
          }}>
          <RxCross2
            className="w-[25px] h-[25px] font-bolder
             text-gray-800"
          />
        </div>
        <div className="w-full h-[150px] bg-gray-500 rounded-lg mt-[40px] ">
          <img src="" alt="" className="w-full" />
          <LuCamera className="w-[20px] h-[20px] absolute right-[19px] top-[55px] w-[30px] 
          h-[30px] p-[5px] text-[#f8fafa] " />
        </div>
        <div
          className="w-[80px] h-[80px] overflow-hidden rounded-full hover:translate-y-0.5 
        transition-transform-ease-in-out duration-400 active:scale-95 
        transition-transform-ease-in-out duration-500 absolute top-[150px] ml-[20px]"
        >
          <img src={profile} alt="Profile"/>
        </div>
        <div
          className="w-[20px] h-[20px] bg-[#17c1ff] rounded-full overflow-hidden top-[190px] 
        left-[94px] flex justify-center items-center cursor-pointer absolute"
        >
          <FaPlus className="text-[white]"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-[15px] mt-[20px]">
            <input type="text" placeholder="firstName"                className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg " value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
            <input type="text" placeholder="lastName"                   className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg " value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            <input type="text" placeholder="userName"                   className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg " value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="text" placeholder="headline"                   className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg " value={headline} onChange={(e)=>{setHeadline(e.target.value)}}/>
            <input type="text" placeholder="location"                   className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg " value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
            <input type="text" placeholder={gender||"gender(male/female/other)"} className=" w-full 
            h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[15px] border-2 
            rounded-lg "  value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
            <div className = "w-full rounded-lg border-2 p-[10px] border-gray-600 gap-[10px] flex flex-col">
                <h1 className="text-[19px] font-semibold">Skills</h1>
                {skills && 
                <div className="flex flex-wrap gap-[10px]">
                  {skills.map((skill,index)=>(
                    <div className="flex flex-wrap gap-[10px]">
                    <div key={index} className="h-[25px] w-fit min-w-[40px] flex justify-center 
                    gap-[5px] border-[1.3px] border-gray-600 px-[6px] bg-gray-200 mb-[5px] rounded-lg shadow-lg">
                      <span>{skill}</span>
                      <RxCross2 className="w-[18px] h-[18px] mt-[4px] font-bolder text-gray-800 cursor-pointer" 
                      onClick={()=>removeSkill(skill)}/>
                      </div>
                      <div>
                      {index<skills.length-1 && ","}
                      </div>
                      </div>
                  ))}
                </div>
                }
                <div className="flex flex-col gap-[10px] items-start">
                  <input type="text" placeholder="add new skill" value={newSkills} 
                  onChange={(e)=>{setNewSkills(e.target.value)}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] 
                  text-[#2dc0ff] active:scale-95 transition-transform-ease-in-out duration-500"
                  onClick={addSkill}>
                    Add
                  </button>
                </div>
            </div>
            <div className = "w-full rounded-lg border-2 p-[10px] border-gray-600 gap-[10px] flex flex-col">
                <h1 className="text-[19px] font-semibold">Education</h1>
                {education && 
                <div className="gap-[10px]">
                  {education.map((edu,index)=>(
                    <div key={index} className="gap-[10px]">
                    <div className=" w-full min-w-[40px] shadow-lg flex justify-between items-center 
                    gap-[5px] border-[1.3px] border-gray-600 px-[15px] bg-gray-200 mb-[5px] rounded-lg shadow-lg">
                      <div>
                        <div>
                          College : {edu.college}
                        </div>
                        <div>
                          Degree : {edu.degree}
                        </div>
                        <div>
                          Field Of Study : {edu.fieldOfStudy}
                        </div>
                      </div>
                      <RxCross2 className="w-[25px] h-[25px] mt-[4px] font-bolder text-gray-800 cursor-pointer" 
                      onClick={()=>removeEducation(edu)}/>
                      </div>
                      </div>
                  ))}
                </div>
                }
                <div className="flex flex-col gap-[10px] items-start">
                  <input type="text" placeholder="College" value={newEducation.college} 
                  onChange={(e)=>{setNewEducation({...newEducation,college:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <input type="text" placeholder="Degree" value={newEducation.degree} 
                  onChange={(e)=>{setNewEducation({...newEducation,degree:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <input type="text" placeholder="Field Of Study" value={newEducation.fieldOfStudy} 
                  onChange={(e)=>{setNewEducation({...newEducation,fieldOfStudy:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] 
                  text-[#2dc0ff] active:scale-95 transition-transform-ease-in-out duration-500"
                  onClick={addEducation}>
                    Add
                  </button>
                </div>
            </div>
            <div className = "w-full rounded-lg border-2 p-[10px] border-gray-600 gap-[10px] flex flex-col">
                <h1 className="text-[19px] font-semibold">Experience</h1>
                {education && 
                <div className="gap-[10px]">
                  {experience.map((exp,index)=>(
                    <div key={index} className="gap-[10px]">
                    <div className=" w-full min-w-[40px] shadow-lg flex justify-between items-center 
                    gap-[5px] border-[1.3px] border-gray-600 px-[15px] bg-gray-200 mb-[5px] rounded-lg shadow-lg">
                      <div>
                        <div>
                          Role : {exp.role}
                        </div>
                        <div>
                          Company : {edu.company}
                        </div>
                        <div>
                          Description : {edu.description}
                        </div>
                      </div>
                      <RxCross2 className="w-[25px] h-[25px] mt-[4px] font-bolder text-gray-800 cursor-pointer" 
                      onClick={()=>removeExperience(exp)}/>
                      </div>
                      </div>
                  ))}
                </div>
                }
                <div className="flex flex-col gap-[10px] items-start">
                  <input type="text" placeholder="Role" value={newExperience.role} 
                  onChange={(e)=>{setNewExperience({...newExperience,role:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <input type="text" placeholder="Company" value={newExperience.company} 
                  onChange={(e)=>{setNewExperience({...newExperience,company:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <input type="text" placeholder="Experience" value={newExperience.description} 
                  onChange={(e)=>{setNewExperience({...newExperience,description:e.target.value})}} className="w-full 
                  h-[50px] outline-none border-gray-600 px-[10px] py-[5px] text-[13px] border-2 
                  rounded-lg"/>
                  <button className="w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] 
                  text-[#2dc0ff] active:scale-95 transition-transform-ease-in-out duration-500"
                  onClick={addExperience}>
                    Add
                  </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default EditProfile;
