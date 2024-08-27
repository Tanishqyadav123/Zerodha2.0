import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type PropsType = {
  sellDialog: boolean;
  setSellDialog: (value: boolean) => void;
};

export function SellDialog(Props: PropsType) {
  return (
    <Dialog open={Props.sellDialog} onOpenChange={Props.setSellDialog}>
      <DialogContent className="sm:max-w-[325px] sm:min-h-[425px] flex items-start justify-start flex-col ">
        <DialogHeader>
          <DialogTitle>
            <h1 className="text-xl">HDFC</h1>
            <div className="radioOptions mt-3 ">
              <div className="mx-auto max-w-sm text-center flex items-center justify-start">
                <div className="flex items-center justify-center gap-2 mr-4 mb-4">
                  <input
                    id="radio1"
                    type="radio"
                    name="radio"
                    className=""
                    checked
                  />
                  <label htmlFor="radio1" className="flex items-center  cursor-pointer text-[0.84rem] text-gray-500">
                    BSE(1625.40)
                  </label>
                </div>

                <div className="flex items-center justify-center gap-2 mr-4 mb-4">
                  <input id="radio2" type="radio" name="radio" className="" />
                  <label htmlFor="radio2" className="flex items-center text-sm cursor-pointer text-[0.84rem] text-gray-500">
                   NSE(1640.30)
                  </label>
                </div>
              </div>
            </div>
          </DialogTitle>
        
          <DialogDescription>
         
           <div className="flex items-start justify-center flex-col gap-3">
           <div className="group relative w-72 md:w-80 lg:w-96">
      <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Qty.</label>
      <input id="3" type="number" className="peer h-10 w-[65%] rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-gray-900 focus:drop-shadow-lg" />
    </div>
           <div className="group relative w-72 md:w-80 lg:w-96">
      <label htmlFor="3" className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Price</label>
      <input id="3" type="number" className="peer h-10 w-[65%] rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white text-gray-900 focus:drop-shadow-lg" />
    </div>
           </div>

          </DialogDescription>
        </DialogHeader>
        <DialogFooter className = "w-[100%]  flex items-center justify-center flex-col gap-3">
         <Button className = "w-[100%] bg-orange-600 hover:bg-orange-700">Sell</Button>
         <Button className = "w-[100%] bg-gray-500 hover:bg-gray-700">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
