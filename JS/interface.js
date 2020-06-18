let retour = document.getElementById("retour");


function printChoix(id) {
    clearReponses();


    let url = "php/afficherChoixID.php?id=" + id;
    let requete = new XMLHttpRequest();
    requete.open("GET", url, false);
    requete.addEventListener("load", function () {

        let choix = JSON.parse(requete.responseText)[0] ;
        console.log(choix) ;
            // Le texte de la question

        // Attention nouveauté possible bug
        let regex = choix.QTEXT;
        let expr = /{Ancre:\d+}/ig;

        if (regex.match(expr) !== null) {
            console.log("Ancrage trouvé " + regex.match(/\d+/) );
            id = regex.match(/\d+/) ;
            printChoix(id);

        }else {

            setQuestion(choix.QTEXT);

            // Le bouton retour si nessesaire
            retour.style.display = "none";
            if (parseInt(choix.FATHERID) !== -1) {
               // retour.style.display = "inline"; A remettre plus tard
                retour.style.cursor = "pointer";
                retour.addEventListener("click", function () {
                    printChoix(choix.FATHERID);
                });
            }

            // Les fils - réponses

            let url2 = "php/afficherFilsDe.php?idf=" + id;
            let requete2 = new XMLHttpRequest();
            requete2.open("GET", url2, false);
            requete2.addEventListener("load", function () {
                let fils = JSON.parse(requete2.responseText);
                console.log(fils);

                for (let i = 0; i < fils.length; i++) {
                    let idFils = fils[i].ID;
                    let rText = fils[i].RTEXT;
                    console.log(idFils + " " + rText);

                    addReponse(i, rText, function () {
                        printChoix(idFils);
                    });
                }
            });
            requete2.send(null);
        }
    });
    requete.send(null) ;
}







function setQuestion(text) {
    let q = document.getElementById("question") ;
    q.innerHTML = text;
}

function clearReponses() {
    let repDiv = document.getElementById("divreponses") ;
    repDiv.innerHTML = "";
}

function addReponse(id, text, action) {
    let repDiv = document.getElementById("divreponses") ;

    let child = document.createElement("p");
    child.className = "rep card-panel grey lighten-2 z-depth-4";
    child.innerHTML = text;
    child.id = "rep" + id ;
    child.style.cursor = "pointer" ;
    repDiv.appendChild(child);

    child.addEventListener("click", action);
}