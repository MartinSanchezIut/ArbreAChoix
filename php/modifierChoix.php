<?php

// Require model
require_once('ModelChoix.php') ;

// Recupération dans le GET
$idF = $_GET['idf'] ;
$id = $_GET['id'] ;
$qT = $_GET['qt'];
$rT = $_GET['rt'];
$imp = $_GET['imp'];

// Appel de la fonction
ModelChoix::modifierChoix($idF, $id, $qT, $rT, $imp) ;

