import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { Link} from 'react-router-dom';
import { CharactersContextInterface } from '../../types'
import './Main.css';
import { motion } from 'framer-motion';
const XiaoDG = () => {
    const {XiaoDoubleGeo} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface
  return (
    <motion.div className="animatableDiv" initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .21}}>

    <Link to='./XiaoDG' id="teamsWrapper" onClick={() => handleClick(XiaoDoubleGeo)}>
        <Link to='./XiaoDG' onClick={() => handleClick(XiaoDoubleGeo)}>Xiao Double Geo</Link>
        {XiaoDoubleGeo.map((d,i) => (
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

export default XiaoDG