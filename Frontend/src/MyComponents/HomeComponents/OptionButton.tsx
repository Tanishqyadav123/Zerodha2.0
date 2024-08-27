import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { CiTextAlignCenter } from "react-icons/ci";
import { GrLineChart } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { ChartPropsType } from '../../types';
type PropsType = {
     toolTipContent : string,
     showOrderBook ?: boolean,
     setShowOrderBook ?: (value : boolean) => void
     showChart ?: boolean,
     setShowChart ?: (value : boolean) => void
}

function OptionButton(Props : PropsType) {
   
  const handleShowOrderBook = () =>{
    Props.setShowOrderBook(!Props.showOrderBook)
    console.log(Props.showOrderBook)
  }

  const handleShowChart = () =>{
     Props.setShowChart(!Props.showChart)
     console.log(Props.showChart)
  }

  return (
    <div>
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger> {Props.toolTipContent === "Depth(D)" ? <CiTextAlignCenter onClick={Props.toolTipContent === "Depth(D)" ? () => handleShowOrderBook() : () => {}} className='mx-3' /> : Props.toolTipContent === "Chart(C)" ? <GrLineChart className='mx-3' onClick={Props.toolTipContent === "Chart(C)" ? () => handleShowChart() : () => {}} /> : <RiDeleteBinLine className='mx-3'/>} </TooltipTrigger>
    <TooltipContent>
      <p>{Props.toolTipContent}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
    </div>
  )
}

export default OptionButton
