'use client';
import React, { useEffect } from 'react';
import styles from './styles/loading.module.scss';
import {PropagateLoader} from 'react-spinners';

function LoadingScreen({imageCount, finishedCount}) {
  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    // Applying on unmount    
    return () => {
      document.body.style.overflow = "visible";

      document.getElementsByTagName('html')[0].style.overflow = "visible";
    }
  }, [])
  
  return (
    <div className={styles.loadingPage}>
        <PropagateLoader color="#1E1E1E" />
        <p>The Content is Being Loaded - Please Wait For a Better Experience</p>
    </div>
  )
}

export default LoadingScreen;