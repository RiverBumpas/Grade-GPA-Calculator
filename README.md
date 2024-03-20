# M3OEP-sgmalik-rbumpas

River Bumpas and Surya Malik  

-change input fields to receive input from website  
-2 options to calculate like we had it before  
-unsure how we can incorporate command line argument  
-potentially split c++ file into python file to do subprocesses? or html -> php -> python -> c++  
-use matplotlib to display graphical data of grades??  
-if we have time implement more logic to predict a final grade  
  ex. "i have ____ grade currently, what would I need to get on this assignment (check weight) to receive ___ final grade" 


messed around for a bit and figured out tentative plan:

-use html/css front end with 2 different forms, unique id's  
-use python to process form elements using flask framework  
-depending which form was submitted, pull the name and use a command line switch or 2 separate c++ programs to calculate logic accordingly  
  -this is because of the fact that the user can either enter final grades or calculate them in order to receive their gpa
  -the switch allows the logic to be split in one file based on what form was submitted  
  -the 2 files would simply just separate the logic of the 2 scenarios and again, depending on which form was submitted, the correct file is called
-I believe it is already outputting as plain text, still need to figure out how to process c++ output  
  -most of the data will be available from the form for the plots immediately, but if you are calculating averages, need those to be output somehow for 
   graphical reasons  
  -c++ handling calculations
  -want assigments if possible to have a graph and want final grades to have a bar graph  
  -after form submitted, route to a second page or reload page to have the graphs as well as your averages and GPA neatly displayed  


  
-DO MORE RESEARCH ON HOW PYTHON WILL INTERACT WITH C++ OUTPUT



