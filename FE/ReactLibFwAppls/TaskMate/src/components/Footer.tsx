import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>TaskMate</h3>
                    <p>Organize your tasks, manage your time, achieve your goals.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#github">GitHub</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} TaskMate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
