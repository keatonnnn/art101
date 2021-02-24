/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/


function sortingHat(str){

  var length=str.length;

  var remainder = length % 4;

  if (remainder==0){
    return "Gryffindor, lame"
  }
  else if (remainder==1){
    return"Ravenclaw"
  }
  else if (remainder==2){
    return "Slithrin'"
  }
  else if (remainder==3){
    return "Hufflepuff, sorry"
  }
}

//attach click to button
$("#mybutton").click(function(){
//get input value
var name = $("#input").val();
//get  length  of inputtted namee
//var nameLength = name.length;
//execute the hat function with the namelength, assign it to variable house
var house = sortingHat(name);

console.log(house);
$("#output").html("the hat has sorted you into " + house);
})

$("#output").toggleClass("special");
