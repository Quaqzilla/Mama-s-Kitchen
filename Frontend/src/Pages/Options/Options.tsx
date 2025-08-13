import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Options(){
    return(
        <div className=''>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-80 max-w-sm "
                >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="sm: basis-1/3 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-3">
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{ width: 100, height: 100 }}
                                />
                                <p>Name{index+1}</p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            
        </div>
    )
}