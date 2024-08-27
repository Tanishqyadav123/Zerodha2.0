import { useState } from "react"
import { InputOTPControlled } from "../MyComponents/InputOTPComponent"

function VerifyEmail() {
  const [loading , setLoading] = useState<boolean>(false)
 
  return (
    <div className='w-full h-screen bg-gray-300 p-1'>
      <div className="flex items-start justify-center h-screen w-full ">
        <div className="main shadow-lg h-[30vh] w-[30vw] mt-24 p-4 flex items-center justify-start flex-col text-2xl gap-8  ">
              <h1 className="text-gray-800">Verification Code </h1>
             <InputOTPControlled loading = {loading} setLoading = {setLoading}  /> 
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
