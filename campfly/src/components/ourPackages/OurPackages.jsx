import React from 'react'
import { Buttons, ImgDiv } from '../components'

function OurPackages() {
  return (
    <div className='bg-black py-[3rem]'>
     <div className='max-w-[90%] mx-auto flex justify-between items-center my-8'>
       <div className='w-[48%] grid grid-cols-2 gap-y-[3rem]'>
          <ImgDiv title={"Honeymoon"} img={'./Honeymoon.svg'}/>
          <ImgDiv title={"Family/Frinds"} img={'./FamilyFriends.svg'}/>
          <ImgDiv title={"Adventure"} img={'./Adventure.svg'}/>
          <ImgDiv title={"Solo"} img={'./Solo.svg'}/>
       </div>
       <div className='text-white w-[48%]'>
       <div>

          <h1 className='text-[2.5rem]'>Our Packages</h1>
          <p>Embark on a journey where every step is a story, and every destination is a chapter waiting to be written</p>
       </div>
          <div className='mt-4 w-[30%] '>

               <Buttons title={"Sign in"} py={"py-[0.6rem]"} />
          </div>
                </div>
     </div>
    </div>
  )
}

export default OurPackages