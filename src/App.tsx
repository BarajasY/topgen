import React from 'react';
import './App.css';
import {Hero, Main} from './components/Index';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {ContextProvider} from './CharactersContext';

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<><Hero/></>}/>
            <Route path="/teams" element={<><Main/></>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
