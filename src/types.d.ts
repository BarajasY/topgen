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
    Characters: DataInterface[]
    setCharacters: (value: DataInterface[]) => void
    setSelectedTeam: (value: DataInterface[]) => void
    setSavedTeam: (value: DataInterface[]) => void
    handleClick: (A:DataInterface[]) => void
    getData: () => DataInterface[]
    AllTeams: Characters[]
    uri: string
    team: string
    members: any
}

export type ArrayString = {
    name: string
}