// personnage
let personne = {
    nom : "seb",
    lieu : "",
    argent: 100,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu){
        personne.lieu = lieu.nom;
        maison.personnes = [];
        épicerie.personnes = [];
        lieu.personnes.push(personne.nom);
        console.log(`${personne.nom} est actuellement à la ${personne.lieu}`);

        // Teste si le tableau personnes de maison possède une valeur. 
        // Si une valeur existe, le message renvoie le nom de la personne qui se trouve dans la maison. 
        // Sinon, le message signale que la maison est vide.
        if(maison.personnes[0]){
            console.log(`La maison contient: ${maison.personnes[0]}`);
        }else{
            console.log("La maison est vide.");
        }

        // Teste si le tableau personnes d'épicerie possède une valeur. 
        // Si une valeur existe, le message renvoie le nom de la personne qui se trouve dans l'épicerie. 
        // Sinon, le message signale que l'épicerie est vide.
        if(épicerie.personnes[0]){
            console.log(`L'épicerie contient: ${épicerie.personnes[0]}`);
        }else{
            console.log("L'épicerie est vide.");
        }


    },
    // retirer le total du prix de mes articles à mon argent
    payerArticles(){
        personne.mainDroite[0].contenu.forEach(element => {
            personne.argent -= element.prix // ou personne.argent = personne.argent - element.prix
            
            console.log(`Après avoir payé ${element.nom} il me reste ${personne.argent}`);
        });
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
        prix: 4,
        état:"moulu"
    },
    fromage: {
        nom: 'fromage',
        prix: 5,
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
    paniers: [
        {
            type: "panier",
            contenu : []
        }
    ],
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

// déplace mon personnage dans la maison
personne.seDeplacer(maison);

// déplace mon personnage dans l'épicerie
personne.seDeplacer(épicerie);

// mets un panier dans ma main droite
personne.mainDroite.push(épicerie.paniers[0]);

// affiche le nombre de panier qu'il y a dans l'épicerie avant mon passage
console.log(`Nombre de panier(s) dans l'épicerie avant: ${épicerie.paniers.length} `);

// retire le panier que j'ai pris de l'épicerie
épicerie.paniers.pop(épicerie.paniers[0]);


// affiche ce que mon personnage possède dans sa main droite
console.log(`La main droite de ${personne.nom} contient un ${personne.mainDroite[0].type}`);

// affiche le nombre de panier qu'il y a dans l'épicerie après mon passage
console.log(`Nombre de panier(s) dans l'épicerie après: ${épicerie.paniers.length} `);

// rempli le contenu de mon panier avec les ingredients de l'épicerie
for (let i = 0; i < épicerie.ingrédients.length; i++) {
    personne.mainDroite[0].contenu.push(épicerie.ingrédients[i]);
    console.log(`${épicerie.ingrédients[i].nom} à été ajouter a mon panier`);
}

personne.payerArticles();




