import React, { useState } from 'react'
import sideImage from '../../../public/Images/pan.920bff62.svg'
import { Button } from '../../components/ui/button'
import { DatePickerDemo } from '../DateComponents'
import { KYCCardType } from '../../types'



function PanComponents(Props : KYCCardType) {
  
  const [loading , setLoading] = useState<boolean>(false)
  const handleChange = (e) =>{
        setLoading(true)
       Props.setDetails({...Props.details , [e.target.name] : e.target.value})
       setLoading(false)
  }

  const handleSubmit = () =>{
    console.log(Props.details)
  }

  return (
    <div className='h-[80vh] w-full items-start flex justify-start '>
      <div className="main h-[70%] w-[100%] flex items-center justify-center     ">
        <div className=' mx-10 mt-32 flex  items-start justify-center flex-col gap-8'>

       
          <h1 className='text-[2rem] '>{Props.mainHeading}</h1>

          <p className='text-[1.01rem] text-gray-900' >{Props.subHeading}</p>

           <div className={`details flex items-center justify-center ${Props.isAadhar ? "gap-22" : "gap-4" }`}>
           <div className="group relative w-72 md:w-80 lg:w-96">
           <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">{Props.labelText}</label>
                <input id="3" type={Props.isAadhar ? "number" : "text"} onChange={handleChange} className="peer h-10 w-[20vw] rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name={Props.isAadhar == true ? "aadharNumber" : "panCardNumber"} placeholder={Props.placeHolder}/>
             </div>
        {
            !Props.isAadhar ?    <div className="group relative w-72 md:w-80 lg:w-96 ">
            <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Date Of Birth <span className='text-gray-400 text-xs'>(as per PAN Card)</span> </label>
                <DatePickerDemo details = {Props.details} setDetails = {Props.setDetails} />
              </div> : null 
        } 

           </div>
             <Button variant={"default"} onClick={handleSubmit}>{loading ? "adding..." : "Add Above"}</Button>
           </div>
           <div className='sideImage'>
              <img src={sideImage} alt="" />
           </div>
      </div>
    </div>
  )
}

export default PanComponents
