var a = 0,
    b = 1,
    c = 2;

function updateValues() {
    a += 1;
    b += 2;
    c += 3;
}

console.log(a, b, c); // Output: 0 1 2
updateValues();
console.log(a, b, c); // Output: 1 3 5
