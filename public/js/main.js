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
    // change l'état d'un ingrédient à coupé seulement si l'état est entier
    couper(ingrédient) {
        if (ingrédient.état == "entier") {
            ingrédient.état = "coupé";
            console.log (`${ingrédient.nom} a changé d'état et est maintenant ${ingrédient.état}`);
        } else {
            console.log (`${ingrédient.nom} est déjà à l'état ${ingrédient.état}`);
        }
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
    cuire(){
        setTimeout(()=> {
            this.contenu[0].état = "cuit",
            console.log(`Mon ${poele.contenu[0].nom} est maintenant à l'état ${poele.contenu[0].état}`);
    }, 4000)
    }
}


let bol={
    contenu: [],
    // va créer un nouvel objet "nouveauMélange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj nouveauMélange]
    mélanger(nomMélange){
        // crée un nouvel objet avec deux propriété. Le nom reçoit le paramètre reçu en entrée (input).
        const nouveauMélange = {
            nom: nomMélange,
            état: "pas cuit"
        }
        this.contenu = [];
        this.contenu.push(nouveauMélange);
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

personne.seDeplacer(maison);

// mettre ingrédients du panier de ma main droite dans mon bol
for (let i = 0; i <personne.mainDroite[0].contenu.length; i++) {
    bol.contenu.push(personne.mainDroite[0].contenu[i]);
    console.log(`${bol.contenu[i].nom} à été ajouté dans mon bol`);
}
personne.mainDroite[0].contenu = [];
console.log(`Le contenu du panier de ma main droite a ${personne.mainDroite[0].contenu.length} élément(s) `);

personne.seDeplacer(épicerie);


console.log(`Nombre de panier(s) dans l'épicerie avant: ${épicerie.paniers.length} `);
épicerie.paniers.push(personne.mainDroite[0]);

console.log(`Nombre de panier(s) dans l'épicerie après: ${épicerie.paniers.length} `);
personne.mainDroite.pop(épicerie.paniers[0]);

console.log(`Ma main contient ${personne.mainDroite.length} élément`);

personne.seDeplacer(maison);


for (let i = 0 ; i < bol.contenu.length ; i++) {
    personne.couper(bol.contenu[i]);
}

// Je peux aussi faire une boucle avec le foreach
// bol.contenu.forEach(element => {
//     personne.couper(element);
// });

 // Mélange le contenu de mon bol et crée un nouveau mélange appelé 'omelette'. La méthode vide le contenu de mon bol et rajoute ce nouveau mélange.
bol.mélanger("omelette");
console.log(`Mon bol contient une ${bol.contenu[0].nom} qui a l'état: ${bol.contenu[0].état}`);
console.log(`Mon bol contient ${bol.contenu.length} élément(s)`);

// vide le mélange qui se trouve dans le contenu de mon bol et le met dans ma poele

poele.contenu.push(bol.contenu[0]);
console.log(`${poele.contenu[0].nom} à été ajouté dans ma poele`);
console.log(`Ma poele contient ${poele.contenu.length} élément(s)`);

//
bol.contenu = [];
console.log(`Mon bol contient ${bol.contenu.length} élément(s)`);

// utilise la méthode cuire pour cuire mon omelette et affiche le nouvel état de l'omette
poele.cuire();

