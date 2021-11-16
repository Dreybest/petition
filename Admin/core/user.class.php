<?php
include_once 'db.class.php';
class User extends DB
{
    protected $table_name = "users";

    function __construct($table_name = 'users')
    {
        parent::__construct();
        $this->table_name = $table_name;
    }

    function find_one($id)
    {
        $user = DB::fetch("SELECT * FROM $this->table_name WHERE id = ? ", [$id]);
        if ($user) {
            return $user;
        } else {
            return false;
        }
    }

    function get_all()
    {
        $users = DB::fetchAll("SELECT * FROM $this->table_name WHERE active = ? ", [1]);
        if ($users) {
            return $users;
        } else {
            return false;
        }
    }

    function check_login_details($email, $password)
    {
        $user = DB::fetch("SELECT id FROM $this->table_name WHERE email = ? AND password = ? ", [$email, $password]);
        if ($user) {
            return $user;
        } else {
            return false;
        }
    }

    function get_user_password($id)
    {
        $user = DB::fetch("SELECT password FROM $this->table_name WHERE id = ? ", [$id]);
        if ($user) {
            return $user['password'];
        } else {
            return false;
        }
    }
}
