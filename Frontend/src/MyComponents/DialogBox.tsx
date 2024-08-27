import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { dialogBoxType } from '../types'



function DialogBox(Props : dialogBoxType) {
  return (
    <div>
      <Dialog open={Props.showDialog} onOpenChange={() => Props.setShowDialog(false)}>
  <DialogContent>
    <DialogHeader>
        <img src="https://coindcx.s3.amazonaws.com/static/images/e3486585-289c-4c06-a826-383545785b54/kyc_limit.svg" alt="KYC Logo" className='h-[14rem]'/>
      <DialogTitle>{Props.dialogTitle}</DialogTitle>
      <DialogDescription>
      {Props.dialogDescription}
      </DialogDescription>
    </DialogHeader>
   <Link to={"/kyc"}> <button className='bg-green-500 px-4 outline-none py-2 w-full text-gray-200 hover:bg-green-600 delay-75 rounded-md'>{Props.dialogButtonText}</button> </Link>
    
  </DialogContent>
</Dialog>
    </div>
  )
}

export default DialogBox
