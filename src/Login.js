import React from "react";

import "./Login.css"
import imgB from "./img/fb-logo.png"
import { Button } from "@material-ui/core";
function Login (){

    const signIn =()=>{

    }
    return(
        <div className="login">
             <div className="login__logo">
                 <img src={imgB}></img>
                 <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"></img>
             </div>

             <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;