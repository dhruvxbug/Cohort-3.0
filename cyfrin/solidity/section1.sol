// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24; //our solidity version 

contract SimpleStorage{
    // 1. Basic types: boolean, uint, int, address, bytes, string
    //uint default 0 and bool default false 
    bool isTrue = true;
    uint256 public number;
    int256 number2 = -88;
    string thisIsAString = "dhruvsingh";
    address Myaddress = 0x668FaEA949f1AD0Cfb0d222ff12fa3f13f4C821B;
    bytes32 Byte1 = "cat";

    //2. function 
    // can access the variable from the parent curly braces 
    function store(uint256 _number) public {
        number = _number;
        retrieve();
    }

    // how public works for a variable 
    function retrieve() public view returns(uint256){
      return number;
    }

    //3. visiblity - public, private, internal ,external (default internal) 
    // view- can read , pure -cannot even read 

    //4. Array ,struct -like creating your own type 
    uint256[] array1; 
    struct person{
        uint256 mynumber;
        string name;
    }
    //using a struct type 
    person public Dhruv = person({ mynumber: 11,name: "Dhruv"});
    person[] public ListOfPeople; //dynamic array and [3] then static array

    //5. calldata (strict), memory (temp+ non strict) ,storage (perma) - only for array, struct or mapping
    function AddPeople(string memory _name, uint256 _mynumber) public {
      ListOfPeople.push(person( _mynumber, _name));
      nameTonumber[_name] = _mynumber;
    }

    //6. mapping (easy way to connect 2 obj and easy search) 
    mapping(string => uint256) public nameTonumber;
}

// deploy - 0xd9145CCE52D386f254917e481eB44e9943F39138