const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// this function should contain the bonus percentage the employee is to receive.
function bonusCalc(employee) {
  
  let bonusPercent = 0;
  let employeeNumber = employee.employeeNumber;
  console.log(employeeNumber);
  let reviewScore = employee.reviewRating;
  console.log(reviewScore);
  let annualIncome = employee.annualSalary;
  console.log(annualIncome);

  function ratingCalc(reviewScore)
  {
    if( reviewScore <= 2 ){
    bonusPercent = 1
    }
    else if (reviewScore === 3){
    bonusPercent = 1.04
    }
    else if ( reviewScore === 4){
    bonusPercent = 1.06
    }
    else if ( reviewScore === 5){
    bonusPercent = 1.10
    }
  }

  function employNumberCalc(employeeNumber)
  {
    if(employeeNumber.length === 4 )
    {
      bonusPercent += .05
    }
  }

  function annualIncomeCalc(annualIncome)
  {
    if(annualIncome > 65000 )
    {
      bonusPercent -= .01
    }
  }

  function maxMinBonusGate(totalPercent)
  {
    if(totalPercent < 1)
    {
      bonusPercent = 1
    }
    else if(totalPercent > 1.13) 
    {
      bonusPercent = 1.13
    };
  }
  
  
  ratingCalc(reviewScore);
  
  employNumberCalc(employeeNumber);
  
  annualIncomeCalc(annualIncome);
  
  maxMinBonusGate(bonusPercent);
  

  return bonusPercent;
}

console.log(bonusCalc(employees[0]));
console.log(bonusCalc(employees[1]));
console.log(bonusCalc(employees[2]));


// this function should be the adjusted annual compensation (base annual + bonus)
// function totalCompCalc(params) {
  
function totalCompCalc(employee, calcFunction){
  let employeeIncome = employee.annualSalary
  let employeeBonusMult = calcFunction(employee)
  let totalComp = parseInt(employeeBonusMult * employeeIncome)
  return totalComp
}
console.log(totalCompCalc(employees[2], bonusCalc));

// function BonusMetrics(employee){
//   this.name = employee.name
//   this.bonusPercentage = bunusCalc(employee)
// }

function totalBonus(employee, bonusCalc){
  let bonusPercent = (bonusCalc(employee) - 1)
  let totalBonus = bonusPercent * employee.annualSalary 
  return totalBonus 
}
console.log(totalBonus(employees[2], bonusCalc));