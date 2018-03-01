var NSCToken = artifacts.require("NSCToken");

contract('NSCToken', function(accounts) {
    it("total supply should be 500000000", function() {
        var token;
        return NSCToken.deployed().then(function(instance) {
            token = instance;
            return token.totalSupply.call();
        }).then(function(result){
            assert.equal(result.toNumber(), 500000000, 'total supply is wrong');
        });
    });

    it("should return the balance of token owner", function() {
        var token;
        return NSCToken.deployed().then(function(instance){
            token = instance;
            return token.balanceOf.call(accounts[0]);
        }).then(function(result){
            assert.equal(result.toNumber(), 1000000, 'balance is wrong');
        })
    });

    it("should transfer right token", function() {
        var token;
        return NSCToken.deployed().then(function(instance){
            token = instance;
            return token.transfer(accounts[1], 500000);
        }).then(function(){
            return token.balanceOf.call(accounts[0]);
        }).then(function(result){
            assert.equal(result.toNumber(), 500000, 'accounts[0] balance is wrong');
            return token.balanceOf.call(accounts[1]);
        }).then(function(result){
            assert.equal(result.toNumber(), 500000, 'accounts[1] balance is wrong');
        })
    });

    it("should show the transfer event", function() {
        var token;
        return Token.deployed().then(function(instance){
            token = instance;
            return token.transfer(accounts[1], 100000);
        }).then(function(result){
            console.log(result.logs[0].event)
        })
    });
});