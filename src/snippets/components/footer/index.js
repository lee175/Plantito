"use client";
import React from "react";
import styles from "./css.module.scss";
import Link from "next/link";
import Logo from "@/assets/images/plantito_logo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container grid grid--5-cols " id="contact">
      <div className={styles["logo-col"]}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={Logo} alt="Plants example" />
            <span> Plantito</span>
          </div>
        </Link>

        <p className={styles.copyright}>
          Copyright &copy; 2024 by Plantito, Inc,
          <br /> All rights reserved.
        </p>
      </div>

      <div className={styles["address-col"]}>
        <p className={styles.heading}>Contact us</p>
        <address className={styles.contacts}>
          <p className={styles.address}>railway road, sikar, 332001</p>
          <p>
            <a className={styles["footer-link"]} href="tel:8058954143">
              8058954143
            </a>
            <br />
            <a className={styles["footer-link"]} href="plantito.web@gmail.com">
              Plantito.web@gmail.com
            </a>
          </p>
        </address>
      </div>

      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Account</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              Create account
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Company</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              About Plantito
            </a>
          </li>

          <li>
            <a className={styles["footer-link"]} href="#">
              For business
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles["nav-col"]}>
        <p className={styles.heading}>Resources</p>
        <ul className={styles["footer-nav"]}>
          <li>
            <a className={styles["footer-link"]} href="#">
              Help center
            </a>
          </li>
          <li>
            <a className={styles["footer-link"]} href="#">
              Privacy and terms
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
