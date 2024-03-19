//
// Created by River Bumpas on 2/25/24.
//

#include "gpaCalculator.h"
#include <iostream>


bool test_category();
bool test_course();
bool test_gpa_calculator();

int main(){

    srand(time(NULL));

    if (test_category()) {
        cout << "Passed all category test cases" << endl;
    }

    if (test_course()) {
        cout << "Passed all course test cases" << endl;
    }

    if (test_gpa_calculator()) {
        cout << "Passed all gpa calculator test cases" << endl;
    }

    return 0;

};

bool test_category(){
    bool passed = true;
    category testCategory;
    if (testCategory.getNumAssignments() != 0 || testCategory.getTotalPoints() != 0 ||
        testCategory.getNumDropped() != 0 || testCategory.getWeight() != 0) {
        cout << "Failed default constructor test case" << endl;
        passed = false;
    }
    testCategory.addAssignment(50);
    testCategory.setNumAssignments(2);
    if (testCategory.getNumAssignments() != 2) {
        cout << "Failed setting number of assignment test case" << endl;
        passed = false;
    }
    if (testCategory.getTotalPoints() != 50) {
        cout << "Failed getting total points test case" << endl;
        passed = false;
    }
    if (testCategory.getCategoryAverage() != 25) {
        cout << "Failed category average test case" << endl;
        passed = false;
    }
    testCategory.setWeight(.5);
    if (testCategory.getWeight() != .5) {
        cout << "Failed weight test case" << endl;
        passed = false;
    }
    if (testCategory.getWeightedAverage(100, .5) != 50) {
        cout << "Failed weighted average test case" << endl;
        passed = false;
    }
    return passed;
}

bool test_course(){
    bool passed = true;
    course c;
    if (c.getCatNumber() != 0) {
        passed = false;
        cout << "FAILED default contructor test case" << endl;
    }
    course c1(8);
    if (c1.getCatNumber() != 8) {
        passed = false;
        cout << "FAILED constructor test case" << endl;
    }
    c1.setCatNumber(4);
    if (c1.getCatNumber() != 4) {
        passed = false;
        cout << "FAILED set Cat Number test case" << endl;
    }
    if (c1.getCategory(0).getNumAssignments() != 0) {
        passed = false;
        cout << "FAILED get Category test case" << endl;
    }
    return passed;
}

bool test_gpa_calculator() {
    vector <pair<double,int> > testingVec;
    bool passed = true;
    gpaCalculator g;
    if (g.getNumCourses() != 0) {
        passed = false;
        cout << "FAILED default contructor test case" << endl;
    }
    gpaCalculator g1(8);
    if (g1.getNumCourses() != 8) {
        passed = false;
        cout << "FAILED constructor test case" << endl;
    }
    g1.setNumCourses(4);
    if (g1.getNumCourses() != 4) {
        passed = false;
        cout << "FAILED set Cat Number test case" << endl;
    }
    return passed;

}


