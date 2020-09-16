import { Avatar } from "@material-ui/core";
import React from "react";

import "./Post.css";
function Post({ profilePic, image, username, timesamp, message }){

    return (
        <div className="Post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar" />
            <div className="post__topinfo">
            <h3>{username}</h3>
            <p>Time</p>
            </div>
            </div>

            <div className="post_bottom">
            <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>
        </div>
    );
}
export default Post;