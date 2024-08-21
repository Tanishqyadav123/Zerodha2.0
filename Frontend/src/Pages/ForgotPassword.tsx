import React, { useState } from 'react'
import { InputOTPDemo } from '../MyComponents/OTPComponent'
import { Button } from '../components/ui/button'
import axios from 'axios'
import { USER_BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

  const [showOTP , setShowOTP] = useState<boolean>(false)
  const [email , setEmail] = useState <string>("")
  const [resetOTP , setresetOTP] = useState<string>("")
  const navigate = useNavigate()

  const handleSendOTP = async () =>{

       await axios.post(`${USER_BASE_URL}/sendResetPasswordOTP` , {email} , {withCredentials : true})
       .then((value) =>{
         console.log(value.data)
          setShowOTP(true)
           



       })
       .catch((error) =>{
         console.log(error)
       })
  }

  const verifyPasswordResetOTP = async () => {
      console.log(resetOTP)
      await axios.post(`${USER_BASE_URL}/verifyResetPasswordOTP` , {resetOTP} , {withCredentials : true})
      .then((value) =>{
         console.log(value.data)
         navigate("/setNewPassword")
      })
      .catch((error) =>{
         console.log(error)
      })

  }

  

  return (
    <div className='h-screen w-full bg-gray-200'>

<div className='w-full h-screen bg-gray-300 p-1'>
      <div className="flex items-start justify-center h-screen w-full ">
        <div className="main shadow-lg h-[50vh] w-[30vw] mt-24 p-4 flex items-center justify-start flex-col text-2xl gap-8  ">
              <h1 className="text-gray-800">Reset Password </h1>
   <div className="group w-72 md:w-80 lg:w-96">
      <label htmlFor="8" className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">OTP will be send On your Registered Mail Id</label>
      <div className="relative flex items-center">
        <input id="8" type="email" className=" text-[1.1rem] peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" onChange={(e) => setEmail(e.target.value)}/>
        <button  className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600 " onClick={handleSendOTP}>Send</button>
      </div>

    </div>
    {
     
      showOTP ?   <div className='flex items-center justify-center flex-col  gap-2'>  
           <div className="group relative w-72 md:w-80 lg:w-96">
      <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Enter Reset Password OTP</label>
      <input id="1" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" onChange={(e) => setresetOTP(e.target.value)} />
    </div>
    <Button variant={"link"} onClick={verifyPasswordResetOTP}>Continue</Button>    
     </div>  : ""
    }
        </div>
      </div>
    </div>

    </div>
  )
}

export default ForgotPassword
