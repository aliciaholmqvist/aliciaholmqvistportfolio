'use client';

import styles from '../styles/about.module.scss'
import Footer from '../sections/footer';
import NavBar from '../components/navbar';
import Chip from '../components/chip';

export default function About() {

  const skills = ['UX/UI', 'Prototyping', 'Service Design', 'Product Design', 'Field Research', 'Graphic Design', 'JavaScript', 'HTML/CSS', 'Python', 'CAD']
  const softwares = ['Figma', 'Adobe Package', 'CATIA', 'Microsoft Office', 'Autodesk Alias']

  return (
    <main className={styles.main}>
      <NavBar />
      <section className={`${styles.aboutSection} acceleratedRendering`}>
        <span className={styles.line}></span>
        <div className={`${styles.aboutContainer} wrapper`}>
          <div className={styles.introduction}>
            <p><span>Hello!</span><br />
              I am Alicia, a newly graduated engineer in design from Chalmers University of Technology. I conducted my bachelors in Industrial Design Engineering, which share the user-centered aspect of Interaction design, which I love. As of now I focus my expertise more on digital products and user experience. Combinding design thinking and creativity with the structure of engineering, gives me comfort in that I can produce qualitative designs that I am proud of. In the end, my passion is about creating holistic solutions for end users, whether it be a digital product, a physical product or both!
              Take a look at my portfolio to find some of the projects from my bachelors and masters education!
              Don&apos;t hesitate to contact me!</p>
            <div className={styles.cheesy}>
              <h2 className={styles.title}>Designer<br></br>by heart,</h2>
              <h2 className={styles.title}>Engineer<br></br>by practice,</h2>
              <h2 className={styles.title}>And DJ<br></br>on the side.</h2>
            </div>
          </div>

          <div className={styles.studentSection}>
            <div className={styles.titleHeader}>
              <h3>Education</h3>
              <div className={styles.bubble}><h4></h4></div>
            </div>
            <div className={styles.student}>
              <div className={styles.information}>
                <div>
                  <h2>Chalmers University of Technology - Gothenburg</h2>
                </div>
                <div>
                  <h3>MSc - Interaction Design</h3>
                  <h3>2022-2024</h3>
                </div>
                <div>
                  <h3>BSc - Industrial Design <br /> Engineering</h3>
                  <h3>2019-2022</h3>
                </div>
                <div>
                  <h2>Rymdgymnasiet - Kiruna</h2>
                </div>
                <div>
                  <h3>NA - Space Science</h3>
                  <h3>2015-2018</h3>
                </div>
              </div>
              <div className={styles.skillChips}>
                <div className={styles.chipsContainer}>
                  <h2>Skills</h2>
                  <div className={styles.chips}>
                    {skills.map((skill, index) => (
                      <Chip key={index} tag={skill} />
                    ))}
                  </div>
                </div>
                <div className={styles.chipsContainer}>
                  <h2>Software</h2>
                  <div className={styles.chips}>
                    {softwares.map((software, index) => (
                      <Chip key={index} tag={software} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.DJSection}>
            <div className={styles.titleHeader}>
              <h3>DJ</h3>
              <div className={styles.bubble}><h4></h4></div>
            </div>
            <div className={styles.dj}>
              <div className={styles.djText}>
                <p>
                  Besides studying at Chalmers, I was also elected as a member of the Student Union DJ committee, Svea Skivgarde. It is a non-profit occupation where I DJ at events and also am in charge of social media and public relations. Many hours have been spent within Svea Skivgarde, where a shared passion for music and great teamwork is key to success.
                  <br /><br />Favorite Vibes: Disco Funk, Indie Pop, DnB
                </p>
                <h3>IF IT&apos;S NICE,<br />PLAY IT TWICE</h3>
              </div>

              <img className={styles.djPic} src="/DJ.jpg" alt="DJ Picture of Alicia" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
