import React, { useContext, useEffect } from 'react';
import Context from '../../CharactersContext';
import { CharactersContextInterface } from '../../types';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const {getData} = useContext(Context) as CharactersContextInterface

  useEffect(() => {
    
    
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="navbarContainer">
        <Link to='/teams'></Link>
    </div>
  )
}

export default Navbar