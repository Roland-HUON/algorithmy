class Personnage{
    constructor(name, pouvoir){
        this.name = name;
        this.pouvoir = pouvoir;
    }
}
class power{
    constructor(name, win, lose){
        this.name = name;
        this.win = win;
        this.lose = lose;
    }
}
class bombe{
    constructor(name, activate, chancedef, chanceatk){
        this.name = name;
        this.activate = activate;
        this.chancedef = chancedef;
        this.chanceatk = chanceatk;
    }
}
let smoke = new power("smoke", 0.5, 0.5);
let killer = new power("killer", 0.8, 0.2);
let flasher = new power("flasher", 0.5, 0.5);
let none = new power("none", 0, 0);

let spike = new bombe("spike", false, 0.4, 0.6);

const nom = ["Omen", "Jett", "Phoenix", "Fade", "Chamber"];

let Omen = new Personnage(nom[0], smoke);
let Jett = new Personnage(nom[1], killer);
let Phoenix = new Personnage(nom[2], flasher);
let Fade = new Personnage(nom[3], none);
let Chamber = new Personnage(nom[4], none);

let attaquant = [Omen, Jett, Phoenix, Fade, Chamber];
let defenseur = [Jett, Phoenix, Fade, Chamber, Omen];
let mortsAttaquant = [];
let mortsAtk = 0;
let mortsDefenseur = [];
let mortsDef = 0;

let duel = ((kill, killer)=>{
    let randomAtk = Math.floor(Math.random()* 5);
    let randomDef = Math.floor(Math.random()*5);
    let attaque = killer[randomAtk];
    let defense = kill[randomDef];
    console.log(attaque["name"] + " has slay");
    console.log(defense["name"] + " has been slayed");
    kill.splice(randomDef,1);
    console.log("Le joueur " + attaque["name"] + " a éliminé le joueur " + defense["name"] + ".");
    if(kill == attaquant){
        console.log("mortsAtk")
        mortsAttaquant.push(defense);
        mortsAtk++;
    }
    if(kill == defenseur){
        console.log("mortsDef")
        mortsDefenseur.push(defense);
        mortsDef++;
    }
    return kill;
})

let deathcount = 0;
let teamA = 0;
let teamB = 0;
let manch = (() =>{
    while(attaquant.length>0 && defenseur.length>0){
        let destiny = Math.floor(Math.random()*2);
        while(deathcount <=0){
            deathcount++;
            console.log(deathcount);
            if (destiny === 0){
                //defenseur a tué
                let fight = duel(attaquant, defenseur);
                console.log(fight);
                mortsAttaquant.push(fight);
                let spikeChance = Math.random(0,1);
                if(spikeChance <= spike.chancedef){
                    spike.activate = true;
                    console.log("Spike posé");
                } else {
                    spike.activate = false;
                    console.log("Spike pas posé");
                }
            } else {
                //attaquant a tué
                let fight = duel(defenseur, attaquant);
                console.log(fight);
                mortsDefenseur.push(fight);
                let spikeChance = Math.random(0,1);
                if(spikeChance <= spike.chanceatk){
                    spike.activate = true;
                    console.log("Spike posé");
                } else {
                    spike.activate = false;
                    console.log("Spike pas posé");
                }
            }
        }
        if(spike.activate == true){
            let randomAtk = Math.floor(Math.random()* attaquant.length);
            let randomDef = Math.floor(Math.random()* defenseur.length);
            let fate = Math.random(0,1);
            if (fate <= 0.7){
                    let attaque = attaquant[randomAtk];
                    let defense = defenseur[randomDef];   
                    defenseur.splice(randomDef,1);
                    console.log("Le joueur attaquant " + attaque["name"] + " a éliminé le joueur " + defense["name"] + ".");
                    console.log(defenseur);
                    mortsDefenseur.push(defense);
                    mortsDef++;
            } else {
                    let attaque = attaquant[randomAtk];
                    let defense = defenseur[randomDef];   
                    attaquant.splice(randomAtk,1);
                    console.log("Le joueur défenseur " + defense["name"] + " a éliminé le joueur " + attaque["name"] + ".");
                    console.log(attaquant);
                    mortsAttaquant.push(attaque);
                    mortsAtk++;
            }
        } else {
            let randomAtk = Math.floor(Math.random()* attaquant.length);
            let randomDef = Math.floor(Math.random()* defenseur.length);
            let fate = Math.random(0,1);
            if (fate <= 0.5){
                    let attaque = attaquant[randomAtk];
                    let defense = defenseur[randomDef];   
                    defenseur.splice(randomDef,1);
                    console.log("Le joueur attaquant " + attaque["name"] + " a éliminé le joueur " + defense["name"] + ".");
                    console.log(defenseur);
                    mortsDefenseur.push(defense);
                    mortsDef++;
            } else {
                    let attaque = attaquant[randomAtk];
                    let defense = defenseur[randomDef];   
                    attaquant.splice(randomAtk,1);
                    console.log("Le joueur défenseur " + defense["name"] + " a éliminé le joueur " + attaque["name"] + ".");
                    console.log(attaquant);
                    mortsAttaquant.push(attaque);
                    mortsAtk++;
            }
        }
        console.log(attaquant.length + "reste attaquant");
        console.log(defenseur.length + " reste defenseur");
        if(attaquant.length === 0){
            teamB++;
            console.log("Les défenseurs ont remporté la manche " + round);
            console.log("Points attaquants : " + teamA);
            console.log("Point défenseurs :" + teamB);
            // break;
        }
        if(defenseur.length === 0){
            teamA++;
            console.log("Les attaquants ont remporté la manche " + round);
            console.log("Points attaquants : " + teamA);
            console.log("Point défenseurs :" + teamB);
        }
    }
})

let round = 1;

while (round <= 13){
    console.log(round);
    if (round % 3 === 0){
        let accurate = Math.random(0,1);
        console.log(accurate);
        if(accurate <= killer.win){
            let randomDef = Math.floor(Math.random()* defenseur.length);
            let defense = defenseur[randomDef]; 
            defenseur.splice(randomDef,1);
            console.log("La Jett attaquante a tué le défenseur " + defense["name"]);
            console.log(defenseur);
            console.log(defenseur.length + " reste defenseur");
        } else {
            console.log("La Jett attaquante a un mauvais aim. Report?");
            console.log(defenseur.length + " reste defenseur");
        }
    }
    manch();
    round++;
    attaquant = [Omen, Jett, Phoenix, Fade, Chamber];
    defenseur = [Jett, Phoenix, Fade, Chamber, Omen];
    deathcount = 0;
    // console.log(mortsAtk);
    // switch(mortsAtk){
    //     case 1:
    //         attaquant.push(mortsAttaquant[0]);
    //     case 2:
    //         attaquant.push(mortsAttaquant[0]);
    //         attaquant.push(mortsAttaquant[1]);
    //     case 3:
    //         attaquant.push(mortsAttaquant[0]);
    //         attaquant.push(mortsAttaquant[1]);
    //         attaquant.push(mortsAttaquant[2]);
    //     case 4:
    //         attaquant.push(mortsAttaquant[0]);
    //         attaquant.push(mortsAttaquant[1]);
    //         attaquant.push(mortsAttaquant[2]);
    //         attaquant.push(mortsAttaquant[3]);
    //     default :
    //     console.log("Aucun morts côté attaquant");
    // }
    // switch(mortsDef){
    //     case 1:
    //         defenseur.push(mortsDefenseur[0]);
    //     case 2:
    //         defenseur.push(mortsDefenseur[0]);
    //         defenseur.push(mortsDefenseur[1]);
    //     case 3:
    //         defenseur.push(mortsDefenseur[0]);
    //         defenseur.push(mortsDefenseur[1]);
    //         defenseur.push(mortsDefenseur[2]);
    //     case 4:
    //         defenseur.push(mortsDefenseur[0]);
    //         defenseur.push(mortsDefenseur[1]);
    //         defenseur.push(mortsDefenseur[2]);
    //         defenseur.push(mortsDefenseur[3]);
    //     default :
    //     console.log("Aucun morts côté défenseur");
    // }
    // mortsAttaquant=[];
    // mortsDefenseur=[];
    // mortsAtk = 0;
    // mortsDef = 0;
    console.log(attaquant);
    console.log(defenseur);
    if(round >=13){
        if(teamA<teamB){
            console.log("Les défenseurs ont remporté la partie .");
        } else {
            console.log("Les attaquants ont remporté la partie .");
        }
    }
}