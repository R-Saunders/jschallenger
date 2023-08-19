// 1.

function myFunction(a, b) {
    return a+b;
}

// 2.

function myFunction(a, b){
    return a === b;
}

// 3.

function myFunction(a){
    return typeof a;
}

// 4.

function myFunction(a,n) {
    return a[n-1];
}

// 5.
function myFunction(a) {
    return a.slice(3);
 }

//  6.
function myFunction(str) {
    return str.substr(-3, 3);
}

// 7
function myFunction(a) {
    return a.substr(0,3);
}

// 8
function myFunction(a) {
    return a.slice(0, a.length/2);
}

// 9

function myFunction(a) {
    return a.slice(0,-3);
 }

//  10
function myFunction(a, b) {
    return (a*(b/100));
 }

//  11
function myFunction(a, b, c, d, e, f) {
    return Math.pow((a+b-c)*d/e,f)
 }

//  12
function myFunction(a) {
    if (a%2 == 0)
    return true;
    else
    return false;
 }

//  13.
function myFunction(a,b) {
    return b.split('').reduce((prev, current) => current === a ? prev+1 : prev,0);
}

// 14
function myFunction(a) {
    if (a%1 == 0 )
    return true;
    else return false;
}

// 15
function myFunction(a, b) {
if (a<b) return a/b;
else return a*b; 
}

// 16
function myFunction(a, b) {
    if (a.includes(b)) {
    result = b.concat(a);
    } else {
    result = a.concat(b);
    } return result;
 }

//  17
function myFunction(a) {
    return Math.round(a * 100) / 100;
 }

//  18
function myFunction(a) {
    return Array.from(a.toString()).map(Number); 
 }

//  19
function myFunction(a, b) {
    return (a.charAt(0).toUpperCase() + a.slice(1)+b.split("").reverse().join("")).replace('%','');
 }

//  20
function myFunction(a) {
    function isPrime(a) {
        if (a <= 1) return false;
        if (a <= 3) return true;
        if (a%2 == 0 || a%3 == 0) return false;
        
        for (let i=5; i*i<=a; i=i+6)
            if (a%i == 0 || a%(i+2) == 0)
            return false;
            return true;
    }
    function nextPrime(N) {
         if (N <= 1)
            return 2;
     
        let prime = N;
        let found = false;
     
        while (!found) {
            prime++;
     
            if (isPrime(prime))
                found = true;
        }
         return prime;
    }
    if (isPrime(a) == true) {
    return a;
    } else {
    return nextPrime(a);
    }
 }
//  21

