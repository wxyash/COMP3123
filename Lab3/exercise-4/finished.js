var max = 50
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var handleCounter = function (err, counter, waitTime, timeStamp) {
    if (err) {
        console.log(err)
    } else {
        console.log('Counter: ' + counter, 'wait: '+ waitTime, 'Time Stamp: ' + timeStamp)
    }
}
var callBackWait = function (counter, callback) {
        let randomWaitTime = getRandomInt(5000,10000)
        setTimeout(function () {
        callback(null, counter, randomWaitTime/1000+ 's', + new Date())
        } ,randomWaitTime)
}


for(let i = 1; i <= 10; i++) {
    callBackWait(i, handleCounter);
}
