import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import { Link} from 'react-router-dom';
import './Main.css';
import { motion } from 'framer-motion';

const International = () => {

  const {International} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <motion.div className="animatableDiv" initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .12}}>

    <Link to='./International' id="teamsWrapper" onClick={() =>  handleClick(International)}>
      <Link to='./International' onClick={() => handleClick(International)}>International</Link>
      {International.map((d,i) => (
        <div className="characterCard" key={i}>
          <img src={d.data.icon} alt={d.data.name} />
          <img src={d.data.element_i} alt={d.data.name} />
          <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
        </div>
      ))}
  </Link>
  </motion.div>

  )
}

export default International