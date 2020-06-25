<?php

// Require du model
require_once('ModelChoix.php') ;

// La variable est dans le GET
$idF = $_GET['idf'] ;

// Stockage et encodage
$tab = ModelChoix::recupFilsDe($idF) ;
echo json_encode($tab) ;