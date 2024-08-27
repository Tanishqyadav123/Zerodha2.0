import React from 'react'

type WalletType = { 
    currentWallet : number,
    setCurrentWallet : (value : number) => void
}


function WalletSideBar(Props : WalletType) {

  return (
    <div className='w-[20vw] h-screen bg-gray-300 '>
       <div className="xl:py-2 text-blue-600">
        <div className="hidden xl:block text-orange-500 text-grey-darker text-3xl mb-7 px-4 py-2">
          Wallets
        </div>
       <div className='flex items-start justify-center flex-col gap-8'>
       <div className="group relative sidebar-item with-children">
          <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent ">
           <img src="https://coindcx.com/assets/icons/wallet-crypto.svg" alt="" />
            <div className={` hover:text-orange-600 text-lg ${Props.currentWallet == 0 ? "text-orange-500" : "text-blue-500"} `} onClick = {() => Props.setCurrentWallet(0)}>Spot</div>
          </a>
        </div>
        <div className="group relative sidebar-item with-children">
          <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent ">
            <img src="https://coindcx.com/assets/icons/wallet-futures.svg" alt="" />
          
            <div className={` hover:text-orange-600 text-lg ${Props.currentWallet == 1 ? "text-orange-500" : "text-blue-500"} `} onClick = {() => Props.setCurrentWallet(1)} >Forex</div>
          </a>
        </div>
        <div className="group relative sidebar-item with-children">
          <a href="#" className="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent ">
          <img src="https://coindcx.com/assets/icons/wallet-inr.svg" alt="" />
            <div className={` hover:text-orange-600 text-lg ${Props.currentWallet == 2 ? "text-orange-500" : "text-blue-500"} `} onClick = {() => Props.setCurrentWallet(2)}>INR</div>
          </a>
        </div>
       </div>
      </div>
    </div>
  )
}

export default WalletSideBar


