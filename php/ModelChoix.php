<?php

require_once('Model.php');


class ModelChoix{

    public static function recupChoixID($id) {
        try{
           $rep = Model::$pdo->prepare("SELECT * FROM `CHOIX` WHERE ID = :id ;");
           $rep->execute(array(
                 'id' => $id));
           $rep->setFetchMode(PDO::FETCH_CLASS, 'Mode');
           $tab_ad = $rep->fetchAll();
           return $tab_ad;
        }catch (PDOException $e) {
            echo $e->getMessage();
            die("Erreur");
        }
    }


    public static function supprimerChoix($id) {
        try {
            $req = Model::$pdo->prepare('DELETE FROM CHOIX WHERE ID = :id;');
            $req->execute(array(
                'id' => $id));
        }catch (PDOException $e) {
            echo $e->getMessage();
            die("Erreur");
        }
    }

    public static function modifierChoix($idFather, $id, $qText, $rText, $imp) {
        try {
            $req = Model::$pdo->prepare('UPDATE CHOIX
                                        SET FATHERID = :idF,
                                            QTEXT = :qT,
                                            RTEXT = :rT,
                                            IMPORTANT = :imp
                                        WHERE ID = :id');
            $req->execute(array(
                'idF' => $idFather,
                'id' => $id,
                'qT' => $qText,
                'imp' => $imp,
                'rT' => $rText));
            }catch (PDOException $e) {
                echo $e->getMessage();
                die("Erreur");
            }
    }

    public static function ajouterChoix($idFather, $qText, $rText, $imp) {
        try {
            $req = Model::$pdo->prepare('INSERT INTO CHOIX (FATHERID, QTEXT, RTEXT, IMPORTANT)
                                        VALUES (:idF, :qT, :rT, :imp)');
            $req->execute(array(
                'idF' => $idFather,
                'qT' => $qText,
                'imp' => $imp,
                'rT' => $rText));
            }catch (PDOException $e) {
                echo $e->getMessage();
                die("Erreur");
            }
    }


    public static function recupChoix() {
        try{
            $rep = Model::$pdo->query("SELECT * FROM `CHOIX` ;");
            $rep->setFetchMode(PDO::FETCH_CLASS, 'Mode');
            $tab_ad = $rep->fetchAll();
            return $tab_ad;
        }catch (PDOException $e) {
            echo $e->getMessage();
            die("Erreur");
        }
    }


    public static function recupPremierChoix() {
        try{
            $rep = Model::$pdo->query("SELECT * FROM `CHOIX` WHERE FATHERID = -1 ;");
            $rep->setFetchMode(PDO::FETCH_CLASS, 'Mode');
            $tab_ad = $rep->fetchAll();
            return $tab_ad;
        }catch (PDOException $e) {
            echo $e->getMessage();
            die("Erreur");
        }
    }

    public static function recupFilsDe($idFather) {
       try{
           $rep = Model::$pdo->prepare("SELECT * FROM `CHOIX` WHERE FATHERID = :idF ;");
           $rep->execute(array(
                 'idF' => $idFather));
           $rep->setFetchMode(PDO::FETCH_CLASS, 'Mode');
           $tab_ad = $rep->fetchAll();
           return $tab_ad;
       }catch (PDOException $e) {
           echo $e->getMessage();
           die("Erreur");
       }
    }
}