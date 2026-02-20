import './Header.css';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-section">
                <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="white" opacity="0.1" stroke="white" strokeWidth="2"/>
                    <path d="M 30 50 L 45 65 L 70 35" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="25" y="25" width="50" height="50" fill="none" stroke="white" strokeWidth="2" rx="5" opacity="0.3"/>
                </svg>
                <h1>TaskMate</h1>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
