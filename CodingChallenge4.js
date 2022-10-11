// var markMass = 500; //kg
// var markHeight = 10; // meter

// var johnMass = 1000; //kg
// var johnHeight = 10; //meter

// var markFinalHeight = markHeight * markHeight;
// console.log(markFinalHeight);

// var johnFinalHeight = johnHeight * johnHeight;
// console.log(johnFinalHeight);

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//   console.log("mark's BMI is greater than john's BMI");
// } else {
//   console.log("john's BMI is greater than mark's BMI");
// }


var mark = {
  firstName: "mark",
  lastName: "smith",
  mass: 1000,
  height: 10,
  calculateBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
  },
};

mark.calculateBMI()
// console.log(mark);

var Bmi = prompt()

mark.bmi2 = Bmi
console.log(mark);

// var john = {
//     firstName: 'john',
//     lastName: 'smith',
//     mass: 1000,
//     height: 10,
//     calculateBMI: function(){
//     this.BMI = this.mass / (this.height * this.height);
//     }
// }

// john.calculateBMI()
// // console.log(john);

// if(john.BMI > mark.BMI){
//     console.log(john.firstName + ' has the higher BMI of ' + john.BMI);
// }else if(mark.BMI > john.BMI){
//     console.log(mark.firstName + ' has the higher BMI of ' + mark.BMI);
// }else{
//     console.log(mark.firstName + ' and ' + john.firstName + ' have the same BMI ');
// }