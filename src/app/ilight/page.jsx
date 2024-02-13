'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';
import { IoMdMail, IoLogoLinkedin, IoIosArrowDropupCircle } from "react-icons/io";

export default function ILight() {
    const [imageCount, setImageCount] = useState(0);

    return (
        <>
            <div className={styles.background}>
                {imageCount < 10 &&
                    <LoadingScreen />
                }
                <div className={`${styles.wrapper} wrapper`}>
                    <Link href='/' className={styles.closeIcon}>
                        <IoClose />
                    </Link>
                    <PortfolioImage src='/iLight/00first-ilight.jpg' alt='Hero image of Maxivent OW' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_01.jpg' alt='Scope of work and time table' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_02.jpg' alt='Problems Title' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_03.jpg' alt='Overview of Maxivent OW' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_04.jpg' alt='Repairability' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_05.jpg' alt='Exploded view' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_06.jpg' alt='Air flow' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_07.jpg' alt='Pressing button' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/iLight-exxxp_08.jpg' alt='Clear feedback text' setImageCount={setImageCount} />
                    <PortfolioImage src='/iLight/Zlast-ilight.jpg' alt='UI Animation' setImageCount={setImageCount} />
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
            </div>
        </>
    )
}
