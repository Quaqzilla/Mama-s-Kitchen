import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Bottom } from '@/Pages/Bottom/Bottom';
import { NavBar } from '@/Pages/NavBar/NavBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export function Choosen(){
    return(
        <div>
            <NavBar/>
                <div className="h-full flex flex-col p-4 mb-20">

                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(4)).map((_, index) => (
                            <Grid key={index} size={{ xs: 2, sm: 4, md: 3 }}>
                                <Item className='flex flex-col justify-evenly gap-3 '>
                                    <img src="" alt="Food Image" />
                                    <h1>Title of the food Product</h1>
                                    <p>Price</p>
                                    <button className='p-3 rounded-xl cursor-pointer bg-amber-400'>Add to cart</button>
                                </Item>
                            </Grid>
                        ))}
                    </Grid>

                </div>
            <Bottom/>
        </div>
    )
}