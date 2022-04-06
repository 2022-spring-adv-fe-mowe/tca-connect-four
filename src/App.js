import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Stats } from './Stats';
import { Play } from './Play';
import { useState } from 'react';

const game1 = {
  win: true
}

const game2 = {
  win: false
}

const gameResults = [
  game1
  , game2
];

const App = () => {

  const [results, setResults] = useState(gameResults);
  const [currentGame, setCurrentGame] = useState({
    players: []
    , start: ""
  });

  const addGameResult = (gameResult) => {
    setResults(
      [
        ...results
        , gameResult
      ]
    );
  
    console.log(gameResults);
  };


  return (
    <div className="App">
      <Routes>
 
        <Route path="play" element={
          <Play 
            setCurrentGame={setCurrentGame}
          />
        } />
        <Route path="play" element={
          <Stats 
            addGameResult={addGameResult}
            currentGame={currentGame}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;

