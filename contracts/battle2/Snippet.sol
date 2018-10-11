pragma solidity 0.4.24;

import {BattleContext as BC} from "./BattleContext.sol";


contract Snippet {
//    BC.Unit public unit;
    bytes32 constant mask = 0xffff000000000000000000000000000000000000000000000000000000000000;

    function getKeccakedUint16(uint16 i) public pure returns (uint16) {
        bytes32 hash = keccak256(abi.encodePacked(i));
        bytes2 head2 = bytes2(hash & mask);
        return uint16(head2);
    }

    function get(uint16 i, uint16 j) public pure returns (bytes, bytes32, bytes2, uint16) {
//        bytes memory encode = abi.encodePacked(i, j);
        bytes memory encode = abi.encodePacked(i + j);
        bytes32 hash = keccak256(encode);
        bytes2 head = bytes2(hash & mask);
        uint16 result2 = uint16(head);
        return (encode, hash, head, result2);
    }

    function set(uint256 data) public pure returns (uint256, uint256) {
        uint256 digit = 77;
        uint256 result;
        digit -= 1; result = data / 10**digit; data %= 10**digit;
        digit -= 1; result = data / 10**digit; data %= 10**digit;
        digit -= 9; result = data / 10**digit; data %= 10**digit;
        digit -= 9; result = data / 10**digit; data %= 10**digit;
        digit -= 9; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;
        digit -= 3; result = data / 10**digit; data %= 10**digit;
        digit -= 3; result = data / 10**digit; data %= 10**digit;
        digit -= 3; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;
        digit -= 4; result = data / 10**digit; data %= 10**digit;

        return (result, data);
    }

    /*
      highest digit(tmp): 1
      position          : 1
      hero id           : 9
      item id 1         : 9
      item id 2         : 9
      max hp            : 4
      hp                : 4
      phy               : 3
      int               : 3
      agi               : 3
      active skill id 1 : 4
      active skill id 2 : 4
      active skill id 3 : 4
      passive skill id  : 4
    */
    function getEventData(uint8 position, uint256[3] ids, int16[4] params, uint16[4] skills) public pure returns (uint256) {
        uint256 digit = 77;
        uint256 result = 0;
        
        digit -= 1; result += uint256(1) * (10**digit); // 1
        digit -= 1; result += uint256(position) * (10**digit); // 1
        digit -= 9; result += uint256(ids[0]) * (10**digit); // 9
        digit -= 9; result += uint256(ids[1]) * (10**digit); // 9
        digit -= 9; result += uint256(ids[2]) * (10**digit); // 9
        digit -= 4; result += uint256(params[0]) * (10**digit); // 4
        digit -= 4; result += uint256(params[0]) * (10**digit); // 4
        digit -= 3; result += uint256(params[1]) * (10**digit); // 3
        digit -= 3; result += uint256(params[2]) * (10**digit); // 3
        digit -= 3; result += uint256(params[3]) * (10**digit); // 3
        digit -= 4; result += uint256(skills[0]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[1]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[2]) * (10**digit); // 4
        digit -= 4; result += uint256(skills[3]) * (10**digit); // 4

        return result;
    }

}