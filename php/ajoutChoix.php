<?php

// Require model
require_once('ModelChoix.php') ;

// Recupération dans le GET
$idF = $_GET['idf'] ;
$qT = $_GET['qt'];
$rT = $_GET['rt'];
$imp = $_GET['imp'];

// Appel de la fonction
ModelChoix::ajouterChoix($idF, $qT, $rT, $imp) ;

