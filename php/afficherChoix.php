<?php

// Require du model
require_once('ModelChoix.php') ;

// Stockage de la liste et encodage en JSON
$tab = ModelChoix::recupChoix() ;
echo json_encode($tab) ;