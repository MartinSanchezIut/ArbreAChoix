<?php

// Require du model
require_once('ModelChoix.php') ;

// Stockage et encodage
$tab = ModelChoix::recupPremierChoix() ;
echo json_encode($tab) ;