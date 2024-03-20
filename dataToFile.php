<?php

$courseName = $_POST['courseName1'] ?? '';
$categoryName = $_POST['course1categoryName1'] ?? '';
$categoryWeight = $_POST['course1categoryWeight1'] ?? '';
$assignmentName = $_POST['course1assignmentName1'] ?? '';
$assignmentScore = $_POST['course1assignmentScore1'] ?? '';

$data = "Name: $courseName\nCategoryName: $categoryName\nCategory Weight: $categoryWeight\nAssignment Name: $assignmentName\nAssignment Score: $assignmentScore";

$file = 'results.txt';

if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
    echo 'Data has been saved successfully.';
} else {
    echo 'There was an error saving your data.';
}

?>

