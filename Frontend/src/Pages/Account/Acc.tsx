import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useAuthControls } from 'Firebase/functions';

export function Acc() {
    const {
        back,
        user,
        logOut,
    } = useAuthControls();

    return(
        <div className='flex flex-col gap-1'>
           
           <div>
                <ArrowBackIcon className='m-4 text-3xl' onClick={back}/>
           </div>

           <div className="flex flex-col justify-around p-8 items-center">

                <div className='flex flex-row justify-around items-center le gap-2'>
                    <Avatar
                        alt="Remy Sharp"
                        src={user?.photoURL}
                        sx={{ width: 120, height: 120 }}
                    />

                    <div className="flex flex-col gap-2 items-start">
                        <h1 className='text-2xl font-bold'>Welcome {user?.displayName}</h1>
                        <a href="" className='text-chart-4'>View Previous Orders</a>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center">
                    
                    <div className='mt-5 flex flex-col justify-evenly gap-4'>
                    
                        <div className="flex w-full max-w-sm items-center gap-3 ">
                            <Label htmlFor="name">{user?.displayName}</Label>
                            <Input type="text" id="name" placeholder="User's Name and Surname" className='border-chart-4'/>
                        </div>

                        <div className="flex w-full max-w-sm items-center gap-4 ">
                            <Label htmlFor="email">Current Email:{user?.email}</Label>
                            <Input type="email" id="email" placeholder="Email address" className='border-chart-4' disabled/>
                        </div>

                        <div className="flex w-full max-w-sm items-center gap-3 ">
                            <Label htmlFor="phone">Current Phone:{user?.phoneNumber}</Label>
                            <Input type="number" id="phone" placeholder="Phone number" className='border-chart-4'/>
                        </div>

                    </div>

                    <div className='mt-3'>
                        <button className='bg-chart-4 p-3 text-xl rounded-xl'>Update</button>
                    </div>

                    <div className='absolute bottom-0'>
                        <button className='bg-chart-4 w-screen p-2 text-2xl font-medium' onClick={logOut}>LOG OUT</button>
                    </div>

                </div>
           </div>
        </div>
    )
}