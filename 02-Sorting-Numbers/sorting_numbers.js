//insert your pseudocode below
/*
1. Create a list of numbers
2. Assign the list to a variable
3. make the list in oreder decending/ascending "Action"
4. Print the result
*/

//insert your code below
var digits;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


digits = [5, 8, 2];
window.alert(digits.slice().sort(listsGetSortCompare("NUMERIC", 1)));