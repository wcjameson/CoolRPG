// import 'character.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    // eslint-disable-next-line 
    currentState = {...newState};
    return newState;
  }
}

// const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const storeListState = () => {
  let currentState = [];
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = [...newState];
    return newState;
  }
}

const changeListState = (character) => {
  return (state) => ([
    ...state,
    character
  ])
}

const generateChar = (charType) => {
  return function(level) {
    return function(strength) {
      return function(dexterity) {
        return function(intelligence) {
          return function(health) {
            return (state) => ({
              ...state,
              ["charType"]: state["charType"] = charType,
              ["level"]: state["level"] = level,
              ["strength"]: state["strength"] = strength,
              ["dexterity"]: state["dexterity"] = dexterity,
              ["intelligence"]: state["intelligence"] = intelligence,
              ["health"]: state["health"] = health

            });
          };
        };
      };
    };
  };
}

//This is a function factory. We can easily create functions that alter a character's attributes (Level, Strength, Dexterity, intelligence)

// let characterWizard = {};
// let characterWarrior = {};
// let characterPrisoner = {};


const stateControl = storeState();
// const charCreate = characterCreation("charType")(1)(1)(1)(1)(10);
const levelUp = changeState("level")(1);
const levelUpStr = changeState("strength")(1);
const levelUpDex = changeState("dexterity")(1);
const levelUpInt = changeState("intelligence")(1);
const levelUpHealth = changeState("health")(10);
const fightOrcs = changeState("health")(-10);


$(document).ready(function() {

  const listControl = storeListState();

  $('#new-character').click(function() {
    const characterControl = storeState();
    const addCharacter = changeListState(characterControl);
    const newList = listControl(addCharacter);
    $("#output").append(`
    <div>
    <p id="level-value-${newList.length - 1}">0</p>
    <button id="levelUp-${newList.length - 1}" class="levelUp">Level Up!</button>
    </div>
    `);
  });
  

  //probably wont work this way
  $('form').on('submit', function() {

    const charType = $('#characterTypes').val();
    const focusStat = $('#statType1').val();
    const newChar = generateChar(charType)(1)(focusStat || 0)(focusStat || 0)(focusStat || 0)(10);
    const Player1 = storeState(newChar);
    
    if (Player1().health <= 0) {
      alert("Player1 has died!");
    }
  })
  
  
  // $("body").on("click",".levelUp",function() {
    
    //   const id = parseInt(this.id.slice(1));
    //   const stateControl = listControl()[id];
    //   const newState = stateControl(levelUp); // not a function?
    //   $(`#level-value-${id}`).text(`Level: ${newState.level}`);
    // });
    
    
    
    
    $("#levelUp").on("click", function() {
      const newState = stateControl(levelUp);
      $("#level-value").text(`Level: ${newState.level}`);
    });
  
    $("#levelUpStr").on("click", function() {
      const newState = stateControl(levelUpStr);
      $("#levelStr-value").text(`Strength: ${newState.strength}`);
    });
    
    $("#levelUpDex").on("click", function() {
      const newState = stateControl(levelUpDex);
      $("#levelDex-value").text(`Dexterity: ${newState.dexterity}`);
    });
    
    $("#levelUpInt").on("click", function() {
      const newState = stateControl(levelUpInt);
      $("#levelInt-value").text(`Intelligence: ${newState.intelligence}`);
    });

    $("#levelUpHealth").on("click", function() {
      const newState = stateControl(levelUpHealth);
      $("#levelHealth-value").text(`Health: ${newState.health}`);
    });

    $("#fightOrcs").on("click", function() {
      const newState = stateControl(fightOrcs);
      $("#levelHealth-value").text(`Health: ${newState.health}`);
    });

});