const concat = require('./server/concatenate')
const sum = require('./server/sum')
const fs = require('fs');

// The sync method
const obj = JSON.parse(fs.readFileSync('arr.json', 'utf8'));

// Day 2 commit   Start////////////////////////////////////////////////////////////////////

// Promise 
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                reject(err);
            }
            setTimeout(() => {
                resolve(JSON.parse(data));
            }, 3000);

        });
    });
}

// readFile("arr.json").then((res) => {
//     console.log(res)
//     console.log(res.arr)
// }).catch(err => {
//     console.log(err)
// })

// async method
async function asyncCall() {
console.log('Starting the async method');
const result = await readFile("arr.json");
console.log("Result from async method")
console.log(result);
console.log("The array from async method json file is: "+result.arr2);
const concate2 = concat.concate(obj.arr ,result.arr2);
const sumt2 = sum.sum(concate2);
console.log("The concatenate of 2 arrays is: " + concate2);
console.log("The sum of 2 arrays is: " + sumt2);
return result.arr;
}

asyncCall();

/////Day 2 commit End//////////////////////////////////////////////////////////////////////////////

const arr = [
    6,
    7,
    8,
    9,
    10
]

const concate = concat.concate(obj.arr, arr);
const sumt = sum.sum(concate);
console.log("Sync method ");
console.log("The array from sync method json file is: " + obj.arr);
console.log("The concatenate from sync method of 2 arrays is: " + concate);
console.log("The sum from sync method of 2 arrays is: " + sumt);


