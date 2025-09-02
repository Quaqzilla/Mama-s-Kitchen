import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {useNavigate} from 'react-router-dom';


export function Bottom(){

    let navigate = useNavigate();

    const home = () => {

        try{
            navigate('/');
        }catch (error){
            console.error(error);
        }
    };

    const past = () => {

        try{
            navigate('/user-previous-orders');
        }catch (error){
            console.error(error);
        }
    };

    const cart = () => {

        try{
            navigate('/user-checkout');
        }catch (error){
            console.error(error);
        }
    };

    const account = () => {

        try{
            navigate('/userAccount');
        }catch (error){
            console.error(error);
        }
    };

    return(
        <div className="fixed bottom-0 p-4 bg-gray-300 w-screen flex items-center justify-between rounded-t-2xl z-30">
            <div className="flex flex-col items-center">
                <HomeFilledIcon sx={{ fontSize: 40}} onClick={home}/>
                <p>Home</p>
            </div>

            <div className="flex flex-col items-center">
                <ShoppingBagIcon sx={{ fontSize: 40}} onClick={past}/>
                <p>Orders</p>
            </div>

            <div className="flex flex-col items-center">
                <ShoppingCartIcon sx={{ fontSize: 40}} onClick={cart}/>
                <p>Cart</p>
            </div>

            <div className="flex flex-col items-center">
                <AccountCircleIcon sx={{ fontSize: 40}} onClick={account}/>
                <p>Account</p>
            </div>
        </div>
    )
}