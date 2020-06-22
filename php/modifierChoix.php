<?php


require_once('ModelChoix.php') ;

$idF = $_GET['idf'] ;
$id = $_GET['id'] ;
$qT = $_GET['qt'];
$rT = $_GET['rt'];
$imp = $_GET['imp'];

ModelChoix::modifierChoix($idF, $id, $qT, $rT, $imp) ;

