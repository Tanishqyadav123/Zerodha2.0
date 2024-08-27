import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { USER_BASE_URL } from "../constants"
import axios from "axios"
import { Button } from "../components/ui/button"
   
  type PropsType = {
     loading : boolean,
     setLoading : (value : boolean) => void
  }

  export function InputOTPControlled(Props : PropsType) {
    const [OTP, setOTP] = useState<string>("")

    const navigate = useNavigate()



    const handleSubmitOTP = async () =>{
        
        Props.setLoading(true)
        console.log(OTP)
        await axios.post(`${USER_BASE_URL}/verifyEmail` , {OTP} , {withCredentials : true})
        .then((value) =>{
           console.log(value.data)
           navigate ("/signin")
        })
        .catch((error) =>{
          
           console.log(error)
        })
        .finally(() =>{
           Props.setLoading(false)
        })

    }
   
    return (
      <div className="space-y-2">
        <InputOTP
          maxLength={6}
          value={OTP}
          onChange={async (OTP : string) =>  setOTP(OTP)}

        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {OTP === "" ? (
            <>Enter your one-time password.</>
          ) : (
            <>You entered: {OTP}</>
          )}
        </div>
        <Button variant={"default"} onClick={handleSubmitOTP} className="bg-blue-500">Continue</Button>
      </div>
    )
  }
  