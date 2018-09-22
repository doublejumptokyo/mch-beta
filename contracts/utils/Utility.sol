pragma solidity ^0.4.23;

library Utility {

    function uint2str(uint i) public pure returns (string) {
        if (i == 0) return "0";
        uint j = i;
        uint len;
        while (j != 0){
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (i != 0){
            bstr[k--] = byte(48 + i % 10);
            i /= 10;
        }
        return string(bstr);
    }

    function getRandom(uint16 max, uint16 index) public view returns(uint) {
        return uint256(
            keccak256(
                abi.encodePacked(blockhash(block.number-1), index)
            )) % max;
    }
}