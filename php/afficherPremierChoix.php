<?php

require_once('ModelChoix.php') ;


$tab = ModelChoix::recupPremierChoix() ;
//var_dump($tab) ;
echo json_encode($tab) ;