'use client';

import styles from './styles/page.module.scss'
import Hero from './sections/hero'
import ProjectOverview from './sections/projectOverview';
import Footer from './sections/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProjectOverview
        title={'iLight'}
        tags={['Graphical Interface', 'iOS', 'UX/UI', 'Material Guidelines']}
        text={'An iPad app for light rig controll at smaller venues. Adapted for intermediate users and following iOS guidelines.'}
        imageSrc={'/ilightoverview.jpg'}
        imageAlt={'Overview of iLight Project'}
        projectNumber={'1'}
        href={'/ilight'}
      />

      <ProjectOverview
        title={'Breathing box'}
        tags={['Tangible Interaction', 'Arduino', 'Prototyping']}
        text={'The Breathing Box is a calming device for the workplace. This tangible interface guides the user through breathing och meditation programs using visual, auduitory and haptic feedback.'}
        imageSrc={'/breathingboxoverview.jpg'}
        imageAlt={'Overview of Breating Box'}
        projectNumber={'2'}
        href={'/'}
      />
      <ProjectOverview
        title={'Cykelkollen'}
        tags={['Redesign', 'Usability', 'UX/UI', 'User Testing']}
        text={'App re-design of iOS existing mestruation cycle app. Evaluated in qualitative and quantative studies with the aim of increased usability.'}
        imageSrc={'/cykelkollenoverview.jpg'}
        imageAlt={'Overview of Cykelkollen'}
        projectNumber={'3'}
        href={'/'}
      />
      <ProjectOverview
        title={'Bemo'}
        tags={['Product Design', 'Form Theory', 'Market Analysis']}
        text={'BEMO is a new take on a home cinema projector integrated with smart home assistant to fulfill the needs of the future user group; generation Z in year 2030. This was a individual project where I explored form giving in a systematic manner.'}
        imageSrc={'/beamooverview.jpg'}
        imageAlt={'Overview of Bemo'}
        projectNumber={'4'}
        href={'/'}
      />
      <ProjectOverview
        title={'rent'}
        tags={['Service Design', 'Sustainability', 'UX', 'Bachelor Thesis']}
        text={'Sustainable rental service for house hold washing machines. Taking responsibility for maintenence and and refurbish of the machines, rent offers a holistic subscription solution aiming for a sustainalbe circular way of product ownership.'}
        imageSrc={'/ilightoverview.jpg'}
        imageAlt={'Overview of rent'}
        projectNumber={'5'}
        href={'/'}
      />
      <Footer/>
    </main>
  )
}
