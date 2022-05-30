<?php

namespace back\db;

use Nette\Caching\Storages\FileStorage;
use Nette\Database\Connection;
use Nette\Database\Structure;
use Nette\Caching\Storages\MemoryStorage;

class DataBase
{
    public ReentrantContext $context;

    /**
     * Construye una instancia a BD.
     *
     * El archivo puede ser o bien el nombre del fichero (por defecto
     * database.ini), o bien el array que devolvería parse_ini_file.
     */
    public function __construct()
    {
        
        $ini = parse_ini_file("database.ini", false);

        $connection = new Connection(sprintf('%s:dbname=%s;host=%s', $ini['DBConn'], $ini['DBName'], $ini['DBServ']), $ini['DBUser'], $ini['DBPass']);

        $cacheDir = $_SERVER['DOCUMENT_ROOT'] . '../../nette-cache';

        if (is_dir($cacheDir)) {
            $cache = new FileStorage($cacheDir);
        } else {
            $cache = new MemoryStorage;
        }

        $structure = new Structure($connection, $cache);
        $this->context = new ReentrantContext($connection, $structure);
    }
}
