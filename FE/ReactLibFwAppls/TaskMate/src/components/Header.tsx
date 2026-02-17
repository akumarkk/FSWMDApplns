import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>TaskMate</h1>
            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
