function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + fibonacci(n - 1);
    }
}

function fib(n) {
    n ? n + fib(n-1) : n;
}