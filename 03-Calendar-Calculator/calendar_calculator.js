//insert your pseudocode below
/*
- create 3 variables one for day, month and result
- the starting point will be 0 days for january and keep adding the next days as we go along
- each month have name and certain amount of days that need to be checked
- the requsting day + the previuos days will be the result of how many days in total
-and then print
*/

//Insert your code below
var month, day, result;


month = 'April';
day = 1;
if (month == 'January') {
  result = 0 + day;
}
if (month == 'February') {
  result = 31 + day;
}
if (month == 'March') {
  result = 59 + day;
}
if (month == 'April') {
  result = 90 + day;
}
if (month == 'May') {
  result = 120 + day;
}
if (month == 'June') {
  result = 150 + day;
}
if (month == 'Juley') {
  result = 180 + day;
}
if (month == 'August') {
  result = 211 + day;
}
if (month == 'Septemper') {
  result = 242 + day;
}
if (month == 'October') {
  result = 272 + day;
}
if (month == 'November') {
  result = 304 + day;
}
if (month == 'December') {
  result = 335 + day;
}
window.alert(result);