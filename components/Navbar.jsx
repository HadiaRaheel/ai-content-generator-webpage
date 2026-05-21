"use client";

import { useState } from "react";
import { FaMoon, FaFolder, FaSun, FaBars } from "react-icons/fa";
import { FaHouse, FaVideo } from "react-icons/fa6";
import { TbHeadset, TbPhotoHeart } from "react-icons/tb";
import { BsImage } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

import styles from "./Navbar.module.css";

export default function Navbar({ onMenuToggle }) {
  const [active, setActive] = useState("house");
  const { isDark, toggleTheme } = useTheme();

  const tabs = [
    { id: "house", label: "Home",   icon: <FaHouse size={18} /> },
    { id: "image", label: "Image",  icon: <BsImage size={18} /> },
    { id: "video", label: "Video",  icon: <FaVideo size={18} /> },
    {
      id: "edit",
      label: "Edit",
      icon: (
        <span className={styles["magic-icon"]} aria-hidden="true">
          <FaMagic size={18} />
        </span>
      ),
    },
    { id: "files", label: "Files",  icon: <FaFolder size={18} /> },
  ];

  return (
    <nav className={styles.navbar} aria-label="Main navigation">

      {/* Logo */}
      <div className={styles["navbar-logo"]} aria-label="App logo">F</div>

      {/* Center nav — hidden on mobile */}
      <div className={styles["navbar-center"]}>
        <div className={styles["indicator-track"]} aria-hidden="true">
          {tabs.map((tab) => (
            <div key={tab.id} className={styles["indicator-wrapper"]}>
              <div
                className={`${styles.indicator} ${
                  active === tab.id ? styles["indicator-active"] : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className={styles["navbar-icons"]} role="list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="listitem"
              onClick={() => setActive(tab.id)}
              aria-label={tab.label}
              aria-current={active === tab.id ? "page" : undefined}
              className={styles["nav-btn"]}
            >
              {tab.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Right side */}
      <div className={styles["navbar-right"]}>
        <button className={styles["nav-pill"]} aria-label="Gallery">
          <TbPhotoHeart size={15} aria-hidden="true" />
          <span>Gallery</span>
        </button>

        <button className={styles["nav-pill"]} aria-label="Support">
          <TbHeadset size={15} aria-hidden="true" />
          <span>Support</span>
        </button>

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className={`${styles["theme-toggle"]} ${isDark ? styles["theme-dark"] : ""}`}
        >
          {isDark ? (
            <FaSun size={13} className={styles["sun-icon"]} aria-hidden="true" />
          ) : (
            <span className={styles["moon-wrapper"]} aria-hidden="true">
              <FaMoon size={13} className={styles["moon-icon"]} />
            </span>
          )}
        </button>

        {/* Profile */}
        <div className={styles["profile-wrapper"]}>
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="User profile"
            className={styles["profile-img"]}
          />
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={styles["hamburger-btn"]}
          onClick={onMenuToggle}
          aria-label="Open navigation menu"
          aria-expanded={false}
        >
          <FaBars size={16} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}