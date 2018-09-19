var handleCounter = function (result) {
    console.log('The callback count is ' + result)
}

function callBackLoop (count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i)
    }
    console.log('***exiting callback loop*****\n')
}

callBackLoop(5, handleCounter)
callBackLoop(2, handleCounter)
callBackLoop(7, handleCounter)