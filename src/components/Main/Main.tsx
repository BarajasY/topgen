/* import { motion } from 'framer-motion'; */
import React from 'react';
import International from './International';
import Morgana from './Morgana';
import BaalNational from './BaalNational';
import MeltYu from './MeltYu';
import NilouBloom from './NilouBloom';
import DoubleHydro from './DoubleHydro';
import './Main.css';

const Main = () => {

  return (
    <div className="mainContainer">
        <div className="mainTeams">
          <Morgana/>
          <International/>
          <BaalNational/>
          <MeltYu/>
          <NilouBloom/>
          <DoubleHydro/>
        </div>
    </div>
  )
}

export default Main