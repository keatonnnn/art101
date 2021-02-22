function submitBio(){
var nameVar= document.getElementById("name").value;
console.log(nameVar);

var emailVar= document.getElementById("email").value;
console.log(emailVar);

var messageVar= document.getElementById("message").value;
console.log(messageVar);

 name_email_id.innerHTML= nameVar+emailVar;
 bio_id.innerHTML=messageVar;
 seaWorld.innerHTML="fuck seaworld";
}





//
// function colorMe (){
//   //$("#name_email_id").style.color="green";
// $("#name_email_id").addClass("color_me");
//
// //eventlistener for button
// var colorButton = document.getElementById("#colorButton");
//
// colorButton.click.(colorMe);

$("#colorButton").click(function(){
  $(this).parent()
  $("#name_email_id").toggleClass("color_me");
})
