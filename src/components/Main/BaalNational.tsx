import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { Link} from 'react-router-dom';
import { CharactersContextInterface } from '../../types'
import { motion } from 'framer-motion';
import './Main.css';

const BaalNational = () => {
    const {BaalNational} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
      <motion.div className="animatableDiv" initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .13}}>
        <Link to='./BaalNational' id="teamsWrapper" onClick={() => handleClick(BaalNational)}>
          <Link to='./BaalNational' onClick={() => handleClick(BaalNational)}>BaalNational</Link>
          {BaalNational.map((d,i) => (
            <div className="characterCard" key={i}>
              <img src={d.data.icon} alt={d.data.name} />
              <img src={d.data.element_i} alt={d.data.name} />
              <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
            </div>
          ))}
        </Link>
      </motion.div>
  )
}

export default BaalNational