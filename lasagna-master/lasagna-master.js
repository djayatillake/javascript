/// <reference path="./global.d.ts" />
// @ts-check

/**
 * If the lasagna is done or not or if the timer was forgotten to be set
 *
 * @param {number} remainingMinutesInOven
 * @returns {string} the number of minutes remaining
 */
export function cookingStatus(remainingMinutesInOven) {
  switch (remainingMinutesInOven) {
    case undefined:
      return 'You forgot to set the timer.';
    case 0:
      return 'Lasagna is done.';
    default:
      return 'Not done, please wait.';
  }
}

/**
 * Estimates the preparation time based on layers and an average preparation
 * time, defaulting to 2 for a preparation time
 * @param {array} layers
 * @param {number} averagePreparationTime
 * @returns {number} the estimated preparation time
 */
export function preparationTime(layers, averagePreparationTime = 2) {
  return layers.length * averagePreparationTime;
}

/**
 * calculates the quantities of noodles and sauce required based on the layers
 * @param {array} layers
 * @returns {object} quanities of noodles in grams and sauce in litres
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0.0;
  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === 'noodles') {
      noodles += 50
    } else if (layers[index] === 'sauce') {
      sauce += 0.2
    }
  }
  return { 'noodles': noodles, 'sauce': sauce }
}

/**
 * adds the last ingredient from the first list to the second list
 * @param {array} friendsList
 * @param {array} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

/**
 * scales a recipe 
 * @param {array} recipe
 * @param {number} portions
 * @returns {array} scaled list
 */
export function scaleRecipe(recipe, portions) {
  let scale = portions / 2;
  let scaledRecipe = { ...recipe };
  for (const key in recipe) {
    if (Object.hasOwnProperty.call(scaledRecipe, key)) {
      scaledRecipe[key] *= scale;
    }
  }
  return scaledRecipe;
}