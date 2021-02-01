/**
 * Author:    nicholas beatex bone seatex
 * Created:   monday feb 1st 12:48
 *
 * (c) Copyright myspace.com/souljaboy
 **/


//definitions

 var myTransport = ["bebop", "fiesta", "uber"];


 var myMainRide = {
     make: "Mazda",
    model: "bebop",
    color: "gray",
    year: 2014,  };


//output

document.writeln("I just be soarin in the " + myTransport[1] + " on the weekends...sometimes I gotta take a " + myTransport[2] + " as well. <br>");

document.writeln("The stats on the true main whip are as follows. <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
