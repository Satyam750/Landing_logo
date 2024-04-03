import { FaPaintBrush } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import Image from "next/image";
import box from "../../public/Group 16.png"

const Strong = () => {
  return (
    <div className="h-[100vh] w-[100%] ">
    <div className='pl-[15vw] pr-[15vw]'>
         <div className='heading flex items-center justify-center'>
            <h1 className='font-semibold text-3xl'>Strong Point About Your Webinar</h1>
         </div>

         <div className='main_logo flex items-center justify-between pl-[5vw] pr-[5vw] mt-[4vw]'>
            <div className='logo-1 flex flex-col justify-center gap-5'>
                   <div className='logo-paint'>
                    <div className=" flex items-center justify-center rounded-full h-[7vw] w-[7vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200 ease-linear">
                            <FaPaintBrush className="text-orange-600 hover:text-red-600 text-5xl  "/>
                    </div>
                   </div>
                   <div className='logo-paint-text flex flex-col gap-3 '>
                                <h1 className="text-[1.3vw] font-semibold">Strong Point 1</h1>
                                <p className="text-[.9vw]">A few words about your <br /> product/offer. Focus on the <br /> benefits not the features. 
            Explain <br /> how your product will improve <br /> your customer's life</p>
                   </div>
                    
            </div>
            <div className='logo-1 flex flex-col justify-center gap-5'>
                   <div className='logo-paint'>
                   <div className=" flex items-center justify-center rounded-full h-[7vw] w-[7vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer hover:shadow-[0_10px_20px_rgba(27,_211,_217,_0.8)] transition-all duration-200 ease-linear">
                            <FaRocket className="text-purple-600 hover:text-cyan-600 text-5xl  "/>
                    </div>
                   </div>
                   <div className='logo-paint-text flex flex-col gap-3 '>
                                <h1 className="text-[1.3vw] font-semibold">Strong Point 2</h1>
                                <p className="text-[.9vw]">A few words about your <br /> product/offer. Focus on the <br /> benefits not the features. 
            Explain <br /> how your product will improve <br /> your customer's life</p>
                   </div>
                    
            </div>
            <div className='logo-1 flex flex-col justify-center gap-5'>
                   <div className='logo-paint'>
                   <div className=" flex items-center justify-center rounded-full h-[7vw] w-[7vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer hover:shadow-[0_10px_20px_rgba(143,_27,_217,_0.8)] transition-all duration-200 ease-linear">
                            <FaRegKeyboard className="text-cyan-500 hover:text-purple-600 text-5xl  "/>
                    </div>
                   </div>
                   <div className='logo-paint-text flex flex-col gap-3 '>
                                <h1 className="text-[1.3vw] font-semibold">Strong Point 3</h1>
                                <p className="text-[.9vw]">A few words about your <br /> product/offer. Focus on the <br /> benefits not the features. 
            Explain <br /> how your product will improve <br /> your customer's life</p>
                   </div>
                    
            </div>
         </div>
    </div>

    <div className="relative -top-[10vw] w-[100%]">
          <Image src={box} alt="box" className=" w-[100%] absolute z-[-999]"/>
          <div className="absolute z-[20] flex flex-col gap-[3vw] items-center top-[15vw] left-[35vw]">
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
            <button className="mt-[2vw] h-[3vw] w-[11vw] bg-purple-600 rounded-[5px] hover:bg-purple-700 hover:text-white transition-all ease-in-out duration-200">Register Now!</button>
          </div>

         </div>
    </div>
    
  )
}

export default Strong