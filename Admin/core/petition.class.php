<?php
include_once 'db.class.php';
class Petitions extends DB
{
    protected $table_name = "petitions";

    function __construct()
    {
        parent::__construct();
    }

    function find_one($id)
    {
        $result = DB::fetch("SELECT * FROM $this->table_name WHERE id = ? ", [$id]);
        if ($result) {
            return $result;
        } else {
            return false;
        }
    }

    function get_all_pending()
    {
        $results = DB::fetchAll("SELECT * FROM $this->table_name WHERE status = ?   ORDER BY created_at DESC", ['pending']);
        if ($results) {
            return $results;
        } else {
            return false;
        }
    }
    function get_all_rejected()
    {
        $results = DB::fetchAll("SELECT * FROM $this->table_name WHERE status = ?   ORDER BY created_at DESC", ['rejected']);
        if ($results) {
            return $results;
        } else {
            return false;
        }
    }

    function get_all_approved()
    {
        $results = DB::fetchAll("SELECT * FROM $this->table_name WHERE status = ?   ORDER BY created_at DESC", ['approved']);
        if ($results) {
            return $results;
        } else {
            return false;
        }
    }

    function approve($id, $admin_id)
    {
        $result = DB::execute("UPDATE $this->table_name SET status=? WHERE id = ? ", ['approved', $id]);
        if ($result) {
            return $this->_add_to_approved_petitions($id, $admin_id);
        } else {
            return false;
        }
    }

    function reject($id)
    {
        return DB::execute("UPDATE $this->table_name SET status=? WHERE id = ? ", ['rejected', $id]);
    }


    private function
    _add_to_approved_petitions($id, $admin_id)
    {
        return DB::execute("INSERT INTO approved_petitions(admin_id,petition_id) VALUES(?,?)", [$admin_id, $id]);
    }
}
