/* import { motion } from 'framer-motion'; */
import React from 'react';
import { CharactersContextInterface, DataInterface } from '../../types';
import Context from '../../CharactersContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Main.css';

const Main = () => {

  const {AllTeams} = useContext(Context) as CharactersContextInterface
  const {handleClick} = useContext(Context) as CharactersContextInterface

  return (
    <div className="mainContainer">
        <div className="mainTeams">
          {AllTeams.map((team, i) => (
            <motion.div className="animatableDiv" key={i} initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .12}}>
            <Link to={team.data.uri} id="teamsWrapper" onClick={() =>  handleClick(team.data.membersInfo)}>
              <Link to={team.data.uri} onClick={() => handleClick(team.data.membersInfo)}>{team.data.name}</Link>
              {team.data.membersInfo.map((d:DataInterface,i:number) => (
                <div className="characterCard" key={i}>
                  <img src={d.data.icon} alt={d.data.name} />
                  <img src={d.data.element_i} alt={d.data.name} />
                  <div className="backgroundGradient" style={{background: `${d.data.gradient}`}} ></div>
                </div>
              ))}
             </Link>
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Main