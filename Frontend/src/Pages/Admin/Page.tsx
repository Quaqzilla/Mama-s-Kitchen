import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { private_createTypography } from "@mui/material/styles"
import { DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const frameworks = [
  {
    value: "Add New Item",
    label: "Add New Item",
  },
  {
    value: "Customer Orders",
    label: "Customer Orders",
  },
  {
    value: "Current Menu",
    label: "Current Menu",
  },
]

const Categories = [
  {
    value: "Savoury",
    label: "Savoury",
  },
  {
    value: "Drinks",
    label: "Drinks",
  },
  {
    value: "Sweet",
    label: "Sweet",
  },
  {
    value: "Snacks",
    label: "Snacks",
  },
]

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const orderColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'itemName', headerName: 'Item Name', width: 130 },
  { field: 'price', headerName: 'Price', width: 90, type: 'number' },
];

const orderRows = [
  {id: 1, category: 'Snacks', itemName: 'Lays', price: 130},
];

const paginationModel = { page: 0, pageSize: 5 };

export function Page(){
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [cateopen, setCate] = React.useState(false)
  const [cateValue, setcateValue] = React.useState("")
  const [addNew, setAddNew] = React.useState(false)
  const [menu, setMenu] = React.useState(false)
  const [orders, setOrders] = React.useState(false)

  const enters = () => {

    if(value === "Add New Item"){
       setAddNew(prev => !prev); 
       setMenu(false);
       setOrders(false);
    }else if(value === "Customer Orders"){
        setOrders(prev => !prev);
        setAddNew(false);
        setMenu(false);
    }else{
        setMenu(prev => !prev);
        setAddNew(false);
        setOrders(false);
    }
    
  };

    return(
        <div>

            <div className="flex flew-row p-6 justify-between items-center bg-gray-400 rounded-b-3xl mb-7">
                <div>
                    <h1 className="text-2xl font-bold">Welcome User</h1>
                </div>

                <div>
                    <Avatar className="w-11 h-11">
                        <AvatarImage src=""/>
                        <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                </div>
            </div> 

            <div className="mt-2 flex flex-col justify-center items-center gap-5">

                <div>
                    <h3 className="text-3xl font-medium">SELECT OPTION</h3>
                </div>

                <div>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between bg-gray-400"
                            >
                            {value
                                ? frameworks.find((framework) => framework.value === value)?.label
                                : "Select framework..."}
                            <ChevronsUpDown className="opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                            <CommandInput placeholder="Search framework..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                        "ml-auto",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                                </CommandGroup>
                            </CommandList>
                            </Command>
                        </PopoverContent>
                        </Popover>
                </div>

                

            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 mt-3 md:flex-row">
                <Button onClick={enters}>ENTER</Button>
            </div>

            <div className="mt-6 flex flex-col justify-center items-center gap-5">
                <div>
                    <h3 className="text-3xl font-medium">
                        {value ? frameworks.find((framework) => framework.value === value)?.label : " "}
                    </h3>
                </div>

                {addNew && (

                    <div className="flex flex-col justify-evenly gap-4 items-center">
                        
                        <div className="flex flex-col w-full max-w-sm gap-3 justify-center ">
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" className="bg-gray-400 text-white"/>
                        </div>

                        <div className="flex flex-col w-full max-w-sm gap-3 justify-center ">
                            <Label htmlFor="newItem">Item Name</Label>
                            <Input id="name" type="text" className="bg-gray-400 text-white"/>
                        </div>

                        <div className="flex flex-col w-full max-w-sm gap-3 justify-center ">
                            <Label htmlFor="newItem">Category</Label>
                            <Popover open={cateopen} onOpenChange={setCate}>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={cateopen}
                                        className="w-[200px] justify-between  bg-gray-400"
                                        >
                                        {cateValue
                                            ? Categories.find((category) => category.value === cateValue)?.label
                                            : "Select framework..."}
                                        <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                        <CommandInput placeholder="Search framework..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>No framework found.</CommandEmpty>
                                            <CommandGroup>
                                            {Categories.map((category) => (
                                                <CommandItem
                                                key={category.value}
                                                value={category.value}
                                                onSelect={(currentValue) => {
                                                    setcateValue(currentValue === value ? "" : currentValue)
                                                    setCate(false)
                                                }}
                                                >
                                                {category.label}
                                                <Check
                                                    className={cn(
                                                    "ml-auto",
                                                    value === category.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                </CommandItem>
                                            ))}
                                            </CommandGroup>
                                        </CommandList>
                                        </Command>
                                    </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex flex-col w-full max-w-sm gap-3 justify-center ">
                            <Label htmlFor="price">Price</Label>
                            <Input id="name" type="number" className="bg-gray-400 text-white"/>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-2 mt-3 md:flex-row">
                            <Button>ENTER</Button>
                        </div>

                    </div>


                )}

                {menu && (
                    <div>
                        <Paper sx={{ height: 400, width: '100vw' }}>
                            <DataGrid
                                rows={orderRows}
                                columns={orderColumns}
                                initialState={{ pagination: { paginationModel } }}
                                pageSizeOptions={[5, 10]}
                                sx={{ border: 0 }}
                            />
                        </Paper>
                    </div>
                )}

                {orders && (
                    <div>
                        <Paper sx={{ height: 400, width: '100vw' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{ pagination: { paginationModel } }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                                sx={{ border: 0 }}
                            />
                        </Paper>
                    </div>
                )}
                
            </div>            
        </div>
    )
}