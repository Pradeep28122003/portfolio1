import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setToggleMenu(false);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <span
          className="header__logo"
          onClick={() => handleNavigation("home")}
        >
          My Portfolio
        </span>

        <nav className="header__nav">
          <ul className="header__menu">
            <li><button onClick={() => handleNavigation("home")}>Home</button></li>
            <li><button onClick={() => handleNavigation("about")}>About</button></li>
            <li><button onClick={() => handleNavigation("projects")}>Projects</button></li>
            <li><button onClick={() => handleNavigation("resume")}>Resume</button></li>
            <li><button onClick={() => handleNavigation("contact")}>Contact</button></li>
          </ul>
        </nav>

       
        {toggleMenu && (
          <nav className="header__mobile">
            <ul
              className="header__mobile-menu"
              onClick={() => setToggleMenu(false)}
            >
              <li><button onClick={() => handleNavigation("home")}>Home</button></li>
              <li><button onClick={() => handleNavigation("about")}>About</button></li>
              <li><button onClick={() => handleNavigation("projects")}>Projects</button></li>
              <li><button onClick={() => handleNavigation("resume")}>Resume</button></li>
              <li><button onClick={() => handleNavigation("contact")}>Contact</button></li>
            </ul>
          </nav>
        )}

      
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="header__toggle"
          aria-label="Toggle navigation menu"
        >
          <Bars3Icon className="header__icon" />
        </button>
      </div>
    </header>
  );
}
