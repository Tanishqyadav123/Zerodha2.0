import React, { useEffect, useState } from 'react'
import { SignInType } from '../types'
import kiteLogo from '../../public/Images/kiteLogo.svg'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_BASE_URL } from '../constants'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../Redux/Slices/userSlice'

function SignIn() {

  const userInfo = useSelector((state) => state.user)
  const disPatch = useDispatch()
  const [userDetails , setUserDetails] = useState<SignInType>({
    email : "",
    password : ""
  })
  const navigate = useNavigate()
  const [loading , setLoading] = useState<boolean>(false)
  
  useEffect(() =>{
     if (userInfo.isAuth){
      
      toast("You are LoggedIn")
         navigate("/")
     }
  } , [])

 

  const handleChange = (e) =>{
     setUserDetails({...userDetails , [e.target.name] : e.target.value})
  }
   
  const handleSubmit = async(e : SubmitEvent) =>{
      e.preventDefault()
      setLoading(true)
      await axios.post(`${USER_BASE_URL}/login` , userDetails , {withCredentials : true})
      .then((value) =>{
        navigate("/")

        // Add the userInfo into the store :-
        disPatch (loginSuccess(value.data.data))
         console.log(value.data)
      })
      .catch((error) =>{
         console.log(error)
         if (error.response.status === 404) {
             toast("user not found...Please Try Again After Register")
         }
         if (error.response.data.message === "Please Verify your email first"){
           navigate("/verifyEmail")
         }
      })
      .finally(() =>{
         setLoading(false)
      })
  }
  

  return (
    <div className='w-full h-screen bg-gray-200 mt-10 '>
          <div className="main w-[100%] h-[100%] flex items-center justify-start flex-col gap-4 ">
            <div className='logo'>
              <img src={kiteLogo} alt="" className='h-[3rem] w-[4rem]'/>
            </div>
              <h1 className='text-2xl text-gray-900'>Login to Kite</h1>
            <div className='signInForm mt-5'>
              <form className='flex items-center justify-center flex-col gap-4' onSubmit={handleSubmit} >
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email</label>
                <input id="3" type="email" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='email' onChange={handleChange}/>
             </div>
              <div className="group relative w-72 md:w-80 lg:w-96">
                <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Password</label>
                <input id="3" type="password" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name='password' onChange={handleChange}/>
             </div>
             <Button type='submit' disabled = {loading} className='bg-[#ff5722] w-full hover:bg-[#d44317]'>{loading ? "Loading..." : "Submit"}</Button>

               <Link to={"/forgotPassword"} className='text-gray-500 text-xs'>Forgot password?</Link>
              <Link to = "/signUp" className='mt-[10rem] text-gray-500 text-sm hover:text-[#ff5722]'>
              <p>Don't have an account? Signup now!</p>
              </Link>

              </form>

            </div>
          </div>
    </div>
  )
}

export default SignIn
