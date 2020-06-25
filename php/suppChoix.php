<?php

// Require model
require_once('ModelChoix.php') ;

// Variable dans le GET
$id = $_GET['id'] ;

// Appel Fonction
ModelChoix::supprimerChoix($id) ;

