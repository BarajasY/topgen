import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    const [Greeting, setGreeting] = useState<boolean>(true)
    
    useEffect(() => {
        setTimeout(() => {
            setGreeting(false)
        }, 1000);
        setTimeout(() => {
            navigate('./teams')
        }, 3000);
    }, [navigate])
    
    


  return (
    <div className="heroContainer">
        <div className="heroTitle">
                {Greeting 
                ?
                <AnimatePresence>
                    <motion.h1 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: .5}}
                    exit={{opacity: 0}}>Hello</motion.h1>
                </AnimatePresence>
                :
                <>
                    <motion.h1 
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: .5}}>Loading your teams</motion.h1>
                    <section>
                        <motion.div initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: .5, delay: .5}}></motion.div>
                        <motion.div initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: .5, delay: 1}}></motion.div>
                        <motion.div initial={{opacity: 0, y: 30}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: .5, delay: 1.5}}></motion.div>
                    </section>
                </>
                }
        </div>
    </div>
  )
}

export default Hero