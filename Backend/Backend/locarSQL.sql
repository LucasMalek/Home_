
DROP TABLE IF EXISTS `aluguels`;
CREATE TABLE `aluguels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_aluguel` varchar(45) DEFAULT NULL,
  `data_devolucao_prev` varchar(45) DEFAULT NULL,
  `data_devolucao` varchar(45) DEFAULT NULL,
  `valor` float DEFAULT NULL,
  `multa` float DEFAULT '0',
  `idfunc` int DEFAULT NULL,
  `idc` int DEFAULT NULL,
  `idcl` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `func_idx` (`idfunc`),
  KEY `cl_idx` (`idcl`),
  KEY `c_idx` (`idc`),
  CONSTRAINT `idfunc` FOREIGN KEY (`idfunc`) REFERENCES `funcionarios` (`id`)
  ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `idcl` FOREIGN KEY (`idcl`) REFERENCES `clientes` (`id`),
   ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `idc` FOREIGN KEY (`idc`) REFERENCES `carros` (`id`)
   ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `carros`;
CREATE TABLE `carros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Cnome` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `quilometragem` varchar(45) NOT NULL,
  `valor_dia` varchar(45) NOT NULL,
  `ano` varchar(45) NOT NULL,
  `disponibilidade` BOOLEAN DEFAULT TRUE,
  `placa` varchar(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_carro_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;


/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nome` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `data` DATE DEFAULT NULL,
  `telefone`varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_cliente_UNIQUE` (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fcpf` varchar(45) NOT NULL,
  `fnome` varchar(45) NOT NULL,
  `fendereco` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `data` DATE DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnew_table_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `fcpf_UNIQUE` (`fcpf`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
