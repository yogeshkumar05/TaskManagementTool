import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav()
{
    return (<div>
        <h1>Agency Tool</h1>
        <Link to="/">Home</Link>
        <Link to="/about">Dashboard</Link>
        <Link to="/contact">Create</Link>
        </div>)
}