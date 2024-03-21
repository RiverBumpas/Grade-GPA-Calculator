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

        <main>
            <h2> Final Grade Calculator </h2><br>
            <p>
                <form id="finalGrade" action="finalGradeToFile.php" method="POST">
                    <div id="totalCourses">
                        <!-- Courses added dynamically using javaScript -->
                    </div>
                    <button type="button" id="addCourse">Add Course</button>
                    <input type="submit" value="Submit">
                </form>

                <script src="finalGrade.js"></script>
            </p>

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