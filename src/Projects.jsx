import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Cards() {
/*
.cards__wrapper {
  position: relative;
  margin: 50px 0 45px;
*/
  return (
    <div class="p-4 bg-white shadow-xl ">
      <h1>Projects</h1>
      <div></div>
      <div class="flex flex-col items-center max-w-1120px w-9/10 m-auto m-0">
        <div class="mt-3.125 mb-2.813 inline-block relative " className="cards__wrapper">
          <ul className="cards__items">
            <ProjectCard
              src="images/aboutImg.png"
              text="Uses a Generative Adversarial Network to generate images of anime backgrounds. (This is an image generated by the AI btw)"
              title="Ganime"
              link="https://github.com/cjyu81/Project-GANime"
            />
            <ProjectCard
              src="images/anya.PNG"
              text="Enables collaboration through realtime drawing. (pls dont judge my drawing, I was using a mouse T-T) "
              title="Brainstormy"
              link="https://github.com/anthien30/brainstormy"
            />
          </ul>
          <div></div>
          <ul className="cards__items">    
            <ProjectCard
              src="images/wordship.jpg"
              text="Connects a Wordle clone to a manic shooter game. (We won a speaker but it never came T-T)"
              title="Wordship"
              link="https://devpost.com/software/wordship"
            />
             <ProjectCard
              src="images/youtify.jpg"
              text="Converts Spotify Playlists to Youtube Playlists."
              title="You-tify"
              link="https://devpost.com/software/you-tify"
            /></ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
