-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: dincox
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `tblaccounts`
--

DROP TABLE IF EXISTS `tblaccounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblaccounts` (
  `id_account` int unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `position` int NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `join_at` datetime DEFAULT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id_account`),
  UNIQUE KEY `idaccount_UNIQUE` (`id_account`),
  UNIQUE KEY `username_UNIQUE` (`user_name`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='store account user';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblaccounts`
--

LOCK TABLES `tblaccounts` WRITE;
/*!40000 ALTER TABLE `tblaccounts` DISABLE KEYS */;
INSERT INTO `tblaccounts` VALUES (20,'datnd','1',0,'datnd@gmail.com',NULL,NULL,NULL,NULL,1),(23,'manager','1',1,'manager@gmail.com',NULL,NULL,NULL,NULL,0),(24,'thuanpt','1',0,'thuanpt@gmail.com',NULL,NULL,NULL,NULL,0),(25,'thunt','1',0,'thunt@gmail.com',NULL,NULL,NULL,NULL,0),(26,'lyht','1234',0,'lyht@gmail.com',NULL,NULL,NULL,NULL,0),(27,'vinhhq','1',0,'vinhhq@gmail.com',NULL,NULL,NULL,NULL,0),(28,'thaont','1',0,'thaont@gmail.com',NULL,NULL,NULL,NULL,0),(29,'hiennq','1',0,'hiennq@gmail.com',NULL,NULL,NULL,NULL,0),(30,'duongvd','1',0,'duongvd@gmail.com',NULL,NULL,NULL,NULL,0),(31,'baodt','1',0,'baodt@gmail.com',NULL,NULL,NULL,NULL,0),(32,'dongnc','1',0,'dongnc@gmail.com',NULL,NULL,NULL,NULL,0),(33,'khiemnd','1',0,'khiemnd@gmail.com',NULL,NULL,NULL,NULL,0),(34,'super','1',2,'super@gmail.com',NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `tblaccounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblcategories`
--

DROP TABLE IF EXISTS `tblcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblcategories` (
  `id_category` int unsigned NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_category`),
  UNIQUE KEY `id_category_UNIQUE` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblcategories`
--

LOCK TABLES `tblcategories` WRITE;
/*!40000 ALTER TABLE `tblcategories` DISABLE KEYS */;
INSERT INTO `tblcategories` VALUES (11,'Vệ Sinh Giày',NULL,NULL,1),(12,'Giày Thể Thao',NULL,NULL,1),(13,'Giày Sneaker',NULL,NULL,1),(14,'Giày Lười',NULL,NULL,1),(15,'Giày Da',NULL,NULL,1),(16,'Giày Cao Cổ',NULL,NULL,1),(17,'Dép Dây',NULL,NULL,1),(18,'Phụ Kiện',NULL,NULL,1);
/*!40000 ALTER TABLE `tblcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblcomments`
--

DROP TABLE IF EXISTS `tblcomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblcomments` (
  `id_comment` int unsigned NOT NULL AUTO_INCREMENT,
  `id_account` int unsigned NOT NULL,
  `id_product` int unsigned NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `contents` varchar(200) NOT NULL,
  PRIMARY KEY (`id_comment`),
  UNIQUE KEY `id_comment_UNIQUE` (`id_comment`),
  KEY `fk_commnets_accounts_idx` (`id_account`),
  KEY `fk_commnets_products_idx` (`id_product`),
  CONSTRAINT `fk_commnets_accounts` FOREIGN KEY (`id_account`) REFERENCES `tblaccounts` (`id_account`),
  CONSTRAINT `fk_commnets_products` FOREIGN KEY (`id_product`) REFERENCES `tblproducts` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblcomments`
--

LOCK TABLES `tblcomments` WRITE;
/*!40000 ALTER TABLE `tblcomments` DISABLE KEYS */;
INSERT INTO `tblcomments` VALUES (1,10,9,NULL,'content 1'),(2,10,9,NULL,'content 2'),(3,10,9,NULL,'content 3'),(4,10,9,NULL,'content 4'),(5,10,9,NULL,'content 5'),(6,10,9,NULL,'content 6'),(7,10,9,NULL,'content 7'),(8,10,9,NULL,'content 8'),(9,10,9,NULL,'content 9');
/*!40000 ALTER TABLE `tblcomments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblimages`
--

DROP TABLE IF EXISTS `tblimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblimages` (
  `id_image` int unsigned NOT NULL AUTO_INCREMENT,
  `id_product` int unsigned DEFAULT NULL,
  `id_new` int unsigned DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` datetime DEFAULT NULL,
  `path` varchar(45) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id_image`),
  UNIQUE KEY `id_image_UNIQUE` (`id_image`),
  KEY `fk_images_products_idx` (`id_product`),
  KEY `fk_images_news_idx` (`id_new`),
  CONSTRAINT `fk_images_news` FOREIGN KEY (`id_new`) REFERENCES `tblnews` (`id_new`),
  CONSTRAINT `fk_images_products` FOREIGN KEY (`id_product`) REFERENCES `tblproducts` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblimages`
--

LOCK TABLES `tblimages` WRITE;
/*!40000 ALTER TABLE `tblimages` DISABLE KEYS */;
INSERT INTO `tblimages` VALUES (1,1,NULL,'Flower',NULL,NULL,'./Flower.jpg',_binary ''),(2,NULL,NULL,'Car',NULL,NULL,'./images/car.jpg',_binary ''),(3,NULL,NULL,'house',NULL,NULL,'./images/house.jpg',_binary '');
/*!40000 ALTER TABLE `tblimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblnews`
--

DROP TABLE IF EXISTS `tblnews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblnews` (
  `id_new` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `created_at` varchar(20) DEFAULT NULL,
  `edited_at` varchar(20) DEFAULT NULL,
  `contents` varchar(500) DEFAULT NULL,
  `reference_links` varchar(45) DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_new`),
  UNIQUE KEY `id__UNIQUE` (`id_new`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblnews`
--

LOCK TABLES `tblnews` WRITE;
/*!40000 ALTER TABLE `tblnews` DISABLE KEYS */;
INSERT INTO `tblnews` VALUES (1,'CÁC MẪU GIÀY PHÙ HỢP MANG ĐI HỌC GIÁ SINH VIÊN , HỌC SINH','Lưu Khánh Vinh','10-07-2020',NULL,'','https://www.youtube.com/watch?v=KQk__9cqJ8c',1),(2,'Đôi giày chính hãng giá chỉ hơn 300k ? Dincox 1903','mr Thành','08-05-2020',NULL,'Đôi giày chính hãng giá chỉ hơn 300k ? Dincox 1903 ','https://www.youtube.com/watch?v=MlyVr603atQ',1),(3,'Dincox giới thiệu đến quý khách hàng bộ sưu tập giày màu hè 2020 ','Lưu Khánh Vinh','28-11-2019',NULL,'Dincox giới thiệu đến quý khách hàng bộ sưu tập giày màu hè 2020 ','https://www.youtube.com/watch?v=jDKoHQPxZL0',1),(4,'Lại là giày chính hãng giá chỉ 3xx, cho những khi cần lịch sự hoặc cho người thích cổ điển','mr Thành','24-10-2019',NULL,'Lại là giày chính hãng giá chỉ 3xx, cho những khi cần lịch sự hoặc cho người thích cổ điển','https://www.youtube.com/watch?v=aQIDA4wCNS0',1),(5,'NHỮNG ĐÔI GIÀY 350K | OUTFITS THẬT HỌC SINH, THẬT SINH VIÊN | DUCANHDAY','mr Thành','14-06-2020',NULL,' Visit: www.coxshoes.com.vn\nwww.dincox.com\n\"Giày Chuẩn EU - Giá Ưu Việt\"\n#coxshoes #dincox #giaytrang #giayden','https://www.youtube.com/watch?v=-ossiAQoieE',1),(6,'5 MẸO SHOPPING QUẦN ÁO KHI ÍT TIỀN','Lưu Khánh Vinh','05-07-2020',NULL,' ','https://www.youtube.com/watch?v=_d7PVAwBNuM',1),(7,'CHUBBY CHƠI LỚN ! TẶNG GIÀY REAL DINCOX CHO CẢ THE QUEEN TEAM !!!','Ngô Đức Vĩnh','13-01-2020',NULL,' ','https://www.youtube.com/watch?v=1tllrHIULWM',1),(8,'MẸO MẶC ĐẸP CHO NGƯỜI MẬP LÙN | DƯỚI M63-70KG','mr Thành','21-05-2019',NULL,' MẸO MẶC ĐẸP CHO NGƯỜI MẬP LÙN | DƯỚI M63-70KG','https://www.youtube.com/watch?v=msYQbdAE1ls',1),(13,'MẸO MẶC ĐẸP CHO NGƯỜI MẬP LÙN | DƯỚI M63-70KG','mr Thành','11-09-2020',NULL,' MẸO MẶC ĐẸP CHO NGƯỜI MẬP LÙN | DƯỚI M63-70KG','https://www.youtube.com/watch?v=msYQbdAE1ls',0);
/*!40000 ALTER TABLE `tblnews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblorderdetails`
--

DROP TABLE IF EXISTS `tblorderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblorderdetails` (
  `id_order` int unsigned NOT NULL,
  `id_product` int unsigned NOT NULL,
  `size` varchar(45) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id_order`,`id_product`),
  KEY `fk_orderdetailt_products_idx` (`id_product`),
  CONSTRAINT `fk_orderdetailt_orders` FOREIGN KEY (`id_order`) REFERENCES `tblorders` (`id_order`),
  CONSTRAINT `fk_orderdetailt_products` FOREIGN KEY (`id_product`) REFERENCES `tblproducts` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblorderdetails`
--

LOCK TABLES `tblorderdetails` WRITE;
/*!40000 ALTER TABLE `tblorderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblorderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblorders`
--

DROP TABLE IF EXISTS `tblorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblorders` (
  `id_order` int unsigned NOT NULL AUTO_INCREMENT,
  `id_account` int unsigned NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `number_phone` varchar(45) DEFAULT NULL,
  `reveiver` varchar(45) DEFAULT NULL,
  `sent_to` varchar(45) NOT NULL,
  UNIQUE KEY `id_order_UNIQUE` (`id_order`),
  KEY `fk_orders_account_idx` (`id_account`),
  CONSTRAINT `fk_orders_account` FOREIGN KEY (`id_account`) REFERENCES `tblaccounts` (`id_account`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblorders`
--

LOCK TABLES `tblorders` WRITE;
/*!40000 ALTER TABLE `tblorders` DISABLE KEYS */;
INSERT INTO `tblorders` VALUES (1,26,NULL,'012397641','hainoi','hanoi');
/*!40000 ALTER TABLE `tblorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblproducts`
--

DROP TABLE IF EXISTS `tblproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblproducts` (
  `id_product` int unsigned NOT NULL AUTO_INCREMENT,
  `id_category` int unsigned NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` datetime DEFAULT NULL,
  `is_sale` int DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `amount_comment` int DEFAULT NULL,
  `amount_buy` int DEFAULT NULL,
  `price` int unsigned NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `id_product_UNIQUE` (`id_product`),
  KEY `fk_product_categories_idx` (`id_category`),
  CONSTRAINT `fk_product_categories` FOREIGN KEY (`id_category`) REFERENCES `tblcategories` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblproducts`
--

LOCK TABLES `tblproducts` WRITE;
/*!40000 ALTER TABLE `tblproducts` DISABLE KEYS */;
INSERT INTO `tblproducts` VALUES (1,15,'D21HI CHOC',NULL,NULL,0,NULL,NULL,NULL,440000,1),(2,15,'D27 DENIM',NULL,NULL,0,NULL,NULL,NULL,430000,1),(3,13,'COX007GREY',NULL,NULL,1,NULL,NULL,NULL,250000,1),(4,12,'C38 WHITE',NULL,NULL,1,NULL,NULL,NULL,410000,1),(5,12,'C38 FULLBLACK',NULL,NULL,1,NULL,NULL,NULL,410000,1),(6,12,'D21HI BLACK',NULL,NULL,0,NULL,NULL,NULL,440000,1),(7,13,'D21HI WHITE',NULL,NULL,1,NULL,NULL,NULL,440000,1),(8,13,'D20 WHITE',NULL,NULL,0,NULL,NULL,NULL,490000,1),(9,14,'D28 BLACK',NULL,NULL,0,'',0,0,490000,1),(10,14,'COX007TAN',NULL,NULL,1,'',0,0,350000,1),(11,15,'D23 WHITE',NULL,NULL,1,'',1,1,375000,1);
/*!40000 ALTER TABLE `tblproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsales`
--

DROP TABLE IF EXISTS `tblsales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblsales` (
  `id_sale` int unsigned NOT NULL AUTO_INCREMENT,
  `sale_name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` datetime DEFAULT NULL,
  `start_at` datetime DEFAULT NULL,
  `end_at` datetime DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id_sale`),
  UNIQUE KEY `id_sale_UNIQUE` (`id_sale`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsales`
--

LOCK TABLES `tblsales` WRITE;
/*!40000 ALTER TABLE `tblsales` DISABLE KEYS */;
INSERT INTO `tblsales` VALUES (1,'sale 1',NULL,NULL,NULL,NULL,_binary '\0'),(2,'sale 2',NULL,NULL,NULL,NULL,_binary '\0'),(3,'sale 3',NULL,NULL,NULL,NULL,_binary '\0'),(4,'sale 4',NULL,NULL,NULL,NULL,_binary '\0'),(5,'sale 5',NULL,NULL,NULL,NULL,_binary '\0'),(6,'sale 6',NULL,NULL,NULL,NULL,_binary '\0'),(7,'sale 7',NULL,NULL,NULL,NULL,_binary '\0'),(8,'sale 8',NULL,NULL,NULL,NULL,_binary '\0'),(9,'sale 9',NULL,NULL,NULL,NULL,_binary '');
/*!40000 ALTER TABLE `tblsales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsalesdetails`
--

DROP TABLE IF EXISTS `tblsalesdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblsalesdetails` (
  `id_product` int unsigned NOT NULL,
  `id_sale` int unsigned NOT NULL,
  `discount` int DEFAULT NULL,
  PRIMARY KEY (`id_product`,`id_sale`),
  KEY `fk_salesdetails_sales_idx` (`id_sale`),
  CONSTRAINT `fk_salesdetails_products` FOREIGN KEY (`id_product`) REFERENCES `tblproducts` (`id_product`),
  CONSTRAINT `fk_salesdetails_sales` FOREIGN KEY (`id_sale`) REFERENCES `tblsales` (`id_sale`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsalesdetails`
--

LOCK TABLES `tblsalesdetails` WRITE;
/*!40000 ALTER TABLE `tblsalesdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblsalesdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsizedetails`
--

DROP TABLE IF EXISTS `tblsizedetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblsizedetails` (
  `id_product` int unsigned NOT NULL,
  `id_size` int unsigned NOT NULL,
  `quantity` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`id_product`,`id_size`),
  KEY `fk_sizedetails_sizes_idx` (`id_size`),
  CONSTRAINT `fk_sizedetails_products` FOREIGN KEY (`id_product`) REFERENCES `tblproducts` (`id_product`),
  CONSTRAINT `fk_sizedetails_sizes` FOREIGN KEY (`id_size`) REFERENCES `tblsizes` (`id_size`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsizedetails`
--

LOCK TABLES `tblsizedetails` WRITE;
/*!40000 ALTER TABLE `tblsizedetails` DISABLE KEYS */;
INSERT INTO `tblsizedetails` VALUES (1,1,10,0),(2,2,10,0),(3,1,23,1),(3,2,105,1),(3,3,10,0),(3,4,95,1),(3,5,47,1),(3,6,65,1),(4,4,10,0),(5,5,10,0),(6,6,10,0),(7,6,0,0),(8,6,102,1),(10,1,40,1);
/*!40000 ALTER TABLE `tblsizedetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblsizes`
--

DROP TABLE IF EXISTS `tblsizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tblsizes` (
  `id_size` int unsigned NOT NULL AUTO_INCREMENT,
  `size_name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `edited_at` datetime DEFAULT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id_size`),
  UNIQUE KEY `id_kichco_UNIQUE` (`id_size`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblsizes`
--

LOCK TABLES `tblsizes` WRITE;
/*!40000 ALTER TABLE `tblsizes` DISABLE KEYS */;
INSERT INTO `tblsizes` VALUES (1,'36',NULL,NULL,1),(2,'37',NULL,NULL,1),(3,'38',NULL,NULL,1),(4,'39',NULL,NULL,1),(5,'40',NULL,NULL,1),(6,'41',NULL,NULL,1),(7,'42',NULL,NULL,1),(8,'43',NULL,NULL,1),(9,'44',NULL,NULL,1),(10,'45',NULL,NULL,1);
/*!40000 ALTER TABLE `tblsizes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-15 13:19:38
