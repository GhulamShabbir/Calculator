#!use/bin new env

import Inquirer from "inquirer";
import chalk from "chalk";
// import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

// const sleep =()=>{
//     return new Promise((res)=>{
//         setTimeout(res, 2000);
//     })
// }
    
async function welcome(){
   let title : string = chalk.blue.bold(`--------------Lets start calculation--------------`);  // start
   console.log(title);
   
}

welcome();

async function structure(){
    console.log(chalk.redBright( `     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`) );
  // console.log(`$(rainboeTitle) is fine`);
}



async function askQuestion(){
  const answer = await inquirer .prompt([
      {
          name : "operation",
          type : "list",
          message : "Which operation you wanna perform: ",
          choices : ['Addition' , 'Subtraction' , 'Multiplication' , 'Division']
      },
      {
          name : 'num1' , 
          type : 'number' ,
          message : 'Enter first number: '
      },
      {
          name : 'num2' , 
          type : 'number' ,
          message : 'Enter second number: '
      }
  ])

  if (answer.operation == 'Addition'){
      console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);  
  } else if (answer.operation == 'Subtraction'){
      console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);  
  } else if (answer.operation == 'Multiplication'){
      console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);  
  } else if (answer.operation == 'Division'){
      console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);  
  } 
};



async function startAgain(){
    do{
    await welcome()
    await structure();
    await askQuestion();
    
    var again = await Inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n: "
       
    },
  ])
  }while(again.restart == `y`|| again.restart == `y` || again.restart == `yes` || again.restart == `YES`
    )
};
startAgain()