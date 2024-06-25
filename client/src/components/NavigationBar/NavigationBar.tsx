import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { APPNAME } from '../../config/config';

const NavigationBar : React.FC = () => {
    return (
        <div className="nav">
            <nav>
                <h1>{APPNAME}</h1>
                <Link to={"/dashboard"}>Dashboard</Link> <span></span>
                <Link to={"/about"}>About</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;