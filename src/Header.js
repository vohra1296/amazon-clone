import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import logo from "./image/amazon_logo_noto_email_v2016_au-main._CB444479176_.png"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import './Header.css'
import { useStateValue } from './StateProvider';
import {auth} from './Firebase';

function Header(){

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    const [{ basket ,user},dispatch] = useStateValue();
    return(
        <div className = 'header'>
            <Link to= "/">
            <img
                className = "header_logo"
                src= {logo} />
            </Link>
        <div className= "header_search">
            <input className= "header_searchInput"
                   type="text"/>
                   <SearchIcon className ="header_searchIcon"/>
        </div>
    <div div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick = {handleAuthentication} className="header_option">
            <span
            className="header_optionOne">Hello {user? user.email : "Guest"}
                </span>
            <span
                className="header_optionTwo">{user? " Sign Out ":" Sign In "}
                </span>
        </div>
        </Link>
        <div className="header_option">
               <span
                   className="header_optionOne">Returns
                </span>
            <span
                className="header_optionTwo">& Orders
                </span>
        </div>
        <div className="header_option">
               <span
                   className="header_optionOne">Your
                </span>
            <span
                className="header_optionTwo">Prime
                </span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingBasketIcon />&nbsp;
               <span className="header_optionOne" >{basket?.length}&nbsp;&nbsp;&nbsp;</span>
        </div>
        </Link>
    </div>
    </div>


    );
}
export default Header
