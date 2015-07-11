-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Lip 2015, 11:37
-- Wersja serwera: 5.6.24
-- Wersja PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `strefaseniora`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `memory_results`
--

CREATE TABLE IF NOT EXISTS `memory_results` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `set` varchar(20) COLLATE utf16_polish_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_taken` double NOT NULL,
  `moves` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `memory_results`
--

INSERT INTO `memory_results` (`id`, `user`, `set`, `date`, `time_taken`, `moves`) VALUES
(7, 1, 'own', '2015-07-10 23:17:09', 10.2, 2),
(8, 1, 'own', '2015-07-10 23:18:19', 10.2, 2),
(9, 2, 'own', '2015-07-10 23:19:43', 22.2, 22),
(10, 2, 'own', '2015-07-10 23:20:27', 22.2, 22),
(11, 1, 'own', '2015-07-10 23:20:55', 9.111, 7),
(12, 1, 'own', '2015-07-10 23:22:15', 9.097, 7),
(13, 1, 'own', '2015-07-10 23:22:38', 5.908, 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(40) COLLATE utf16_polish_ci NOT NULL,
  `password` varchar(20) COLLATE utf16_polish_ci NOT NULL,
  `caretaker` int(11) DEFAULT NULL COMMENT 'null - sam jest opiekunem, inny - id innego usera'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `caretaker`) VALUES
(1, 'ala@ma.kota', 'lol', NULL),
(2, 'a', 'a', NULL),
(3, 'b', 'b', 1),
(6, 'c', 'c', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `memory_results`
--
ALTER TABLE `memory_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `memory_results`
--
ALTER TABLE `memory_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
