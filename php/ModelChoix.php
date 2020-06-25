<?php

require_once('Model.php');


class ModelChoix{

    /*
    Retourne le choix donné par son ID
    */
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

    /*
    Suprime un choix donné par son ID
    */
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

    /*
    Modifie un choix de la base de donnée,
    $id : Le choix a modifier
    Les autres parametre les nouvelles données
    */
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

    /*
    Ajoute une choix dans la base de donnée, chaque parametre correspond a un choix
    */
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

    /*
    Retourne une liste de tout les choix de la base
    */
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

    /*
    Retourne le premier choix, celui qui a -1 comme id de père
    */
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

    /*
    recupFilsDe($idFather);
    Parametre: $idFather : ID du père
    Retourne: Liste des fils de $idFather
    */
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