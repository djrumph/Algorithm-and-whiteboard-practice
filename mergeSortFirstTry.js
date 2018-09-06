arr  = [1,53,6,36,7,45,2,76];



arr1 = arr.slice(0, arr.length/2);
arr2 = arr.slice(arr.length/2, arr.length);

arr3 = arr1.slice(0, arr1.length/2);
arr4 = arr1.splice(arr1.length/2, arr1.length);


arr5 = arr3.slice(0, arr3.length/2);
arr6 = arr3.splice(arr3.length/2, arr3.length);

arr7 = arr4.slice(0, arr4.length/2);
arr8 = arr4.splice(arr4.length/2, arr4.length);

arrMerge1 = merge(arr7,arr8);
arrMerge2 = merge(arr5, arr6);

arrMergeHalf1 = merge(arrMerge1, arrMerge2);


//SECOND SPLIT

arr3 = arr2.slice(0, arr2.length/2);
arr4 = arr2.splice(arr2.length/2, arr2.length);


arr5 = arr3.slice(0, arr3.length/2);
arr6 = arr3.splice(arr3.length/2, arr3.length);

arr7 = arr4.slice(0, arr4.length/2);
arr8 = arr4.splice(arr4.length/2, arr4.length);

arrMerge1 = merge(arr7,arr8);
arrMerge2 = merge(arr5, arr6);

arrMergeHalf2 = merge(arrMerge1, arrMerge2);

arrMergeFinal = merge(arrMergeHalf1,arrMergeHalf2);


function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
