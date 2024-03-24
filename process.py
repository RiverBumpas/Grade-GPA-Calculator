
if __name__ == "__main__":

    gpa_data = []
    final_grade_data = []

    with open("results.txt", "r") as file:
        path_choice = file.readline().strip()
        
        if path_choice == "gpaCalculator":
            for line in file:
                info = line.strip().split(',')
                course = info[0]
                credits = int(info[1])
                grade = int(info[2])
                gpa_data.append((course, credits, grade))
            #run cpp file

        elif path_choice == "finalGrade":
                #NOT WORKING YET, NEEDS MORE WORK
                lines = file.readlines()  

                course_name = ""
                categories = []
                category_data = []

                for line in lines:
                    line = line.strip() 

                    # If the line is empty, go to next course
                    if not line:
                        course_name = ""
                        categories = []
                        category_data = []
                        continue

                    if not course_name:
                        course_name = line
                        continue

                    category_info = line.split(',')
                    category_name = category_info[0]
                    category_weight = float(category_info[1])
                    assignments = [(category_info[i], int(category_info[i+1])) for i in range(2, len(category_info), 2)]

                    categories.append([category_name, category_weight, assignments])
                    #run cpp file
    print(final_grade_data)
        