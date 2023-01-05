arr1 = [1,1,2,3,3,3,3];

testOb = {};
testOb2 = {};
testOb3 = {};


//creating an ojbect where each key value pair has how many times a number appears in an array. 

//longest way using no unique javascript functions
for (let i = 0; i<arr1.length; i++){

let counter = arr1[i];

console.log("This is: " +counter);



        if(testOb3[counter]){
            //counter = arr1[]

            testOb3[counter] +=1
        }
        else{

             testOb3[counter] = 1;

        }

   // console.log(testOb3.counter);

}

console.log(testOb3);


//shorter way using a for of loop in javascript
for(val of arr1){

    if(testOb[val]){

        testOb[val] +=1;
    }
    else{

        testOb[val] = 1;
    }
}

//console.log(testOb);

// shortest way (that I know of) using the "for of" loop using specific initializer
for(val of arr1){

    testOb2[val] = (testOb2[val] || 0) +1;
}

console.log(testOb2);
