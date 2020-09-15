import { Avatar } from "@material-ui/core";
import Videocam from "@material-ui/icons/Videocam"
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";

import React from "react";

import "./MessageSender.css";
function MessageSender(){

    const handleSubmit = e =>{
        e.preventDefault();

    }
    return(
        <div className="messageSender">

        <div className="messageSender__top">
        <Avatar />
        <form>
        <input 
        className="messageSender__input"
        placeholder={`What's on your mind?`}/>
        <input placeholder="image URL (Optional)" />
        <button onClick={handleSubmit} type="submit">
            Hidden submit
        </button>
        </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocam style={{ color:"red"}} />
                <h3>Live Video</h3>
                <PhotoLibrary style={{color: "green"}}/>
                <h3>Photo/Video</h3>
                <InsertEmoticon style={{color: "yellow"}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
        </div>
    );
}

export default MessageSender;