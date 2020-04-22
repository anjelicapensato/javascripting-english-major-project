/*
let i;
i = 1;
while ( i < 4 ) {
  $("#response").append("<br / >" + i);
  i = i + 1;
}

let userInput;
userInput = prompt("Pick a number.");
for(i = 1; i <= userInput; i = i + 1)
if( i % 2 == 0){
  $("#response").append("<br />" + i + " is even")
}
else {
  $("#response").append("<br />" + i + " is odd")
};

let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayMixed[4]);

let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
};
$("#response").html(myBurritoObject.guacamole);

let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.")
    }
  }
};
$("#response").html("Your " + myBurritoObject.tortilla + " burrito has " +
myBurritoObject.beans + " beans and " +
myBurritoObject.habaneroSauceSquirts +
" squirts of habanero.");
myBurritoObject.spiciness();
*/
/*$("#response").html("I am tired.");
$(".first-paragraph").addClass("lead");
$("p").html("I want to go home.");*/
