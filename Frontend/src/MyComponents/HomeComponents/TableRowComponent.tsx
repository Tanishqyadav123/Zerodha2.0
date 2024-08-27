import React, { useState } from 'react'
import { TableCell, TableRow } from '../../components/ui/table'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from '../../components/ui/button';

import OptionButton from './OptionButton';
import OrderBookSideBar from './OrderBookSideBar';
import { ChartPropsType } from '../../types';

type PropsType = {
    showChart ?: boolean,
    setShowChart ?: (value : boolean) => void,
    buyDialog ?: boolean,
    setBuyDialog ?: (value : boolean) => void,
    sellDialog ?: boolean,
    setSellDialog ?: (value : boolean) => void

} 
function TableRowComponent(Props : PropsType) {
    const [showOptions , setShowOptions] = useState<boolean>(false)
    const [showOrderBook , setShowOrderBook] = useState<boolean>(false)
   
 

    const handleMouseOver= () =>{
        setShowOptions(true)
    }
    const handleMouseOut= () =>{
        setShowOptions(false)
    }
   
    const arrayData = [
        {
            toolTipContent : "Depth(D)"
        },
        {
            toolTipContent : "Chart(C)"
        },
        {
            toolTipContent : "Delete(DEL)"
        },
    ]

  return (
    <div className=''>
       <TableRow  className="hover:cursor-crosshair" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
              <TableCell className="font-medium">{"HDFC"} <span className="text-[0.7rem] text-gray-400">BSE</span> </TableCell>
             {
                 showOptions ? <div className='w-[100%] flex mt-2 items-center justify-center gap-2'>
                    <Button className='text-sm p-3 bg-blue-500' onClick={() => Props.setBuyDialog!(true)} >B</Button>
                    <Button className='text-sm p-3 bg-orange-600 ' onClick={() => Props.setSellDialog!(true)}>S</Button>
                
                    {
                         arrayData.map((elem , index) =>{
                              if (elem.toolTipContent === "Depth(D)"){
                                return <OptionButton showOrderBook = {showOrderBook} setShowOrderBook = {setShowOrderBook} toolTipContent = {elem.toolTipContent} showChart = {Props.showChart} setShowChart = {Props.setShowChart}   />
                                 
                              }
                              else if (elem.toolTipContent === "Chart(C)") {
                                   return <OptionButton showOrderBook = {showOrderBook} setShowOrderBook = {setShowOrderBook} toolTipContent = {elem.toolTipContent} showChart = {Props.showChart} setShowChart = {Props.setShowChart}  />
                              }
                              else {
                                 
                                  return <OptionButton toolTipContent = {elem.toolTipContent} />
                              }
                         })
                    }

                 </div> : <div>
                     <TableCell>-0.51%</TableCell>
              <TableCell> <MdKeyboardArrowDown className="text-red-500"/> </TableCell>
              <TableCell className="text-right text-red-500">1625.60</TableCell>
              

                 </div>
             } 
            </TableRow>

            {
                showOrderBook ? <div>
                    <OrderBookSideBar />
                </div> : ""
            }
    </div>
  )
}

export default TableRowComponent
