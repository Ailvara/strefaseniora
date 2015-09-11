-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Wrz 2015, 21:46
-- Wersja serwera: 5.6.25
-- Wersja PHP: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `memory_results`
--

INSERT INTO `memory_results` (`id`, `user`, `set`, `date`, `time_taken`, `moves`) VALUES
(14, 8, 'own', '2015-08-24 22:19:45', 11.134, 8),
(15, 8, 'vangogh', '2015-08-25 00:17:00', 7.291, 2),
(16, 8, 'vangogh', '2015-08-25 00:17:49', 8.892, 4);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `memory_sets`
--

CREATE TABLE IF NOT EXISTS `memory_sets` (
  `id` int(11) NOT NULL,
  `user` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `set` varchar(40) COLLATE utf8_polish_ci NOT NULL,
  `name` varchar(10) COLLATE utf8_polish_ci NOT NULL,
  `image` varchar(300) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `memory_sets`
--

INSERT INTO `memory_sets` (`id`, `user`, `set`, `name`, `image`) VALUES
(1, '8', 'vangogh', '1a', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'),
(2, '8', 'vangogh', '2a', 'https://upload.wikimedia.org/wikipedia/commons/6/60/Van_Gogh_-_Bl%C3%BChende_Mandelbaumzweige.jpeg'),
(3, '8', 'vangogh', '1b', 'http://uploads2.wikiart.org/images/vincent-van-gogh/the-starry-night-1889(1).jpg'),
(4, '8', 'vangogh', '2b', 'https://4t4m4t4.files.wordpress.com/2014/01/wlanl_-_techdiva_1_0_-_amandelbloesem_detail_vincent_van_gogh_18901.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `quiz_questions`
--

CREATE TABLE IF NOT EXISTS `quiz_questions` (
  `id` int(11) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `question` text COLLATE utf8_polish_ci NOT NULL,
  `answer_A` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `answer_B` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `answer_C` varchar(100) COLLATE utf8_polish_ci NOT NULL,
  `correct` varchar(1) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `quiz_questions`
--

INSERT INTO `quiz_questions` (`id`, `user`, `question`, `answer_A`, `answer_B`, `answer_C`, `correct`) VALUES
(1, 8, 'Ile kości ma dorosły człowiek?', '189', '206', '225', 'B'),
(2, 8, 'Który z zakonów rekrutował kandydatów wyłącznie z jednej narodowości?', 'Templariusze', 'Krzyżacy', 'Joannici', 'B');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `quiz_results`
--

CREATE TABLE IF NOT EXISTS `quiz_results` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `correct` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `quiz_results`
--

INSERT INTO `quiz_results` (`id`, `user`, `correct`, `date`) VALUES
(0, 8, 1, '2015-09-11 19:42:55'),
(0, 8, 1, '2015-09-11 19:44:57');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(40) COLLATE utf16_polish_ci NOT NULL,
  `password` varchar(20) COLLATE utf16_polish_ci NOT NULL,
  `caretaker` int(11) DEFAULT NULL COMMENT 'null - sam jest opiekunem, inny - id innego usera'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf16 COLLATE=utf16_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `caretaker`) VALUES
(7, 'a', 'a', NULL),
(8, 'b', 'b', 7),
(9, 'c', 'c', 7);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `memory_results`
--
ALTER TABLE `memory_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `memory_sets`
--
ALTER TABLE `memory_sets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `quiz_questions`
--
ALTER TABLE `quiz_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `memory_results`
--
ALTER TABLE `memory_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT dla tabeli `memory_sets`
--
ALTER TABLE `memory_sets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT dla tabeli `quiz_questions`
--
ALTER TABLE `quiz_questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
