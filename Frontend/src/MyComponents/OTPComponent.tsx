
import { useState } from "react"
import { Button } from "../components/ui/button"
import axios from "axios"
import { USER_BASE_URL } from "../constants"
import { useNavigate } from "react-router-dom"
  

  
  export function InputOTPDemo() {

    const [otp , setOtp] = useState<string> ("")
    const [loading , setLoading] = useState<boolean>(false)
    const navigate = useNavigate()



    const handleChangeOTP = (e) =>{
      setOtp(e.target.value)
    }
    const handleSubmitOTP = async () =>{
        
        setLoading(true)
        await axios.post(`${USER_BASE_URL}/verifyEmail` , {otp} , {withCredentials : true})
        .then((value) =>{
           console.log(value.data)
           navigate ("/signin")
        })
        .catch((error) =>{
           console.log(error)
        })
        .finally(() =>{
           setLoading(false)
        })

    }
   

    

    return (
        <div className="flex items-center justify-center flex-col gap-4">
          
          <input type="text" name = "otpVal" onChange={handleChangeOTP} maxLength={6} />

          <Button variant={"default"} onClick={handleSubmitOTP} >{loading ? "Loading..." : "Submit"}</Button>

        </div>
    )
  }
  
