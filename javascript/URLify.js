function url(str){

//easiest solution
   let arr = str.replace(/ /g, "%20");

   console.log(arr);

//easier way to split array
//   arr = str.split("");

//solution with no built in methods. 
    arr = [];

    for(val of str){
       arr.push(val);
    }

    console.log(arr);

   for(let i = 0; i< arr.length; i++){
       console.log();
       if(arr[i] === " "){
           arr[i] = "%20";
       }
   }

    //harder way to join
   urlString = "";
   for(val of arr){
       urlString += val;
    }

   //easier way to join
   arr = arr.join("");


   console.log(arr);

   console.log("new " + urlString);


}

url("Mr John Smith")
