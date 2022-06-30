// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12; 

function fight(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.");

    if(promptFight === 'fight' || promptFight === 'FIGHT'){
        enemyHealth = enemyHealth - playerAttack; 
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }else{
            window.alert(playerName + " still has "+playerHealth+ " health left.");
        }
    }else if(promptFight == "skip" || promptFight === "SKIP"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip){
            window.alert(playerName+ " has chose to skip the fight!");
            playerMoney = playerMoney - 2;
        }else{
            fight();
        }
        
    }else{
        window.alert("You need to choose a valid option. Try again!");
    }
    

    playerHealth = playerHealth - enemyAttack;

   

    if (playerHealth <= 0) {
        window.alert(playerHealth + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
}

fight();