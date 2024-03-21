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
            <ul>
                <li><a href="grade.php">Final Grade Calculator</a></li>
                <li><a href="gpa.php">GPA Calculator</a></li>
                <li><a href="data.php">Data Visualized</a></li>
            </ul>
        </nav>

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
        </main>
    </body>
</html>