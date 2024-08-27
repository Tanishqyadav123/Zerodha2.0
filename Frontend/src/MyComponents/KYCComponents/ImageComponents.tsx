import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import sideImage from '../../../public/Images/pan.920bff62.svg'
import { KYCCardType } from '../../types'
import axios from 'axios'
import { KYC_BASE_URL } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../Redux/Slices/userSlice'
import DialogBox from '../DialogBox'



function ImageComponents(Props : KYCCardType) {
   
  const [image , setImage] = useState("")
  const [loading , setLoading] = useState(false)
  const [showDialog , setShowDialog] = useState<boolean>(false)
  const disPatch = useDispatch()
  const navigate = useNavigate()
  const handleFileChange = (e) =>{
     console.log(e.target.name)
    Props.setDetails({...Props.details ,[e.target.name] : e.target.files[0]})
    setImage (e.target.files[0])
    // console.log(e.target.files[0])
    

  }
  const handleSubmit = async (e:SubmitEvent) =>{
      e.preventDefault()
       setLoading(true)
       
      // console.log("object")
       console.log(Props.details)
       const formData = new FormData();
  
       // Append the file (assuming `image` is your file state)
       formData.append("selfie", Props.details?.selfie);
   
       // Append other form details from Props.details to FormData
       Object.entries(Props.details).forEach(([key, value]) => {
           formData.append(key, value);
       });

       console.log(formData)
  
       await axios.post(`${KYC_BASE_URL}/completeKYC` , Props.details , {withCredentials : true ,  headers: {
        'Content-Type': 'multipart/form-data', 
    }})
       .then((value) =>{
         console.log(value.data)
         disPatch(loginSuccess(value.data.data))
         setShowDialog(true)
         setTimeout(() =>{
           navigate("/")
         } , 2000)
         
       })
       .catch((error) =>{
         console.log(error)
       })
       .finally(() =>{
         setLoading(false)
       })
  }
 
  const handLabelClick = () =>{
    //  document.getElementById("fileuploader")?.click()
  }
  return (
    <div className='h-[80vh] w-[70vw] items-start flex justify-start mx-auto '>
    {
       showDialog ? <DialogBox showDialog = {showDialog} setShowDialog={setShowDialog} dialogTitle={'KYC Completed SuccessFully'} dialogDescription={"Now you can sell/buy stocks between the Market timing in India"}  /> : <div className="main h-[70%] w-[100%] flex items-center justify-start  gap-10   ">
       <div className=' h-[60vh] w-[60vw]   mt-32 flex  items-center justify-center flex-col mx-auto '>
 
      
        <div >
        <h1 className='text-[2em] '>Let's Add your Selfie</h1>
 
 <p className='text-[1.01rem] text-gray-900' >your selfie will be stored in our App</p>
        </div>
 
          <div >
          <form  onSubmit={handleSubmit} action="" className='flex items-center ml-24 h-[40vh] flex-col justify-center' >
             <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
                 <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white" onClick={handLabelClick}>
                     <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                         <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                     </svg>
                     <span className="mt-2 text-base leading-normal">Select a file</span>
                     <input id='fileuploader' type='file' className="hidden" name='selfie' onChange={handleFileChange}/>
                 </label>
             </div>
            <Button  type='submit' disabled = {loading ? true : false} variant={"default"}>{loading ? "Uploading To Server..." : "Upload All Details"}</Button>
          </form>
            {/* "multipart/form-data" */}
     
 
          </div>
          </div>
          <div className='sideImage'>
             <img src={sideImage} className='h-[30rem]' alt="" />
          </div>
     </div>
    } 
  </div>
  )
}

export default ImageComponents
