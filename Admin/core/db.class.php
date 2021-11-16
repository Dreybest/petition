<?php
class DB
{
    public $DATABASE_SERVER = 'localhost';
    public $DATABASE_USER = 'root';
    public $DATABASE_PASSWORD = '';
    public $DATABASE_NAME = 'petition';
    public $conn;

    function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->DATABASE_SERVER;dbname=$this->DATABASE_NAME;", $this->DATABASE_USER, $this->DATABASE_PASSWORD);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $ex) {
            echo 'Error in database connection ' . $ex->getMessage();
            exit();
        }
    }
    function prep($query)
    {
        return $this->conn->prepare($query);
    }
    function execute($query, $value)
    {
        $query = $this->prep($query);
        return $query->execute($value);
    }
    function execute_with_no_val($query)
    {
        $query = $this->prep($query);
        return $query->execute();
    }
    function fetch($query, $value)
    {
        $query = $this->prep($query);
        $query->execute($value);
        return $query->fetch(PDO::FETCH_ASSOC);
    }
    function fetchAll($query, $value)
    {
        $query = $this->prep($query);
        $query->execute($value);
        return $query->fetchAll();
    }
    function fetchAssoc($query, $value)
    {
        $query = $this->prep($query);
        $query->execute($value);
        return $query;
    }
    function num_row($query, $value)
    {
        $query = $this->prep($query);
        $query->execute($value);
        return $query->rowCount();
    }
}
