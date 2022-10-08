/*================CODING CHALENGE 1=================*/
// John and mark are aurging who has the great BMI (body mass index), create a solution that 
// shows them (john and mark) with a Boolean, who's BMI is greater

var markMass = 500; //kg
var markHeight = 10; // meter

var johnMass = 1000; //kg
var johnHeight = 10; //meter

var markFinalHeight = markHeight * markHeight;
console.log(markFinalHeight);

var johnFinalHeight = johnHeight * johnHeight;
console.log(johnFinalHeight);

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);


if (markBMI > johnBMI) {
    console.log('mark\'s BMI is greater than john\'s BMI');
}else{
    console.log('john\'s BMI is greater than mark\'s BMI');
}
// var bothBMI = markBMI > johnBMI;
// console.log("is mark's BMI higher than john's BMI?", '' +  bothBMI);
