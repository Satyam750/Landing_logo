import Image from "next/image"
import home from "../../public/Home.png"
import boy from "../../public/11.png"
import girl from "../../public/01.png"
const Home = () => {
  return (
    <div className="relative h-[100vh] w-[100%]">
    <Image src={home} alt="home" className="h-[100vh] w-[100%] absolute z-[-9999]" />
   <div className="flex gap-[30vw] relative z-[20]">
    <div className="pl-[15vw] pt-[5vw]" id="left">
       <h1 className="font-normal text-[1.4vw] cursor-pointer">Your<span className="font-semibold">Logo</span></h1>
       <div className="title mt-[2vw] flex flex-col gap-3">
        <h1 className="title-name font-semibold text-[2.3vw]">
             Title of My 
            <br /> Webinar
        </h1>
            <p className="font-normal text-[1vw]">A few sentence about your product. How <br /> it help to slove clients problems.</p>
            <ul>
                <li className="flex gap-2"><span> &rarr;</span> about your product</li>
                <li className="flex gap-2"><span> &rarr;</span> about your product</li>
            </ul>
            <p className="font-normal text-[1.2vw]">Let's meet on <span className="text-red-400">Feburary 12</span> at <span className="text-red-400">6.30</span> pm</p>

            <div className="flex items-center gap-7">
                <button className="h-[3vw] w-[11vw] bg-purple-600 rounded-[5px] hover:bg-purple-700 hover:text-white transition-all ease-in-out duration-200">Register Now!</button>
                <p className="border-b-2 border-black ">Read more</p>
            </div>
       </div>

    </div>
    <div className="pr-[15vw] pt-[5vw]" id="right">
          <Image src={boy} alt="Boy" className="h-[40vw] w-[24vw] mt-[-3.8vw] ml-[-8vw]"/>
    </div>
   </div>
   </div>
  )
}

export default Home