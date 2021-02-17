/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/


//DECLARE BUTTON VARS USING BUTTON TAG AND CLICK EVENT!!!

//each of these vars also has a function that toggles the class of each div
var buttonVar1 = $('<button>toggle me</button>').click(function () { $("#challenges").toggleClass("special"); });

var buttonVar2 = $('<button>toggllee mee</button>').click(function () { $("#problems").toggleClass("special"); });

var buttonVar3 = $('<button>toggle</button>').click(function () { $("#results").toggleClass("special"); });


//APPEND EACH BUTTON TO ITS DIV!!!!
$("#challenges").append(buttonVar1);

$("#problems").append(buttonVar2);

$("#results").append(buttonVar3);


var buttonVar4 = $('<button id="bonus1">bonus button 1</button>').click(function(){ $("#bonus2").toggleClass("redbutton");
});

var buttonVar5 = $('<button id="bonus2">bonus button 2</button>').click(function(){ $("#bonus1").toggleClass("redbutton");
});

$("#output").append(buttonVar4, buttonVar5);
