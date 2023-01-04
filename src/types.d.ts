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
}