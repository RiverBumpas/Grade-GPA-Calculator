<?php

$data = "gpaCalculator" . "\n";

foreach ($_POST as $course){
    $data .= $course[0] . ',' . $course[1] . ',' . $course[2] . "\n";
}

$file = 'results.txt';

file_put_contents($file, '');

file_put_contents($file, $data, FILE_APPEND);

$python_script = 'process.py';

exec("python3 $python_script $file");

?>

