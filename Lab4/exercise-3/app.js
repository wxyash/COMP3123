var should = require('should')
var calc = require('./calculator')

calc.AddTwoNumbers('a', 'b')
describe('Calculator', function () {
    describe('when used synchronously', function () {
        it('should add two numbers correctly', function () {
            calc.AddTwoNumbers(2,2).should.equal(4)
        })
    })
})