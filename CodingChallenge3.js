function tipCalculator (bills){
    if(bills < 50){
        return bills * 0.2
    }else if(bills >= 50 && bills <= 200){
        return bills * 0.15
    }else{
        return bills * 0.1
    }
}

// console.log(tipCalculator(300));

var bills = [124, 48, 268]

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]

var paidAmount = [tips[0]*2, tips[1]*2, tips[2]*2]

console.log(tips, paidAmount);

// function tipCalculator (bills){
//     var percentage;
//     if(bills < 50){
//         percentage = .2
//     }else if(bills >= 50 && bills <= 200){
//         percentage = .15
//     }else{
//         percentage = .1
//     }

//     return percentage * bills
// }

// // console.log(tipCalculator(300));
// var bills = [124, 48, 268]

// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2]) ]
// // console.log(tips);

// var paidAmount = [tips[0] * 2, tips[1] * 2, tips[2] * 2]
// console.log(tips, paidAmount);