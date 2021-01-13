import React from 'react'
import { pageVariants, pageStyle, pageTransition } from '../Utils/Animations'
import { motion } from 'framer-motion'

export class HomePage extends React.Component {
    render() {
        return (
            <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} style={pageStyle} transition={pageTransition}>
                <h1>Home page under construction...</h1>
            </motion.div>
        )
    }
}

export default HomePage
