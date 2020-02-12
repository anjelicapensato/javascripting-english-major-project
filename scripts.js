/*
let i;
i = 1;
while ( i < 4 ) {
  $("#response").append("<br / >" + i);
  i = i + 1;
}
*/
let userInput;
userInput = prompt("Pick a number.");
for(i = 1; i <= userInput; i = i + 1)
if( i % 2 == 0){
  $("#response").append("<br />" + i + " is even")
}
else {
  $("#response").append("<br />" + i + " is odd")
};
