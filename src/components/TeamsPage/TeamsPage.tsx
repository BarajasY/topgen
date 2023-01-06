import React from 'react';
import { DataInterface } from '../../types';
import './TeamsPage.css';

const TeamsPage = () => {
    const Data = sessionStorage.getItem('SelectedTeam')
    const ParsedData = JSON.parse(Data!)

  return (
    <div className="teamsPageContainer">
      {ParsedData.map((d:DataInterface, i:number) => (
        <div className="memberContent" key={i}>
          <img src={d.data.portrait} alt="Portrait" />
          <div className="memberBackground" style={{background: `${d.data.gradient}`}}></div>
        </div>
      ))}
    </div>
  )
}

export default TeamsPage