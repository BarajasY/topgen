import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { Link, useNavigate } from 'react-router-dom';
import { CharactersContextInterface } from '../../types'
import './Main.css';

const BaalNational = () => {
    const {BaalNational} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface
    const navigate = useNavigate();

  return (
      <section onClick={() => handleClick(BaalNational)}>
        <Link to='./BaalNational' onClick={() => handleClick(BaalNational)}>BaalNational</Link>
        {BaalNational.map((d,i) => (
          <div className="characterCard" key={i}>
            <img src={d.data.icon} alt={d.data.name} />
            <img src={d.data.element_i} alt={d.data.name} />
            <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
          </div>
        ))}
      </section>
  )
}

export default BaalNational