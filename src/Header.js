import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import logo from "//Users/cowell.cor/Desktop/clone/amazoneclone/src/image/amazon_logo_noto_email_v2016_au-main._CB444479176_.png"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Header.css'

function Header(){
    return(
        <div className = 'header'>
            <img
                className = "header_logo"
                src= {logo} />

        <div className= "header_search">
            <input className= "header_searchInput"
                   type="text"/>
                   <SearchIcon className ="header_searchIcon"/>
        </div>
    <div div className="header_nav">
        <div className="header_option">
            <span
            className="header_optionOne">Hello Guest
                </span>
            <span
                className="header_optionTwo">Sign In
                </span>
        </div>
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
        <div className="header_optionBasket">
            <ShoppingBasketIcon />
               <span className="header_optionOne" >0</span>
        </div>
    </div>
    </div>


    );
}
export default Header
