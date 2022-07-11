import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import styles from "./Navbar.module.scss";
import { Cart } from "./";
import { motion } from "framer-motion";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, active, setActive } =
    useStateContext();
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const handleClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  console.log(active);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div
        className={`${styles["navbar-container"]} ${
          showHeader ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.burger}>
          <div
            className={
              active === false
                ? `${styles.strip} ${styles["burger-strip-2"]}`
                : `${styles.strip} ${styles["burger-strip-2"]} ${styles.active}`
            }
            onClick={() => handleClick()}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
        {/*  <nav className={styles["nav-links"]}> */}

        <nav
          className={
            active === true
              ? `${styles["nav-links"]} ${styles["nav-links-active"]}`
              : `${styles["nav-links"]}`
          }
        >
          <ul>
            <li onClick={() => setActive(false)}>
              <Link href="/#Plants">Plants</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div className={styles.overlay}></div>
        </nav>

        <Link href="/">
          <div className={styles.logo}>
            <img src="./plantito-logo.svg" alt="plantito-logo image" />
            <span> Plantito</span>
          </div>
        </Link>
        <button
          type="button"
          className={styles["cart-icon"]}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={styles["cart-item-qty"]}>{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </motion.div>
  );
};

export default Navbar;
