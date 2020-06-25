<?php

// Require du model
require_once('ModelChoix.php') ;

// La variable id est dans le GET ?id=
$id = $_GET['id'] ;

// Stockage du choix et encodage en JSON
$tab = ModelChoix::recupChoixID($id) ;
echo json_encode($tab) ;