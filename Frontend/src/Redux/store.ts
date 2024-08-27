import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import {persistReducer , persistStore} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'


const persistConfig = ({
    key : "root",
    storage
})
const combine= combineReducers({
    user :  userSlice 
})

const persistedReducer = persistReducer(persistConfig , combine)

export const store = configureStore({
    reducer : persistedReducer
})

export const persistor = persistStore(store);