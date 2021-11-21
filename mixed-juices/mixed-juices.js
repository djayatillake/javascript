// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { Console } from "console";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      // code that is executed when "x === option1" is true
      return 0.5;
    case 'Energizer':
      // code that is executed when "x === option2" is true
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      // code that is executed when x does not equal any of the options
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limeCount = limes.length
  while (wedgesNeeded > 0 && limes.length > 0) {
    wedgesNeeded -= slice(limes.shift())
  }
  return limeCount - limes.length
}

function slice(lime) {
  switch (lime) {
    case 'small':
      return 6;
    case 'medium':
      return 8;
    case 'large':
      return 10;
  }
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders.shift())
  } while (timeLeft > 0);
  return orders
}
