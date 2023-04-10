var express = require('express')
const nodecache = require('node-cache')
var app = express()

cache = new nodecache({stdTTL:3001})

exports.counter = async (req,res) => {
    if(cache.has(req.query.val)){
        res.send(cache.get(req.query.val).join(" "))
    }
    else{
    var value = parseInt(req.query.val)
    var lst = [];
    for(i = 1 ; i <= value ; i++){
       if( i % 15 == 0){
        lst.push("FixBuz")
       }
       else if(i%5==0){
        lst.push("Buz")
       }
       else if(i%3==0){
        lst.push("Fix")
       }
       else{
        lst.push(i)
       }
    }
    cache.set(req.query.val,lst)
    res.end(lst.join(" "))}
    
}