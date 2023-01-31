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
    const {AuxCharacters} = useContext(Context) as CharactersContextInterface
    const {setAuxCharacters} = useContext(Context) as CharactersContextInterface
    const {handleClick} = useContext(Context) as CharactersContextInterface
    const {AllTeams} = useContext(Context) as CharactersContextInterface

    const SearchTeams = () => {
        // Cleaning the array of teams to avoid duplicates of the same item.
        setTeamsThatFit([])
        AllTeams.map(team => {
            // Each team has 4 members, here i am comparing each team member using the .some function to see if all 4 members appear
            // in the array selected by the user.
            if(SelectedOnes.some(b => b === team.members[0][0].data.name)){
                if(SelectedOnes.some(b => b === team.members[0][1].data.name)){
                    if(SelectedOnes.some(b => b === team.members[0][2].data.name)){
                        if(SelectedOnes.some(b => b === team.members[0][3].data.name)){
                            // In case all 4 members of a team appear in the user's array the team is automatically enlisted.
                            // to then appear in the screen.
                            setTeamsThatFit(old => [...old, team])
                        }
                    }
                }
            }
            // Could be a void function but i need to return something out of the map function.
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

    const filterCharacters = (element:string) => {
        if(element !== 'All') {
            // Filtering the array of characters utilizing the argument and the element_n hosted in the database.
            setAuxCharacters(Characters.filter(character => character.data.element_n === element))
        } else {
            // Adding all the characters to the array if argument === "All"
            setAuxCharacters(Characters)
        }
    }

  return (
    <div className="searchContainer">
        <div className="searchQuote">
            <h1>Select the Characters you own</h1>
        </div>
        <div className="searchTeams">
            <div className="iconsContainer">
                <div className="searchFilter">
                    <button className='filter' id='all' onClick={() => filterCharacters('All')}>All</button>
                    <button className='filter' id='electro' onClick={() => filterCharacters('Electro')}>Electro</button>
                    <button className='filter' id='pyro' onClick={() => filterCharacters('Pyro')}>Pyro</button>
                    <button className='filter' id='cryo' onClick={() => filterCharacters('Cryo')}>Cryo</button>
                    <button className='filter' id='dendro' onClick={() => filterCharacters('Dendro')}>Dendro</button>
                    <button className='filter' id='hydro' onClick={() => filterCharacters('Hydro')}>Hydro</button>
                    <button className='filter' id='geo' onClick={() => filterCharacters('Geo')}>Geo</button>
                    <button className='filter' id='anemo' onClick={() => filterCharacters('Anemo')}>Anemo</button>
                </div>
                <div className="searchIcons">
                    {AuxCharacters.map((d, i) => (
                        <motion.section key={i} initial={{y: -5, opacity: 0}} whileInView={{opacity: 1, y: 0}} transition={{duration: .2, delay: i*.01}}>
                            <img src={d.data.icon} alt={d.data.name} onClick={() => fillArray(d.data.name)}/>
                            <div id="searchBlur" className={SelectedOnes.some(a => a === d.data.name) ? "visible" : "hidden"} style={{background:`${d.data.gradient}`}}></div>
                        </motion.section>
                        ))}
                </div>
            </div>
            <div className="searchResult">
                {TeamsThatFit.map((a, i) => (
                    <motion.div className="animatableDiv" key={i} initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y:0}} transition={{delay: .18}}>
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
    </div>
  )
}

export default Search