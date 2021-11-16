<?php


function redirect($link)
{
	header("location:" . $link);
	exit();
}
function displayError($message)
{
	return '<div class="alert alert-danger">' . $message . '</div>';
}

function displayWarning($message)
{
	return '<div class="alert alert-warning">' . $message . '</div>';
}

function displaySuccess($message)
{
	return '<div class="alert alert-success">' . $message . '</div>';
}


function test_input($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = addslashes($data);
	return $data;
}


function get_xlsx_records_and_process_fn($target_file_path, $callback, $vendor_relative_path = "../../")
{

	require_once $vendor_relative_path . 'plugins/spreadsheet-reader/php-excel-reader/excel_reader2.php';
	require_once $vendor_relative_path . 'plugins/spreadsheet-reader/SpreadsheetReader.php';
	$error = false;



	$reader = new SpreadsheetReader($target_file_path);

	$sheetCount = count($reader->sheets());

	for ($i = 0; $i < $sheetCount; $i++) {
		$reader->ChangeSheet($i);

		foreach ($reader as $Row) {
			$fn = $callback($Row);
			if (!$fn) {
				$error = true;
				break;
			}
		}
	}

	if (!$error) {
		return true;
	} else {
		return false;
	}
}

function validate_input($input)
{
	if (!isset($input) || empty($input)) {
		return false;
	} else {
		return true;
	}
}


function date_difference($d1, $d2)
{
	$earlier = new DateTime($d1);
	$later = new DateTime($d2);

	return $later->diff($earlier)->format("%a");
}
