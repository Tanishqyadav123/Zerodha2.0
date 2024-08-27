import React from 'react'
import { IoPieChartSharp } from "react-icons/io5";
import { EquityPropsType } from '../../types';
import { BsDropletFill } from "react-icons/bs";



function EquitySection(Props : EquityPropsType) {
  return (
    <div className=' h-[30vh] w-[40%]'>
      <div className='main h-[100%] w-[100%] p-4'>
         <div className='heading flex items-center justify-start text-[1.18rem] gap-3'>
            {
                Props.title === "Equity" ? <IoPieChartSharp />  : <BsDropletFill />
            }
            <h1>{Props.title}</h1>
         </div>
         <div className='flex items-center justify-between'>
            <div className='margin'>
                <h1 className='amt text-[3rem]'>{Props.amount}</h1>
                <p className='text-sm text-gray-700'>Margin available</p>
            </div>
            <div className='w-[0.1vw] h-[12vh] bg-gray-400 mt-3'></div>
            <div className='margin flex items-start justify-end flex-col mt-4 gap-4'>
                 <div className='flex items-center justify-start gap-2'>
                 <p className='text-sm text-gray-700'>Margin used</p>
                 <p className='text-md'>0</p>
                 </div>
                 <div className='flex items-center justify-start gap-2'>
                 <p className='text-sm text-gray-700'>Opening Balance</p>
                 <p className='text-md'>0</p>
                 </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default EquitySection
