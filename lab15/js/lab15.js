/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/




 // apiEndpoint = "https://xkcd.com/info.0.json"
 //
 // $("#apibutton").click(doAPIStuff);
 //
 // function putTextOnPage(text){
 //   $("#output").html("hellloooo");
 // }
 //
 // function doAPIStuff() {
 //   console.log("Doing API Stuff");
 //   $.ajax({
 //     // The URL for the request
 //     url: apiEndpoint,
 //     // The data to send (will be converted to a query string)
 //     data: { },
 //     // Whether this is a POST or GET request
 //     type: "GET"
 //     // The type of data we expect back
 //     //dataType : "json",
 //   })
 //   // If the request succeeds
 //   .done(function( data ) {
 //     var textData = JSON.stringify(data);
 //     var str = "";
 //     var imageURL = data.img;
 //     var title = data.title;
 //     str += "<h2>" + title + "</h1>";
 //     str += "<img src='" + imageURL + "'>"
 //     console.log("Success:", textData);
 //     putTextOnPage(str);
 //   })
 //   // If the request fails
 //   .fail(function( xhr, status, errorThrown ) {
 //     console.log("Failure.");
 //     putTextOnPage(errorThrown + " Status:" + status);
 //     //console.log(errorThrown + " Status:" + status );
 //   })
 //   console.log("Asynchronously doing the next thing.");
 //
 // }



$("#apiButton").click(function(){
console.log("test");


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://jsonplaceholder.typicode.com/todos/1",
    // The data to send (will be converted to a query string)
    data: {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here

    success: function(data) {
        // do stuff
        console.log(data);

        $("#output").html(JSON.stringify(data));
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("Error");
    }
})

});
