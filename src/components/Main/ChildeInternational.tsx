import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { Link} from 'react-router-dom';
import { CharactersContextInterface } from '../../types'
import './Main.css';

const ChildeInternational = () => {

    const {ChildeInternational} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <Link to='./ChildeInternational' id="teamsWrapper" onClick={() => handleClick(ChildeInternational)}>
        <Link to='./ChildeInternational' onClick={() => handleClick(ChildeInternational)}>ChildeInternational</Link>
        {ChildeInternational.map((d,i) => (
          <div className="characterCard" key={i}>
            <img src={d.data.icon} alt={d.data.name} />
            <img src={d.data.element_i} alt={d.data.name} />
            <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
          </div>
        ))}
      </Link>
  )
}

export default ChildeInternational