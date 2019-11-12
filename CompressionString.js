/* Inplement a method to do string compression using the counts of repeated characters
if the orignal string is shorter than the compressed string, return the origina string
example: input:  "aaccdd"
         output: "a2c2d2"
         
         input:  "abc"
         output: "abc" */

function stringCompression(str){
    //declare a counter variable and set to 1
        let count = 1;        
    //declare a string variable
        let compressedString  = "";
    //loop through string argument
    for(let i = 1; i < str.length; i++){
        //use the value of i, or val to check if the previous index is the same at the next index
        //if the index is the same
        if(str[i] === str[i-1]){
            //increase the counter by one
            count++;
        }           
        //if the index is not the same
        else{
            //add the previous index's value, and the current number of the counter to the string
            compressedString += str[i-1] + count;
            //set the counter to 1
            count = 1;
        }
        //move the index one to the right
        if(i === str.length-1){
            compressedString += str[i] + count;
        }
        //at the end of the string add the last letter and count
    }

    if (compressedString.length > str.length) return str;
    return compressedString;
}
