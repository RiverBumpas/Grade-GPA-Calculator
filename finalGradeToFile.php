<?php


$data = "finalGrade . \n";

$file = 'results.txt';

//foreach($_POST as $course){
//    $data .= $course + '\n' + $course[0][0];

//}

print_r($_POST);

file_put_contents($file, '');

if (file_put_contents($file, $data, FILE_APPEND) !== false) {
    echo 'Data has been saved successfully.';
} else {
    echo 'There was an error saving your data.';
}

?>

