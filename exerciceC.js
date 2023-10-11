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
let Mangeur = new pouvoir("Nerd", 0.3, 0.4, 0.4);
let Solo = new pouvoir("Nerd", 0.3, 0.3, 0.4);
let Alpha = new pouvoir("Nerd", 0.5, 0.25, 0.25);
let Victime = new pouvoir("Victime", 0.9, 0.02, 0.08);
let Leader = new pouvoir("Leader", 0.1, 0.7, 0.2);
const nom = ["Fred", "Lisa", "Leafa", "George", "Robert", "Pierrick", "Steave", "Élise"];
const caracteristique = [Nerd, Blonde, Sportif, Mangeur, Solo, Alpha, Victime, Leader];

const Perso=[];
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

const survivants = [PersonnageA, PersonnageB, PersonnageC, PersonnageD, PersonnageE];
const morts = [];
while (Jason.hp > 0 && survivants !=null){
    let aleatoireAtk = Math.floor(Math.random()* survivants.lenght);
    let attack = survivants[aleatoireAtk];
    let destiny = Math.random(0,1);
    console.log(attack);
    console.log(survivants[aleatoireAtk].deathDommages);
    if (destiny < attack.deathDommages){
        Jason.hp = Jason.hp -15;
        morts.push(attack);
        survivants.splice(attack, 1);
        console.log("Le survivant : " + attack + " a infligé 15 de dégats à Jason mais il est mort.");
        survivants.splice(aleatoireAtk,1);
    } else if (destiny < (attack.deathDommages + attack.dommage)){
        console.log("Le survivant :" + attack + " a esquivé et infligé 10 de dégats à Jason.");
    } else if (destiny <= (attack.deathDommages + attack.dommage + attack.mort)){
        morts.push(attack);
        survivants.splice(attack, 1);
        console.log("Le personnage " + attack + " est mort.");
    }
    if (Jason.hp<=0){
        morts.forEach((name)=>{
            console.log("Les survivants ont gagnés mais RIP à " + name +".");
        })
        break;
    }
    if(survivants = null){
        console.log("Jason a gagné");
        break;
    }
}

