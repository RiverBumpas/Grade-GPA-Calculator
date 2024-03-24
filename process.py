
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

        #elif path_choice == "finalGrade":
            #collect variables for finalGrade, run finalGrade c++ file
            

        
    