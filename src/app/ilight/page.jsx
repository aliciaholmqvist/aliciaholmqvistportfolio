'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";

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
                    <PortfolioImage src='/iLight/iLight-first.jpg' alt='Two hands holding an tablet displaying iLight interface design. Orange stage lights in the background. Slogan reading ”You are the light designer. Let the show begin”.' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_01.jpg' alt='Project Outline' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_02.jpg' alt='Scope; Light rig software for small concert venues' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_03.jpg' alt=' Approach ' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_04.jpg' alt=' Design process visualisation ' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_05.jpg' alt=' Layout-Low fidelity ' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_06.jpg' alt=' Final design 1' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_07.jpg' alt=' Final design 2' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-slice_08.jpg' alt='Final design 3' setImageCount={setImageCount} />

                    <PortfolioImage src='/iLight/iLight-last.jpg' alt='Stylistic mock-up of iLight interface designUI Animation' setImageCount={setImageCount} />
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
