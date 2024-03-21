<?php

$initialData = serialize($_POST);
$data = unserialize($initialData);

$file = 'results.txt';

file_put_contents($file, '');

if (file_put_contents($file, $data, FILE_APPEND) !== false) {
    echo 'Data has been saved successfully.';
} else {
    echo 'There was an error saving your data.';
}

?>

