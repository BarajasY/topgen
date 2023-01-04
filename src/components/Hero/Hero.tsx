import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroContainer">
        <div className="heroTitle">
            <h1>
                <section>
                    <motion.span initial={{y: -10, opacity: 0}} animate={{y:0,opacity: 1}} transition={{duration:.2,delay: .1}}>Genshin</motion.span> 
                    <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:.2,delay: .2}}>Impact</motion.span>
                </section>
                <section>
                    <motion.span initial={{x: -10,opacity: 0}} animate={{x:0,opacity: 1}} transition={{duration:.2, delay: .3}}>remarkable</motion.span> 
                    <motion.span initial={{x: 10,opacity: 0}} animate={{x:0,opacity: 1}} transition={{duration:.2, delay: .4}}> teams</motion.span>
                </section>
                </h1>
        </div>
        <div className="heroButton">
            <Link to="/teams">Browse</Link>
        </div>
    </div>
  )
}

export default Hero