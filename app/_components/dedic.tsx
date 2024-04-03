import girl from "../../public/01.png"
import girl_1 from "../../public/6.png"
import boy from "../../public/8.png"
import Image from "next/image"
const Dedic = () => {
  return (
    <div className='h-[180vh] w-[100%] relative top-[9vw] pl-[15vw] pr-[15vw] '>
          <h1 className='text-3xl font-semibold text-purple-900 flex items-center justify-center'>Dedicate receivers group</h1>
          <div className='container flex gap-[3vw] ml-[5vw] mt-[6vw]'>
           <div className="container1 w-[17vw] flex flex-col items-center">
              <div className="h-[17vw] w-[17vw] flex items-center justify-center bg-pink-50 rounded-xl shadow-[-8px_-8px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer hover:bg-cyan-50 hover:shadow-[8px_8px_20px_rgba(104,_226,_242,_1)] transition-all ease-linear duration-200 relative">
              <Image src={girl} alt="girl" className="h-[16vw] w-[14vw] absolute top-3"/>
              </div>
              <h1 className="font-semibold text-xl mt-5 mb-3 ">Students</h1>
              <p className="font-normal text-[.9vw]">A few sentences about your <br />product. How it help to solve <br /> <span className="ml-6">clients problems. </span></p>
              
           </div>
           <div className="container1 w-[17vw] flex flex-col items-center">
              <div className="h-[17vw] w-[17vw] flex items-center justify-center bg-pink-50 rounded-xl shadow-[-8px_-8px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer hover:bg-[#7DA0A9] hover:shadow-[8px_8px_20px_rgba(18,_90,_98,_1)] transition-all ease-linear duration-200 relative">
              <Image src={girl_1} alt="girl" className="h-[16vw] w-[14vw] absolute top-3"/>
              </div>
              <h1 className="font-semibold text-xl mt-5 mb-3 ">Teachers</h1>
              <p className="font-normal text-[.9vw]">A few sentences about your <br />product. How it help to solve <br /> <span className="ml-6">clients problems. </span></p>
              
           </div>
           <div className="container1 w-[17vw] flex flex-col items-center">
              <div className="h-[17vw] w-[17vw] flex items-center justify-center bg-pink-50 rounded-xl shadow-[-8px_-8px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer hover:bg-purple-100 hover:shadow-[8px_8px_20px_rgba(178,_99,_237,_1)] transition-all ease-linear duration-200 relative">
              <Image src={boy} alt="girl" className="h-[16vw] w-[14vw] absolute top-3"/>
              </div>
              <h1 className="font-semibold text-xl mt-5 mb-3 ">IT employees</h1>
              <p className="font-normal text-[.9vw]">A few sentences about your <br />product. How it help to solve <br /> <span className="ml-6">clients problems. </span></p>
              
           </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl ml-[10vw] mt-[5vw]">What will you learn?</h1>
                <p className="font-normal text-[.9vw]">A support statement for your value proposition encourage customer to complete your CTA</p>
            </div>
            <div className='flex flex-col gap-2 mt-6 w-[49vw]'>
                 <div className="flex gap-5">
                    <h2 className="font-semibold text-xl num flex items-center justify-center h-7 w-20"><span className="ml-7">1</span></h2>
                    <h1 className="font-semibold text-xl">A support statement for your value proposition encourage customer to complete your CTA</h1>
                 </div>
                 <p className="ml-[5.3vw] font-normal text-[1vw] w-[44vw]"> A few words about your product/offer.Focus on the benifits not the features.Expain how your product
                 will improve your customers life. A few words about your product/offer. Focus on the 
                 benefits not the features. Explain hoe your product will improve your customer's life</p>
            </div>
            <div className='flex flex-col gap-2 mt-6 w-[49vw]'>
                 <div className="flex gap-5">
                    <h2 className="font-semibold text-xl num flex items-center justify-center h-7 w-20"><span className="ml-7">2</span></h2>
                    <h1 className="font-semibold text-xl">A support statement for your value proposition encourage customer to complete your CTA</h1>
                 </div>
                 <p className="ml-[5.3vw] font-normal text-[1vw] w-[44vw]"> A few words about your product/offer.Focus on the benifits not the features.Expain how your product
                 will improve your customers life. A few words about your product/offer. Focus on the 
                 benefits not the features. Explain hoe your product will improve your customer's life</p>
            </div>
            <div className='flex flex-col gap-2 mt-6 w-[49vw]'>
                 <div className="flex gap-5">
                    <h2 className="font-semibold text-xl num flex items-center justify-center h-7 w-20"><span className="ml-7">3</span></h2>
                    <h1 className="font-semibold text-xl">A support statement for your value proposition encourage customer to complete your CTA</h1>
                 </div>
                 <p className="ml-[5.3vw] font-normal text-[1vw] w-[44vw]"> A few words about your product/offer.Focus on the benifits not the features.Expain how your product
                 will improve your customers life. A few words about your product/offer. Focus on the 
                 benefits not the features. Explain hoe your product will improve your customer's life</p>
            </div>
            <button className="mt-[4vw] h-[3vw] w-[11vw] bg-purple-600 rounded-[5px] hover:bg-purple-700 hover:text-white transition-all ease-in-out duration-200">Register Now!</button>
  
          </div>
          
    </div>
  )
}

export default Dedic