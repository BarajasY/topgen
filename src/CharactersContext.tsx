import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "./firebase";
import { DataInterface, ChildrenInterface } from "./types";

export const Context = createContext({})

export const ContextProvider = ({children}:ChildrenInterface) => {
    const [Characters, setCharacters] = useState<DataInterface[]>([])
    const [AuxCharacters, setAuxCharacters] = useState<DataInterface[]>([])
    const [SelectedTeam, setSelectedTeam] = useState<DataInterface[]>([])
    const [Teams, setTeams] = useState<DataInterface[]>([])

    const getData =() => {
        const charactersColl = collection(db, 'characters');
        getDocs(charactersColl).then(res => {
          const charactersData = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
          setCharacters(charactersData)
          setAuxCharacters(charactersData)
        })
        .catch(err => console.log(err));
    }
    
    const getTeams =() => {
        const teamsColl = collection(db, 'teams');
        getDocs(teamsColl).then(res => {
          const teamsData = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
          setTeams(teamsData)
        })
        .catch(err => console.log(err));
    }

    const handleClick = (A:DataInterface[]) => {
      sessionStorage.setItem('SelectedTeam', JSON.stringify(A))
    }

      const AllTeams = Teams.map(value => {
        const teamCharacters = Characters.filter(character => character.data.name === value.data.members[0] || character.data.name === value.data.members[1] || character.data.name === value.data.members[2] || character.data.name === value.data.members[3])
        Object.assign(value.data, {membersInfo: teamCharacters})
        return value;
      })

    return (
        <Context.Provider value={{Characters, setCharacters, AuxCharacters, setAuxCharacters, getData, SelectedTeam, setSelectedTeam, handleClick, AllTeams, getTeams, Teams}}>
            {children}
        </Context.Provider>
    )
}

export default Context