import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../CharactersContext';
import { db } from '../../firebase';
import { CharactersContextInterface, DataInterface } from '../../types';
import './Main.css';

const Main = () => {

  const {Characters, setCharacters} = useContext(Context) as CharactersContextInterface
  const [Aux, setAux] = useState<DataInterface[]>([])
  setCharacters(Aux)

  const getData =() => {
    const charactersColl = collection(db, 'characters');
    getDocs(charactersColl).then(res => {
      const charactersData = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
      setAux(charactersData)
    })
    .catch(err => console.log(err));
  }

  
  useEffect(() => {
    getData()
  }, [])

  const morganaTeam = Characters.filter(d => d.data.name === "Ganyu" || d.data.name === "Mona" || d.data.name === "Diona" || d.data.name === "Venti")
  const internationalTeam = Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Xingqiu" || d.data.name === "Chongyun" || d.data.name === "Xiangling")
  const baalNationalTeam = Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Xingqiu" || d.data.name === "Raiden Shogun" || d.data.name === "Xiangling")
  const meltYuTeam = Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Ganyu" || d.data.name === "Zhongli" || d.data.name === "Xiangling")
  const nilouBloom = Characters.filter(d => d.data.name === "Nilou" || d.data.name === "Nahida" || d.data.name === "Sangonomiya Kokomi" || d.data.name === "Yelan")
  const DHHZ = Characters.filter(d => d.data.name === "Hu Tao" || d.data.name === "Yelan" || d.data.name === "Xingqiu" || d.data.name === "Zhongli")

  return (
    <div className="mainContainer">
        <div className="mainSubtitle">
          <h1>Teams</h1>
        </div>
        <div className="mainTeams">
          <section>
            <h1>Morgana</h1>
            {morganaTeam.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
          <section>
            <h1>International</h1>
            {internationalTeam.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
          <section>
            <h1>BaalNational</h1>
            {baalNationalTeam.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
          <section>
            <h1>MeltYu</h1>
            {meltYuTeam.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
          <section>
            <h1>Nilou Bloom</h1>
            {nilouBloom.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
          <section>
            <h1>Double Hydro Hu Tao-Zhongli</h1>
            {DHHZ.map(d => (
              <div className="characterCard">
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <motion.div className="backgroundGradient" initial={{background: `${d.data.gradient}`}} ></motion.div>
              </div>
            ))}
          </section>
        </div>
    </div>
  )
}

export default Main