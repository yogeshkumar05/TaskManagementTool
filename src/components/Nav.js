import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

export default function Nav()
{
    return (
    <div>
        <Header/>

       
    <div className="container">
       
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create</Link>
       
        </div> </div>)
}