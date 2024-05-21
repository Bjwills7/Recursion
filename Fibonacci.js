function iterativeFib(n) {
    const arr = [];

    if (n > 0) {
        for (let i = 0; i < n; i++) {
            if (i < 2) arr.push(i);
            else arr.push(arr[i - 2] + arr[i - 1]);
        }
    }

    return arr;
}

function recursiveFib(n) {
    if (n < 1) return []; 
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        var arr = recursiveFib(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(iterativeFib(8));
console.log(recursiveFib(8));
