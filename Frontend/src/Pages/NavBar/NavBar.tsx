import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export function NavBar(){

    return(
        <div className="flex justify-center">
            <div className="flex flex-row justify-between items-center
             p-10 w-screen bg-sidebar-primary text-white">
                
                <div>
                    <img src="" alt="Business-logo" />
                </div>

                <div className="hidden lg:flex flex-row text-xl gap-3">
                    <a href="">Snacks</a>
                    <a href="">Drinks</a>
                    <a href="">Savoury</a>
                    <a href="">Sweet</a>
                </div>

                <div className="hidden lg:flex items-center gap-3 cursor-pointer">
                    <PersonIcon sx={{fontSize: 40}}/>
                    <LocalMallIcon sx={{fontSize: 38}}/>
                </div>

                <div className="lg:hidden">
                    <MenuIcon/>
                </div>

            </div>
        </div>
        
    )
}