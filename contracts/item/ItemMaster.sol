pragma solidity ^0.4.23;

contract ItemMaster {

    mapping(uint16 => int16) public rarityToInitialPram;
    mapping(uint=>mapping(uint=>int)) public levelStandard;

    int16 paramUp;

    constructor () {

        paramUp = 1;
        //initial set
        rarityToInitialPram[1] = 12;
        rarityToInitialPram[2] = 18;
        rarityToInitialPram[3] = 21;
        rarityToInitialPram[4] = 27;
        rarityToInitialPram[5] = 36;

        levelStandard[5][2] = 36;
        levelStandard[5][3] = 74;
        levelStandard[5][4] = 113;
        levelStandard[5][5] = 155;
        levelStandard[5][6] = 199;
        levelStandard[5][7] = 245;
        levelStandard[5][8] = 293;
        levelStandard[5][9] = 344;
        levelStandard[5][10] = 397;
        
    }    

}
    