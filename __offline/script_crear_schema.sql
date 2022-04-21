CREATE SCHEMA `tfg` ;

CREATE TABLE `tfg`.`usr_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(100) NULL,
  `email` VARCHAR(100) NOT NULL,
  `contrasena` VARCHAR(200) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`usr_suscripcion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `max_proyectos` VARCHAR(45) NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`usr_has_suscripcion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT(11) NOT NULL,
  `id_suscripcion` INT(11) NOT NULL,
  `fecha_suscripcion` INT(11) NOT NULL,
  `caducado` INT NULL DEFAULT 0,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `usr_has_suscripcion_id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `tfg`.`usr_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `usr_has_suscripcion_id_suscripcion`
    FOREIGN KEY (`id_suscripcion`)
    REFERENCES `tfg`.`usr_suscripcion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `tfg`.`pro_tipo_proyecto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`pro_proyecto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `tipo_proyecto` INT(11) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `pro_proyecto_tipo_proyecto`
    FOREIGN KEY (`tipo_proyecto`)
    REFERENCES `tfg`.`pro_tipo_proyecto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `tfg`.`usr_has_proyecto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT(11) NOT NULL,
  `id_proyecto` INT(11) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `usr_has_proyecto_id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `tfg`.`usr_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `usr_has_proyecto_id_proyecto`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `tfg`.`pro_proyecto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `tfg`.`acc_principio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(20),
  `nombre` VARCHAR(50),
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`acc_pauta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `principio_id` INT(11) NOT NULL,
  `codigo` VARCHAR(20) NULL,
  `nombre` VARCHAR(50) NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `acc_pauta_principio_id`
    FOREIGN KEY (`principio_id`)
    REFERENCES `tfg`.`acc_principio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE TABLE `tfg`.`acc_principio_has_pauta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `principio_id` INT(11) NOT NULL,
  `pauta_id` INT(11) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `acc_principio_has_pauta_principio_id`
    FOREIGN KEY (`principio_id`)
    REFERENCES `tfg`.`acc_principio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_principio_has_pauta_pauta_id`
    FOREIGN KEY (`pauta_id`)
    REFERENCES `tfg`.`acc_pauta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
*/
CREATE TABLE `tfg`.`acc_nivel_conformidad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(20) NULL,
  `nombre` VARCHAR(100) NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`acc_criterio_version` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(500) NOT NULL,
  `fecha_publicacion` INT(11) NULL,
  `fecha_created_` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`));

CREATE TABLE `tfg`.`acc_criterio_conformidad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `principio_id` INT(11) NOT NULL,
  `pauta_id` INT(11) NOT NULL,
  `codigo` VARCHAR(20) NULL,
  `nombre` VARCHAR(100) NULL,
  `nivel_conformidad` INT(11) NOT NULL,
  `version_id` INT(11) NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `acc_criterio_conformidad_nivel_conformidad`
    FOREIGN KEY (`nivel_conformidad`)
    REFERENCES `tfg`.`acc_nivel_conformidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_criterio_conformidad_pauta_id`
    FOREIGN KEY (`pauta_id`)
    REFERENCES `tfg`.`acc_pauta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_criterio_conformidad_principio_id`
    FOREIGN KEY (`principio_id`)
    REFERENCES `tfg`.`acc_principio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
CONSTRAINT `acc_criterio_conformidad_version_id`
    FOREIGN KEY (`version_id`)
    REFERENCES `tfg`.`acc_criterio_version` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
/*
CREATE TABLE `tfg`.`acc_pauta_has_criterio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pauta_id` INT(11) NOT NULL,
  `criterio_id` INT(11) NOT NULL,
  `fecha_created` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `acc_pauta_has_criterio_pauta_id`
    FOREIGN KEY (`pauta_id`)
    REFERENCES `tfg`.`acc_pauta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `acc_pauta_has_criterio_criterio_id`
    FOREIGN KEY (`criterio_id`)
    REFERENCES `tfg`.`acc_criterio_conformidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
*/
CREATE TABLE `tfg`.`pro_has_criterio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `proyecto_id` INT(11) NOT NULL,
  `criterio_id` INT(11) NOT NULL,
  `completado` INT NOT NULL DEFAULT 0,
  `fecha_created_` INT(11) NULL,
  `fecha_updated` INT(11) NULL,
  `activo` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  CONSTRAINT `pro_has_criterio_proyecto_id`
    FOREIGN KEY (`proyecto_id`)
    REFERENCES `tfg`.`pro_proyecto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pro_has_criterio_criterio_id`
    FOREIGN KEY (`criterio_id`)
    REFERENCES `tfg`.`acc_criterio_conformidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);