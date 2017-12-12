// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function mult(multiplier){
    multiplier * multiplier
    }
  }
