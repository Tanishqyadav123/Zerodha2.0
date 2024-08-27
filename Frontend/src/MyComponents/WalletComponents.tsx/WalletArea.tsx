import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { BiHide } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
type walletAreaType = {
     walletName : string
     walletDesc : string
     walletAmount : number
}

function WalletArea(Props : walletAreaType) {

    const [showAmount , setShowAmount] = useState<boolean>(false)

  return (
    <div className='bg-gray-200 h-screen w-full'>
      <div className='main h-[100%] w-[100%] px-24 py-24 flex items-start justify-start '>
      <div className='flex items-start justify-center flex-col gap-8'>
      <h1 className='text-3xl font-semibold '>{Props.walletName}</h1>
       <div className='flex items-center justify-center gap-6'>
       <p className='text-gray-500 text-[0.91rem] uppercase'>{Props.walletDesc}</p>
       <div className='flex items-center justify-center text-gray-600'>
          {
             !showAmount ? <BiHide onClick={() => setShowAmount(true)} className='cursor-pointer' size={"1.28rem"}/> : 
             <MdVisibility onClick={() => setShowAmount(false)} className='cursor-pointer' size={"1.28rem"} />
          }
       </div>
       </div>

       <div className='Amount flex items-center justify-center gap-1 '>
             <FaRupeeSign size={"1.8rem"} className='text-gray-700' />
           {
             showAmount ?   <h1 className='text-[2rem] font-bold'>{Props.walletAmount}</h1> :
             <h1 className='text-[2rem] font-bold'>****</h1>
           }

       </div>
      </div>
      </div> 
    </div>
  )
}

export default WalletArea
