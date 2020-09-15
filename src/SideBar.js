import React from "react"

import "./SideBar.css"
import SideBarRow from "./SideBarRow.js";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons"

function SideBar(){
    return(
        <div className="sidebar">
           
            <SideBarRow src="https://www.ecb.europa.eu/pub/research/authors/profiles/profile_pics/author_picture_alexander-popov.jpg" title="Alexander"/>
            <SideBarRow Icon={LocalHospitalIcon}
             title="COVID-19 Information Center"/>
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SideBarRow Icon={PeopleIcon} title="Friends"/>
            <SideBarRow icon={ChatIcon} title="Messenger"/>
            <SideBarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SideBarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

       </div>
    );
}

export default SideBar;