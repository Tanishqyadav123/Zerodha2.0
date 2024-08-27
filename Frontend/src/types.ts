import { Dispatch } from "@reduxjs/toolkit"
import { SetStateAction } from "react"

export type SignUpType = {
     fullName : string,
     phoneNumber : number,
     email : string,
     password : string

}
export type SignInType = {
     email : string,
     password : string
}

export type SetNewPasswordType = {
      newPassword : string,
      confirmPassword : string
}

export type KYCCardType = {
      mainHeading ?: string,
      subHeading ?: string,
      labelText ?: string,
      placeHolder ?: string,
      isAadhar ?: boolean,
      details ?: kycDetailsType,
      setDetails ?: Dispatch<SetStateAction<kycDetailsType>>
}

export type kycDetailsType = {
      panCardNumber : string,
      aadharNumber : number,
      birthDate : string,
      selfie : string
}

export type dialogBoxType = {
       dialogTitle : string,
       dialogDescription : string,
       dialogButtonText ?: string
       showDialog : boolean,
       setShowDialog : (value : boolean) => void
}
export type ChartPropsType = {
      //  showChart : boolean,
      //  setShortChart : () => void
}


export type EquityPropsType = {
      title : string,
      amount ?: number,
      
}