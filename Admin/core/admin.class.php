<?php
include_once 'user.class.php';
class Admin extends User
{
    protected $table_name = "admin";

    function __construct()
    {
        parent::__construct($this->table_name);
        $this->create_table_if_not_exists();
    }

    function create_table_if_not_exists()
    {
        $sql = "CREATE TABLE IF NOT EXISTS $this->table_name (
            `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            `email` VARCHAR(15),
            `fullname` VARCHAR(99),
            `password` VARCHAR(99),
            `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
            `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
        DB::execute_with_no_val($sql);
    }
}
