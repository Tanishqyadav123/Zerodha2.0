import {createSlice} from '@reduxjs/toolkit'



const initialState  = {
  isAuth : false,
  userInfo : null 
}

const userSlice = createSlice({
     name : "user",
     initialState,
     reducers : {
         loginSuccess : (state , action) =>{
             state.isAuth = true
             state.userInfo = action.payload
             return state;
         },
         logoutSuccess : (state) =>{
             state.isAuth = false
             state.userInfo = null
             return state;
        
         }
     }
})

export const {loginSuccess , logoutSuccess} = userSlice.actions
export default userSlice.reducer