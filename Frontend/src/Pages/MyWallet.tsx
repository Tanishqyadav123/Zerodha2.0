import React, { useState } from 'react'
import WalletSideBar from '../MyComponents/WalletComponents.tsx/WalletSideBar'
import WalletArea from '../MyComponents/WalletComponents.tsx/WalletArea'

function MyWallet() {

    const [currentWallet , setCurrentWallet] = useState<number>(0)

    console.log(currentWallet)

  return (
    <div className='bg-gray-200 w-full h-screen'>
        <div className="main h-[100%] w-[100%] flex items-start justify-start ">
            <WalletSideBar currentWallet = {currentWallet} setCurrentWallet = {setCurrentWallet} />
          
             {
                 currentWallet == 0 ? <WalletArea walletName = {"Spot Wallet"} walletAmount={0.00} walletDesc='Current portfolio value' /> : currentWallet == 1 ? <WalletArea walletName = {"Forex Wallet"} walletAmount={0.00} walletDesc={"Current Investment"}/> : <WalletArea walletName = {"INR Wallet"} walletAmount={0.00} walletDesc={"Wallet Balance"}/>
             }

        </div>
    </div>
  )
}

export default MyWallet
