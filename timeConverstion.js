timeConverstion("12:05:39AM")

function timeConverstion (str){

time = parseInt(str.substring(0,2));


amPM = str.substring(8,10);


minutes = str.substring(2,5);

theRest = str.substring(5, 8);


//check and see if the time is between 1:00PM and 11:59PM
//if it is, add 12 hours to the time and return the value

if(amPM == "PM" && time != 12){
    time += 12;

    time =time.toString() + minutes + theRest;
   return time;


}


//check if the time is between 1:00AM and 11:59AM
// if it is, return the time as is

if(amPM == "AM" && time != 12){

    time =time.toString() + minutes + theRest;
    return time;


}

//special cases are when the time is 12:00AM - 12:59AM
//if so, substract 12 from the time and return the value. 
if(amPM == "AM" && time == 12){

   time = "00" + minutes + theRest;;

   return time;


}

//if time is between 12:00PM and 12:59PM
//return time as is

if(amPM == "PM" && time == 12){
    time =time.toString() + minutes + theRest;
    return time;


}


}
