//checking is a string is an anagram using objects

anagram("aaz", "zaa");



function anagram(str1, str2){

arr1 = str1.split("");

arr2 = str2.split("");

if(arr1.length != arr2.length){
    console.log("not same length");
    return false;
}

object = {};

object2 = {};





for(val of arr1){
object[val] = (object[val] || 0) +1;
}

for(val of arr1){
object2[val] = (object2[val] || 0) +1;
}




console.log(object);
console.log(object2);

for(let key in object){

    if( object[key] != object2[key]){
        console.log("values aren't same");
        console.log("object1 value: " + object[key]);
       console.log("object2 value: " + object[key]);
        return false;
    }


}

return true;
}
