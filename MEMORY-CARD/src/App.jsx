import { GameHeader } from "./Components/GameHeader";
import { Card } from "./Components/Card";
import { useState,useEffect } from "react";
import { WinMessage } from "./Components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";
const cardValues = [
   "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];
function App() {
  const{cards,score,moves,
    handleCardClick,intializeGame,
    isGameComplete} = useGameLogic(cardValues)

  return (
  <div className="app">
    <GameHeader score={score} moves={moves} onReset={intializeGame}/>

    {isGameComplete && <WinMessage moves={moves} />}
    
    <div className="cards-grid">
      {cards.map((card) => (
       <Card 
       key={card.id}
       card={card} 
       onClick={handleCardClick}/> 
      ))}
    </div>
  </div>
);
}

export default App;
