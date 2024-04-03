import inquirer from "inquirer";
import chalk from "chalk"

let todolist = [];
let conditions = true;
console.log(chalk.blue.bold('\n \t welcome to codewithFaheela - Todo-list Application\n '));

while(conditions ) {
let addTask = await inquirer.prompt([
    { name:"task",
      type:"input",
      message:chalk.green("Enter Your New Task")
},
]);
todolist.push(addTask.task);
console.log(chalk.magenta(`\n\t${addTask.task} added task todolist successfully\n\t`))

let addMoreTask = await inquirer.prompt([
  { name:"addMore",
    type:"confirm",
    message:chalk.yellow("Do you want to add more task?"),
    default:"False"

}
]);
conditions = addMoreTask.addMore
}
console.log(chalk.blueBright("your updated Todo-list:", todolist));


