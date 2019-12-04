const assert = require ("chai").assert;
const app = require ("../app");

const sumResult1 = app.sum(5,5)
const sumResult2 = app.sum(-1000,1001)
const sumResult3 = app.sum(0,0)


describe ("app", function(){
    describe("sum", function(){
        it("sum should return 10", function(){
            assert.equal(sumResult1, 10);
        });
        it ("sum should return 1001",function (){
            assert.equal(sumResult2, 1);
        });
        it ("sum should be a Number types", function(){
            assert.typeOf(sumResult3, "number")
        });
    });
});

