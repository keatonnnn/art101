/**
 * Author:    bto
 * Created:   21
 *
 * (c) Copyright deeznuts.Gov
 **/


//new variable definitions
// var outputEl = document.getElementById("output");
//
// var new1El = document.createElement("p");
//     new1El.innerHTML = "something new";
//
// var new2El = document.createElement("yy");
//     new2El.innerHTML="something else";
//
//
// //appending my new elements with the output div
// output.appendChild(new1El);
// output.appendChild(new2El);
//
//
//
// //styling
// bigbody.style.backgroundColor= "darkgray";
// bigbody.style.marginRight="400px"
//
// output.style.backgroundColor="darkred";
// output.style.marginRight="750px"
// output.

//finding button
//buttonEl=document.getElementById("submit-button");

//find button
var button = document.getElementById("my-button");
//add event listener to button

button.addEventListener('click', function() {
//find input value
var inputValue = document.getElementById('the-input').value;
  //  console.log("You input:", inputValue);
//split
var nameArray = inputValue.split("");
    //sort
var nameArraySort = nameArray.sort();
      //join the sorted array back to string
var sortedName = nameArraySort.join("");

console.log(sortedName);
 output.innerHTML= sortedName
});



//document.writeln("hello!");


// function sortShit() {
//
//     var inputValue = document.getElementById("the-input").value;
//
//   //  split
//     var nameArray = inputValue.split("");
//   //sort
//     var nameArraySort = nameArray.sort();
//     //join the sorted array back to string
//     var sortedName = nameArraySort.join("");
//
//     return sortedName;
// }
//
// button.addEventListener('click', sortShit);
//
//
//

//
// //find form input and button
// var buttonEl= document.getElementById("my-button");
//
// //add event listener to button
// var buttonEl.addEventListener("click", function(){
//
//
//   //output.document.writeln(sortedName);
//
// }
//
//
// });




//
//
// function () {
//   var userName = window.prompt("give me your name.");
//   console.log("userName", userName);
//
//   //split string into an array
//   var nameArray = userName.split("")
// //  console.log("nameArray=", nameArray);
//
//   //sort the array
//   var nameArraySort = nameArray.sort()
// //  console.log("nameArraySort=", nameArraySort);
//
//   //join the sorted array back to string
//
//   var sortedName = nameArraySort.join("");
// //  console.log("sortedName=",sortedName);
//
//   return sortedName;
//   document.writeln(sortedName);
//
// }
