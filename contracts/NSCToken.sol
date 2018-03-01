pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract NSCToken is StandardToken {
    string public name = "NSCToken";
    string public symbol = "NSC";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 1000000;
    uint public TOTAL_SUPPLY = 500000000;

    function NSCToken() public {
        totalSupply = TOTAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}