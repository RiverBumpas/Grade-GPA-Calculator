<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="River Bumpas and Surya Malik">
        <title>Final Grade/ GPA Calculator</title>
        <meta name="description" content="This page is for calculating a students final grade in a course and overall GPA.">
        <link href="style.css" rel="stylesheet" type="text/css" media="screen" />
    </head>
    <body>
    	<header>
    		<h1>Final Grade and GPA Calculator</h1>
            
    	</header>

        <nav class="menu">
            <a href="grade.php">Final Grade Calculator</a>
            <a href="gpa.php">GPA Calculator</a>
            <a href="data.php">Data Visualized</a>
        </nav>

        <main>
            <h2> GPA Calculator </h2>
            <p> 
                <form id="gpaCalculator" action='gpaToFile.php' method="POST">
                    <div id="totalGrades">
                        <!-- Grades added dynamically using javascript -->
                    </div>
                    <button type="button" id="addGrade">Add Grade</button>
                    <input type="submit" value="Submit">
                </form>

                <script src="gpa.js"></script>
            </p>

    </body>
</html>