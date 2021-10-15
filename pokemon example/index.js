const inquirer = require("inquirer")
const Pokemon = require("./lib/Pokemon")
const Trainer = require("./lib/Trainer")
const pikachu = new Pokemon("Pikachu",100,10,1)
const charmander = new Pokemon("Charmander",60,20,1)
const squirtle = new Pokemon("Squirtle",90,12,1)
const bulbasaur = new Pokemon("Bulbasaur",140,6,1)
const trainerArr = []

function startGame() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name, Pokemon Trainer?"
    },
    {
        type: "list",
        name: "starter",
        message: "Which starter Pokemon would you like to choose?",
        choices: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"]
    }
]).then((data) => {
    const pokeArr = []
    switch (data.starter) {
        case "Pikachu": pokeArr.push(pikachu)
            
            break;
        case "Charmander": pokeArr.push(charmander)
            
            break; 
        case "Squirtle": pokeArr.push(squirtle)
            
            break;   
        case "Bulbasaur": pokeArr.push(bulbasaur)
            
            break;        

    }
    trainerArr.push(new Trainer(data.name, pokeArr))
    mainMenu()
}
)}
function makeANewPokemon(trainer) {
    inquirer.prompt([
        {
            type: "input",
            name: "pokemon",
            message: "What kind of Pokemon did you catch?"
        },
        {
            type: "input",
            name: "hp",
            message: "How many hit points does it have?"
        },
        {
            type: "input",
            name: "atk",
            message: "How many attack points does it have?"
        }
    ]).then((data) => {
        trainer.addPokemon(data.pokemon,parseInt(data.hp),parseInt(data.atk),1)
        console.log(trainer.pokemon)
        mainMenu()
    })
}
function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            choices: ["Catch a Pokemon", "Make a new trainer","Look at a random Pokemon","View your Trainers", "Battle", "Quit"],
            message: "What would you like to do?"
        }
    ]).then((data) => {
        switch (data.menu) {
            case "Catch a Pokemon": inquirer.prompt([
                {
                 type: "rawlist",
                 choices: trainerArr,
                 name: "trainer",
                 message: "Which trainer will catch the new Pokemon?"   
                }    
            ]).then((data) => {for (const trainer of trainerArr) {
                if(data.trainer = trainer.name) {makeANewPokemon(trainer)}
                
            }})
                
                break; 
            case "Quit" : return      
    
        }

    })
}
startGame()
