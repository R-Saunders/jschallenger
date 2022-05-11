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
    return b.split('').reduce(0, (prev, current) => current === a ? prev+1 : prev);
}