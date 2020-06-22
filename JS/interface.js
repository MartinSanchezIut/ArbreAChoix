let retour = document.getElementById("retour");
retour.addEventListener("click", function () {
    let id = listeChoix[listeChoix.length -1];
    //console.log(listeChoix[listeChoix.length -1]) ;
    printChoix(id);
});
let retourdebut = document.getElementById("retourdebut");

let listeChoix = [] ;
let listeImportant = [] ;
let async = true ;

function printChoix(id) {
    clearReponses();

    let url = "php/afficherChoixID.php?id=" + id;
    let requete = new XMLHttpRequest();
    requete.open("GET", url, async);
    requete.addEventListener("load", function () {

        let choix = JSON.parse(requete.responseText)[0] ;
        //console.log(choix) ;

        listeChoix.push(choix.FATHERID) ;
        //console.log(listeChoix);


        // Le texte de la question
        // Attention nouveauté possible bug
        let regex = choix.QTEXT;
        let expr = /{Ancre:\d+}/ig;
        if (regex.match(expr) !== null) {
            //console.log("Ancrage trouvé " + regex.match(/\d+/) );
            id = regex.match(/\d+/) ;
            printChoix(id);

        }else {
            // Detection des liens
            let qTextRaw = choix.QTEXT + "";
            let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

            let qTextModified = qTextRaw.replace(urlRegex, function(url) {
                return '<a href="' + url + '" target="_blank">' + new URL(url).hostname + '</a>';
            }) ;

            setQuestion(qTextModified, choix.IMPORTANT);

            // Le bouton retour si nessesaire
            retour.style.display = "none";
            retourdebut.style.display = "none";
            if (parseInt(choix.FATHERID) !== -1) {
                retour.style.display = "inline";
                retour.style.cursor = "pointer";
                retourdebut.style.display = "inline";
                retourdebut.style.cursor = "pointer";
            }


            // Les fils - réponses

            let url2 = "php/afficherFilsDe.php?idf=" + id;
            let requete2 = new XMLHttpRequest();
            requete2.open("GET", url2, async);
            requete2.addEventListener("load", function () {
                let fils = JSON.parse(requete2.responseText);
                //console.log(fils);

                if (fils.length === 0) {
                    retour.style.display = "none";


                    console.log("Fin de l'arbre ?") ;
                    //console.log(listeImportant);

                    if (listeImportant.length > 0) {
                        let textQuestionFin = choix.QTEXT + "<br> Pensez à : " ;
                        setQuestion(textQuestionFin, 0);

                        for (let i = 0; i < listeImportant.length; i++) {
                            addReponse(i, listeImportant[i]);
                        }
                    }

                }else {
                    for (let i = 0; i < fils.length; i++) {
                        let idFils = fils[i].ID;
                        let rText = fils[i].RTEXT;
                        //console.log(idFils + " " + rText);

                        addReponse(i, rText, function () {
                            printChoix(idFils);
                        });
                    }
                }
            });
            requete2.send(null);
        }
    });
    requete.send(null) ;
}







function setQuestion(text, important) {
    let q = document.getElementById("question") ;
    q.innerHTML = text;
    // A voir
    if (important === "1") {
        listeImportant.push(text) ;
    }
}

function clearReponses() {
    let repDiv = document.getElementById("divreponses") ;
    repDiv.innerHTML = "";
}

function addReponse(id, text, action) {
    let repDiv = document.getElementById("divreponses") ;

    let child = document.createElement("p");
    //child.className = "rep card-panel grey lighten-2 z-depth-4";
    child.className ="rep card-panel vert z-depth-4 white-text"
    child.innerHTML = text;
    child.id = "rep" + id ;
    child.style.cursor = "pointer" ;
    repDiv.appendChild(child);

    child.addEventListener("click", action);
}