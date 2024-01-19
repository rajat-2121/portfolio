import { useState } from "react";


const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function handleChange() {
        return (
            setIsNavExpanded(false)
        )
    }

    return (
        <header>
            <nav>
                <a className="brand" href="#home">rajatPrajapati</a>
                <ul>
                    <li ><a href="#home" >Home</a></li>
                    <li ><a href="#about" >About</a></li>
                    <li ><a href="https://drive.google.com/file/d/1aE-6TSuIk-Fi3aY2X11wO7_Yruc4bgFt/view?usp=drivesdk" target="_blank" rel="noreferrer">Resume</a></li>
                    <li ><a href="#projects">Projects</a></li>
                    <li ><a href="#contact" >Contact</a></li>
                    <li onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}><i className="fa-solid fa-bars-staggered mobile-menu"></i></li>
                </ul>
            </nav>


            <div className={isNavExpanded ? "mobile-nav open-menu" : "mobile-nav closed-menu"}>
                <div className="nav-menu-back-div">

                    <span onClick={() => {
                        setIsNavExpanded(!isNavExpanded);

                    }}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>

                    <ul>
                        <li onClick={handleChange}><a href="#home"><i class="fa-solid fa-house"></i>Home</a></li>
                        <li onClick={handleChange}><a href="#about"><i class="fa-solid fa-user"></i>About</a></li>
                        <li onClick={handleChange}><a href="https://drive.google.com/file/d/1aE-6TSuIk-Fi3aY2X11wO7_Yruc4bgFt/view?usp=drivesdk"><i class="fa-solid fa-user"></i>Resume</a></li>
                        <li onClick={handleChange}><a href="#projects"><i class="fa-solid fa-briefcase"></i>Projects</a></li>
                        <li onClick={handleChange}><a href="#contact"> <i class="fa-regular fa-id-badge"></i>Contact</a></li>
                    </ul>
                </div>


                {/* nav socials */}
                <div >
                    <p>Get in touch.</p>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rajatprajapati/" className="nav-socials-links">
                        <i className="fa-brands fa-linkedin"></i></a>
                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://www.github.com/rajat-2121/" className="nav-socials-links">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a aria-label="twitter" rel="noreferrer" target="_blank" href="https://www.twitter.com/rajatprahlad21/" className="nav-socials-links">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a aria-label="intagram" rel="noreferrer" target="_blank" href="https://www.instagram.com/rajat._.21/" className="nav-socials-links">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>

            </div>



        </header>

    )
}

export default Header;