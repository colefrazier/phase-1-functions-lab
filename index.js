 function distanceFromHqInBlocks(customerLoaction) {
   customerLoaction = customerLoaction - 42;
   return Math.abs(customerLoaction)
}


function distanceFromHqInFeet(customerLoaction) {
    distanceFromHqInBlocks(customerLoaction);
    return distanceFromHqInBlocks(customerLoaction) * 264;

}

function distanceTravelledInFeet(start, destination) {
    let feetTravelled = (destination - start) * 264;
    return Math.abs(feetTravelled);

}

function calculatesFarePrice(start, destination) {
    let feetTravelled = Math.abs((destination - start) * 264);
    if ( feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return .02 * (feetTravelled - 400);
    } else if (feetTravelled > 2000 && feetTravelled < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}