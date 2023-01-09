import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import { Link} from 'react-router-dom';
import './Main.css';

const DoubleHydro = () => {

    const {DHHZ} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <Link to='./DHHZ' id="teamsWrapper" onClick={() =>  handleClick(DHHZ)}>
            <Link to='./DHHZ' onClick={() => handleClick(DHHZ)}>Double Hydro Hu Tao-Zhongli</Link>
            {DHHZ.map((d,i) => (
              <div className="characterCard" key={i}>
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
              </div>
            ))}
          </Link>
  )
}

export default DoubleHydro