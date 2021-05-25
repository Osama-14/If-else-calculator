let num_1 = +prompt("Enter First number");
let signs = prompt("Enter your operation");
let num_2 = +prompt("Enter Second number");

var answers;


if ( signs === '+') {

    answers = num_1 + num_2;
}

 else if ( signs === '-') {

    answers = num_1 - num_2;
}

 else if ( signs === '*') {

    answers = num_1 * num_2;
}

else {

    answers = num_1 / num_2;
}

// alert("Your total is"+ num_1 + num_2 = answers);


alert("Your total is"+ answers);
