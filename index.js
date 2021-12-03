const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0,2) //cuts from position 0 to before position 2
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2) //cuts from 2nd last position to the end
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driversArray, driversSelection) {
    return driversSelection(driversArray)
}