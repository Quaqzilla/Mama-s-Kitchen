import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export function NavBar(){

    return(
        <div className="flex justify-center">
            <div className="flex flex-row justify-between items-center
             p-10 w-screentext-black">
                
                <div className='hidden lg:flex'>
                    <img src="" alt="Business-logo" />
                </div>

                <div>
                     <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, color: 'black' }}
                        >
                            <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Mama`s Kitchen"
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                            </IconButton>
                    </Paper>
                </div>

                <div className="hidden lg:flex items-center gap-3 cursor-pointer">
                    <PersonIcon sx={{fontSize: 40}}/>
                    <LocalMallIcon sx={{fontSize: 38}}/>
                </div>

                

            </div>
        </div>
        
    )
}