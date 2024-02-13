import React from 'react'
import styles from '../styles/hero.module.scss'
import NavBar from '../components/navbar'
import HeroImage from '../components/heroImage.jsx'

import { Typewriter } from 'react-simple-typewriter'

function Hero() {

  const typewriterRef = React.useRef(null);

  const handleType = () => {
    if ((typewriterRef.current.querySelector('span').textContent.length) === 15) {
      typewriterRef.current.querySelector('span:nth-child(2)').remove();
    }
  }

  return (
    <>
      <NavBar />
      <section className={styles.heroSection}>
        <div className="wrapper">
        <span className={styles.line}></span>
          <div className={styles.content}>
            <div className={styles.middleBar}>
              <h1 className={styles.name} ref={typewriterRef}>
                <Typewriter
                  words={['Alicia\nHolmqvist']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={200}
                  onType={handleType}
                />
              </h1>
              <HeroImage />
            </div>
            <div className={styles.lowerBar}>
              <p className={styles.aboutText}>Creative design student based in Gothenburg. Passionate about creating holistic design solutions within UX, product and interaction design. Design by heart, engineer by practice.</p>
              <h2 className={styles.title}>Design <br></br>Portfolio</h2>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero