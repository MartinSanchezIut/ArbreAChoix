-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 30 Juin 2020 à 14:27
-- Version du serveur :  5.5.65-MariaDB
-- Version de PHP :  5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Choix`
--
CREATE DATABASE IF NOT EXISTS `Choix` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Choix`;

-- --------------------------------------------------------

--
-- Structure de la table `CHOIX`
--

DROP TABLE IF EXISTS `CHOIX`;
CREATE TABLE IF NOT EXISTS `CHOIX` (
  `FATHERID` int(11) DEFAULT NULL,
  `ID` int(11) NOT NULL,
  `QTEXT` varchar(1024) NOT NULL,
  `RTEXT` varchar(1024) NOT NULL,
  `IMPORTANT` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `CHOIX`
--

INSERT INTO `CHOIX` (`FATHERID`, `ID`, `QTEXT`, `RTEXT`, `IMPORTANT`) VALUES
(-1, 74, 'Vous êtes concernés par les données de recherche et vous faites partie ', '', 0),
(74, 76, 'vous êtes concernés par l’ouverture obligatoire des données', 'd''une administration d’état (centre de recherche public)', 0),
(74, 77, ' Vous êtes concernés par l’ouverture obligatoire des données avec des modalités spécifiques pour les entités exposées à la concurrence', 'd’une société publique à caractère industriel ou commercial OU d’une autre entité de recherche de droit public ou privé poursuivant une mission de service public', 0),
(76, 80, 'Les données de recherche concernent-elles les domaines suivants : Secret défense, sûreté de l’état, sécurité publique, secrets protégés par la loi, vie privée, secret médical, secret industriel et commercial', 'Suivant', 0),
(77, 81, '{Ancre:80}', 'Suivant', 0),
(80, 83, 'Ces données ne peuvent faire l’objet d’aucune communication. Fin ', 'Oui', 0),
(80, 84, 'Les données de recherche sont-elles issues de programmes financés sur fonds publics ?', 'Non', 0),
(84, 86, 'L’ouverture des données issues de programmes financés sur fonds publics est désormais la règle, dans la mesure où la libre réutilisation est possible sans compromettre des droits de tiers. ', 'Oui', 0),
(84, 87, 'Les données de recherche contiennent–elles des informations à caractère personnel ?', 'Non', 0),
(86, 88, '{Ancre:87}', 'Suivant', 0),
(87, 89, 'Les données à caractère personnel doivent être anonymisées (l’identification des personnes doit être rendue impossible), à moins d’avoir obtenu le consentement éclairé de toutes les personnes concernées avant diffusion. (Voir: https://www.cnil.fr/fr/cnil-direct/question/une-donnee-caractere-personnel-cest-quoi) ', 'Oui', 1),
(89, 90, 'Les données contiennent-elles des informations environnementales ?', 'Suivant', 0),
(87, 91, '{Ancre:93}', 'Non', 0),
(90, 92, 'Pour les données environnementales, le code de l’environnement prévoit un droit d’accès du public aux informations relatives à l’environnement. Il prévoit également des exceptions ', 'Oui', 0),
(92, 93, 'Les données de recherche sont-elles des données géographiques au format numérique ?', 'Suivant', 0),
(90, 94, '{Ancre:93}', 'Non', 0),
(93, 95, 'Les données géographiques numériques doivent être diffusées par défaut – Directive Inspire.', 'Oui', 0),
(95, 96, 'Certaines données ont-elles été produites par un tiers et peuvent-elles être soumises au droit d’auteur ?', 'Suivant', 0),
(93, 97, '{Ancre:96}', 'Non', 0),
(96, 98, 'Certaines données sont couvertes par le droit d’auteur.  C’est le cas des photos, dessins, croquis, etc. qui sont considérés comme des « oeuvres de l’esprit »  Conformez-vous à la licence attribuée par l’auteur le cas échéant. Sinon, vous devez obtenir une cession de droit auprès de l’auteur ou des ayants droits.', 'Oui', 1),
(98, 99, 'Les données de recherche ont-elles été extraites d’une base de données tierce  ?', 'Suivant', 0),
(96, 100, '{Ancre:99}', 'Non', 0),
(99, 101, 'Pour les données extraites d’une autre base de données, respectez les conditions générales d’utilisation ou la licence proposées par le producteur de la base de données. Si l’extraction est substantielle et qu’aucune information de diffusion n’est disponible, vous devez obtenir l’accord du producteur de la base de données', 'Oui', 1),
(99, 103, 'Aucune recommandation spécifique pour l''ouverture de vos données.', 'Non', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `CHOIX`
--
ALTER TABLE `CHOIX`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `CHOIX`
--
ALTER TABLE `CHOIX`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=104;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
