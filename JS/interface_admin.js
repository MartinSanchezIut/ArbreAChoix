let form = document.getElementById("form") ;
form.style.display = "none" ;


let visual = document.getElementById("visual") ;


document.getElementById("annuler").addEventListener("click", cacherForm);
document.getElementById("ajouter").addEventListener("click", envoyerform);
document.getElementById("modifier").addEventListener("click", modifChoix);


afficherArbre();


function afficherArbre() {
    let anulBut = document.getElementById("annuler");

    anulBut.style.display = "inline";
    visual.innerHTML = "";
    afficherFilsDe(-1, "|") ;

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
            let list = document.createElement("ul") ;

            let liText = document.createElement("li") ;
            let text = document.createElement("pre") ;
            text.innerHTML = prefix +  "FatherID: " + Fils[i].FATHERID + " | ID: " + Fils[i].ID +
                " | Qtext: " + Fils[i].QTEXT + " | Rtext: " + Fils[i].RTEXT ;
            liText.appendChild(text) ;
            liText.style.display = "inline-block" ;
            list.appendChild(liText) ;


            let libutadd = document.createElement("li") ;
            let bAdd = document.createElement("pre") ;
            bAdd.innerHTML = "(+)" ;
            bAdd.style.marginLeft = "30px" ;
            bAdd.style.cursor = "pointer";
            bAdd.addEventListener("click", function () {
                afficherForm(Fils[i].ID) ;
            }) ;
            libutadd.appendChild(bAdd) ;
            libutadd.style.display = "inline-block" ;
            list.appendChild(libutadd) ;

            let libutmod = document.createElement("li") ;
            let bMod = document.createElement("pre") ;
            bMod.innerHTML = "(Modif)" ;
            bMod.style.marginLeft = "30px" ;
            bMod.style.cursor = "pointer";
            bMod.addEventListener("click", function () {
                afficherFormModif(Fils[i].FATHERID, Fils[i].ID) ; // ICI
            }) ;
            libutmod.appendChild(bMod) ;
            libutmod.style.display = "inline-block" ;
            list.appendChild(libutmod) ;

            let libutSuppr = document.createElement("li") ;
            let bSupr = document.createElement("pre") ;
            bSupr.innerHTML = "(-)" ;
            bSupr.style.marginLeft = "30px" ;
            bSupr.style.cursor = "pointer";
            bSupr.addEventListener("click", function () {
                if (confirm("Etes vous sur ? Cette opération sera irréversible !")) {

                    let toutLesFils = [] ;
                    toutLesFils.push(Fils[i].ID) ;
                    recupToutLesFils(Fils[i].ID, toutLesFils) ;
                    console.log(toutLesFils) ;

                    for (let j = 0; j < toutLesFils.length; j++) {
                        console.log(parseInt(toutLesFils[j])) ;

                        let url2 = "php/suppChoix.php?id="+ parseInt(toutLesFils[j]);
                        console.log(url2) ;

                        let req = new XMLHttpRequest();
                        req.open("GET", url2, false);
                        req.send(null) ;

                    }
                    afficherArbre();
                    alert("Suppresion effectuée !") ;
                }
            });
            libutSuppr.appendChild(bSupr) ;
            libutSuppr.style.display = "inline-block" ;
            list.appendChild(libutSuppr) ;

            visual.appendChild(list) ;

            let newIdFATHER = Fils[i].ID ;
            afficherFilsDe(newIdFATHER, prefix + "--") ;
        }
    });
    requete.send(null);
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








// Partie avec le formulaire
let boutAjouter = document.getElementById("ajouter");

let boutModif = document.getElementById("modifier");
let ligneid = document.getElementById("ID");
let lblid = document.getElementById("lblID");

function afficherFormModif(fatherID, ID) {
    let fid = document.getElementById("fatherID");
    fid.value = fatherID;
    ligneid.value = ID;
    boutModif.style.display = "inline";
    ligneid.style.display = "inline";
    lblid.style.display = "inline";
    boutAjouter.style.display = "none" ;
    form.style.display = "inline";
}

function afficherForm(fatherID) {
    let fid = document.getElementById("fatherID");
    fid.value = fatherID;
    boutAjouter.style.display = "inline";
    boutModif.style.display = "none";
    ligneid.style.display = "none";
    lblid.style.display = "none";
    form.style.display = "inline";
}
function cacherForm() {
    form.style.display = "none";
}

function modifChoix() {
    alert("Ca roule") ;
}

function envoyerform() {
    let fid = document.getElementById("fatherID");
    let qText = document.getElementById("qText");
    let rText = document.getElementById("rText");
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

                let url = "php/ajoutChoix.php?idf=" + idf + "&qt=" + qt + "&rt=" + rt;
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