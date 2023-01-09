import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
/* import { DataInterface } from '../../types'; */
import './TeamsPage.css';

const TeamsPage = () => {
  const [Index, setIndex] = useState<number>(0)
  const [Current, setCurrent] = useState<number>(0)
  const [Test, setTest] = useState<boolean>(false)
    const Data = sessionStorage.getItem('SelectedTeam')
    const ParsedData = JSON.parse(Data!)

    const handleIndex = (Current:number) => {
      if(Current === 3) {
        return 0
      }
      return Current + 1
    }

    const handleCurrent = () => {
      if (Current === 3) {
        setCurrent(0)
      } else {
        setCurrent(Current + 1)
      }
    }

  return (
    <motion.div className="teamsPageContainer" >
        <motion.div className="memberWrapper">
          {Test ? 
          :
          }
          <motion.div className="memberContent">
            <div className="member1st">
              <motion.img src={ParsedData[Current].data.portrait} alt="Portrait" initial={{opacity: 0, x: -40}} whileInView={{opacity: 1, x: 0}} transition={{duration: .5}}/>
              <motion.h1 
              style={{background: `${ParsedData[Current].data.gradient}`, WebkitBackgroundClip: 'text' , color: 'transparent'}} 
              initial={{opacity:0, y: 40}} whileInView={{opacity: 1, y:0}} transition={{duration: .5}}>{ParsedData[Current].data.element_n}</motion.h1>
            </div>
            <div className="member2nd">
              <div className="memberinfo">
                <motion.h1 id="CharacterName" 
                style={{background: `${ParsedData[Current].data.gradient}`, WebkitBackgroundClip: 'text', color: 'transparent'}}
                initial={{opacity: 0, y: -30}} whileInView={{opacity: 1, y: 0}} transition={{duration: .5}}>{ParsedData[Current].data.name} <br /> {ParsedData[Current].data.jp}</motion.h1>
                <AnimatePresence>
                {{
                  0: <motion.p id="CharacterDescription" 
                  initial={{opacity: 0, y: 0}} 
                  whileInView={{opacity: 1, y:-30}} 
                  exit={{y: 0, opacity: 0}} 
                  transition={{duration:.5}}>{ParsedData[Current].data.description}</motion.p>,
                  1: 
                  <section>
                    <motion.article initial={{x: -30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: -30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.active1_i} alt="Active" />
                      <h1>{ParsedData[Current].data.active1_n}</h1>
                    </motion.article>
                    <motion.article initial={{x: 30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: 30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.active2_i} alt="Active" />
                      <h1>{ParsedData[Current].data.active2_n}</h1>
                    </motion.article>
                    <motion.article initial={{x: -30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: -30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.passive1_i} alt="Active" />
                      <h1>{ParsedData[Current].data.passive1_n}</h1>
                    </motion.article>
                    <motion.article initial={{x: 30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: 30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.passive2_i} alt="Active" />
                      <h1>{ParsedData[Current].data.passive2_n}</h1>
                    </motion.article>
                    {ParsedData[Current].data.passive3_i != null 
                    ?
                    <motion.article initial={{x: -30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: -30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.passive3_i} alt="" />
                      <h1>{ParsedData[Current].data.passive3_n}</h1>
                    </motion.article>
                    :
                    <></>
                  }
                    <motion.article initial={{x: 30, opacity: 0}} whileInView={{x: 0, opacity: 1}} exit={{opacity: 0, x: 30}} transition={{duration: .5}}>
                      <img src={ParsedData[Current].data.utility_i} alt="Active" />
                      <h1>{ParsedData[Current].data.utility_n}</h1>
                    </motion.article>
                  </section>
                }[Index]}
                </AnimatePresence>
              </div>
              <div className="memberindexes">
                <section>
                  <h1 onClick={() => handleCurrent()}>{ParsedData[handleIndex(Current)].data.name}</h1>
                </section>
                <section>
                  <h1 onClick={() => setIndex(0)}>Description</h1>
                  <h1 onClick={() => setIndex(1)}>Talents</h1>
                </section>
              </div>
            </div>
            <div className="memberBackground"></div>
          </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default TeamsPage