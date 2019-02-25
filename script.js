// /****************************
//   Variables and data types
// */


// //console.log('Hello World!!!');

// // var firstName = 'Hamza';
// // console.log(firstName);

// // var lastName = 'Abousaid';
// // var age = 24;


// // var fullAge = true;
// // console.log(fullAge);

// // var job;
// // console.log(job);

// // job = 'Teacher';
// // console.log(job);

// // // Variable naming rules
// // var _3years = 3;
// // var johnMark = 'Jogn and Mark';
// // //var if = 23;

// /****************************
//   Variables mutation and type corction
// */

// var firstName = 'Hamza';
// var age = 24;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName +' is a ' + age + ' year old, '+ job +'. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty four';
// job = 'driver';
// alert(firstName +' is a ' + age + ' year old, '+ job +'. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

/**********************
* Basic operators 
*/

// var now, yearHamza, yearMehdi;

// now = 2019;
// ageHamza = 25;
// ageMehdi = 27;

// // Math Operators
// yearHamza = now - ageHamza;
// yearMehdi = now - ageMehdi;

// console.log(yearHamza);
// console.log(now + 1);
// console.log(now * 2);
// console.log(now / 100);

// // Logical operators
// var mehdiOlder = ageMehdi > ageHamza;
// console.log(mehdiOlder);

// // typeof operator

// console.log(typeof mehdiOlder);
// console.log(typeof ageHamza);
// console.log(typeof 'Mehdi is older than Hamza');
// var x;
// console.log(typeof x);

/************************
 *  Operattor precedence
 */

//  var now = 2019;
//  var yearHamza = 1994;
//  var fullAge = 20;

//  // Multiple operators
//  var isFullAge = now - yearHamza >= fullAge; // true
//  console.log(isFullAge);
// // Groupping
//  var ageHamza = now - yearHamza;
//  var ageMehdi = 26;
//  var average = (ageHamza + ageMehdi) / 2;
//  console.log(average);

//  // Multiple assignment
//  var x, y;
//  x = y = (4 + 5) * 4 - 6; // 9 * 4 - 6 // 36 - 6 // 30 
//  console.log(x, y);

// // More operators
// var x = 7;
// x = x * 2;
// x *=2;
// x += 10;
// console.log(x); 
// x++;
// console.log(x); 
// x--;
// console.log(x); 

/*********************
 * Coding Challenge 1
 */
/*
 * Mark and John 
 */

// var hamza ={
//   mass :  74,
//   height : 1.75
// };
// var mehdi = {
//   mass : 70,
//   height : 1.78
// };

// var bmiHamza = hamza.mass / (hamza.height * hamza.height);
// var bmiMehdi = mehdi.mass / (mehdi.height * mehdi.height);
// console.log(bmiHamza, bmiMehdi);
// var compare =  bmiHamza > bmiMehdi;
// console.log( 'Is Hamza\'s BMI heigher than Mehdi\'s? ' + compare);

/*******************
 * If / else statements
 */

//  var firstName = 'Mehdi';
//  var civilStatus = 'single';
 
//  if (civilStatus === 'married') {
//    console.log(firstName + ' is married!');
//   } else {
//     console.log(firstName + ' is single!');
//   }
  
// var firstName = 'Hamza';
// var isNotMarried = true;

// if (isNotMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is single!');
// }


/***********************
 * Boolean logic
 */

//  var firstName = 'Hamza';
//  var age = 24;

//  if(age < 14){
//    console.log(firstName + ' is a boy.');
//   } else if (age > 14 && age <= 18) {
//     console.log(firstName + ' is a teenager.');
//   } else if (age > 18 && age <= 30) {
//     console.log(firstName + ' is a young man.');
//   } else {
//     console.log(firstName + ' is a man.');
//  }

/*********************************
 * The Ternary Operator and Switch  Statements
 */

//  var firstName = 'Mehdi';
//  var age = 26;
 
//  // Ternary operator
//  age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
 
//  var drink = age >= 18 ? 'beer' : 'juice';
//  console.log(drink);

//  if(age >= 18){
//    var drink = 'beer';
//  } else {
//    var drink = 'juice';
//  }

// // Switch statement
// var job = 'driver'; 
// switch (job) {
//   case 'teacher':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon.');
//     break;
//   case 'driver':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default :
//     console.log(firstName + ' does something else.'); 
// }

// var age = 26;

// switch(true){
//  case age < 14 : 
//    console.log(firstName + ' is a boy.');
//    break;
//  case age > 14 && age <= 18 :
//    console.log(firstName + ' is a teenager.');
//    break;
//  case age > 18 && age <= 30 :
//    console.log(firstName + ' is a young man.');
//    break;
//  default :
//    console.log(firstName + ' is a man.');  
// }

/*****************
 * Truthy and Falsy values and equality operators
 */

 // falsy values : undefined, null, 0, '', NaN
// truthy values : NOT falsy values

// var height; 
// height = 23;
// if( height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined')
// }

// // Equality operators
// if(height == '23'){
//   console.log('The == operator does type coercion!');
// }

/*******************
 * CODING Challenge 
 */

//  teamHamza = {
//    score1 : 89,
//    score2 : 120, 
//    score3 : 103
//  };

//  teamMehdi = {
//   score1 : 116,
//   score2 : 94, 
//   score3 : 123
// };
// teamMery = {
//   score1 : 97,
//   score2 : 134, 
//   score3 : 105
// };

// avrgScoreH = (teamHamza.score1 + teamHamza.score2 + teamHamza.score3) / 3;
// avrgScoreM = (teamMehdi.score1 + teamMehdi.score2 + teamMehdi.score3) / 3;
// avrgScoreMery = (teamMery.score1 + teamMery.score2 + teamMery.score3) / 3;

// console.log(avrgScoreH, avrgScoreM, avrgScoreMery);



// // if(avrgScoreH > avrgScoreM) {
// //   console.log("the winner is the team of Hamza with " + avrgScoreH);
// // } else if(avrgScoreH < avrgScoreM) {
// //   console.log("the winner is the team of Mehdi with " + avrgScoreM);
// // } else {
// //   console.log('There is  a draw');
// // }

// if( avrgScoreH > avrgScoreM && avrgScoreH > avrgScoreMery){
//   console.log('Hamza\'s team wins with ' + avrgScoreH);
// } else if(avrgScoreM > avrgScoreH && avrgScoreM > avrgScoreMery) {
//   console.log('Mehdi\'s team wins with ' + avrgScoreM);
// } else if (avrgScoreMery > avrgScoreH && avrgScoreMery > avrgScoreM) {
//   console.log('Meryem\'s team wins with ' + avrgScoreMery);
// } else {
//   console.log('There is a draw');
// }


/************************
 * Functions
 */

//  function calculateAge (birthYear) {
//   return 2019 - birthYear;
//  }

//  var ageHamza = calculateAge(1994);
//  var ageMehdi = calculateAge(1992);
//  var ageMeryem = calculateAge(1992);
//  var ageHajar = calculateAge(1996);
//  console.log(ageHamza, ageMehdi, ageMeryem, ageHajar);

//  function yearsUntilRetirement(year, firstName) {
//    var age = calculateAge(year);
//    var retirement = 65 - age; 
//    if(retirement > 0 ){
//      console.log(firstName + ' retires in ' + retirement + ' years.' );
//    } else {
//      console.log(firstName + ' is already retired.')
//    }
//  } 

//  yearsUntilRetirement(1992, 'Mehdi');
//  yearsUntilRetirement(1993, 'Salah');
//  yearsUntilRetirement(1994, 'Hamza');

/**********************************
 * Function Statements and Expressions 
 */

 // Function declaration
 //function whatDoYouDo(job, firstName) {}

 // Function expression 
//  var whatDoYouDo = function(job, firstName) {
//    switch(job) {
//      case 'teacher' : 
//       return firstName + ' teaches kids how to code.';
//      case 'driver' :
//       return firstName + ' drives a cab in Lisbon.';
//      case 'designer' :
//       return firstName + ' designs beautiful websites.';
//      default :
//       return firstName + ' does something else.';
//    }
// }

// console.log(whatDoYouDo('teacher', 'Hamza'));
// console.log(whatDoYouDo('designer', 'Mehdi'));

/********************************
 * Arrays
 */

//  var names =  ['Mehdi', 'Hamza', 'Meryem', 'Hajar'];
//  var years = new Array(1992, 1994, 2001, 1996);
//  console.log(names);
//  console.log(names.length);

//  names[0] = 'MEHDI';
//  names[names.length] = 'Salah';
//  console.log(names);

//  // Different data types 
//  var mehdi = ['mehdi', 'el Bejjaji', 1992, 'designer', false];
//  mehdi.push('Settat');
//  mehdi.push('Blue');
//  mehdi.unshift('Mr.');

//  mehdi.pop();
//  mehdi.shift();
//  console.log(mehdi);
//  console.log(mehdi.indexOf(1992)); // if don't include into the array, return -1.

//  var isDesigner = mehdi.indexOf('designeer') === -1 ? 'Mehdi is NOT a designer' : 'Mehdi is a designer';
//  console.log(isDesigner);

 /******************************
  * Coding Challenge 2
  */

  // function tipCalculator(bill) {
  //   var percentage; 
  //   if(bill < 50){
  //     percentage = .2;
  //   } else if(bill >=  50 && bill < 200){
  //     percentage = .15;
  //   } else {
  //     percentage = .1;
  //   }
  //   return percentage * bill;
  // }

  // var bills = [124, 48, 268];
  // var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

  // var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ];
  // console.log(tips, finalValues);


  /*************************
   * Objects and properties
   */

   // Object literal
  //  var hamza = {
  //    firstName: 'Hamza',
  //    lastName: 'Abousaid',
  //    birthYear: 1994,
  //    familly: ['med', 'malika', 'salah', 'meryem'],
  //    job: 'eco',
  //    isMarried: false
  //  };

  //  console.log(hamza);
  //  console.log(hamza.firstName);
  //  console.log(hamza['lastName']);
  //  var x = 'birthYear';
  //  console.log(hamza[x]);

  //  hamza.job = 'designer';
  //  hamza['isMarried'] = true;
  //  console.log(hamza);

  //  // new Object syntax
  //  var mehdi = new Object();
  //  mehdi.name = 'Mehdi';
  //  mehdi['lastName'] = 'El bejjaji';
  //  mehdi.birthYear = 1992;
  //  console.log(mehdi);

   /***********************
    * Objects and methods
    */

  //  var hamza = {
  //   firstName: 'Hamza',
  //   lastName: 'Abousaid',
  //   birthYear: 1994,
  //   familly: ['med', 'malika', 'salah', 'meryem'],
  //   job: 'eco',
  //   isMarried: false,
  //   calcAge: function(){
  //     this.age =  2019 - this.birthYear;
  //   }
  // };

  // hamza.calcAge();
  // console.log(hamza);


  /******************************
  * Coding Challenge 4
  */

  // var hamza = {
  //   fullName : 'Abousaid Hamza',
  //   mass: 74,
  //   height: 1.75, 
  //   calcBMI: function() {
  //     this.bmi = this.mass / (this.height * this.height);
  //     return this.bmi;
  //   }
  // }

  // var mehdi = {
  //   fullName : 'El Bejjaji Mehdi',
  //   mass: 70,
  //   height: 1.79, 
  //   calcBMI: function() {
  //     this.bmi = this.mass / (this.height * this.height);
  //     return this.bmi;
  //   }
  // }

 
  // if(hamza.calcBMI() > mehdi.calcBMI()) {
  //   console.log(hamza.fullName + ' has a higher BMI of ' + hamza.bmi);
  // } else if (mehdi.bmi > hamza.bmi) {
  //   console.log(mehdi.fullName + ' has a higher BMI of ' + mehdi.bmi);
  // } else {
  //   console.log('They have the same BMI');
  // }

  /************************
   * Loops and iteration
   */

  //  for (var i = 1; i <= 20; i+=5){
  //    console.log(i);
  //  }

   // i = 0, 0 < 10 true, log i to console, i++
   // i = 1, 1 < 10 true, log i to console, i++
   // ...
   // i = 9, 9 < 10 true, log i to console, i++
   // i = 10, 10 < 10 false, exist the loop!

  //  var mehdi = ['mehdi', 'el Bejjaji', 1992, 'designer', false];

  //  // for loop
  //  for (var i = 0; i< mehdi.length; i++){
  //    console.log(mehdi[i]);
  //  }

  //  // while loop
  //  var i = 0;
  //  while(i < mehdi.length){
  //    console.log(mehdi[i]);
  //    i++;
  //  }

  // continue and break statements
  //  var mehdi = ['mehdi', 'el Bejjaji', 1992, 'designer', false, 'blue'];

  //  // for loop
  //  for (var i = 0; i< mehdi.length; i++){
  //    if(typeof mehdi[i] !== 'string') continue;
  //    console.log(mehdi[i]);
  //  }

  //  for (var i = 0; i< mehdi.length; i++){
  //   if(typeof mehdi[i] !== 'string') break;
  //   console.log(mehdi[i]);
  // }
  
  // // Looping backwards
  // for ( var i = mehdi.length -1; i >= 0; i--){
  //   console.log(mehdi[i]);
  // }

  /****************************************
   * Coding Challenge 5
   */

   var mehdi = {
     fullName: 'Mehdi El Bejjaji',
     bills: [124, 48, 268, 180, 42],
     calcTips: function() {
       this.tips = [];
       this.finalValues = [];

       for(var i = 0; i < this.bills.length; i++){
         // Determine percentage based on tipping rules
          var percentage;
          var bill = this.bills[i];

          if(bill < 50) {
            percentage = .2;
          } else if(bill >= 50 && bill < 200) {
            percentage = .15;
          } else {
            percentage = .1;
          }
          // Add results to the corresponing arrays
          this.tips[i] = bill * percentage;
          this.finalValues[i] = bill + bill * percentage;
      }
     }
   }

   var hamza = {
    fullName: 'Hamza Abousaid',
    bills: [77, 475, 110, 45],
    calcTips: function() {
      this.tips = [];
      this.finalValues = [];

      for(var i = 0; i < this.bills.length; i++){
        // Determine percentage based on tipping rules
         var percentage;
         var bill = this.bills[i];

         if(bill < 100) {
           percentage = .2;
         } else if(bill >= 100 && bill < 300) {
           percentage = .1;
         } else {
           percentage = .25;
         }
         // Add results to the corresponing arrays
         this.tips[i] = bill * percentage;
         this.finalValues[i] = bill + bill * percentage;
     }
    }
  }

  function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
      sum += tips[i];
    }
    return sum / tips.length;
  }

  // Do the calculations
   mehdi.calcTips();
   hamza.calcTips();
   console.log(mehdi, hamza);
   
   mehdi.average = calcAverage(mehdi.tips);
   hamza.average = calcAverage(hamza.tips);
   console.log(mehdi, hamza);

   if (mehdi.average > hamza.average) {
    console.log(mehdi.fullName + '\'s family pays higher tips, with an average of $' + mehdi.average);
  } else if (hamza.average > mehdi.average) {
    console.log(hamza.fullName + '\'s family pays higher tips, with an average of $' + hamza.average);
   }
   