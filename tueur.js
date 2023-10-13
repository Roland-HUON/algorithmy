class tueur {
    constructor(nom, hp){
        this.nom = nom;
        this.hp = hp;
    }
}
let Jason = new tueur ("Jason", 100);

class pouvoir{
    constructor(caracteristique, mort, dommage, deathDommages){
        this.caracteristique = caracteristique;
        this.mort = mort;
        this.dommage = dommage;
        this.deathDommages = deathDommages;
    }
}

class Personnage{
    constructor(nom, caracteristique){
        this.nom = nom;
        this.caracteristique = caracteristique;
    }
}

let Nerd = new pouvoir("Nerd", 0.4, 0.3, 0.3);
let Blonde = new pouvoir("Blonde", 0.7, 0.15, 0.15);
let Sportif = new pouvoir("Sportif", 0.19, 0.51, 0.3);
let Mangeur = new pouvoir("Mangeur", 0.3, 0.4, 0.4);
let Solo = new pouvoir("Solo", 0.3, 0.3, 0.4);
let Alpha = new pouvoir("Alpha", 0.5, 0.25, 0.25);
let Victime = new pouvoir("Victime", 0.9, 0.02, 0.08);
let Leader = new pouvoir("Leader", 0.1, 0.7, 0.2);
let nom = ["Fred", "Lisa", "Leafa", "George", "Robert", "Pierrick", "Steave", "Élise"];
let caracteristique = [Nerd, Blonde, Sportif, Mangeur, Solo, Alpha, Victime, Leader];

let Perso=[];
for (let i=0; i<5; i++){
    let aleatoirePv = Math.floor(Math.random() * caracteristique.length);
    let Pv = caracteristique[aleatoirePv];
    Perso.push(Pv);
    caracteristique.splice(aleatoirePv,1);

    let aleatoireNom = Math.floor(Math.random() * nom.length);
    let name = nom[aleatoireNom];
    Perso.push(name);
    nom.splice(aleatoireNom,1);
}
console.log(Perso);
let PersonnageA = new Personnage (Perso[1], Perso[0]); 
let PersonnageB = new Personnage (Perso[3], Perso[2]); 
let PersonnageC = new Personnage (Perso[5], Perso[4]); 
let PersonnageD = new Personnage (Perso[7], Perso[6]); 
let PersonnageE = new Personnage (Perso[9], Perso[8]); 

let survivants = [PersonnageA, PersonnageB, PersonnageC, PersonnageD, PersonnageE];
console.log("L'équipe est contitué de " + 
PersonnageA.nom + ", " +
PersonnageB.nom + ", "+ 
PersonnageC.nom + ", "+ 
PersonnageD.nom + ", "+
PersonnageE.nom);
let morts = [];
let mortscount = 0;
while (Jason.hp > 0 && survivants.length > 0){
    let aleatoireAtk = Math.floor(Math.random()* survivants.length);
    let attack = survivants[aleatoireAtk];
    let destiny = Math.random(0,1);
    console.log(Jason.hp);
    console.log(destiny);
    console.log(survivants[aleatoireAtk]["caracteristique"].deathDommages);
    if (destiny < attack["caracteristique"].deathDommages){
        Jason.hp = Jason.hp - 15;
        morts.push(attack);
        mortscount++;
        survivants.splice(aleatoireAtk,1);
        // survivants.splice(attack, 1);
        console.log("Le survivant : " + attack["nom"] + " a infligé 15 de dégats à Jason mais il/elle est mort.");
        console.log(survivants);
    } else if (destiny < (attack["caracteristique"].deathDommages + attack["caracteristique"].dommage)){
        Jason.hp = Jason.hp - 10;
        console.log("Le survivant :" + attack["nom"] + " a esquivé et infligé 10 de dégats à Jason.");
    } else if (destiny <= (attack["caracteristique"].deathDommages + attack["caracteristique"].dommage + attack["caracteristique"].mort)){
        morts.push(attack);
        mortscount++;
        survivants.splice(aleatoireAtk,1);
        // survivants.splice(attack, 1);
        console.log("Le personnage " + attack["nom"] + " est mort.");
        console.log(survivants);
    }
    if (Jason.hp<=0){
        switch(mortscount){
            case 1:
                console.log("Les survivants ont gagnés mais RIP à " + morts[0]["nom"] +".");
                break;
            case 2:
                console.log("Les survivants ont gagnés mais RIP à " + morts[0]["nom"] + ", " + morts[1]["nom"] +".");
                break;
            case 3:
                console.log("Les survivants ont gagnés mais RIP à " + morts[0]["nom"] + ", " + morts[1]["nom"] + ", " + morts[2]["nom"] +".");
                break;
            case 4:
                console.log("Les survivants ont gagnés mais RIP à " + morts[0]["nom"] + ", " + morts[1]["nom"] + ", " + morts[2]["nom"] + ", " + morts[3]["nom"] +".");
                break;
            case 5:
                console.log("Les survivants ont gagnés mais RIP à " + morts[0]["nom"] + ", " + morts[1]["nom"] + ", " + morts[2]["nom"] + ", " + morts[3]["nom"] + ", " + morts[4]["nom"]+".");
                break;
            default:
                console.log("Les survivants ont gagnés personne est mort!");
        } 
    }
    if(survivants.length<=0){
        console.log("Jason a gagné");
        break;
    }
}

