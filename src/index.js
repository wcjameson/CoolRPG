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

const stateControl = storeState();

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

//This is a function factory. We can easily create functions that alter a character's attributes (Level, Strength, Dexterity, intelligence)

// let characterWizard = {};
// let characterWarrior = {};
// let characterPrisoner = {};

const levelUp = changeState("level")(1);
const levelUpStr = changeState("strength")(1);
const levelUpDex = changeState("dexterity")(1);
const levelUpInt = changeState("intelligence")(1);


$(document).ready(function() {

  const listControl = storeListState();

  $('#new-character').click(function() {
    const characterControl = storeState();
    const addCharacter = changeListState(characterControl);
    const newList = listControl(addCharacter);
    $("#output").append(`
    <div>
      <p id="level-value-${newList.length - 1}">0</p>
      <button class="btn-primary" id="levelUp-${newList.length - 1}" class="levelUp">Level Up!</button>
    </div>
  `);
});

  $("body").on("click",".levelUp",function() {
    const id = parseInt(this.id.slice(5));
    const stateControl = listControl()[id];
    const newState = stateControl(levelUp);
    $(`#level-value-${id}`).text(`Level: ${newState.level}`);
  });


});


// $(`"#levelUp-${newList.length - 1}"`).on("click", function() {
//   const newState = stateControl(levelUp);
//   $(`#level-value-${newList.length - 1}"`).text(`Level: ${newState.level}`);
// });

  // $("#levelUpStr").on("click", function() {
  //   const newState = stateControl(levelUpStr);
  //   $("#levelStr-value").text(`Strength: ${newState.strength}`);
  // });

  // $("#levelUpDex").on("click", function() {
  //   const newState = stateControl(levelUpDex);
  //   $("#levelDex-value").text(`Dexterity: ${newState.dexterity}`);
  // });

  // $("#levelUpInt").on("click", function() {
  //   const newState = stateControl(levelUpInt);
  //   $("#levelInt-value").text(`Intelligence: ${newState.intelligence}`);
  // });