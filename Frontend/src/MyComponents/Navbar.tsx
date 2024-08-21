import React from 'react'
import Logo from '../../public/Images/ZerodhaLogo.svg'
function Navbar() {
    console.log(Logo)
  return (
    <div className='w-full h-14 bg-gray-200 flex items-center px-24 '>
      <div className="logo flex items-center justify-start">
          <img src={Logo} alt="" className='h-5' />
      </div>
    </div>
  )
}

export default Navbar
