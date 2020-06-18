<?php

require_once('ModelChoix.php') ;

$id = $_GET['id'] ;

$tab = ModelChoix::recupChoixID($id) ;
//var_dump($tab) ;
echo json_encode($tab) ;