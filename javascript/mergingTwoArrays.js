arr1 = [100];
arr2 = [1,2,3,4,5,6];
results = [];

i = 0;
j = 0;

while(i<arr1.length && j<arr2.length){
    if(arr1[i] <arr2[j]){
        results.push(arr1[i]);
        i++;
        }
    else{
        results.push(arr2[j]);
        j++;
    }
}

while(i< arr1.length){
    results.push(arr1[i]);
    i++;
}

while(j< arr2.length){
    results.push(arr1[i]);
    j++;
}
console.log(results);

