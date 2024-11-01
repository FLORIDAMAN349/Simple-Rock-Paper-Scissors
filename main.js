//This function returns "rock", "paper", or "scissors" based on a random integer.
function getComputerPick(){ 
    
    //initialize with a random integer between 1 and 3.
    var computerChoice = Randomizer.nextInt(1,3)
    
    
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else if (computerChoice == 3) {
        return "scissors";
    } else {
        println ("Something is wrong please reload the page");
    }
}


//This function asks the user for a choice and returns that choice
function getUserPick() { 
   
    //This loop will keep running until a valid choice is typed
    while (true) {
        var userChoice = readLine("Please pick 'rock', 'paper', or 'scissors': ");
        println("");
        
        if ((userChoice == "rock") || (userChoice == "paper") || (userChoice == "scissors")) {
            return userChoice;
        } else {
            println("Please type 'rock', 'paper', or 'scissors' only");
        }
    }
}

//This function inputs both the user and random computer choice and compares them
//in order to determine the winner
function playRockPaperScissors(user, computer) {

    if ((user == "rock" && computer == "scissors") || (user == "scissors" && computer == "paper") || (user == "paper" && computer == "rock")) {
        println("You picked "+user);
        println("and the computer picked "+computer);
        println("...YOU WIN! :D");
    } else if (user == computer) {
        println("You both picked "+user);
        println("...YOU TIED");
    } else {
        println("You picked "+user);
        println("and the computer picked "+computer);
        println("...YOU LOSE! :(");
    }
}

//calls the pick functions and plays the game!
var userPick = getUserPick();
var computerPick = getComputerPick();
playRockPaperScissors(userPick, computerPick);
