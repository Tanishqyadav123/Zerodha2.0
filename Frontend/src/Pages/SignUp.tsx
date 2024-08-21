import React, { useState } from 'react'
import landingImage from '../../public/Images/SignUp_Page_Landing_Image.png'
import { Button } from '../components/ui/button'
import { SignUpType } from '../types'
import axios from 'axios'
import { USER_BASE_URL } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
function SignUp() {

const navigate = useNavigate()
const [userDetails , setUserDetails] = useState<SignUpType>({ fullName : "" , email : "" , password : "" , phoneNumber : 0 })
const [loading , setLoading] = useState(false)
const handleChange = (e) : void =>{

    setUserDetails({...userDetails , [e.target.name] : e.target.value} )
     
}

console.log(userDetails)

const handleSubmit = async (e : SubmitEvent) =>{
       e.preventDefault()
       setLoading(true)
       await axios.post(`${USER_BASE_URL}/register` , userDetails , {withCredentials : true})
       .then((value) =>{
         console.log(value.data)
         navigate("/verifyEmail")
       })
       .catch((error) =>{
         console.log(error)
       })
       .finally(() =>{
         
           setLoading(false)
       })
       
}



  return (
    <div className='w-full h-screen bg-gray-200'>
       <div className="main flex items-start justify-center h-[65vh] w-[100%] gap-10  mt-[5rem]">
        <div className="sideImage">
            <img src={landingImage} alt="" className='h-[24rem]'/>
        </div>
        <div className="signUpForm h-[40vh] w-[40vw]p-4 flex items-start justify-center">
            <div className='flex items-start justify-start flex-col'>
             <h1 className='text-[1.6rem] font-semibold'>Signup Now</h1>
              <p className='text-gray-400 text-lg'>Or track your existing application.</p>
              <form action="" className='flex items-center justify-center gap-4 flex-col mt-5' onSubmit={handleSubmit}>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">FullName</label>
                <input id="3" type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='fullName' onChange={handleChange}/>
             </div>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email</label>
                <input id="3" type="email" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='email' onChange={handleChange}/>
             </div>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">PhoneNumber</label>
                <input id="3" type="number" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='phoneNumber' onChange={handleChange}/>
             </div>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Password</label>
                <input id="3" type="password" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='password' onChange={handleChange}/>
             </div>
               <Button disabled = {loading} className='bg-blue-500 text-white hover:bg-blue-600' type='submit'>{loading ? "loading..." : "Continue"}</Button>
              </form>

            </div>
        </div>
       </div>
        <div className='flex items-center justify-center flex-col gap-3 px-[16rem] text-[0.8rem] text-gray-400'>
            <div className=' flex items-center justify-center flex-col' >
              <p >  I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
              <p>Please visit <span className='text-blue-500 cursor-pointer hover:underline'>this article</span> to know more.</p>
            </div>
            <div>
                <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <span className='text-blue-500 cursor-pointer hover:underline'>offline forms</span>. For help, <span className='text-blue-500 cursor-pointer hover:underline'>click here</span></p>
            </div>
            <p>Already Have An Account? <Link className='text-blue-500' to={"/signin"}>SignIn</Link> </p>
        </div>
    </div>
  )
}

export default SignUp
