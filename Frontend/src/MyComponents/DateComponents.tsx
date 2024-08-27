"use client"

import * as React from "react"
import { format, toDate } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { KYCCardType } from "../types"

export function DatePickerDemo(Props : KYCCardType) {

  console.log(typeof Props.setDetails)

  const handleSelect = (e) =>{
     const val = new Date (e)
     Props.setDetails({...Props.details , ["birthDate"] :  val.toLocaleDateString()})
  }

  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !Props.details?.birthDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {Props.details?.birthDate ? format(Props.details?.birthDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={Props.details?.birthDate}
          onSelect={handleSelect}
          initialFocus
          
          
        />
      </PopoverContent>
    </Popover>
  )
}
