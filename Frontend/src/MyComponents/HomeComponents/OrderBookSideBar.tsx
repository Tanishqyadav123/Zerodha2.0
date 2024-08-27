import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ScrollArea } from '../../components/ui/scroll-area'

function OrderBookSideBar() {
  const invoices = [
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
    {
      Bid: 0.00,
      Order: 0.00012,
      Qty : 0.90,
      Ask : 0.00
    },
  ]
  return (
    <div className=' w-[41vw] h-[57vh] flex items-center justify-start text-xs'>
    
    <ScrollArea className="h-[100%]  rounded-md border ">
    <Table className = " text-red-500 w-[50%] text-[0.8rem]  ">
      <TableHeader>
        <TableRow className = "">
          <TableHead >Bid</TableHead>
          <TableHead>Order</TableHead>
          <TableHead className="text-right">Qty.</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className = "">
        {invoices.map((invoice) => (
          <TableRow key={invoice.Bid}>
            <TableCell className="font-small">{invoice.Bid}</TableCell>
          
            <TableCell className="text-center">{invoice.Order}</TableCell>
            <TableCell className="text-center">{invoice.Qty}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
      </ScrollArea>
    <ScrollArea className="h-[100%]  rounded-md border ">
    <Table className = " text-green-500 w-[50%]  text-[0.7rem]">
      <TableHeader>
        <TableRow>
        <TableHead className="w-[100px]">Offer</TableHead>
          <TableHead>Order</TableHead>
          <TableHead className="text-right">Qty.</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.Ask}>
            <TableCell className="font-small">{invoice.Ask}</TableCell>
          
            <TableCell className="text-center">{invoice.Order}</TableCell>
            <TableCell className="text-center">{invoice.Qty}</TableCell>

          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter >
        <TableRow >
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-center pr-[4vw]">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </ScrollArea>


    </div>
  )
}

export default OrderBookSideBar
