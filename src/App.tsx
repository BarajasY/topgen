import React from 'react';
import './App.css';
import {Hero, Main, TeamsPage, Navbar} from './components/Index';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {ContextProvider} from './CharactersContext';

function App() {

  return (
    <div className="App">
        <ContextProvider>
          <BrowserRouter>
          <Navbar/>
              <Routes> 
                <Route path="/" element={<><Hero/></>}/>
                <Route path="/teams" element={<><Main/></>}/>
                <Route path="/teams/:team" element={<><TeamsPage/></>}/>
              </Routes>
          </BrowserRouter>
        </ContextProvider>
    </div>
  );
}

export default App;
