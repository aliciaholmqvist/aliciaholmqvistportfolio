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
                    <PortfolioImage src='/BEMO/BEMO-_01.jpg' alt='Image of a trendy apartment with BEMO projecting a movie on the wall. Slogan reading “The future of Gen Z home entertainment' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_02.jpg' alt='Project Outline' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_03.jpg' alt='Persona' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_04.jpg' alt='Market Analysis' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_05.jpg' alt='Design Brief' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_06.jpg' alt='From giving' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_07.jpg' alt='From Grammar Syntax' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_08.jpg' alt='Final design 1' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_09.jpg' alt='Final design 2' setImageCount={setImageCount} />

                    <PortfolioImage src='/BEMO/BEMO-_10.jpg' alt='Image of BEMO projecting a movie in a trendy apartment' setImageCount={setImageCount} />
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
