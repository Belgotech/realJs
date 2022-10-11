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

/* truthy and falsy values
falsy values = null, 0, '', undefined, NaN(not a number)
truthy values = any values that are not falsy values
*/


// function

function calculateAge(birthYear){
    return 2022 - birthYear
}

var ageJohn = calculateAge(1990)
var ageRadom = calculateAge(1989)
var ageNigeria = calculateAge(1960)
console.log(ageJohn, ageRadom, ageNigeria);

function yearUntilRetirement (year, firstName){
    var age = calculateAge(year)
    var retirement = 65 - age
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearUntilRetirement(1990, 'john')
yearUntilRetirement(1948, 'random')
yearUntilRetirement(1960, 'Nigeria')


// function Advanced
function yearUntilRetirement2 (year, firstName){
    var age = calculateAge(year)
    var retirement = 65 - age
    retirement > 0? console.log(firstName + ' retires in ' + retirement + ' years.') : console.log(firstName +' is already retired');
    // if (retirement > 0){
    //     console.log(firstName + ' retires in ' + retirement + ' years.')
    // }else {
    //     console.log(firstName +' is already retired');
    // }
}

yearUntilRetirement2(1990, 'john')
yearUntilRetirement2(1948, 'random2')
yearUntilRetirement2(1960, 'Nigeria')

// function statement and expression

/* function declaration = function whatDoYouDo(job, firstName){

}
*/

/* function expression */
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches people how to code'
        case 'designer/developer':
            return firstName +' designs beautiful, interactive and responsive websites'
        case 'ceo':
            return firstName + ' is the ceo of belgo-technologies'
        default:
            return firstName + ' does something else'
    }
}

console.log(whatDoYouDo('teacher', 'beloved'));
console.log(whatDoYouDo('designer/developer', 'beloved'));
console.log(whatDoYouDo('ceo', 'beloved'));
console.log(whatDoYouDo('Ceo', 'beloved'));

// note : javaScript expression are those piece of code that produces a value
// note : javaScript statement are peice of code that performs an action but dont produce a result immediately 

/*===============ARRAYS===============*/
// initialize array
var names = ['john', 'jane', 'mark']
var year = new Array(1990, 1948, 1989)

console.log(names[2]);
console.log(names.length);
console.log(names);

//mutate array
names[1] = 'ben'
names[names.length] = 'mary'  // this is used to check total number of element in an array
console.log(names);

/*Array methods*/
var john = ['john', 'smith', 'teacher', false]
console.log(john);

john.push('blue') // the method push adds an element at the end of the array
console.log(john);

john.unshift('Mr.')  //this method is used to add an element to the begining of the array
console.log(john);

john.pop()  // this will remove the elements from the end (from the last one)
console.log(john);

john.shift()  // this method removes element from the begining
console.log(john);

console.log(john.indexOf(1990)); // this shows you the position of an element in an array

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer'

console.log(isDesigner);



/*==============OBJECTS===============*/

// declaration of an javaScript Object (object Literal and new object syntax)
// object literal
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1990,
    isMarried: false,
    job: 'teacher',
    family: ['jane', 'mark', 'bob', 'emily']
}

// Accessing an element from a javaScript object
console.log(john.firstName);
console.log(john['firstN ame']);

var x = 'isMarried'
console.log(john[x]);
console.log(x);
console.log(john);

john.job = `designer`
john['isMarried'] = `true`
console.log(john);


// new object syntax
var jane = new Object();
jane.firstName = 'jane',
jane['lastName'] = 'smith',
jane.birthYear = 1980

console.log(jane);

/*================OBJECT AND METHODS===============*/
// simple method (without the 'this' keyword)
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1990,
    isMarried: false,
    job: 'teacher',
    family: ['jane', 'mark', 'bob', 'emily'],
    calculateAge: function(birthYear){
        return 2022 - birthYear
    }
}

console.log(john.calculateAge(1990));

// complex method (using the 'this' keyword)
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1994,
    isMarried: false,
    job: 'teacher',
    family: ['jane', 'mark', 'bob', 'emily'],
    calculateAge: function(){
        return 2022 - this.birthYear
    }
}
console.log(john.calculateAge());

// more complex method (storing the result of the method in the object)
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1994,
    isMarried: false,
    job: 'teacher',
    family: ['jane', 'mark', 'bob', 'emily'],
    calculateAge: function(){
        this.age = 2022 - this.birthYear
    }
}

// john.age = john.calculateAge()

john.calculateAge()
console.log(john);