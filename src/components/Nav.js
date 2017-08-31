import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav()
{
    return (<div>
        <h1>Agency Tool</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>)
}