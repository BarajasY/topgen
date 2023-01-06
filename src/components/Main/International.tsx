import React, { useContext } from 'react'
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import { Link, useNavigate } from 'react-router-dom';
import './Main.css';

const International = () => {

  const {International} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface
  const navigate = useNavigate()

  return (
    <section onClick={() => navigate('./International')}>
      <Link to='./International' onClick={() => handleClick(International)}>International</Link>
      {International.map((d,i) => (
        <div className="characterCard" key={i}>
          <img src={d.data.icon} alt={d.data.name} />
          <img src={d.data.element_i} alt={d.data.name} />
          <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
        </div>
      ))}
  </section>
  )
}

export default International