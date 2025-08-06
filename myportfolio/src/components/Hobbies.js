import React, { useEffect, useState } from "react";

export default function Hobbies(props) {
  let maxhobby = 3;
  useEffect(() => {
    for (let i = 1; i <= maxhobby; i++) {
      let hobby = document.querySelector(`.hobby${i}`);
      if (hobby) {
        hobby.style.height = "180px";
        hobby.style.width = "200px";
        hobby.style.backgroundColor = "gray";
        hobby.style.color = " white";

        hobby.style.borderRadius = "20px";

        hobby.addEventListener("mouseenter", () => {
          hobby.style.transform = `translateY(-10px)`;
          hobby.style.transition = `transform 0.5s linear`;
          hobby.style.boxShadow = "0 20px 20px 2px rgba(0, 0, 0, 0.3)";
        });

        hobby.addEventListener("mouseleave", () => {
          hobby.style.transform = `translateY(0px)`;
          hobby.style.boxShadow = "none";
        });
      }
    }
  });
  return (
    <div id="hobbiesDiv">
      <div className="aboutmainheading">{props.mainHeading}</div>
      <div className="divhobbys">
        <div className="hobby1">
          <div className="icon">🎮</div>
          <div className="hobbyName">Playing Game</div>
        </div>
        <div className="hobby2">
          <div className="icon">🎧</div>
          <div className="hobbyName">Listening Nasheed</div>
        </div>
        <div className="hobby3">
          <div className="icon">📚</div>
          <div className="hobbyName">Novel Reading</div>
        </div>
      </div>
    </div>
  );
}

