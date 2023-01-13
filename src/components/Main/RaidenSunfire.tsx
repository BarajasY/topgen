import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import './Main.css';
const RaidenSunfire = () => {
    const {RaidenSunfire} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface
  return (
    <Link to='./ShinraTensei' id="teamsWrapper" onClick={() => handleClick(RaidenSunfire)}>
        <Link to='./ShinraTensei' onClick={() => handleClick(RaidenSunfire)}>RaidenSunfire</Link>
        {RaidenSunfire.map((d,i) => (
          <div className="characterCard" key={i}>
            <img src={d.data.icon} alt={d.data.name} />
            <img src={d.data.element_i} alt={d.data.name} />
            <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
          </div>
        ))}
      </Link>
  )
}

export default RaidenSunfire