'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioImage from '../components/portfolioimage';
import PortfolioImageWithVideo from '../components/portfolioimagewithvideo';
import styles from '../styles/portfolio.module.scss';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";

export default function ILight() {
    const [imageCount, setImageCount] = useState(0);

    return (
        <>
            <div className={styles.background}>
                {imageCount < 7 &&
                    <LoadingScreen />
                }
                <div className={`${styles.wrapper} wrapper`}>
                    <Link href='/' className={styles.closeIcon}>
                        <IoClose />
                    </Link>
                    <PortfolioImage src='/BreBox/BreBox-first.jpg' alt='Product image of the Breathing Box. With logo and slogan: Guided mindfulness when you need a break' setImageCount={setImageCount} />
                    <PortfolioImage src='/BreBox/Box (1).jpg' alt='Project Outline' setImageCount={setImageCount} />
                    <PortfolioImageWithVideo srcVideo='/BreBox/Scroll_hand.mp4' height={'75%'} right={0} top={'5%'} src='/BreBox/Box (2).jpg' alt='Scope' setImageCount={setImageCount} />
                    <PortfolioImageWithVideo srcVideo='/BreBox/BreathingTechnique.mp4' height={'50%'} right={'60%'} top={'50%'} src='/BreBox/Box (3).jpg' alt='Approach' setImageCount={setImageCount} />
                    <PortfolioImage src='/BreBox/Box (4).jpg' alt='Process' setImageCount={setImageCount} />
                    <PortfolioImage src='/BreBox/Box (5).jpg' alt='Prototyping' setImageCount={setImageCount} />
                    <PortfolioImage src='/BreBox/Box (6).jpg' alt='Design through prototyping' setImageCount={setImageCount} />
                    <PortfolioImageWithVideo srcVideo='/BreBox/DemoBreathingBoxNoMusic.mp4' height={'30.1%'} right={'3%'} top={'62%'} src='/BreBox/Box (7).jpg' alt='Final Design' setImageCount={setImageCount} />
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
