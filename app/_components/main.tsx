import Image from "next/image"
import moni from "../../public/MONI.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Main = () => {
  return (
    <div className="pl-[15vw] pr-[15vw] h-[100vh] w-[100%]">
        <div className="flex items-center gap-[8vw] w-[45vw] p-[1.5vw] ml-[10vw] rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all ease-in-out duration-200 cursor-pointer">
           <div className="">
            <h1 className="font-semibold text-2xl">+200</h1>
            <p className="font-normal text-[.8vw] ml-2">courses</p>
           </div>
           <div className="">
            <h1 className="font-semibold text-2xl">+15</h1>
            <p className="font-normal text-[.8vw] ml-2">thousand <br /> followers</p>
           </div>
           <div className="">
            <h1 className="font-semibold text-2xl">10</h1>
            <p className="font-normal text-[.8vw] ml-1">years <br />experience</p>
           </div>
           <div className="">
            <h1 className="font-semibold text-2xl">200</h1>
            <p className="font-normal text-[.8vw] ml-1">podcast</p>
           </div>
         
        </div>
        <div className="mt-[8vw] flex gap-[20vw]">

        <div className="w-[20vw] flex flex-col gap-7">
            <h1 className="font-semibold text-2xl ">A few words About My Work</h1>
            <p>A few words abput your product/offer. Focus on the benefits not the features. 
            Explain how your product will improve your customer's life. A fow words about your product/offer.
            Focus on the benefits not the features. 
            Explain how your product will improve your customer's life.</p>
            <button className="h-[3vw] w-[11vw] bg-purple-600 rounded-[5px] hover:bg-purple-700 hover:text-white transition-all ease-in-out duration-200">Register Now!</button>
        </div>

        <div className="right flex flex-col gap-4">
           <Image src={moni} alt="monitor" className="h-[20vw] w-[26vw]" />
           <div className="ml-[-5vw] flex items-center gap-7">
              <p className="font-normal text-[.9vw] bg-gradient-to-r from-cyan-50 to-[#913dbe] pl-[12vw] h-[1.5vw] text-white w-[19vw] hover:text-black bg_gra transition-all duration-200 ease-in-out">Follow me on</p>
              <FaFacebookF className="text-[2vw] text-purple-300 transition-all duration-200 ease-linear hover:text-purple-500 cursor-pointer" />
              <FaLinkedinIn className="text-[2vw] text-purple-300 transition-all duration-200 ease-linear hover:text-purple-500 cursor-pointer" />
              <FaYoutube className="text-[2vw] text-purple-300 transition-all duration-200 ease-linear hover:text-purple-500 cursor-pointer" />

           </div>
        </div>
        </div>

    </div>
  )
}

export default Main