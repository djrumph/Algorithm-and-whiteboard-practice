arr1 = [1,5, 10, 70,90,500];
arr2 = [2,3,20,60,400,1000,200000,];
results = []

count = 0;

while(count<arr1.length || count<arr2.length){

    if(arr1[count] <arr2[count]){

        if(arr1[count]){
        results.push(arr1[count]);
        }

        if(arr2[count]){
        results.push(arr2[count]);
        }
    }
    else{
            if(arr2[count]){
        results.push(arr2[count]);
        }

           if(arr1[count]){
        results.push(arr1[count]);
        }
    }
count++

}
console.log(results);


