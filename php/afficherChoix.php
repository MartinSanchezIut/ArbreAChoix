<?php

require_once('ModelChoix.php') ;


$tab = ModelChoix::recupChoix() ;
echo json_encode($tab) ;