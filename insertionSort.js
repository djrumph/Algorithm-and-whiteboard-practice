insertionSort([2,1,9,76,4,54,65,34,7,5,25,765,75])

function insertionSort(arr){
	var val;
    for(var i = 1; i < arr.length; i++){
        val = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > val; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = val;
    }
    return arr;
}
