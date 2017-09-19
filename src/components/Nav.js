import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

export default function Nav()
{
    return (
    <div>
        <Header/>

       
    <div className="nav-bar">
       
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create</Link>
        <img className="notify-icon" src="../../images/notify.png"/>
        <span className="user-name">Hi User</span> 
        <img className="user-icon" src="../../images/user_icon.png"/>
       
        </div> </div>)
}