<?php


$data = "finalGrade" . "\n";

$file = 'results.txt';


foreach ($_POST['courses'] as $course) {
    $data .= $course['name'] . "\n";

    foreach ($course['categories'] as $category) {
        $data .=  $category['name'] . "," . $category['weight'] . ",";

        foreach ($category['assignments'] as $assignment) {
            $data .= $assignment['name'] . "," . $assignment['score'] . ",";
        }
        $data .= "\n";
    }
    $data .= "\n";
}



print_r($_POST);

file_put_contents($file, '');

if (file_put_contents($file, $data, FILE_APPEND) !== false) {
    echo 'Data has been saved successfully.';
} else {
    echo 'There was an error saving your data.';
}

?>

