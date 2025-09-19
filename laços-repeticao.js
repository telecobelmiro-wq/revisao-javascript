for(let x = 0; x < 10; x++) {
    console.log(`x agora é ${x}`);
}

let i = 0
while (i < 10) {
    console.log(`i agora é ${i}`);
    i++
}

console.log();

let j = 0
do {
    console.log(`j agora é ${j}`)
    j++
} while (j < 10)

let y = 0
let deveExecutar = true 
while (deveExecutar) {
    console.log(`o valor de y é ${y}`);
    
    if (y == 5) {
        deveExecutar = false
    }
    y++
}