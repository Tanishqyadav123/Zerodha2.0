import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '../../components/ui/button'
import SinglePopUp from './SinglePopUp'
  
function PopUp() {
  return (
    <div>
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent className = "flex items-center justify-center flex-col">
  {/* <div id="crud-modal"   className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}
  <SinglePopUp />
{/* </div> */}
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  )
}

export default PopUp

{/*   */}