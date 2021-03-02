/**
 * Author:    btxkntx
 * Created:   yes
 *
 * (c) Copyright deeznuts.Gov
 **/

 for (var i=1; i<201; i++){
   var str= "";


      if (i % 5 === 0 )
        str += i + " Buzz!<br>";
        $("#output").html(str);



      if (i % 15 === 0)
      // $("#output").append("FizzBuzz! ");
      str += i + " FizzBuzz!<br>";

      $("#output").html(str);



       if (i % 21 === 0 )
      // $("#output").append("FizzBoom! ");
      str += i + " FizzBoom!<br>";
      $("#output").html(str);


       if (i % 35 === 0 )
      // $("#output").append("BuzzBoom! ");
      str += i + " BuzzBoom!<br>";
      $("#output").html(str);



       if (i % 7 === 0 )
      // $("#output").append("Boom! ");
      str += i + " Boom!<br>";
      $("#output").html(str);


       if (i % 3 === 0 )
      // $("#output").append("Fizz! ");
      str += i + " Fizz!<br>";
      $("#output").html(str);







}
