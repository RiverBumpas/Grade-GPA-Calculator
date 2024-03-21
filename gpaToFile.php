<?php

$data = "gpaCalculator" . "\n";

foreach ($_POST as $course){
    $data .= $course[0] . ',' . $course[1] . ',' . $course[2] . "\n";
}

print_r($data);


$file = 'results.txt';

file_put_contents($file, '');

if (file_put_contents($file, $data, FILE_APPEND) !== false) {
    echo 'Data has been saved successfully.';
} else {
    echo 'There was an error saving your data.';
}

?>

