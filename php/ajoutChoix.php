<?php


require_once('ModelChoix.php') ;

$idF = $_GET['idf'] ;
$qT = $_GET['qt'];
$rT = $_GET['rt'];

ModelChoix::ajouterChoix($idF, $qT, $rT) ;

