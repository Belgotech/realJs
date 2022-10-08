// string formating or type coetion
var firstName = "Beloved";
var middleName = "Ugochukwu";
var lastName = "Obiora";
var age = 20;

console.log(firstName + " " + age);

var job, inaRelationship;
job = "programmer_softwareEngineer_aiExpert_CEO-of-Belgotechnologies";
inaRelationship = false;

console.log(
  firstName +
    " " +
    middleName +
    "  " +
    lastName +
    " is " +
    age +
    " years old, " +
    " his a " +
    job +
    "," +
    " is he in a relationship?" +
    inaRelationship
);
// var feeling  = prompt("how are you feeing")
// console.log(feeling);

// basic operator
tryout = "try";
console.log(tryout);
console.log(typeof tryout);

lastYear = 2021;
thisYear = 2022;
console.log(thisYear < lastYear); //false

var now, yearjohn, fullage;
now = 2022;
yearjohn = 1989;
fullage = 32;

var isfullage = now - yearjohn >= fullage; //true
console.log(isfullage);

// multiple assignment

var x, y;
x = y = (3 + 5) * 4 - 6  //8 * 4 - 6 //32 - 6 //26
console.log(x, y);

// more operator 
x *= 2 //52
console.log(x);
x += 10 //62
console.log(x);
x++ //63
console.log(x);
x-- //62
console.log(x);

// if statement

var civilStatus = 'single'
if (civilStatus === 'married') {
    console.log('beloved is married');
}else {
    console.log('beloved will soon marry hopefully');
}

var married = false
if (married) {
    console.log(firstName  + ' is married');
}else {
    console.log(firstName, '' +  'will soon marry');
}

// boolean logic
var age2 = 19

if (age < 13) {
    console.log(firstName + ' is a boy');
}else if (age >= 13 && age2 < 20) {
    console.log(firstName +' is a teenager');
} else if (age >= 20 && age2 <30) {
    console.log( firstName +' is a young man');
}else {
    console.log('beloved is a man');
}

// tenary operator

age >= 18 ? console.log('you an adult'): console.log('you are a kid');

// assining logic(tenary operator) to a varriable
var ageStatus = age >= 20? 'man': 'kid';
console.log(ageStatus);

// switch statement

var job2 = 'programmer'
switch(job2){
    case 'programmer':
        console.log(firstName + ' is a computer programmer');
        break
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches people how to code and write computer programmes');
        break
    case 'web designer':
        console.log(firstName + ' creates beautiful website');
        break
    case 'AI expert':
        console.log(firstName + ' creates amazing AI ');
        break
    default :
    console.log(firstName + ' does something else');
}

//switch and operators
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName +' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName +' is a young man');
        break;
    default:
        console.log(firstName +' is a man');;
}