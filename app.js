const max = prompt("Enter the max num");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
while (true) {
    if (guess == "quit") {
        console.group("Quit the game");
        break;
    }
    if (guess == random) {
        console.log("You are right! Congrats!! Random number", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint:Your guess was too small.Please try again");
    } else {
        guess = prompt("hint:Your guess was too large.Please try again");
    }
}