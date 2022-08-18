// Code your solution in this file!
const hq = 42;
const feet = 264;
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42){
        return blocks - hq;
    }else if (blocks < 42){
        return hq -blocks;
    }
    }
    
function distanceFromHqInFeet(blocks){
return distanceFromHqInBlocks(blocks) * feet;

}

function distanceTravelledInFeet(hq, num) {

    if (num > hq) { 
        return (num - hq)*feet;
    }else {
        return (hq - num)*feet;
    }
}

function calculatesFarePrice(start, destination){
    let calculatesFarePrice;
    let calculatesFeet= distanceTravelledInFeet(start, destination);
   if (calculatesFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatesFeet > 400 && calculatesFeet < 2000){
       calculatesFarePrice = calculatesFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatesFeet > 2000 && calculatesFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatesFeet > 2500){
       return 'cannot travel that far';
   }
// last function was by Hieu Nguyen @ from Slack Aug 31st 2021 
}

