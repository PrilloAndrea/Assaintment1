

const sum = (arr) => {

    
    const totalSum = arr.reduce((partialSum, a) => partialSum + a, 0);

    return totalSum

}


module.exports.sum = sum