/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/


//DECLARE BUTTON VARS USING BUTTON TAG AND CLICK EVENT!!!

//$("#challenges").toggleClass("special");

var buttonVar1 = $('<button>toggle me</button>').click(function () { $("#challenges").toggleClass("special"); });

var buttonVar2 = $('<button>toggllee mee</button>').click(function () { $("#problems").toggleClass("special"); });

var buttonVar3 = $('<button>toggle</button>').click(function () { $("#results").toggleClass("special"); });

//APPEND EACH BUTTON TO ITS DIV!!!!
$("#challenges").append(buttonVar1);

$("#problems").append(buttonVar2);

$("#results").append(buttonVar3);
