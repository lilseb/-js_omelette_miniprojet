// personnage
let personne = {
    nom : "seb",
    lieu : "",
    argent: 0,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu){
        personne.lieu = lieu.nom;
        maison.personnes = [];
        épicerie.personnes = [];
        lieu.personnes.push(personne.nom);
        console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);
        console.log(`La maison contient: ${maison.personnes[0]}`);
        console.log(`L'épicerie contient: ${épicerie.personnes[0]}`);

    },
    payerArticle(){

    },
    couper() {

    },
}
//////////////////////////////////////////////////////////

// ingrédients
let produits = {
    oignon: {
        nom: 'oignon',
        prix: 2,
        état: "entier"
    },
    oeuf: {
        nom: 'oeuf',
        prix: 3,
        état:"coupé"
    },
    épice: {
        nom: 'épice',
        prix: 3,
        état:"moulu"
    },
    fromage: {
        nom: 'fromage',
        prix: 3,
        état:"coupé"
    }
}
///////////////////////////////////////////////////////////// 

// lieu
let maison = {
    nom: "maison",
    personnes: [],
    couteau(nom, action){
    }
}


let épicerie = {
    nom: "épicerie",
    personnes: [],
    paniers : [],
    ingrédients:[produits.oignon, produits.oeuf,produits.épice, produits.fromage]
}
///////////////////////////////////////////////////////////////////////////////

// outils
let couteau={
    nom : "couteau",
    action : "coupé"
}


let poele={
    contenu: [],
    cuir(){
        setTimeout(()=> {this.contenu.push("cuit")}, 4000)
    }
}


let bol={
    contenu: [],
    // va créer un nouvel objet "nouveauMélange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj nouveauMélange]
    mélanger(nomMélange){
        const nouveauMélange = {
            nom: nomMélange,
            état: "pas cuit"
        }
        this.contenu.push(nouveauMélange)
    }


}
///////////////////////////////////////////////////////////////////////////////////
personne.seDeplacer(maison)
personne.seDeplacer(épicerie)


