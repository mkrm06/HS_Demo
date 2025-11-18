import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Women's Kurtas",
    "Men's Wear",
    "Kids' Collection",
    "New Arrivals",
    "Sale",
  ];

  return (
    <header className={styles.navWrapper}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span>Address – 123 Fashion Street, Downtown, City 560001</span>
        <span>
          Contact No – +91 98765 43210 &nbsp;&nbsp;&nbsp; +91 98765 43211
        </span>
      </div>

      {/* Main Navbar */}
      <nav className={styles.nav}>
        {/* Logo Section */}
        <div className={styles.logoArea}>
          <div className={styles.logoCircle}>HS</div>
          <span className={styles.logoText}>House of Salaga</span>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {links.map((item, i) => (
            <li key={i} className={styles.navItem}>
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className={styles.icons}>
          <FiSearch className={styles.icon} />
          <FiShoppingBag className={styles.icon} />
          <FiUser className={styles.icon} />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className={styles.menuIcon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((item, idx) => (
            <p key={idx} className={styles.mobileLink}>
              {item}
            </p>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
