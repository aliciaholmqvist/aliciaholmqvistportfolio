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
        title={'Drone UI'}
        tags={['Masters Thesis', 'Cognitive Load', 'UX/UI', 'Prototyping', 'Testing']}
        text={'A UI prototype for operating multiple drones simultaneously, in partnership with the SSRS. Research, evaluations, creating design guidelines and UX-factors resulted in a UI for safe and efficient operations.'}
        imageSrc={'/DroneUI_hero.png'}
        imageAlt={'Overview of Drone UI Project'}
        projectNumber={'1'}
        href={'/droneui'}
      />
      
      <ProjectOverview
        title={'iLight'}
        tags={['Graphical Interface', 'iOS', 'UX/UI', 'Material Guidelines']}
        text={'An iPad app for light rig controll at smaller venues. Adapted for intermediate users and following iOS guidelines.'}
        imageSrc={'/ilightoverview.jpg'}
        imageAlt={'Overview of iLight Project'}
        projectNumber={'2'}
        href={'/ilight'}
      />

      <ProjectOverview
        title={'Bemo'}
        tags={['Product Design', 'Form Theory', 'Market Analysis']}
        text={'BEMO is a new take on a home cinema projector integrated with smart home assistant to fulfill the needs of the future user group; generation Z in year 2030. This was a individual project where I explored form giving in a systematic manner.'}
        imageSrc={'/beamooverview.jpg'}
        imageAlt={'Overview of Bemo'}
        projectNumber={'3'}
        href={'/bemo'}
      />

      <ProjectOverview
        title={'Breathing box'}
        tags={['Tangible Interaction', 'Arduino', 'Prototyping']}
        text={'The Breathing Box is a calming device for the workplace. This tangible interface guides the user through breathing och meditation programs using visual, auduitory and haptic feedback.'}
        imageSrc={'/breathingboxoverview.jpg'}
        imageAlt={'Overview of Breating Box'}
        projectNumber={'4'}
        href={'/breathingbox'}
      />
      <ProjectOverview
        title={'Cykelkollen'}
        tags={['Redesign', 'Usability', 'UX/UI', 'User Testing']}
        text={'App re-design of iOS existing mestruation cycle app. Evaluated in qualitative and quantative studies with the aim of increased usability.'}
        imageSrc={'/Cykkoll-hero-construction.jpg'}
        imageAlt={'Overview of Cykelkollen'}
        projectNumber={'5'}
        href={'/'}
      />
      <ProjectOverview
        title={'rent'}
        tags={['Service Design', 'Sustainability', 'UX', 'Bachelor Thesis']}
        text={'Sustainable rental service for house hold washing machines. Taking responsibility for maintenence and and refurbish of the machines, rent offers a holistic subscription solution aiming for a sustainalbe circular way of product ownership.'}
        imageSrc={'/rent-hero-construction.jpg'}
        imageAlt={'Overview of rent'}
        projectNumber={'6'}
        href={'/'}
      />
      <Footer />
    </main>
  )
}
