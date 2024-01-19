const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <p>&copy; 2024 | Rajat Prajapati | All rights are reserved.</p>
                </div>

                <div className="footer-socials">
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rajatprajapati/" className="social-links">
                        <i className="fa-brands fa-linkedin"></i></a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/rajat-2121/" className="social-links social-link-github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;