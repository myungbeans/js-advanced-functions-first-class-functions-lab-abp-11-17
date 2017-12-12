// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers){
  let last = drivers.length
  let penultimate = last - 1
  return [drivers[last], drivers[penultimate]]
}
