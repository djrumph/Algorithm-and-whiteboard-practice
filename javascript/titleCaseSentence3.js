function titleCase(str) {

str = str.toLowerCase();
let   arr = str.split(" ");
let   finish = ""
console.log(arr);
for (let i = 0; i<= arr.length-1; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr.length+1);
    if(i !== arr.length-1){
    finish += arr[i] + " ";
    }
    else{
        finish+=arr[i];
    }
}
  
  return finish;
}

titleCase("I'm a little tea pot");
