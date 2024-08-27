import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import wsConnection from '../utils/wsConnection'
import DialogBox from '../MyComponents/DialogBox'
import AllStocksSideBar from '../MyComponents/HomeComponents/AllStocksSideBar'
import MainChart from '../MyComponents/HomeComponents/MainChart'
import OrderBookSideBar from '../MyComponents/HomeComponents/OrderBookSideBar'
import PopUp from '../MyComponents/BuyAndSellStockComponents/PopUp'
import UserDetails from '../MyComponents/HomeComponents/UserDetails'
import { BuyDialog } from '../MyComponents/BuyAndSellStockComponents/BuyModal'
import { SellDialog } from '../MyComponents/BuyAndSellStockComponents/SellModal'



function Home() {

   const [showDialog , setShowDialog] = useState(false)
   const data = useSelector((state) => state.user).userInfo
   const [showChart , setShowCart] = useState<boolean>(false)
   const [buyDialog , setBuyDialog] = useState<boolean>(false)
   const [sellDialog , setSellDialog] = useState<boolean>(false)
   console.log(data?.isKYCCompleted)
  useEffect(() =>{
     if (data?.isKYCCompleted == false){
         setShowDialog(true)
     }
   
   wsConnection()

  } , [])

  

  return (
    <div className='h-screen w-full'>
       {
          showDialog ?  <DialogBox dialogTitle = {"Please Complete Your KYC!"} dialogDescription = {"KYC is mandatory in India for buying/selling Stocks. It only takes a few minutes ..."} dialogButtonText = {"Complete Your KYC"} showDialog = {showDialog} setShowDialog = {setShowDialog}/> : <div className='\ w-full h-screen'>
                 <div className=" h-screen w-full  main flex items-start justify-start">
                     
                      <AllStocksSideBar showChart = {showChart} setShowChart = {setShowCart} buyDialog = {buyDialog} setBuyDialog = {setBuyDialog} sellDialog = {sellDialog} setSellDialog = {setSellDialog}/>
                     {
                         showChart ? <MainChart  /> : <UserDetails />
                     }
                      {/* <PopUp /> */}
                  
                           
                                     
                 </div>
                      <div >
                       <BuyDialog buyDialog = {buyDialog} setBuyDialog = {setBuyDialog} />
                      </div>
                      <div>
                       <SellDialog sellDialog = {sellDialog} setSellDialog = {setSellDialog} />
                      </div>
          </div>
       }
    </div>
  )
}

export default Home


