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