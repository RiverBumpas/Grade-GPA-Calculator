document.addEventListener('DOMContentLoaded', function() { // waits until html loaded
    document.getElementById('addGrade').addEventListener('click', addGrade);
}); // listens for click on addCourse button and calls addCourse function when it's triggered

function addGrade() {
    const totalGrades= document.getElementById('totalGrades'); // gets element with totalGrades id attribute
    const additionalGrades = totalGrades.children.length + 1; // adds one to number of child elements of totalGrades
    const gradeDiv = document.createElement('div'); // creates html element
    gradeDiv.id = `grade${additionalGrades}`;
    gradeDiv.innerHTML = `
        <fieldset>
            <legend>Grade ${additionalGrades}</legend>
            <input type="text" name="courseName${additionalGrades}" placeholder="Course Name" required>
            <input type="text" name="courseCredit${additionalGrades}" placeholder="# of Credits" required>
            <button type="button" onclick="removeElement(this.parentNode.parentNode)">Remove Grade</button>
        </fieldset>
    `; // sets html for new course div, input field for course name
    totalGrades.appendChild(gradeDiv); // add courseDiv to the totalCourses div
}

function removeElement(fieldset) {
    // Directly removing the parent fieldset which can be a course, category, or assignment
    fieldset.remove();
}