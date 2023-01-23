import { DocumentData } from "firebase/firestore"
import { ReactNode } from "react"

export interface DataInterface {
    data: DocumentData
}

export interface CharactersInterface {
    Characters: DocumentData
}

export interface ChildrenInterface {
    children: ReactNode
}

export interface CharactersContextInterface {
    Characters: DataInterface[]
    setCharacters: (value: DataInterface[]) => void
    setSelectedTeam: (value: DataInterface[]) => void
    setSavedTeam: (value: DataInterface[]) => void
    handleClick: (A:DataInterface[]) => void
    getData: () => DataInterface[]
    Morgana: DataInterface[]
    International: DataInterface[]
    BaalNational: DataInterface[]
    MeltYu: DataInterface[]
    NilouBloom: DataInterface[]
    DHHZ: DataInterface[]
    SelectedTeam: DataInterface[]
    SavedTeam: DataInterface[]
    FreezeKazuha: DataInterface[]
    ChildeInternational: DataInterface[]
    ShinraTensei: DataInterface[]
    Sukokomon: DataInterface[]
    XiaoDoubleGeo: DataInterface[]
    RaidenSunfire: DataInterface[]
    AllTeams: Characters[]
}

export type ArrayString = {
    name: string
}