import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { Link} from 'react-router-dom';
import { CharactersContextInterface } from '../../types'
import './Main.css';
const XiaoDG = () => {
    const {XiaoDoubleGeo} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface
  return (
    <Link to='./ShinraTensei' id="teamsWrapper" onClick={() => handleClick(XiaoDoubleGeo)}>
        <Link to='./ShinraTensei' onClick={() => handleClick(XiaoDoubleGeo)}>Xiao Double Geo</Link>
        {XiaoDoubleGeo.map((d,i) => (
          <div className="characterCard" key={i}>
            <img src={d.data.icon} alt={d.data.name} />
            <img src={d.data.element_i} alt={d.data.name} />
            <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
          </div>
        ))}
      </Link>
  )
}

export default XiaoDG