
var nameName = "Keaton";
var numNumb = 2000;

console.log("MY JAVASCRIPT LOADED");

numNumb = "threehunnid"
//console.log(nameName);
//console.log(numNumb);


function firstFunction(){
    console.log("this is my first function...");
    console.log(numNumb);
}

firstFunction();



function testBigger (firstNum,secondNum){
    var result;
    result= firstNum>secondNum;

    return result;
    console.log(result);
}
console.log(testBigger(7,9));
