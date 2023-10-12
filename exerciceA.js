class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    isLuck(){
        let luck = Math.random(0,1);
        return luck;
    }
}
let Dracaufeu = new Pokemon ("Dracaufeu", 100, 75, 175, 0.62);
let Tortank = new Pokemon ("Tortank", 90, 90, 200, 0.5);

let attack = ((pokemon1, pokemon2)=>{
    let degats = pokemon1.attack - pokemon2.defense;
    return degats;
})

while (Dracaufeu.hp > 0 && Tortank.hp > 0){
    let luckDracaufeu = Dracaufeu.isLuck();
    console.log(luckDracaufeu);

    if (luckDracaufeu < Dracaufeu.luck){
        let degatsDracaufeu = attack(Dracaufeu, Tortank);
        Tortank.hp = Tortank.hp - degatsDracaufeu;
        console.log("Tortank a subit :" + degatsDracaufeu + " de dégats.");
    } else {
        console.log("Tortank a esquivé");
    }

    console.log("La vie de Tortank est de :" + Tortank.hp +".");
    if(Tortank.hp <=0){
        console.log("Tortank a perdu");
        break;
    }
    

    let luckTortank = Tortank.isLuck();
    console.log(luckTortank);
    if (luckTortank < Tortank.luck){
        let degatsTortank = attack(Tortank, Dracaufeu);
        Dracaufeu.hp = Dracaufeu.hp - degatsTortank;
        console.log("Dracaufeu a subit :" + degatsTortank + " de dégats.");
    }
    console.log("La vie de Dracaufeu est de :" + Dracaufeu.hp +".");
    if (Dracaufeu.hp <= 0){
        console.log("Dracaufeu a perdu");
    }
} 
// Dracaufeu.hp === 0? console.log("Dracaufeu a perdu") : console.log("Tortank a perdu");