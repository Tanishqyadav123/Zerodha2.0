import React from 'react'
import { SideStockTable } from './SideStockTable'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { IoSettingsOutline } from "react-icons/io5";
import { ChartPropsType } from '../../types';



type PropsType = {
     showChart ?: boolean,
     setShowChart ?: (value : boolean) => void,
     buyDialog ?: boolean,
     setBuyDialog ?: (value : boolean) => void,
     sellDialog ?: boolean,
     setSellDialog ?: (value : boolean) => void

} 
function AllStocksSideBar(Props : PropsType) {
  
  return (
    <div className=' w-[30vw] h-[90vh]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] ' >

     <div className='searchBar'>
     <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300  border-s-gray-50 border-s-2 border border-gray-300  dark:bg-gray-700   dark:placeholder-gray-400 focus:outline-none dark:text-white dark:focus:border-blue-500" placeholder="Search Infy bse , index fund etc..." required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
     </div>
     <ScrollArea className="h-[100%] w-[100%] rounded-md border">
     
      <SideStockTable  showChart = {Props.showChart} setShowChart = {Props.setShowChart} buyDialog = {Props.buyDialog} setBuyDialog = {Props.setBuyDialog} sellDialog = {Props.sellDialog} setSellDialog={Props.setSellDialog}/>
     </ScrollArea>
     <div className='Footer bg-gray-300 w-[100%] h-[5vh] flex items-center justify-end p-3'>
          <IoSettingsOutline size={"1.5rem"} className='cursor-pointer' />
     </div>
    </div>
  )
}


export default AllStocksSideBar
