import React from 'react'
import styles from '../styles/projectoverview.module.scss';
import Chip from '../components/chip';
import { motion, useAnimation, useInView } from "framer-motion";
import Link from 'next/link';

const chipVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -25
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
};

function ProjectOverview({ title, tags, text, imageSrc, imageAlt, projectNumber, href }) {
  const controls = useAnimation();
  const ref = React.useRef(null)
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <section className={styles.projectOverviewSection}>
      <div className="wrapper">
        <span className='line'></span>
        <div className={styles.container}>

          <div className={styles.leftContainer}>
            <div className={styles.title}>
              <h3>{title}</h3>
              <div className={styles.bubble}><h4>{projectNumber}</h4></div>
            </div>
            <motion.div className={styles.chips} ref={ref} variants={chipVariants} initial="hidden" animate={controls}>
              {tags.map((tag, index) => (
                <Chip key={index} tag={tag} itemVariants={itemVariants} />
              ))}
            </motion.div>
            <p className={styles.overviewText}>{text}</p>

            <Link className={styles.link} href={href}>View Project</Link>
          </div>

          <div className={styles.rightContainer}>
            <img className={styles.projectCover} src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectOverview