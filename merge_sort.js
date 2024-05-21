function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;

    } else {
        // Split array in half
        var splitPoint = Math.floor((arr.length) / 2);
        var arr1 = arr.slice(0, splitPoint);
        var arr2 = arr.slice(splitPoint);
        
        // Recursively call with split arrays until they only contain one value
        var sorted1 = mergeSort(arr1);
        var sorted2 = mergeSort(arr2);

        // Sort and merge arrays
        var mergedArr = [];
        
        while(sorted1.length > 0 || sorted2.length > 0) {
            if (sorted1[0] <= sorted2[0]) mergedArr.push(sorted1.shift());
            else if (sorted1[0] >= sorted2[0]) mergedArr.push(sorted2.shift());
            else if (sorted1[0]) mergedArr.push(sorted1.shift());
            else if (sorted2[0]) mergedArr.push(sorted2.shift());
        }
        return mergedArr;
    }
}

const myArr = [472, 2, 1, 3, 4, 7, '104'];
console.log(mergeSort(myArr));