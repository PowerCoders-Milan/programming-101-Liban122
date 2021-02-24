//insert your pseudocode below
/*
1. create var and assign to letters "a-z", assign it to digits "0-9" and assign it to special character "_-"
2. shuffle the variable and extract 8 characters randomly
3. Print

*/

//insert your code below
var pass_elements;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


pass_elements = ['abcdefghijklmnopqrsuvwxyz'.charAt((mathRandomInt(1, 26) - 1)), mathRandomInt(10000, 99999), '~?_#%!@$&*'.charAt((mathRandomInt(1, 10) - 1))];
window.alert(pass_elements);