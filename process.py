import sys

def handle(file_path):
    with open(file_path, "r") as file:
        path_choice = file.readline().strip()
        
        if path_choice == "gpaCalculator":
            gpa_data = []
            for line in file:
                info = line.strip().split(',')
                course = info[0]
                credits = int(info[1])
                grade = int(info[2])
                gpa_data.append((course, credits, grade))

        elif path_choice == "finalGrade":
            lines = file.readlines()

            course_name = ""
            courses = []
            assignments = []

            for line in lines:
                line = line.strip() 

                # If the line is empty, go to next course
                if not line:
                    course_name = ""
                    assignments = []
                    continue

                if not course_name:
                    course_name = line
                    continue

                category_info = line.split(',')
                category_name = category_info[0]
                category_weight = float(category_info[1])
                assignments = [(category_info[i], int(category_info[i+1])) for i in range(2, len(category_info)-1, 2)]

                courses.append([course_name, [category_name, category_weight, assignments]])
    return result
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 process.py <file_path>")
        sys.exit(1)

    file_name = sys.argv[1]
    handle(file_name)

