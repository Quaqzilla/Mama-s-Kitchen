import { Bottom } from '../Bottom/Bottom';

export function Previous(){
    return(
        <div className='flex flex-col gap-1'>
            

            <div className="flex flex-col justify-center items-center mt-5">

                <div>
                    <h1 className='text-3xl font-medium'>Previous Orders</h1>
                </div>

                <div className="flex flex-row justify-around gap-4 items-center mt-3">
                    
                    <div>
                        <img src="" alt="Food Item" 
                            className='w-40 rounded-2xl'                    
                        />
                    </div>

                    <div>
                        <h2 className='text-xl font-medium'>Item Name</h2>
                        <h3 className='text-md text-chart-4'>Price</h3>
                        <p>Quantity</p>
                    </div>
    
                </div>
                

            </div>

            <Bottom/>
        </div>
    )
}