import React, {Component} from "react";
import "./Header.css";

import imgB from "./img/fb-logo.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

class Header extends Component{

    render(){
        return(
            <div className="header">

            <div className="header_left"> <img src={imgB} alt=""/></div>
            <div className="header_input"><SearchIcon />
            <input type="text"/>
            </div>

            <div className="header_middle">
                <div className="header_option">
                    <HomeIcon fontSize="large"/> </div>
                    </div>                

                <div className="header_option">
                    <FlagIcon fontSize="large"/> </div>

                <div className="header_option">
                    <SubscriptionsIcon fontSize="large"/> </div>

                <div className="header_option">
                    <StorefrontIcon fontSize="large"/> </div>
                
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large"/> </div>
            <div className="header_right"></div>                
            </div>
        )
    }

}

export default Header;