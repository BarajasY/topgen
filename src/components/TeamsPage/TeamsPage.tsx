import React, { useState } from 'react';
import { DataInterface } from '../../types';
import './TeamsPage.css';

const TeamsPage = () => {
  const [Index, setIndex] = useState<number>(0)
    const Data = sessionStorage.getItem('SelectedTeam')
    const ParsedData = JSON.parse(Data!)

  return (
    <div className="teamsPageContainer">
      {ParsedData.map((d:DataInterface, i:number) => (
        <div className="memberContent" key={i}>
          <div className="member1st">
            <img src={d.data.portrait} alt="Portrait" />
            <h1>{d.data.element_n}</h1>
          </div>
          <div className="member2nd">
            <div className="memberinfo">
            <h1>{d.data.name}</h1>
            <h1>{d.data.jp}</h1>
              {{
                0: <p>{d.data.description}</p>,
                1: 
                <section>
                  <img src={d.data.active1_i} alt="Active" />
                  <img src={d.data.active2_i} alt="Active" />
                  <img src={d.data.passive1_i} alt="Active" />
                  <img src={d.data.passive2_i} alt="Active" />
                  <img src={d.data.utility_i} alt="Active" />
                </section>
              }[Index]}
            </div>
            <div className="memberindexes">
              <h1 onClick={() => setIndex(0)}>Description</h1>
              <h1 onClick={() => setIndex(1)}>Talents</h1>
            </div>
          </div>
          <div className="memberBackground"></div>
        </div>
      ))}
    </div>
  )
}

export default TeamsPage