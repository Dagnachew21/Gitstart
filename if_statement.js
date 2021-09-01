const prompt = require('prompt-sync')();
let grade = prompt('Please enter your grade:  ');


let gpa;
//gpa=parseFloat(gpa);
switch (grade) {
  case 'A':
      gpa = 4.0
      break;
  case 'B' :
     gpa = 3.6;
     break;
  case 'C' :
     grade = 3.2;
     break;
  default :
    gpa = 0.0; //comment
        
}

console.log(parseFloat(gpa));