const say = require('say')
say.speak('Hello')
say.stop()
say.speak('Hello', 'Alex', 0.5)
sorryDave()

function sorryDave () {
    setTimeout(function(){say.speak('I\'m sorry, Dave.')},5000)
}