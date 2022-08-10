import React,{useState} from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
import MenuIcon from '@material-ui/icons/MenuRounded';
import Sidebar from './Sidebar';



const Header = () => {
    const [{user}]=useStateValue()
    const [isShow, setIsShow] = useState(false);

    const displayMenu = (e) => {
        setIsShow(current => !current);
    }
    // const displayMenu = () => {
    //     console.log("menu")
    // }


    return (
        <div className='header' >
            <div className="header__left">
                <Avatar className="header__avatar" src={user?.photoURL} alt={user?.displayName} />
                <AccessTimeIcon />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search me" />
            </div>

            <div className="header__right">
                <HelpOutlineIcon />
            </div>

           

            <button className="signout">Signout</button>

            <div onClick={displayMenu} className="hamburger">
                <MenuIcon />
            </div>

            {isShow && (
                <div>
                    <Sidebar>
                        </Sidebar>
                    </div>
            )}
            {/* <div className="hamburger">
                </> */}
            {/* </div> */}


        </div>
    )
}

export default Header
