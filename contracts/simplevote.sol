// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract votingsystem{
    struct candidate{
        string name;
        uint256 nov;
    }
    mapping (address=>bool) public isvoted;
    candidate[] public candidates;
    event votecasted(address voter , string cand);
    constructor(string[] memory candidateNames) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(candidate({name: candidateNames[i], nov: 0}));
        }
    }
    function vote(uint256 candidateindex) public {
        require(!isvoted[msg.sender], "You have already voted!");
        require(candidateindex < candidates.length, "Invalid candidate index!");
        // Mark the voter as voted
        isvoted[msg.sender] = true;
        candidates[candidateindex].nov++;
    }
    function getwinner() public view returns(string memory){
        uint max=0;
        for(uint256 i=1;i<candidates.length;i++){
            if(candidates[max].nov<candidates[i].nov){
                max=i;
            }

        }
        return candidates[max].name;
    }

}