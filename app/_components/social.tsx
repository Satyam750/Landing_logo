import Image from "next/image"
import imag1 from "../../public/6.png"
import image2 from "../../public/10.png"
import image3 from "../../public/9.png"

const Social = () => {
  return (
    <div className="h-[100vh] w-[100%] relative top-[9vw] pl-[15vw] pr-[15vw]  ">
          <h1 className="flex items-center justify-center mt-[5vw] font-semibold text-2xl text-purple-900">Social Proof</h1>
          <div className="relative top-6">

            <div className="flex gap-2 h-[11vw] w-[40vw] rounded-t-full rounded-bl-full bg-pink-100" id="1">
                 
                    <Image src={imag1} alt="im1" className="h-[8vw] w-[8vw] ml-5 mt-6 rounded-full bg-pink-200"/>
                 
                 <div className="flex flex-col w-[25vw] mt-7 ml-2">
                    <p className="font-normal text-[1vw] ">A few words about your product/offer.Focus on the benifits not the features.Expain how your product
                 will improve your customers life. A few words about your product/offer.</p>

                 <h2 className="text-xl font-semibold ml-[15vw] ">Neha Shetula</h2>
                 </div>
            </div>

            <div className="flex gap-2 h-[11vw] w-[40vw] rounded-t-full rounded-br-full bg-purple-100 mt-10 relative left-[30vw]" id="1">

            <div className="flex flex-col w-[25vw] mt-7 ml-8">
                    <p className="font-normal text-[1vw] ">A few words about your product/offer.Focus on the benifits not the features.Expain how your product
                 will improve your customers life. A few words about your product/offer.</p>

                 <h2 className="text-xl font-semibold  mt-2">Rahul Purena</h2>
                 </div>
                 
                    <Image src={image2} alt="im1" className="h-[8vw] w-[8vw] ml-[3vw] mt-5  rounded-full bg-purple-200"/>     
            </div>

            <div className="flex gap-2 h-[11vw] w-[40vw] rounded-t-full rounded-bl-full bg-blue-100 relative top-10" id="1">
                 
                 <Image src={image3} alt="im1" className="h-[8vw] w-[8vw] ml-5 mt-6 rounded-full bg-blue-200"/>
              
              <div className="flex flex-col w-[25vw] mt-7 ml-2">
                 <p className="font-normal text-[1vw] ">A few words about your product/offer.Focus on the benifits not the features.Expain how your product
              will improve your customers life. A few words about your product/offer.</p>

              <h2 className="text-xl font-semibold ml-[15vw] ">Pranvi Shikeya</h2>
              </div>
         </div>
          </div>
                
    </div>
  )
}

export default Social