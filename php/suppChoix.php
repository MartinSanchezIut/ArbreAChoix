<?php

require_once('ModelChoix.php') ;


$id = $_GET['id'] ;


ModelChoix::supprimerChoix($id) ;

