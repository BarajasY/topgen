import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Context from '../../CharactersContext'
import { CharactersContextInterface } from '../../types'
import './Main.css';

const Morgana = () => {

  const {Morgana} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface
  const navigate = useNavigate()

  return (
    <section onClick={() => navigate('./Morgana')}>
            <Link to='./Morgana' onClick={() => handleClick(Morgana)}>Morgana</Link>
            {Morgana.map((d,i) => (
              <div className="characterCard" key={i}>
                <img src={d.data.icon} alt={d.data.name} />
                <img src={d.data.element_i} alt={d.data.name} />
                <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
              </div>
            ))}
    </section>
  )
}

export default Morgana