/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/

 for (var i=1; i<201; i++){


      if (i % 15 === 0)
      $("#output").append("FizzBuzz! ");


      else if (i % 21 === 0 )
      $("#output").append("FizzBoom! ");

      else if (i % 35 === 0 )
    $("#output").append("BuzzBoom! ");

      else if (i % 7 === 0 )
      $("#output").append("Boom! ");

      else if (i % 3 === 0 )
    $("#output").append("Fizz! ");

      else if (i % 5 === 0 )
      $("#output").append("Buzz! ")




 }
