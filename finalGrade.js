document.addEventListener('DOMContentLoaded', function() { // waits until html loaded
    document.getElementById('addCourse').addEventListener('click', addCourse); // listens for click on addCourse button and calls addCourse function when it's triggered
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('addCategory')) {
            addCategory(e.target.parentNode);
        }
    });
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('addAssignment')) {
            addAssignment(e.target.parentNode, e.target.parentNode.parentNode.parentNode.parentNode);
        }
    });

    document.getElementById('finalGrade').addEventListener('submit', function(event) {
        event.preventDefault(); // stops form from submitting initially
        if (validateWeight()) {
            this.submit(); // if validation successful, submit
        } else {
            alert('Course weights must sum to 1');
        }
    });
}); 

function addCourse() {
    const totalCourses = document.getElementById('totalCourses'); // gets element with totalCourses id attribute
    const additionalCourses = totalCourses.children.length + 1; // adds one to number of child elements of totalCourses
    const courseDiv = document.createElement('div'); // creates html element
    courseDiv.id = `course${additionalCourses}`;
    courseDiv.innerHTML = `
        <fieldset>
            <legend>Course ${additionalCourses}</legend>
            <input type="text" name="courses[${additionalCourses}][name]" placeholder="Course Name" required>
            <div class="totalCategories"></div>
            <button type="button" class="addCategory">Add Category</button>
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Course</button>
        </fieldset>
    `; // sets html for new course div, input field for course name, sets a div for categories which will also have dynamically added fields, creates button for these fields
    totalCourses.appendChild(courseDiv); // add courseDiv to the totalCourses div
}

function addCategory(courseDiv) { // same logic as addCourse essentially
    const additionalCourses = document.getElementById('totalCourses').children.length;
    const totalCategories = courseDiv.querySelector('.totalCategories'); // looks for first element with name totalCategories (css selector name)
    const additionalCategories = totalCategories.children.length + 1;
    const categoryDiv = document.createElement('div');
    categoryDiv.id = `category${additionalCategories}`;
    categoryDiv.innerHTML = `
        <fieldset>
            <legend>Category ${additionalCategories}</legend>
            <input type="text" name="courses[${additionalCourses}][categories][${additionalCategories}][name]" placeholder="Category Name" required>
            <input type="number" name="courses[${additionalCourses}][categories][${additionalCategories}][weight]" placeholder="Weight (decimal)" required min="0" max="1" step="0.01">
            <div class="totalAssignments"></div>
            <button type="button" class="addAssignment">Add Assignment</button>
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Category</button>
        </fieldset>
    `;
    totalCategories.appendChild(categoryDiv);
}

function addAssignment(categoryDiv, courseDiv) { // very similar logic
    const additionalCourses = document.getElementById('totalCourses').children.length;
    const additionalCategories = courseDiv.querySelector('.totalCategories').children.length;
    const totalAssignments = categoryDiv.querySelector('.totalAssignments');
    const additionalAssignments = totalAssignments.children.length + 1;
    const assignmentDiv = document.createElement('div');
    assignmentDiv.id = `assignment${additionalAssignments}`;
    assignmentDiv.innerHTML = `
        <fieldset>
            <legend>Assignment ${additionalAssignments}</legend>
            <input type="text" name="courses[${additionalCourses}][categories][${additionalCategories}][assignments][${additionalAssignments}][name]" placeholder="Assignment Name" required>
            <input type="number" name="courses[${additionalCourses}][categories][${additionalCategories}][assignments][${additionalAssignments}][score]" placeholder="Score" required min="0" step="0.01">
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Assignment</button>
        </fieldset>
    `;
    totalAssignments.appendChild(assignmentDiv);
}

function removeElement(fieldset) {
    // Directly removing the parent fieldset which can be a course, category, or assignment
    fieldset.remove();
}

function validateWeight() {
    const courses = document.getElementById('totalCourses').children;
    let isValid = true;

    Array.from(courses).forEach((courseDiv, courseIndex) => {
        let totalWeight = 0;
        const weights = courseDiv.querySelectorAll("input[name^='courses[" + (courseIndex + 1) + "]'][name$='[weight]']");
        // selects all inputs with name starting with courses concatenated to the index plus 1 because of 0 indexing, also checks if name end with '[weight]' to ensure it's pulling the weight field 
        weights.forEach(weightInput => {
            totalWeight += parseFloat(weightInput.value) || 0;
        });

        if (totalWeight !== 1) {
            isValid = false;
        }
    });

    return isValid; // Return the overall validation result

}
