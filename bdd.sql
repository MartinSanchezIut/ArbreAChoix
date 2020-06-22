-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 10 juin 2020 à 16:49
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `CHOIX`
--

CREATE TABLE `CHOIX` (
  `FATHERID` int(11) DEFAULT NULL,
  `ID` int(11) NOT NULL,
  `QTEXT` varchar(1024) NOT NULL,
  `RTEXT` varchar(1024) NOT NULL,
  `IMPORTANT` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `CHOIX`
--

INSERT INTO `CHOIX` (`FATHERID`, `ID`, `QTEXT`, `RTEXT`, `IMPORTANT`) VALUES
(-1, 49, 'Vos données concernent-elles les domaines suivant : Secret défense, sûreté de l\'état, sécurité publique, secrets protégés par la loi, vie privée, secret médical, secret industriel ou médical. ', '', 1),
(49, 50, 'Vos données ne peuvent faire l\'objet d\'aucune communication', 'Oui', 0),
(49, 52, 'Vos données concernent-elles des informations environnementales ?', 'Non', 0),
(52, 54, 'Vos données environnementales font l\'objet d\'une obligation de diffusion. (Loi CADA) ', 'Oui', 0),
(52, 55, 'Vos données contiennent-elles des informations à caractère personnel ?', 'Non', 0),
(54, 56, '{Ancre:55}', 'J\'ai compris.', 0),
(55, 57, 'Pour le données personnelles, vous devez faire une déclaration a la CNIL ou bien les anonymiser avant toute diffusion. ', 'Oui', 0),
(55, 58, 'Comment vos données ont-elles été obtenues ?', 'Non', 0),
(57, 59, '{Ancre:58}', 'J\'ai compris.', 0),
(58, 60, 'Vous devez prendre connaissance des dispositions de votre établissement concernant la propriété des données. Selon le statut de votre établissement et le votre en tant que salarié, les dispositions légales sont différentes. Vous ou votre établissement avez la propriété sur les données.', 'Produites par vous dans le cadre de votre activité professionnelle.', 0),
(58, 61, 'Si l’extraction est substantielle, alors il faudra l’accord du producteur. Une licence sera rédigée une licenceavec le producteur de la base de données afin de pouvoir utiliser les données.', 'Extraites d\'une base de données tiers ?', 0),
(58, 62, 'Il faudra vous conformer aux éléments du contrat de partenariat pour ce qui concerne les données (contenu et structure). La rédaction d’un avenant au contrat peut permettre d’autoriser la diffusion/réutilisation des données dans des contextes précis et notamment quand rien n’a été prévu dans le contrat.', 'Co-produites dans le cadre d\'un contrat avec un ou plusieurs partenaires ?', 0),
(62, 63, 'Vos données sont-elles organisées et structurées en bases de données ?', 'J\'ai compris.', 0),
(61, 64, '{Ancre:63}', 'J\'ai compris.', 0),
(60, 65, '{Ancre:63}', 'J\'ai compris.', 0),
(63, 66, 'fin de l\'arbre A MODIFIER', 'Non', 0),
(63, 67, 'Le droit d\'auteur d\'applique à la structure de la base de données.', 'Oui', 0),
(67, 68, 'Dans quel contexte la base à été produite ?', 'J\'ai compris.', 0),
(68, 69, 'Vous êtes/votre organisme est producteur de la base de données. Vous détenez les droits du producteur. Vous pouvez faciliter la réutilisation de votre base de données en apposant une licence de diffusion ouverte de type????? (sauf cas particulier des données personnelles ou confidentielles (voir plus haut).', 'Par vous / votre organisme uniquement dans le cadre de votre activité professionnelle.', 0),
(68, 70, ' Soit le contrat prévoit les modalités d’utilisation de la base de données et vous devez vous y conformer. Soit le contrat ne prévoit rien, vous devez alors signer un accord avec le co-producteur. Sans contrat ni accord, l’utilisation n’est pas possible.', 'Dans le cadre d\'un contrat avec un partenaire', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CHOIX`
--
ALTER TABLE `CHOIX`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CHOIX`
--
ALTER TABLE `CHOIX`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;