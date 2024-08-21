import React, { useState } from 'react'   
import { Button } from '../components/ui/button'
import { SetNewPasswordType } from '../types'
import axios from 'axios'
import { USER_BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'

function SetNewPassword() {


    const [passwordDetails , setPasswordDetails] = useState<SetNewPasswordType>({newPassword : "" , confirmPassword : ""})
    const navigate = useNavigate()
    const [error , setError] = useState<string>("")
    const [loading , setLoading] = useState<boolean>(false)

    const handleChange = (e) =>{
         setPasswordDetails({...passwordDetails , [e.target.name] : e.target.value})
    }
  
     const handleSubmitSetNewPassword = async (e : SubmitEvent) =>{
             e.preventDefault()
             

              if (passwordDetails.confirmPassword !== passwordDetails.newPassword){
                 setError("NewPassword Or ConfirmPassword should match")
                 return;
              }

            //   Api Call for resetting the password :-
            setLoading(true)
            await axios.post(`${USER_BASE_URL}/setNewPassword` , {newPassword : passwordDetails.newPassword} , {withCredentials : true})
             .then((value) =>{
                console.log(value.data)
                navigate ("/signin")
             })            
             .catch((error) =>{
                 console.log(error)
                 setError(error.response.data.message)
             })
             .finally(() =>{
                 setLoading(false)
             })

     }
  return (
    <div className='h-[70vh] w-full bg-gray-200 flex items-center justify-center flex-col'>
            <h1 className='my-10 text-2xl text-gray-500'>Reset Password</h1>
     <div className="main h-[30vh] w-[26vw]">
     <div className='signInForm mt-5'>
              <form className='flex items-center justify-center flex-col gap-4' onSubmit={handleSubmitSetNewPassword}>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">New Password</label>
                <input id="3" type="password" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='newPassword' onChange={handleChange}/>
             </div>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Confirm Password</label>
                <input id="3" type="password" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='confirmPassword' onChange={handleChange} />
             </div>
             <Button type='submit'  disabled = {loading} className='bg-[#ff5722] w-full hover:bg-[#d44317]'>{loading ? "loading..." : "Change Password"}</Button>

             

              </form>

            </div>
     </div>
    </div>
  )
}

export default SetNewPassword
