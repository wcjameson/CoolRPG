// import $ from 'jquery'; 
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

// // This function stores our state.

// export const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// export const stateControl = storeState();

// //This is a function factory. We can easily create functions that alter a character's attributes (Level, Strength, Dexterity, intelligence)

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// let characterWizard = {};
// let characterWarrior = {};
// let characterPrisoner = {};

// export const levelUp = changeState("level")(1);
// export const levelUpStr = changeState("strength")(1);
// export const levelUpDex = changeState("dexterity")(1);
// export const levelUpInt = changeState("intelligence")(1);
