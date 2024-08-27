import React from 'react'
import { useSelector } from 'react-redux'
import EquitySection from './EquitySection'

function UserDetails() {

    const userInfo = useSelector((state) => state.user).userInfo

    console.log(userInfo)

  return (
    <div className='h-screen w-[100%] p-16'>
      <div className='main'>
        <h1 className='text-2xl text-gray-700'>Hii , {userInfo.fullName.split(" ")[0]}</h1>
         <div className='my-5 '>
         <hr  />
         </div>
         <div className='flex items-center justify-between '>
         <EquitySection title='Equity' amount={0}/>
         <EquitySection title='Commodity' amount={0}/>
         </div>   
         <hr  />
      </div>
    </div>
  )
}

export default UserDetails
