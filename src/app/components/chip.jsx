import React from 'react'
import styles from '../styles/chip.module.scss'
import { motion } from "framer-motion"

function Chip({ tag, itemVariants }) {
    return (
        <motion.div className={styles.chip} variants={itemVariants}>
            <h4>{ tag }</h4>
        </motion.div>
    )
}

export default Chip