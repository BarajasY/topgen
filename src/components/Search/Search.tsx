import React, { useContext, useState } from 'react';
import Context from '../../CharactersContext';
import { CharactersContextInterface, DataInterface } from '../../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
    const [SelectedOnes, setSelectedOnes] = useState<string[]>([''])
    const [TeamsThatFit, setTeamsThatFit] = useState<CharactersContextInterface[]>([])

    const {Characters} = useContext(Context) as CharactersContextInterface;
    const {handleClick} = useContext(Context) as CharactersContextInterface
    const {AllTeams} = useContext(Context) as CharactersContextInterface

    const SearchTeams = () => {
        setTeamsThatFit([])
        AllTeams.map(a => {
            if(SelectedOnes.some(b => b === a.members[0][0].data.name)){
                if(SelectedOnes.some(b => b === a.members[0][1].data.name)){
                    if(SelectedOnes.some(b => b === a.members[0][2].data.name)){
                        if(SelectedOnes.some(b => b === a.members[0][3].data.name)){
                            setTeamsThatFit(old => [...old, a])
                        }
                    }
                }
            }
            return TeamsThatFit
        })
    }

    const fillArray = (name:string) => {
        if(SelectedOnes.some(a => a === name)){
            // Add the character to an array if it's not already present.
            setSelectedOnes(SelectedOnes.filter(a => a !== name))
        } else {
            // Remove the character from the array if it's already present.
            setSelectedOnes(old => [...old, name])
        }
        SearchTeams()
    }

  return (
    <div className="searchContainer">
        <div className="searchQuote">
            <h1>Select the Characters you own</h1>
        </div>
        <div className="searchTeams">
            <div className="searchIcons">
                {Characters.map((d, i) => (
                    <section key={i}>
                        <img src={d.data.icon} alt={d.data.name} onClick={() => fillArray(d.data.name)}/>
                        <div id="searchBlur" className={SelectedOnes.some(a => a === d.data.name) ? "visible" : "hidden"} style={{background:`${d.data.gradient}`}}></div>
                    </section>
                    ))}
            </div>
            <div className="searchResult">
                {TeamsThatFit.map(a => (
                    <motion.div className="animatableDiv" initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .18}}>
                        <Link to={a.uri} id="teamsWrapper" onClick={() => handleClick(a.members[0])}>
                        <Link to={a.uri} onClick={() => handleClick(a.members[0])}>{a.team}</Link>
                        {a.members[0].map((d:DataInterface,i:number) => (
                            <div className="characterCard" key={i}>
                            <img src={d.data.icon} alt={d.data.name} />
                            <img src={d.data.element_i} alt={d.data.name} />
                            <div className="backgroundGradient" style={{background: `${d.data.gradient}`}}></div>
                            </div>
                        ))}
                        </Link>
                    </motion.div>
                    ))}
            </div>
        </div>
        <div className="searchButton">
            <button onClick={() => SearchTeams()}>Search Teams</button>
        </div>
    </div>
  )
}

export default Search