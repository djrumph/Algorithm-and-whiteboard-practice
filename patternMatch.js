//find out how many matches of one string there is in another

patternMatch("lorie loled", "lo");
patternMatch("wdsomgromg", "omg");
function patternMatch(strLong, strCheck){
    count = 0;
    matches = 0;
    for(let i = 0; i<= strLong.length; i++){
        for(let j = 0; j<= strCheck.length-1; j++){
            if(strLong[i] !== strCheck[j+i]){
            break;
            }
            else{
                count++;
            }
            if(count == strCheck.length){
                count = 0;
                matches++;

            }
    }
}
console.log("total amount of matches is: "  + matches);
}
