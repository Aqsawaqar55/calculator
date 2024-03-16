import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the opretor to perfume action",
        type: "list",
        name: "opretor",
        choices: ["Addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.opretor === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opretor === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opretor === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opretor === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please enter valid opretor");
}
