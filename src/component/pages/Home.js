import React from "react";
import BeefAndPepperStirFry from "../../assets/images/BeefAndPepperStirFry.jpg";
import Shakshuka from "../../assets/images/Shakshuka.jpg";
import EasySpaghettiBolognese from "../../assets/images/EasySpaghettiBolognese.jpg";
import AirFryerCrispyChickenBurger from "../../assets/images/AirFryerCrispyChickenBurger.jpg";
import BakedSweetPotato from "../../assets/images/BakedSweetPotato.jpg";
import ChickpeaFattoush from "../../assets/images/ChickpeaFattoush.jpg";

const Home = () => {
  return (
    <div>
      <div class="bg-image img1">
        <img src={BeefAndPepperStirFry} alt="BeefAndPepperStirFryImage"></img>
      </div>
      <div class="bg-image img2">
        <img src={Shakshuka} alt="ShakshukaImage"></img>
      </div>
      <div class="bg-image img3">
        <img
          src={EasySpaghettiBolognese}
          alt="EasySpaghettiBologneseImage"
        ></img>
      </div>
      <div class="bg-image img4">
        <img
          src={AirFryerCrispyChickenBurger}
          alt="AirFryerCrispyChickenBurgerImage"
        ></img>
      </div>
      <div class="bg-image img5">
        <img src={BakedSweetPotato} alt="BakedSweetPotatoImage"></img>
      </div>
      <div class="bg-image img6">
        <img src={ChickpeaFattoush} alt="ChickpeaFattoushImage"></img>
      </div>
      <br />
      <div class="bg-text">
        <h2>A NICE MEAL</h2>
        <p>
          The aim of this Application is to make meals as pleasurable to prepare
          as they are to eat
        </p>
      </div>
    </div>
  );
};

export default Home;
