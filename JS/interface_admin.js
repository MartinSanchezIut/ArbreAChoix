let form = document.getElementById("form") ;
form.style.display = "none" ;


let visual = document.getElementById("visual") ;


let boutAjouter = document.getElementById("ajouter");

let boutModif = document.getElementById("modifier");
let ligneid = document.getElementById("ID");
let lblid = document.getElementById("lblID");

document.getElementById("annuler").addEventListener("click", cacherForm);
document.getElementById("ajouter").addEventListener("click", envoyerform);
document.getElementById("modifier").addEventListener("click", modifChoix);


afficherArbre();


function afficherArbre() {
    let anulBut = document.getElementById("annuler");

    anulBut.style.display = "inline";
    visual.innerHTML = "";
    afficherFilsDe(-1, 0) ;

    if (visual.innerHTML === "") {
        afficherForm(-1) ;
        anulBut.style.display = "none";
    }
}



function afficherFilsDe(idFather, prefix) {
    let url = "php/afficherFilsDe.php?idf="+ idFather;
    let requete = new XMLHttpRequest();
    requete.open("GET", url, false);
    requete.addEventListener("load", function () {
        let Fils = JSON.parse(requete.responseText) ;

        for (let i = 0; i < Fils.length; i++) {
            /*
            text.innerHTML = prefix +  "FatherID: " + Fils[i].FATHERID + " | ID: " + Fils[i].ID +
                " | Qtext: " + Fils[i].QTEXT + " | Rtext: " + Fils[i].RTEXT + " |  ";
            */
            creerLigne(Fils[i].ID,Fils[i].FATHERID,
                Fils[i].QTEXT, Fils[i].RTEXT,
                Fils[i].IMPORTANT, prefix);


            let newIdFATHER = Fils[i].ID ;
            afficherFilsDe(newIdFATHER, prefix + 20) ;
        }
    });
    requete.send(null);
}





function creerLigne(id, idf, qText, rText, important, indent) {
    let rootDiv = document.createElement("div") ;
    rootDiv.className = "z-depth-3 white" ;
    rootDiv.style.marginLeft = indent + "px";

    let row1Div = document.createElement("div") ;
    row1Div.className = "row" ;

    let rTextp = document.createElement("div") ;
    rTextp.className = "col l10 m10 s10 margin-10 margin10";
    rTextp.innerHTML = "<p>" + rText + "</p>";

    let divButtonRow1 = document.createElement("div") ;
    divButtonRow1.className = "col l2 m2 s2 margin10 margin-10 center";

    let butAjout = document.createElement("i");
    butAjout.innerHTML = "add";
    butAjout.style.cursor = "pointer";
    butAjout.className = " material-icons marginside";
    butAjout.addEventListener("click", function () {
        afficherForm(id) ;
    }) ;


    let butModifier = document.createElement("i");
    butModifier.innerHTML = "edit";
    butModifier.style.cursor = "pointer";
    butModifier.className = " material-icons marginside";
    butModifier.addEventListener("click", function () {
        afficherFormModif(idf, id, important, qText, rText) ;
    }) ;


    let butSuprimer = document.createElement("i");
    butSuprimer.innerHTML = "remove";
    butSuprimer.style.cursor = "pointer";
    butSuprimer.className = " material-icons marginside";
    butSuprimer.addEventListener("click", function () {
        supprimerChoix(id) ;
    }) ;

    divButtonRow1.appendChild(butAjout) ;
    divButtonRow1.appendChild(butModifier) ;
    divButtonRow1.appendChild(butSuprimer) ;
    row1Div.appendChild(rTextp) ;
    row1Div.appendChild(divButtonRow1) ;


    let row2Div = document.createElement("div") ;
    row2Div.className = "row nomarginbotom" ;

    let divIDp = document.createElement("div") ;
    divIDp.className = "col l1 m1 s1" ;
    divIDp.innerHTML = "<p> ID:  &nbsp" + id + "</p>" ;

    let qTextp = document.createElement("div") ;
    qTextp.className = "col l9 m9 s9" ;
    qTextp.innerHTML = "<p>" + qText + "</p>" ;

    let row2icons = document.createElement("div");
    row2icons.className = "col l2 m2 s2 margin10 center";

    let isImportant = document.createElement("i");
    isImportant.innerHTML = "star";
    if (important === "1") {
        isImportant.className = "material-icons marginside yellow-text";
    }else {
        isImportant.className = "material-icons marginside grey-text";
    }

    let cacherFils = document.createElement("i");
    cacherFils.innerHTML = "expand_less";
    cacherFils.style.cursor = "pointer";
    cacherFils.className = "material-icons marginside";
    // Ajouter les events Listener

    let deroulerFils = document.createElement("i");
    deroulerFils.innerHTML = "expand_more";
    deroulerFils.style.cursor = "pointer";
    deroulerFils.className = "material-icons marginside";
    // Ajouter les events Listener


    row2icons.appendChild(isImportant) ;
    row2icons.appendChild(cacherFils) ;
    row2icons.appendChild(deroulerFils) ;
    row2Div.appendChild(divIDp) ;
    row2Div.appendChild(qTextp) ;
    row2Div.appendChild(row2icons) ;

    rootDiv.appendChild(row1Div) ;
    rootDiv.appendChild(row2Div) ;
    visual.appendChild(rootDiv) ;
}



// Partie avec le formulaire
function afficherFormModif(fatherID, ID, checked, qt, rt) {
    let fid = document.getElementById("fatherID");
    let check = document.getElementById("important");
    let qText = document.getElementById("qText");
    let rText = document.getElementById("rText");

    fid.value = fatherID;
    qText.value = qt;
    rText.value = rt;
    ligneid.value = ID;

    boutModif.style.display = "inline";
    ligneid.style.display = "inline";
    lblid.style.display = "inline";
    boutAjouter.style.display = "none" ;
    form.style.display = "inline";

    check.checked = checked === "1";
}

function afficherForm(fatherID) {
    let fid = document.getElementById("fatherID");
    let check = document.getElementById("important");
    let qText = document.getElementById("qText");
    let rText = document.getElementById("rText");

    qText.value = "";
    rText.value = "";

    fid.value = fatherID;
    boutAjouter.style.display = "inline";
    boutModif.style.display = "none";
    ligneid.style.display = "none";
    lblid.style.display = "none";
    form.style.display = "inline";
    check.checked = false;
}

function cacherForm() {
    form.style.display = "none";
}

function modifChoix() {
    let id = document.getElementById("ID");

    let fid = document.getElementById("fatherID");
    let qText = document.getElementById("qText");
    let rText = document.getElementById("rText");
    let check = document.getElementById("important");

    if ((! isNaN(parseInt(fid.value))) && (! isNaN(parseInt(id.value)))) {
        let url = "php/afficherChoix.php";
        let requete = new XMLHttpRequest();
        requete.open("GET", url, true);
        requete.addEventListener("load", function () {
            let tab = JSON.parse(requete.responseText) ;
            let ids = [] ;
            let fids = [] ;
            for (let i = 0; i < tab.length; i++) {
                ids.push(tab[i].ID) ;
                fids.push(tab[i].FATHERID) ;
            }

            if (ids.includes( parseInt(id.value) + "" ) || fids.includes( parseInt(fid.value) + "" )) {


                let idf = parseInt(fid.value);
                let idchoix = parseInt(id.value);
                let qt = qText.value;
                let rt = rText.value;
                let imp = 0 ;
                if (check.checked) {
                    imp = 1;
                }

                let url = "php/modifierChoix.php?idf=" + idf + "&id=" + idchoix
                            + "&qt=" + qt + "&rt=" + rt + "&imp=" + imp;
                let requete = new XMLHttpRequest();
                requete.open("GET", url, true);
                requete.addEventListener("load", function () {
                    fid.value = "";
                    qText.value = "";
                    rText.value = "";

                    cacherForm();
                    afficherArbre();
                });
                requete.send(null);
            }else {
                alert("Erreur: verifiez les id ! (ou l'aissez l'auto complétion).");
            }
        });
        requete.send(null);
    }else {
        alert("Erreur: un id doit etre un chiffre !");
    }
}

function envoyerform() {
    let fid = document.getElementById("fatherID");
    let qText = document.getElementById("qText");
    let rText = document.getElementById("rText");
    let check = document.getElementById("important");

    if (! isNaN(parseInt(fid.value))) {
        let url = "php/afficherChoix.php";
        let requete = new XMLHttpRequest();
        requete.open("GET", url, true);
        requete.addEventListener("load", function () {
            let tab = JSON.parse(requete.responseText) ;
            let id = [] ;
            for (let i = 0; i < tab.length; i++) {
                id.push(tab[i].ID) ;
            }
            if (id.includes( parseInt(fid.value) + "" ) || tab.length === 0) {
                let idf = parseInt(fid.value);
                if (tab.length === 0) {
                    idf = -1 ;
                    fid.value = -1;
                }
                let qt = qText.value;
                let rt = rText.value;
                let imp = 0 ;
                if (check.checked) {
                    imp = 1;
                }


                let url = "php/ajoutChoix.php?idf=" + idf + "&qt=" + qt + "&rt=" + rt + "&imp=" + imp;
                let requete = new XMLHttpRequest();
                requete.open("GET", url, true);
                requete.addEventListener("load", function () {
                    fid.value = "";
                    qText.value = "";
                    rText.value = "";

                    cacherForm();
                    afficherArbre();
                });
                requete.send(null);
            }else {
                alert("Erreur: veuillez entrer l'id d'un choix existant.");
            }
        });
        requete.send(null);
    }else {
        alert("Erreur: un id doit etre un chiffre !");
    }
}

function recupToutLesFils(id,  tab) {
    let url = "php/afficherFilsDe.php?idf="+ id;
    let requete = new XMLHttpRequest();
    requete.open("GET", url, false);
    requete.addEventListener("load", function () {
        let fils = JSON.parse(requete.responseText) ;
        for (let i = 0; i < fils.length; i++) {
            tab.push(fils[i].ID) ;
            recupToutLesFils(fils[i].ID, tab) ;
        }
    });
    requete.send(null) ;
}

function supprimerChoix(id) {
    if (confirm("Etes vous sur ? Cette opération sera irréversible !")) {

        let toutLesFils = [] ;
        toutLesFils.push(id) ;
        recupToutLesFils(id, toutLesFils) ;

        for (let j = 0; j < toutLesFils.length; j++) {

            let url2 = "php/suppChoix.php?id="+ parseInt(toutLesFils[j]);

            let req = new XMLHttpRequest();
            req.open("GET", url2, false);
            req.send(null) ;

        }
        afficherArbre();
        alert("Suppresion effectuée !") ;
    }
}