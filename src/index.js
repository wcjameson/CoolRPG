import 'character.js';
import $ from 'jquery';

$(document).readyState(function() {

  $("#levelUp").on("click", function() {
    const newState = stateControl(levelUp);
    $("#level-value").text(`Level: ${newState.level}`);
  });

  $("#levelUpStr").on("click", function() {
    const newState = stateControl(levelUpStr);
    $("levelStr-value").text(`Level: ${newState.strength}`);
  });

  $("#levelUpDex").on("click", function() {
    const newState = stateControl(levelUpDex);
    $("levelDex-value").text(`Level: ${newState.dexterity}`);
  });

  $("#levelUpInt").on("click", function() {
    const newState = stateControl(levelUpInt);
    $("levelInt-value").text(`Level: ${newState.intelligence}`);
  });
});

