import React, { useState, } from "react";
import "./hero.css";
import {
  IoIosArrowForward as RightArrow,
  IoIosArrowBack as LeftArrow,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import heroFruits from "../../assets/heroFruits";


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(2)
  const navigate = useNavigate()

   const handleClick = direction => {
    const lastIndex = heroFruits.length - 1
    switch (direction){
      case 'left': {if (currentIndex === 0) setCurrentIndex(lastIndex);
        else setCurrentIndex(currentIndex - 1)
      }
      case 'right': {
        if (currentIndex === lastIndex) setCurrentIndex(0);
        else setCurrentIndex(currentIndex + 1)
      }
    }
  }

  return (
    <div className="hero">
      <div style={{ backgroundImage: `url(${heroFruits[currentIndex].img})` }} className="hero__bg">
        <div className="hero__bg-overlay">
          <h2 id="hero__title">{heroFruits[currentIndex].name}</h2>
          <div id="hero__arrows">
            <LeftArrow id="hero__leftArrow" onClick={()=>handleClick('left')} />
            <RightArrow id="hero__rightArrow" onClick={()=>handleClick('right')} />
          </div>
          <button onClick={()=>navigate(heroFruits[currentIndex].path)}>shop now</button>
        </div>
      </div>
      <div className="hero__products"></div>
    </div>
  );
}

export default Hero;
