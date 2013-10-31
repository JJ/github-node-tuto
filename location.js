#!/usr/local/bin/node

var github = require("github");
var user=process.argv[2]?process.argv[2]:'oslugr';

var gh = new github({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

gh.user.getFrom({
    user: user
}, function(err, res) {
    console.log("Usuario: " + res.name + "\nURL: " + res.URL +"\nLocation: "+ res.location+"\n" );
});