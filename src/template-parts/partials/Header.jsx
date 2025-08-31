import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuActive(false);
        document.body.classList.remove("no-scroll");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuActive((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return newState;
    });
  };

  const handleLinkClick = () => {
    setMenuActive(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" onClick={handleLinkClick}>
          <img src="" alt="Header logo" />
        </a>
        <nav
          className={`header__nav ${menuActive ? "active" : ""}`}
          ref={navRef}
        >
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
        <div
          className={`header__burger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          ref={burgerRef}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
