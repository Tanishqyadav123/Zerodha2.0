import React from 'react'
import Logo from '../../public/Images/ZerodhaLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_BASE_URL } from '../constants'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../Redux/Slices/userSlice'
import { ModeToggle } from '../components/mode-toggle'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IoWallet } from "react-icons/io5";
import { BiSolidLogOut } from "react-icons/bi";
type PropsType = {
   isAuth : boolean
}

function Navbar(Props : PropsType) {

     const disPatch = useDispatch()
     const navigate = useNavigate()
  
     const handleLogout = async () =>{
      
          await axios.get(`${USER_BASE_URL}/logoutUser` , {withCredentials : true})
          .then((value) =>{
             console.log(value.data)
             disPatch (logoutSuccess())
             navigate("/signin")
             
          })
          .catch((error) =>{
              console.log(error)
          })

     }
  
    console.log(Logo)
  return (
    <div className='w-full h-14 bg-gray-200 flex items-center px-24 justify-between '>
      <div className="logo flex items-center justify-start">
          <img src={Logo} alt="" className='h-5' />
      </div>

      <div>
        {
           Props.isAuth ? <div className='flex items-center justify-center gap-12 '>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Dashboard</Link>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Orders</Link>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Holdings</Link>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Positions</Link>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Bids</Link>
           <Link className='text-blue-500 hover:text-orange-600' to={"/"}>Funds</Link>
           <Popover>
              <PopoverTrigger className = "text-orange-500 hover:text-orange-600">Profile</PopoverTrigger>
              <PopoverContent className = "flex items-start justify-center flex-col gap-2 w-[10vw] px-4 py-1">
                 <div className='flex hover:text-orange-600 items-center justify-start gap-2'>
                <IoWallet size={"1.1rem"} />
                <Link className=' delay-75  text-center text-sm'  to={"/my-wallet"} >My wallet</Link>
                 </div>
                 <div className='flex hover:text-orange-600 items-center justify-start gap-2'>
                <BiSolidLogOut  size={"1.1rem"} />
                <Link className=' delay-75  text-center text-sm' onClick={handleLogout} to={""}>Logout</Link>
                 </div>
              </PopoverContent>
           </Popover>
            
           </div> : <div className='flex items-center justify-center gap-3'>
           <Link className='text-blue-500' to={"/signin"}>SignIn</Link>
           <Link className='text-blue-500' to={"/signup"}>SignUp</Link>
           </div>
        }
      </div>
    </div>
  )
}

export default Navbar
