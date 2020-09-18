import React from "react";

import "./Login.css"
import imgB from "./img/fb-logo.png"
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
function Login (){

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result => {console.log(result)})
        .catch(error => alert(error.message))
    }
    return(
        <div className="login">
             <div className="login__logo">
                 <img src={imgB} alt=""></img>
                 <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt=""></img>
             </div>

             <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;