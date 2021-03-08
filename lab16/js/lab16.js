/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/





var apiEndpoint = "https://xkcd.com/info.0.json";

$("#apiButton").click(function(){
console.log("test");


//Using the core $.ajax() method



$.ajax({
    // The URL for the request (from the api docs)
    url: apiEndpoint,
    // The data to send (will be converted to a query string)
    data: {
"month": "3",
"num": 2432,
"link": "",
"year": "2021",
"news": "",
"safe_title": "Manage Your Preferences",
"transcript": "",
"alt": "Manage cookies related to essential site functions, such as keeping Atrus and his sons imprisoned within the page.",
"img": "https://imgs.xkcd.com/comics/manage_your_preferences.png",
"title": "Manage Your Preferences",
"day": "3"
},
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here

    success: function(data) {
        // do stuff
        console.log(data);

        $("#titulo").html(data.safe_title);

        $("#output").html(JSON.stringify(data));
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
          $("#titulo").html("Error");
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("Error");
    }
})

});

//
//
// var apiEndpoint = "https://jsonplaceholder.typicode.com/photos"
//
// $("#apiButton").click(function(){
// // console.log("test");
//
//
// // Using the core $.ajax() method
//
//
//
// $.ajax({
//     // The URL for the request (from the api docs)
//     url: apiEndpoint,
//     // The data to send (will be converted to a query string)
//     data: {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952",
//   },
//     type: "GET",
//     // The type of data we expect back
//     dataType : "json",
//     // What do we do when the api call is successful
//     //   all the action goes in here
//
//     success: function(data) {
//         // do stuff
//         console.log("success.");
//
//         console.log(data);
//
//
//         $("#titulo").html(data.title);
//         $("#output").html(JSON.stringify(data));
//
//     },
//     // What we do if the api call fails
//     error: function (jqXHR, textStatus, errorThrown) {
//         // do stuff
//         console.log("Error:", textStatus, errorThrown);
//         $("#output").html("Error");
//     }
// })
//
// });
