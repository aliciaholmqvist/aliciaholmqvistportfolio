'use client';

import styles from '../styles/page.module.scss'
import ContactSection from '../components/contactsection';
import Footer from '../sections/footer';

export default function Contact() {
  return (
    <main className={styles.main}>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
