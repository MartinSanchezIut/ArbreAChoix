<?php

require_once('ModelChoix.php') ;

$idF = $_GET['idf'] ;

$tab = ModelChoix::recupFilsDe($idF) ;
//var_dump($tab) ;
echo json_encode($tab) ;