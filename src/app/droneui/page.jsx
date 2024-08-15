'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";

export default function DroneUI() {
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
                    <PortfolioImage src='/DroneUI_hero.png' alt='Illustration of a computer monitor displaying a drone operating software. Specific features of the software are marked with arrows. Headline saying Operating Sea Rescue Drones Efficiently and Safely.' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_01.jpg' alt='Project Outline & Scope of project' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_02.gif' alt='Approach & Work process model' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_03.gif' alt='User Insights & wireframes' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_04.gif' alt='Wireframes and component library' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_05.gif' alt='Design guidelines' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_06.gif' alt=' Final design 1' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_07.gif' alt=' Final design 2' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI/DroneUI2_08.gif' alt='Final design 3' setImageCount={setImageCount} />

                    <PortfolioImage src='/DroneUI_hero.png' alt='Illustration of a computer monitor displaying a drone operating software. Specific features of the software are marked with arrows. Headline saying Operating Sea Rescue Drones Efficiently and Safely.' setImageCount={setImageCount} />
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
