-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-07-2025 a las 01:52:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--
CREATE DATABASE IF NOT EXISTS `rest-api` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rest-api`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--
-- Creación: 01-07-2025 a las 17:45:46
-- Última actualización: 10-07-2025 a las 23:49:08
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'ingenieria del software', 'roger pressman', 'software', '2002-07-17', '9786071503'),
(2, 'ingenieria del software', 'ian sommerville', 'software', '2011-04-12', '9786073206'),
(3, 'programacion', 'mario dorrego martin', 'informatica', '2024-07-16', '9788413573656'),
(4, 'introduccion a la robotica', 'irene alvarez caro', 'robotica', '2017-12-01', '9788416898411'),
(5, 'robotica. diseño y aplicacion', 'alberto rocha diaz', 'robotica', '2019-04-03', '9788426728142'),
(6, 'analisis de sistemas', 'julie e. kendall y kenneth e. ', 'ciencias de la computacion', '2005-02-10', '9789702605775'),
(7, 'analisis y diseño de sistemas ', 'james a. senn', 'ciencias de la computacion', '1992-08-11', '9684229917'),
(10, 'javascript: la guia definitiva', 'david flanagan', 'informatica', '2007-06-04', '9788441522022'),
(11, 'java', 'andres juarez', 'informatica', '2017-07-04', '9789502322179'),
(12, 'php 8', 'adam j. smith', 'informatica', '2021-07-01', '9798512005248');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
