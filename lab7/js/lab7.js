/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/








//myFunk is gonn take the input and sort the letters
function myFunk() {
  var userName = window.prompt("give me your user name.");
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





document.writeln("here's your name back.",);
