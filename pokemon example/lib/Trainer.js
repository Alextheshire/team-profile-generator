const Pokemon = require("./Pokemon.js")
class Trainer {
    constructor(name,pokemon) {
        this.name = name;
        this.pokemon = pokemon || [];
    }
    addPokemon(name,hp,atk) {
        const newPokemon = new Pokemon(name,hp,atk,1);
        this.pokemon.push(newPokemon)
    }
    getRandomPokemon() {
        let i = Math.floor(Math.random()*this.pokemon.length)
        console.log(this.pokemon[i])
        return this.pokemon[i]
    }
}
module.exports = Trainer