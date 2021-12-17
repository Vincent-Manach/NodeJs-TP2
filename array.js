function sortArray(sortArr) {
    return sortArr.sort();
}

function randomArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


module.exports = {
    sortArray,
    randomArray
}