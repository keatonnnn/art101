/**
 * Author:    bto
 * Created:   21
 *
 * (c) Copyright Dee's Nuts.Gov
 **/

 function firstThing(test){
   console.log(test + " function 1<br>")
 }

 function secondThing(test){
   console.log(test + " function 2<br>")
 }

 function thirdThing(test){
   console.log(test + " function 3<br>")
 }



//test 1
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");



//test 2 using setTimeout
setTimeout(function() {
  firstThing("TEST 2");
}, 0);

setTimeout(function() {
  secondThing("TEST 2");
}, 0);

setTimeout(function() {
  thirdThing("TEST 2");
}, 0);


//test 3 using different setTimeout times
setTimeout(function() {
  firstThing("TEST 3");
}, 2);

setTimeout(function() {
  secondThing("TEST 3");
}, 0);

setTimeout(function() {
  thirdThing("TEST 3");
}, 1);
