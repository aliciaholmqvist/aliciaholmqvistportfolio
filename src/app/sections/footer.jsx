import React from 'react';
import styles from '../styles/footer.module.scss';
import { IoMdMail, IoLogoLinkedin, IoIosArrowDropupCircle } from "react-icons/io";


function Footer() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
  
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className={styles.controls}>
        <div className="wrapper">
          <div className={styles.controlsContainer}>
            <div className={styles.title}>
              <h3>Thank you</h3>
              <div className={styles.bubble}><h4>:&#41;</h4></div>
            </div>
            <div className={styles.upArrow} onClick={scrollToTop}>
              <IoIosArrowDropupCircle />
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="wrapper">
          <div className={styles.footerContainer}>
            <h3>Hit me up!</h3>
            <div className={styles.link}><IoLogoLinkedin /><a href="https://www.linkedin.com/in/alicia-holmqvist/">LinkedIn</a></div>
            <div className={styles.link}><IoMdMail /><a href="mailto:alicia.holmqvist@live.se">Email</a></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer