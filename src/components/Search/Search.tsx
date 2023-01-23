import React, { useContext, useState } from 'react';
import Context from '../../CharactersContext';
import { CharactersContextInterface, DataInterface } from '../../types';
import './Search.css';

const Search = () => {
    const [SelectedOnes, setSelectedOnes] = useState<string[]>([''])

    const {Characters} = useContext(Context) as CharactersContextInterface;
    const {AllTeams} = useContext(Context) as CharactersContextInterface

    const fillArray = (name:string) => {
        if(SelectedOnes.some(a => a === name)){
            // Add the character to an array if it's not already present.
            setSelectedOnes(SelectedOnes.filter(a => a !== name))
        } else {
            // Remove the character from the array if it's already present.
            setSelectedOnes(old => [...old, name])
        }
    }

    const SearchTeams = () => {
        AllTeams.map(a => {
            a.map((b:DataInterface) => {
                console.log(b.data.name)
            })
        })
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
                {SelectedOnes.map(a => (
                    <h1>{a}</h1>
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