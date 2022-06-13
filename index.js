const concat = require('./server/concatenate')
const sum = require('./server/sum')
const fs = require('fs');

const obj = JSON.parse(fs.readFileSync('arr.json', 'utf8'));

const arr = [
    6,
    7,
    8,
    9,
    10
]

const concate = concat.concate(obj.arr,arr);

const sumt = sum.sum(concate);


console.log("The array from json file is: "+ obj.arr);
console.log("The concatenate of 2 arrays is: "+concate);
console.log("The sum of 2 arrays is: "+sumt);
