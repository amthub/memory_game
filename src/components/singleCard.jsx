import React from "react";
import './singlecard.css'
export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if(!disabled){
        handleChoice(card)
          
        }
        
    }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front-card" className="front" />
        <img 
           src="/img/cover.png" 
           alt="" 
           className="back" 
           onClick={handleClick}
           />
      </div>
    </div>
  );
}
