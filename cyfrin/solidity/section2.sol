// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.30;

import {SimpleStorage} from  "./section1.sol";

contract StorageFactory{ 

SimpleStorage[] public ListOfSimpleStorage;

    function createStorageContract() public {
       SimpleStorage newSimpleStorage = new SimpleStorage();
       ListOfSimpleStorage.push(newSimpleStorage);
    }

    function sfStore( uint256 _SimpleStorageNumber, uint256 sfIndex) public {
        
    }
}