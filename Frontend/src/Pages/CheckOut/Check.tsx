import * as React from "react"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"
import CloseIcon from '@mui/icons-material/Close';
import { useAuthControls } from "Firebase/functions";

export function Check(){
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [confirm, setConfirm] = React.useState(false)
    const [main, setMain] = React.useState(true)

    const order = () => {
        setConfirm(true);
        setMain(false);
    };

    const close = () => {
        setConfirm(false);
        setMain(true);
    };

    const{
        back,
    } = useAuthControls();

    return(
        <div>
            
            <div className="p-3">
                <ArrowBackIcon onClick={back}/>
            </div>

            {main && (
                <div className='flex flex-col h-screen w-screen gap-20 '>

                    <div className='flex flex-col p-4'>
                        
                        <div className='flex items-center gap-4 bg-input shadow-2xl shadow-sidebar-foreground rounded-2xl p-2 mb-3'>

                            <div>
                                <img src="" alt="Item-image" className='h-20'/>
                            </div>

                            <div>
                                <h1>Item Name</h1>
                                <h3 className='font-medium'>R Price</h3>

                                <div className='flex flew-row w-full gap-3 justify-between items-center pt-2'>

                                    <div className='flex gap-2'>
                                    <AddIcon className='bg-chart-5 rounded-3xl'/>
                                    <RemoveIcon className='bg-chart-5 rounded-3xl'/>  
                                    </div>
                                    
                                    <div>
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 p-4'>
                        <h1 className='text-3xl font-sans text-chart-4'>Order Summary</h1>

                        <div className='flex flex-col gap-4'>
                            <div className='flex w-full justify-between'>
                                <h2 className='font-medium'>Number of Items:</h2>
                                <p>Value</p>
                            </div>

                            <div className='flex w-full justify-between'>
                                <h2 className='font-medium'>Sub-total</h2>
                                <p>R</p>
                            </div>
                        </div>

                    
                    </div>

                    <div className='absolute bottom-0'>
                        <button onClick={order} className='bg-chart-4 p-4 w-screen font-medium text-2xl'>Check Out</button>
                    </div>

                </div>
            )}
            
            {confirm && (
                <div className='flex h-screen w-screen justify-center items-center align-middle'>

                    <div className='flex flex-col items center gap-2 p-3 rounded-2xl bg-chart-4 shadow-2xl shadow-primary'>
                        <div>
                            <CloseIcon onClick={close}/>
                        </div>
                        <h1 className='text-3xl font-sans flex justify-center mb-3'>Confirm Order</h1>
                        <p className='text-xl font-medium'>Choose Time Of Collection And Date:</p>

                        <div className="flex gap-4">
                            <div className="flex flex-col gap-3">
                                <Label htmlFor="date-picker" className="px-1">
                                Date
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant="outline"
                                    id="date-picker"
                                    className="w-32 justify-between font-normal"
                                    >
                                    {date ? date.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setDate(date)
                                        setOpen(false)
                                    }}
                                    />
                                </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Label htmlFor="time-picker" className="px-1">
                                Time
                                </Label>
                                <Input
                                type="time"
                                id="time-picker"
                                step="1"
                                defaultValue="10:30:00"
                                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-2" >
                            <button className='bg-ring p-3 rounded-xl'>CONFIRM</button>
                        </div>
                    </div>

                    

                </div>
            )}

        </div>
    )
}