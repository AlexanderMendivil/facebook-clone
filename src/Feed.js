import React from "react"

import "./Feed.css"
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed(){
    return(
        <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post 
        profilePic="https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
        username="Alexander"
        timestamp="time"
        message="imagen"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
        />        
        <Post
        profilePic=""
        message=""
        timestamp=""
        username=""
        image=""
        />        
        <Post 
        profilePic=""
        message=""
        timestamp=""
        username=""
        image=""
        />        
        </div>
    )
}

export default Feed;