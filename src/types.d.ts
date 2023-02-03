import { DocumentData } from "firebase/firestore"
import { ReactNode } from "react"

export interface DataInterface {
    data: DocumentData
}

export type TestInterface = {
    data: DocumentData
}

export interface CharactersInterface {
    Characters: DocumentData
}

export interface ChildrenInterface {
    children: ReactNode
}

export interface CharactersContextInterface {
    Teams: DataInterface[]
    Characters: DataInterface[]
    AuxCharacters: DataInterface[]
    data: DocumentData
    setCharacters: (value: DataInterface[]) => void
    setAuxCharacters: (value: DataInterface[]) => void
    setSelectedTeam: (value: DataInterface[]) => void
    setSavedTeam: (value: DataInterface[]) => void
    setAllTeams: (value: DataInterface[]) => void
    formTeams: (value: DataInterface[]) => void
    handleClick: (A:DataInterface[]) => void
    getData: () => DataInterface[]
    getTeams: () => DataInterface[]
    AllTeams: Characters[]
    uri: string
    name: string
    members: any
    membersInfo: DataInterface[]
}

export type ArrayString = {
    name: string
}