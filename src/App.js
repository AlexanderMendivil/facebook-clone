import React from 'react';
import './App.css';

import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login"
function App() {

  const user= "f";
  return (
    <div className="app">
      {!user ?  ( <Login /> ) : (
        <>
      <Header />
      <div className="app__body">
      <SideBar />
        <Feed />
        <Widget />
      </div>
        </>
      )}
     </div>
  );
}

export default App;
