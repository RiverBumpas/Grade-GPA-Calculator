document.addEventListener('DOMContentLoaded', function() { // waits until html loaded
    document.getElementById('addCourse').addEventListener('click', addCourse);
}); // listens for click on addCourse button and calls addCourse function when it's triggered

function addCourse() {
    const totalCourses = document.getElementById('totalCourses'); // gets element with totalCourses id attribute
    const additionalCourses = totalCourses.children.length + 1; // adds one to number of child elements of totalCourses
    const courseDiv = document.createElement('div'); // creates html element
    courseDiv.id = `course${additionalCourses}`;
    courseDiv.innerHTML = `
        <fieldset>
            <legend>Course ${additionalCourses}</legend>
            <input type="text" name="courseName${additionalCourses}" placeholder="Course Name" required>
            <div class="totalCategories"></div>
            <button type="button" class="addCategory" onclick="addCategory(this.parentNode)">Add Category</button>
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Course</button>
        </fieldset>
    `; // sets html for new course div, input field for course name, sets a div for categories which will also have dynamically added fields, creates button for these fields
    totalCourses.appendChild(courseDiv); // add courseDiv to the totalCourses div
}

function addCategory(courseDiv) { // same logic as addCourse essentially
    const totalCategories = courseDiv.querySelector('.totalCategories'); // looks for first element with name totalCategories (css selector name)
    const additionalCategories = totalCategories.children.length + 1;
    const categoryDiv = document.createElement('div');
    categoryDiv.id = `category${additionalCategories}`;
    categoryDiv.innerHTML = `
        <fieldset>
            <legend>Category ${additionalCategories}</legend>
            <input type="text" name="${courseDiv.id}categoryName${additionalCategories}" placeholder="Category Name" required>
            <input type="number" name="${courseDiv.id}categoryWeight${additionalCategories}" placeholder="Weight (decimal)" required min="0" max="1" step="0.01">
            <div class="totalAssignments"></div>
            <button type="button" class="addAssignment" onclick="addAssignment(this.parentNode)">Add Assignment</button>
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Category</button>
        </fieldset>
    `;
    totalCategories.appendChild(categoryDiv);
}

function addAssignment(categoryDiv) { // very similar logic
    const totalAssignments = categoryDiv.querySelector('.totalAssignments');
    const additionalAssignments = totalAssignments.children.length + 1;
    const assignmentDiv = document.createElement('div');
    assignmentDiv.id = `assignment${additionalAssignments}`;
    assignmentDiv.innerHTML = `
        <fieldset>
            <legend>Assignment ${additionalAssignments}</legend>
            <input type="text" name="${categoryDiv.id}assignmentName${additionalAssignments}" placeholder="Assignment Name" required>
            <input type="number" name="${categoryDiv.id}assignmentScore${additionalAssignments}" placeholder="Score" required min="0" step="0.01">
            <button type="button" class="remove" onclick="removeElement(this.parentNode.parentNode)">Remove Assignment</button>
        </fieldset>
    `;
    totalAssignments.appendChild(assignmentDiv);
}

function removeElement(fieldset) {
    // Directly removing the parent fieldset which can be a course, category, or assignment
    fieldset.remove();
}