let musique = ["Anissa - Wejdene", "B2B", "A2A", "C2C", "L2L"];
class Personnage {
    constructor(nom, sante){
        this.nom = nom;
        this.sante = sante;
    }
}
let John = new Personnage ("John", 10);
let changements = 0;
let redlight = 0;

while(redlight < 30 && John.sante > 0){
    let aleatoire = Math.floor(Math.random() * 5);
    let musiqueAleatoire = musique[aleatoire];
    console.log(musiqueAleatoire);
    if (musiqueAleatoire === "Anissa - Wejdene"){
        John.sante = John.sante - 1;
        changements++;
    }
    redlight++;
    let redlightfinal = 30 - redlight; 
    console.log("Il reste " +  redlightfinal +" feux restants.");
    console.log(changements + " taxi requis.");
    console.log("La santé de John est à: " + John.sante);
    if(John.sante <= 0){
        console.log("Explosion !!");
        break;
    }
    if(redlight>=30){
        console.log("John est arrivé!");
    }
}

