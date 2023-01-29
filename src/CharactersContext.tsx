import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "./firebase";
import { DataInterface, ChildrenInterface } from "./types";

export const Context = createContext({})

export const ContextProvider = ({children}:ChildrenInterface) => {
    const [Characters, setCharacters] = useState<DataInterface[]>([])
    const [SelectedTeam, setSelectedTeam] = useState<DataInterface[]>([])

    const getData =() => {
        const charactersColl = collection(db, 'characters');
        getDocs(charactersColl).then(res => {
          const charactersData = res.docs.map(doc => ({data: doc.data(), id:doc.id}))
          setCharacters(charactersData)
        })
        .catch(err => console.log(err));
      }

    const handleClick = (A:DataInterface[]) => {
      sessionStorage.setItem('SelectedTeam', JSON.stringify(A))
    }

      const Morgana = {team: "Morgana", uri: "Morgana",
          members: [Characters.filter(d => d.data.name === "Ganyu" || d.data.name === "Mona" || d.data.name === "Diona" || d.data.name === "Venti")]}
      const International = {team: "International", uri:"International", 
          members: [Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Xingqiu" || d.data.name === "Chongyun" || d.data.name === "Xiangling")]}
      const BaalNational = {team: "BaalNational", uri:"BaalNational",
          members: [Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Xingqiu" || d.data.name === "Raiden Shogun" || d.data.name === "Xiangling")]}
      const MeltYu = {team:"MeltYu", uri:"MeltYu" ,
          members: [Characters.filter(d => d.data.name === "Bennett" || d.data.name === "Ganyu" || d.data.name === "Zhongli" || d.data.name === "Xiangling")]}
      const NilouBloom = {team: "NilouBloom", uri: "NilouBloom", 
          members: [Characters.filter(d => d.data.name === "Nilou" || d.data.name === "Nahida" || d.data.name === "Sangonomiya Kokomi" || d.data.name === "Yelan")]}
      const DHHZ = {team: "Double Hydro Hu Tao-Zhongli", uri:"DHHZ" ,
          members: [Characters.filter(d => d.data.name === "Hu Tao" || d.data.name === "Yelan" || d.data.name === "Xingqiu" || d.data.name === "Zhongli")]}
      const FreezeKazuha = {team: "FreezeKazuha", uri:"FreezeKazuha", 
          members: [Characters.filter(d => d.data.name === "Ayaka" || d.data.name === "Ganyu" || d.data.name === "Kaedehara Kazuha" || d.data.name === "Sangonomiya Kokomi")]}
      const ChildeInternational = {team:"ChildeInternational", uri:"ChildeInternational", 
          members: [Characters.filter(d => d.data.name === "Tartaglia" || d.data.name === "Bennett" || d.data.name === "Kaedehara Kazuha" || d.data.name === "Xiangling")]}
      const ShinraTensei = {team: "ShinraTensei", uri: "ShinraTensei", 
          members: [Characters.filter(d => d.data.name === "Ayaka" || d.data.name === "Sangonomiya Kokomi" || d.data.name === "Rosaria" || d.data.name === "Kaedehara Kazuha")]}
      const Sukokomon = {team:"Sukokomon", uri:"Sukokomon", 
          members: [Characters.filter(d => d.data.name === "Sucrose" || d.data.name === "Sangonomiya Kokomi" || d.data.name === "Fischl" || d.data.name === "Xiangling")]}
      const XiaoDoubleGeo = {team:"Xiao Double Geo", uri:"XiaoDG", 
          members: [Characters.filter(d => d.data.name === "Xiao" || d.data.name === "Jean" || d.data.name === "Albedo" || d.data.name === "Zhongli")]}
      const RaidenSunfire = {team:"RaidenSunfire", uri:"RaidenSunfire", 
          members: [Characters.filter(d => d.data.name === "Raiden Shogun" || d.data.name === "Kujou Sara" || d.data.name === "Bennett" || d.data.name === "Jean")]}

      const AllTeams = [Morgana, International, BaalNational, MeltYu, NilouBloom, DHHZ, FreezeKazuha, ChildeInternational, ShinraTensei, Sukokomon, XiaoDoubleGeo, RaidenSunfire]

    return (
        <Context.Provider value={{Characters, setCharacters, getData, Morgana, International, BaalNational, MeltYu, NilouBloom, DHHZ, SelectedTeam, setSelectedTeam, handleClick, FreezeKazuha, ChildeInternational, ShinraTensei, Sukokomon, XiaoDoubleGeo, RaidenSunfire, AllTeams }}>
            {children}
        </Context.Provider>
    )
}

export default Context