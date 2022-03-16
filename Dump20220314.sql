CREATE DATABASE  IF NOT EXISTS `grupo6` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `grupo6`;
-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: grupo6
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carritos`
--

DROP TABLE IF EXISTS `carritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carritos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `quantity` decimal(10,0) DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `users_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id` (`users_id`),
  CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carritos_productos`
--

DROP TABLE IF EXISTS `carritos_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carritos_productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` int unsigned NOT NULL,
  `basket_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `basket_id` (`basket_id`),
  CONSTRAINT `carritos_productos_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `productos` (`id`),
  CONSTRAINT `carritos_productos_ibfk_2` FOREIGN KEY (`basket_id`) REFERENCES `carritos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritos_productos`
--

LOCK TABLES `carritos_productos` WRITE;
/*!40000 ALTER TABLE `carritos_productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'2022-03-12 02:28:39','2022-03-12 02:28:39','Aventura'),(2,'2022-03-12 02:28:57','2022-03-12 02:28:57','Entretenimiento'),(3,'2022-03-12 02:29:09','2022-03-12 02:29:09','Gastronomía');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `people` int DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'2022-03-12 02:50:37','2022-03-12 02:50:37','La Cabaña',2800,'Una tradicional parrilla argentina reconocida internacionalmente ubicada en Alicia Moreau de Justo 580. Puerto Madero.',2,'2023-10-22','la_cabaña.PNG',3),(2,'2022-03-12 02:54:41','2022-03-12 03:06:03','El Portal',2600,'La combinación de una excelente cocina con una de las barras más atractivas de Buenos Aires',1,'2022-11-07','image-1647054363907-829890871.PNG',3),(3,'2022-03-12 02:57:31','2022-03-12 03:07:25','El Preferido',3500,'Disfrutá un almuerzo por pasos en este bar notable clásico del barrio de Palermo',2,'2022-10-13','image-1647054445840-606191773.PNG',3),(4,'2022-03-12 03:10:54','2022-03-12 03:10:54','Libertador Hotel',2700,'Disfrutá de una merienda en el exclusivo Maximilian Lobby Bar & Restaurant del Hotel Libertador, ubicado en Retiro ',2,'2022-08-25','Libertador_Hotel.PNG',3),(5,'2022-03-12 03:12:50','2022-03-12 03:12:50','Negresco Bistró & Bar',3400,'Deliciosa cocina mediterránea al mejor estilo europeo ',2,'2022-07-13','negresco_bitro_y_bar.PNG',3),(6,'2022-03-12 03:16:59','2022-03-12 03:16:59','Avocado Republic',1800,'Es un Fast Good donde la palta es la protagonista de la carta ',2,'2022-06-19','avocado_republic.PNG',3),(7,'2022-03-12 03:23:21','2022-03-12 03:23:21','Cervelar',2100,'Ofrece una enorme variedad de cervezas artesanales, acompañadas de un servicio gastronómico moderno',2,'2022-08-12','cervelar.PNG',3),(8,'2022-03-12 03:49:14','2022-03-12 03:49:14','La Birrería',2500,'Excelente cerveza, buena comida y Rock and roll',2,'2022-08-30','la_birreria.PNG',3),(9,'2022-03-12 04:08:37','2022-03-12 04:08:37','Don Julio Parrilla',4000,'Se destaca por servir cortes de carne premium a la parrilla, acompañados por vegetales y productos orgánicos de cada temporada',2,'2022-09-03','5ffe2e44324f6.jpg',3),(10,'2022-03-12 04:19:31','2022-03-12 04:19:31','Sacro',3500,'Restaurante de comida del mundo basada en plantas y hongos',2,'2022-08-08','salon.jpg',3),(11,'2022-03-12 04:27:57','2022-03-12 04:27:57','Pizzería Güerrin',2400,'Emblematica Pizzeria ubicada en Av. Corrientes. Un ícono de la pizza porteña',2,'2022-07-26','2AAQSIDFLBEZ5CJI4MQ77ORMXA.jpg',3),(12,'2022-03-12 04:40:44','2022-03-12 04:40:44','P.F. Chang\'s',5800,'Cocina de alta calidad de inspiración asiática y americana en un ambiente sofisticado y contemporáneo',2,'2022-09-04','Changs.jpg',3),(13,'2022-03-12 13:43:10','2022-03-12 13:43:10','Bioparque Temaiken',10200,'El Lugar de las Aves, el Acuario, La Chacra, su paisaje, sus restaurantes y paradores hacen de Temaikèn un lugar inolvidable para pasar un día en familia',4,'2022-11-18','950x696.jpg',2),(14,'2022-03-12 13:45:14','2022-03-12 13:45:14','Bus turístico',6000,'Tu ticket por 24 hs te permitirá subir y bajar en la parada que desees y recorrer la ciudad a tu ritmo. Te proponemos un recorrido con audioguia para que descubras cada rincón de Bs As',4,'2022-07-23','51.jpg',2),(15,'2022-03-12 13:47:00','2022-03-12 13:47:00','El Viejo Almacén',3150,'Un show único y auténtico con despliegue de parejas de tango, afamadas voces de cantores y cantantes',2,'2022-09-05','el_viejo_almacen.PNG',2),(16,'2022-03-12 13:48:39','2022-03-12 13:48:39','Thelonious',4300,'Club de jazz que brinda buena música y excelente comida , plan que no falla',2,'2022-10-02','jazz_club.PNG',2),(17,'2022-03-12 13:50:20','2022-03-12 13:50:20','SĀNTAL',5800,'Show de rock acústico para disfrutar con una copa de vino y tapas',2,'2022-07-29','santal.PNG',2),(18,'2022-03-12 13:51:59','2022-03-12 14:29:50','Parque de la Costa',12000,'Es un escape perfecto y divertido, una gran opción para grandes y chicos',4,'2022-09-11','image-1647095390814-240496679.jpg',2),(19,'2022-03-12 13:53:09','2022-03-12 13:53:09','Noche de Jazz',5000,'Bebop Club, uno de los mejores lugares para disfrutar del Jazz',2,'2022-11-09','noche_de_jazz.PNG',2),(20,'2022-03-12 13:59:08','2022-03-12 13:59:08','Tango porteño',5900,'La Era Dorada vuelve a brillar en este espectáculo único y moderno que recupera la esencia del Tango tradicional',2,'2022-06-26','tango_porteño.PNG',2),(21,'2022-03-12 14:00:29','2022-03-12 14:00:29','Stand up',3300,'Paseo la plaza te invita a disfrutar de un show lleno de risas',2,'2022-07-12','stand_up.PNG',2),(22,'2022-03-12 14:01:34','2022-03-12 14:01:34','MAMBA',800,'Museo de arte moderno con obras de  artistas argentinos e internacionales',1,'2022-07-12','mamba.PNG',2),(23,'2022-03-12 14:02:47','2022-03-12 14:02:47','Campanopolis',6300,'Aldea de estilo medieval, con edificios de materiales reciclados',2,'2022-07-12','campanopolis.PNG',2),(24,'2022-03-12 14:04:59','2022-03-12 14:04:59','Tour de Arte Callejero y Graffiti',2600,'Este recorrido a pie permite explorar las calles de la ciudad en busca de increíbles muestras de arte urbano',3,'2022-07-24','tour_de_arte_callejero_y_graffiti.PNG',2),(25,'2022-03-12 14:07:06','2022-03-12 14:07:06','Salto en paracaídas',8000,'Vas a tener la posibilidad de vivir lo que se siente volar',1,'2022-10-15','salto_en_paracaidas.PNG',1),(26,'2022-03-12 14:09:38','2022-03-12 14:09:38','kayak',7950,'Travesía por el Delta rodeado de naturaleza, mientras aprendes a andar en kayak',2,'2023-01-10','kayac.PNG',1),(27,'2022-03-12 14:11:30','2022-03-12 14:11:30','Paseo en velero',10700,'Disfrutá de un paseo especial, recorriendo el Río de la Plata al atardecer en un velero',2,'2023-02-18','paseo_en_velero.PNG',1),(28,'2022-03-12 14:13:06','2022-03-12 14:13:06','Escalada',1380,'Vení a divertirte y conocé los beneficios de escalar',1,'2023-02-18','escalada.PNG',1),(29,'2022-03-12 14:14:30','2022-03-12 14:14:30','Flyboard',3700,'Actividad extrema donde volaras por los aires desde el agua',1,'2022-12-09','flyboard.png',1),(30,'2022-03-12 14:17:03','2022-03-12 14:17:03','Arco y flecha',1600,'La oportunidad perfecta para poner a prueba tu puntería',1,'2022-10-14','arco_y_flecha.PNG',1),(31,'2022-03-12 14:18:16','2022-03-12 14:18:16','Clase de golf',1950,'Clases personalizadas de golf para niños y adultos',1,'2022-12-22','clase_de_golf.PNG',1),(32,'2022-03-12 14:20:40','2022-03-12 14:20:40','Parque camas elásticas',3600,'Rush, te invita a disfrutar de un espacio lleno de camas elásticas para disfrutar saltando',2,'2022-09-23','parque_camas_elasticas.PNG',1),(33,'2022-03-12 14:22:08','2022-03-12 14:22:08','Destruyendo cosas',2000,'The Break Club, es el mejor lugar para descargarse y romper todo sin culpa',1,'2022-08-03','destruyendo_cosas.PNG',1),(34,'2022-03-12 14:23:45','2022-03-12 14:23:45','Equitación',2420,'Si amas a los caballos ésta es tu oportunidad de conectarte con ellos',1,'2022-01-16','equitacion.PNG',1),(35,'2022-03-12 14:25:19','2022-03-12 14:25:19','Paint ball',8560,'Forma tu equipo y preparate para un momento intenso en un gran espacio de juego',4,'2022-03-04','paint_ball.PNG',1),(36,'2022-03-12 14:26:46','2022-03-12 14:26:46','Parque aereo de aventura',2150,'Euca tigre, es un parque en el que podrás treparte en árboles con toda la seguridad',1,'2022-12-27','parque_aereo_de_aventura.PNG',1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'2022-03-12 03:02:40','2022-03-12 03:02:40','Claudia','Garcia','clau10@gmail.com','$2a$10$oZ8vbNsFusCVKIA.CoNmM.vPyvKToEA3EHFOD3dEDZAdlYqRmrl9C','1989-09-22','avatar-1647054160843-403397639.jpg'),(2,'2022-03-13 00:54:17','2022-03-13 00:54:17','Maria','Martinez','maria@gmail.com','$2a$10$OhOMw3UuGi6SOGG6bIajIuU/UViWV2cE60ufr1BJ0.xVT0XEVX1Ru','1999-05-21','avatar-1647132857405-66866718.jpg'),(3,'2022-03-13 01:01:44','2022-03-13 01:01:44','Claudia','Garcia','clau10@gmail.com','$2a$10$h8/lEVUM9NC.kxOqPZgTa.u5hAmX.otAzU1gZSXHvlEBx/cykq.4K','2022-03-17','avatar-1647133304773-523762326.jpg'),(4,'2022-03-13 01:13:25','2022-03-13 01:13:25','Claudia','Garcia','clau10@gmail.com','$2a$10$c2F.7RcYacyPfLZwtoZQOON2yfNIEE6d292ZnY1kjlrCJqKH6W4.G','2022-10-12','avatar-1647134005101-432059900.jpg'),(5,'2022-03-13 02:06:23','2022-03-13 02:06:23','Maria','Martinez','maria@gmail.com','$2a$10$PnVdxtd3Wt.g6j4hbOCa8O85i2.WdTP4QnSs/aHxScyGn1dUX3xrG','2022-03-12','avatar-1647137183619-697175586.jpg'),(6,'2022-03-13 02:24:11','2022-03-13 02:24:11','Claudia','Garcia','clau10@gmail.com','$2a$10$Vpe3mx3eNP47Z1nqhldW4OORenSRmphRsaDwuWlrWHUVG.KGzIhMm','2022-06-12','avatar-1647138251680-32980511.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-14 19:58:07
