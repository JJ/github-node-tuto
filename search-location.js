#!/usr/local/bin/node

var github = require("github");
var location=process.argv[2]?process.argv[2]:'Granada';

var gh = new github({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

gh.search.users({
    keyword: location
}, function(err, res) {
    for (var u in res.users) {
	if (res.users[u].location && ( res.users[u].location.indexOf(location) >= 0) ) {
	    console.log("Usuario: " + res.users[u].name + "\nNick: " + res.users[u].username+ "\nSitio: " + res.users[u].location +"\n" );
	}
    }
});