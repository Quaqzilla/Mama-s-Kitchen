import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export function Bottom(){
    return(
        <div className="fixed bottom-0 p-4 bg-gray-300 w-screen flex items-center justify-between rounded-t-2xl z-30">
            <div className="flex flex-col items-center">
                <HomeFilledIcon sx={{ fontSize: 40}}/>
                <p>Home</p>
            </div>

            <div className="flex flex-col items-center">
                <ShoppingBagIcon sx={{ fontSize: 40}}/>
                <p>Orders</p>
            </div>

            <div className="flex flex-col items-center">
                <ShoppingCartIcon sx={{ fontSize: 40}}/>
                <p>Cart</p>
            </div>

            <div className="flex flex-col items-center">
                <AccountCircleIcon sx={{ fontSize: 40}}/>
                <p>Account</p>
            </div>
        </div>
    )
}