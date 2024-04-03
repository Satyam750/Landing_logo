'use client'
import Image from "next/image"
import image from "../../public/Group 18.png"
import { RiComputerLine } from "react-icons/ri";
import { useState } from "react";


const Footer = () => {
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [date, setDate] = useState('')
     const [text, setText] = useState('')
     console.log(name);
     
  return (
    <div className="h-[100vh] w-[100%]  relative top-28  ">
     <Image src={image} alt="image" className="h-[100vh] w-[100%] absolute "/>
     <div className="relative top-[1vw] left-[30vw] h-[20vw] w-[30vw] ">
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Sign up for the webinar</h1>
            <p className="font-normal text-[1.2vw]">Let's meet on <span className="text-red-400">Feburary 12</span> at <span className="text-red-400">6.30</span> pm</p>
            <h2 className="font-semibold text-xl text-purple-800 flex items-center gap-2"> ONLINE <RiComputerLine/> </h2>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center mt-6">
        <h1 className="text-xl font-semibold text-purple-900">The webinar will start in:</h1>
        <div className="  flex gap-6">
                <div className=" flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-white bg-purple-900 w-[3vw] flex items-center justify-center rounded-full p-2">00</h1>
                    <h1 className="font-normal text-[.9vw] ml-[.5vw]">Days</h1>
                </div>
                <div className=" flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-white bg-purple-900 w-[3vw] flex items-center justify-center rounded-full p-2">00</h1>
                    <h1 className="font-normal text-[.9vw] ml-[.5vw]">Hours</h1>
                </div>
                <div className=" flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-white bg-purple-900 w-[3vw] flex items-center justify-center rounded-full p-2">00</h1>
                    <h1 className="font-normal text-[.9vw] ml-[.1vw]">Minutes</h1>
                </div>
                <div className=" flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-white bg-purple-900 w-[3vw] flex items-center justify-center rounded-full p-2">00</h1>
                    <h1 className="font-normal text-[.9vw] ">Seconds</h1>
                </div>      
            </div>
               <div className="h-[25vw] w-[25vw] bg-white p-5 rounded-md">
               <form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={name}  onChange={(e)=>setName(e.target.value)} />
      <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 mt-5 ">Your Name</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={email}  onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 mt-5 ">E-mail</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="date" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={date}  onChange={(e)=>setDate(e.target.value)} />
      <label htmlFor="floating_date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 mt-5 ">Date</label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={text}  onChange={(e)=>setText(e.target.value)} />
      <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 -top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 mt-5 ">Message</label>
  </div>

  <button className=" ml-[5vw] mt-3 h-[3vw] w-[11vw] bg-purple-600 rounded-[5px] hover:bg-purple-700 hover:text-white transition-all ease-in-out duration-200">Register Now!</button>
  
 
  
  </form>
               </div>
        </div>
     </div>
    </div>
  )
}

export default Footer