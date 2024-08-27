import React, { useState } from 'react'
import PanComponents from '../MyComponents/KYCComponents/PanComponents'
import ImageComponents from '../MyComponents/KYCComponents/ImageComponents'
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Button } from '../components/ui/button';
import { kycDetailsType } from '../types';
import { toDate } from 'date-fns';

function KYC() {
 
     const [currentPage , setCurrentPage] = useState(0)
     const [details , setDetails] = useState <kycDetailsType>({panCardNumber : "" , aadharNumber : 0 , birthDate : "" , selfie : ""})



     
 
  return (
    <div className='bg-gray-200 h-screen w-full' >

        <div className='flex  items-center justify-center flex-col'>

  
       <div>
       {
         currentPage == 0 ?  <PanComponents mainHeading = {"Let's start with your PAN"} subHeading = {"your name will be taken as per ITD (Income Tax Department)."}   labelText = {"PAN Number"} placeHolder = {"Ex..AAAAA999A"} isAadhar = {false}  details={details} setDetails = {setDetails}/> : currentPage == 1 ?  <PanComponents mainHeading = {"Let's Add your AADHAR"} subHeading = {"your name will be taken as per AadharId"}  labelText = {"AADHAR Number"} placeHolder = {"Ex..881113874340"} isAadhar = {true} details={details} setDetails = {setDetails}/> : <ImageComponents details={details} setDetails = {setDetails}/>
    }
       </div>
   
      <div className=' w-[70vw] flex items-center justify-between gap-10'>
      <Button variant = {"default"} disabled = {currentPage == 0 ? true : false} onClick={() => setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage) }> <FaLongArrowAltLeft /> </Button>
      <Button variant = {"default"} disabled = {currentPage == 2 ? true : false} onClick={() => setCurrentPage(currentPage < 2 ? currentPage + 1 : currentPage)}> <IoMdArrowRoundForward /> </Button>
      </div>

      </div>

  

    </div>
  )
}

export default KYC
