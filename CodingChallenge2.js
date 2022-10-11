// coding Challenge 2
var johnAverage = (89+120+103) / 3  //100
var markAverage = (116+123+94) /3  //100
var sameAverage = johnAverage + markAverage
var marryAverage = (97+134+105) /3

console.log( johnAverage, markAverage, marryAverage);

if (johnAverage > markAverage && johnAverage === marryAverage) {
    console.log('John has a greater average than mark but same as marry, he scored ' + johnAverage);
}else if (johnAverage > markAverage && johnAverage > marryAverage) { 
    console.log('John has the highest average, he scored ' + johnAverage);
}else if (markAverage > johnAverage && markAverage > marryAverage) {
    console.log('Mark has the highest average, he scored ' + markAverage);
}else if (markAverage > johnAverage && markAverage === marryAverage) {
    console.log('Mark has a greater average than John but same as marry, he scored ' + markAverage);
}else if (markAverage === johnAverage) {
    console.log('Mark and John has the highest, their scores are same, they had a total of ' + sameAverage);
}else if (marryAverage > johnAverage && marryAverage < markAverage) {
    console.log('marry has the higest average she has an average of ' + marryAverage);
} else {
    console.log('Everyone is a winner');
}