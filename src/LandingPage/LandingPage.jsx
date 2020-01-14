import React from 'react';
import './LandingPage.css';
import { NavLink as Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function LandingPage(){
    return (
        <div className="LandingPage">
            <p>Welcome to Wodit</p>
            <p>Where fitness is cheaper</p>
            {/* <Link activeClassName="activeLink" to={'/home'} className="headerElement">Login</Link> */}
            <Link to={'/login'}>
                <Button variant="contained" color="primary"> Login </Button>
            </Link>
        </div>
    );
}