'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross1  } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const navVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
};


const NavBar = () => {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    // Applying on mount
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    // Applying on unmount    
    return () => {
      document.body.style.overflow = "visible";
    }
  }, [navOpen])

  useEffect(() => {
    // Event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    console.log(pathname);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  
  const handleWindowResize = () => {

    if (window.innerWidth >= 1024) {
      setNavOpen(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <nav className={styles.navBar}>
          <Image src="/AH.svg" height={80} width={80} className={styles.logo} alt="logotype" />
          <motion.ul className={styles.navLinks} variants={navVariants} initial="hidden" animate="show">
            <span className={styles.lineStartEnd}></span>
            <motion.li variants={itemVariants}><Link className={pathname === '/' ? styles.active : ''} href="/">Portfolio</Link></motion.li>
            <span className={styles.lineBtw}></span>
            <motion.li variants={itemVariants}><Link className={pathname === '/about' ? styles.active : ''} href="/about">About</Link></motion.li>
            <span className={styles.lineBtw}></span>
            <motion.li variants={itemVariants}><Link className={pathname === '/contact' ? styles.active : ''} href="/contact">Contact</Link></motion.li>
            <span className={styles.lineStartEnd}></span>
          </motion.ul>
        </nav>
      </div>
      <div className={styles.mobileNav}>
        <Image src="/AH.svg" height={60} width={60} className={styles.logo} alt="logotype" />
        <div className={styles.navTrigger} onClick={handleToggle}>
          {!navOpen ? <RxHamburgerMenu/> : <RxCross1 /> }
        </div>
      </div>
      {navOpen &&
        <div className={styles.slideOut}>
          <div className={styles.navTrigger} onClick={handleToggle}>
            {!navOpen ? <RxHamburgerMenu/> : <RxCross1 /> }
          </div>
          <Link className={styles.mobileLink} href="/" onClick={handleToggle}>Portfolio</Link>
          <Link className={styles.mobileLink} href="/about" onClick={handleToggle}>About</Link>
          <Link className={styles.mobileLink} href="/contact" onClick={handleToggle}>Contact</Link>
        </div>
      }
    </>
  );
};

export default NavBar;