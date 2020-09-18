import { Avatar } from "@material-ui/core";
import Videocam from "@material-ui/icons/Videocam"
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";

import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase";

import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
function MessageSender(){

    const [input, setInput] = useState("");
    const [imageUrl, setImageURl] = useState("");
    const [{ user }, dispatch] = useStateValue();
    const handleSubmit = e =>{
        e.preventDefault();
 
        db.collection("posts").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageURl("");
    }
    return(
        <div className="messageSender">
        <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
        <input 
        value={input}
        onChange={e=> setInput(e.target.value)}
        className="messageSender__input"
        placeholder={`What's on your mind? ${user.displayName}`}/>
        <input 
        value={imageUrl}
        onChange ={(e) => setImageURl( e.target.value)}
        placeholder="image URL (Optional)" />

        <button onClick={handleSubmit} type="submit">
            Hidden submit
        </button>
        </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocam style={{ color:"red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibrary style={{color: "green"}}/>
                <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmoticon style={{color: "yellow"}}/>
                <h3>Feeling/Activity</h3>
                </div>
        </div>
        </div>
    );
}

export default MessageSender;