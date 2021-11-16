<?php
include_once '../core/session.class.php';
include_once '../core/admin.class.php';
include_once '../core/core.function.php';

$session = new Session();
$admin = new Admin();

if (isset($_POST['login'])) {
    $email = test_input($_POST['email']);
    $password = md5(test_input($_POST['password']));

    $account = $admin->check_login_details($email, $password);
    if ($account) {
        $session->create_session('petition_admin', $account);
        redirect("../petitions");
    } else {
        $session->create_session('response', displayWarning('Invalid login credentials'));
        redirect("../");
    }
} else {
    $session->create_session('response', displayWarning('Action denied! Unrecognised or broken link.'));
    redirect("../");
}
