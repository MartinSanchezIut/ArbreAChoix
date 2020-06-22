document.getElementById("retour").style.display = "none";
document.getElementById("retourdebut").style.display = "none";
retourdebut.addEventListener("click", function () {
    document.location.reload(true);
});


let url = "php/afficherPremierChoix.php";
let req = new XMLHttpRequest();
req.open("GET", url, true);
req.addEventListener("load", function () {

    let premierChoix = JSON.parse(req.responseText)[0];
    //console.log(premierChoix) ;
    printChoix(premierChoix.ID);

});
req.send(null) ;