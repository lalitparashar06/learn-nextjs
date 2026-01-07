"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles//ConstructionMenu.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/Construction" },
    { name: "Solution", href: "/Solution" },
    { name: "Contact", href: "/contact" },
    { name: "crosspoint", href: "/crosspoint" },
    { name: "Base", href: "/Base" },
    { name: "Work", href: "/Work" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container flex items-center justify-between ">
        {/* Logo */}

        <Link href="/" className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Tables and a sofa"
            className="w-[160px] h-[60px] object-contain"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLines}></span>
          <span className={styles.hamburgerLines}></span>
          <span className={styles.hamburgerLines}></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    isScrolled ? styles.scrolledLink : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
