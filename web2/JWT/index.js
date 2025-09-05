const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwt_secret = "Ilovemyself";

const emailschema = zod.string().email();
const passwordschema = zod.string().min();

function jwtSign(username ,passwword){
    const usernameResponse = zod.safeParse(username);
    const passwwordResponse = zod.safeParse(password);
     
    if (!usernameResponse.success || !passwwordResponse.success ){
        return null;
    }

    const token = jwt.sign({usernameResponse}, jwt_secret);
    return token;
}

function jwtVerify(token){
    let ans = true;
    try{
        jwt.verify({token},jwt_secret)
    }catch(e){
        ans = false;
    }
    return false;
}

function jwtDecoded(token){
   const decoded = jwt.decode({token});
   if(decoded){
    return true;
   }else{
    return false;
   }
}
 