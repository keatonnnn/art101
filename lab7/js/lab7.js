/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/










document.writeln("here's your name back by the way. sorry if it's messed up. ","</br>","</br>","</br>",                 myFunk(), "</br>","</br>","</br>");
document.writeln("see you later.");

//myFunk is gonn take the input and sort the letters
function myFunk() {
  var userName = window.prompt("give me your name.");
  console.log("userName", userName);



  //split string into an array
  var nameArray = userName.split("")
  console.log("nameArray=", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort()
  console.log("nameArraySort=", nameArraySort);

  //join the sorted array back to string

  var sortedName = nameArraySort.join("");
  console.log("sortedName=",sortedName);

  return sortedName;

}
