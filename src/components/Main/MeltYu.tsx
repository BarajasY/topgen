import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import { Link} from 'react-router-dom';
import './Main.css';

const MeltYu = () => {

  const {MeltYu} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <Link to='./MeltYu' id="teamsWrapper" onClick={() =>  handleClick(MeltYu)}>
            <Link to='./MeltYu' onClick={() => handleClick(MeltYu)}>MeltYu</Link>
            {MeltYu.map((d,i) => (
              <div className="characterCard" key={i}>
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
              </div>
            ))}
          </Link>
  )
}

export default MeltYu