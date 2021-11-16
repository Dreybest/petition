<?php
include_once '../core/session.class.php';
include_once '../core/petition.class.php';
include_once '../core/core.function.php';

$session = new Session();
$petition_obj = new Petitions();

$logged_user = $session->get_session_value('petition_admin')['id'];
$id = test_input($_GET['id']);

$result = $petition_obj->approve($id, $logged_user);
if ($result) {
    $session->create_session('response', displaySuccess('Petition rejected successfully.'));
    redirect("../petitions");
} else {
    $session->create_session('response', displayWarning('Invalid login credentials'));
    redirect("../petitions");
}
