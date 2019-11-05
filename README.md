Assignment 1 - Robotic hoover navigation

Scope / task description is here: https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5#https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5

Deliverables:  
 - index.html: imports and runs runHoover() function from correspondent .js file in ‘modules’ folder. 
 - modules folder includes .js files with correspondent functions used by runHoover() function
      - convertTextToArray.js includes convertTextToArray() function takes text as an input, goes line by line and returns an array with dimensions, coordinates and navigation instructions. Array example: 
        [[5, 5], [1, 2], [1, 0], [2, 2], [2, 3], ["NNESEESWNWW"]] 
      - validate.js includes validate() function that takes the array as an input, and checks for inconsistencies, i.e. zero dimension(s), initial position out of room range, invalid driving instructions, etc. 
      - findPatch.js includes findPatch() function that  searches whether x and y current patch coordinates are among of dirty patches that need to be cleaned. If a match is found, x and y are added to  the cleanedPatches array. Duplicates are avoided. cleanedPatches array is returned. 
      - runHoover.js includes runHoover() function that calls functions above, also is tracking for the coordinate change during the navigation. At the end, runHoover() function outputs x and y position of the hoover, as well as the number of patches being cleaned. 
 - input.txt - a sample text file with dimensions, coordinates and instructions. 
 
 - tests  - the directory that includes tests ;)
      - test_input_files the directory that includes 12 test input.txt files that simulate various test scenarios / edge cases. 
      - tests.json file schema includes the list of tests, their description & expected result, and also the name of the input file this test is associated with. 
      - tests.html includes a script that goes through tests.json, gets test input file name, feeds it to runHoover() function. Script within tests.html outputs expected test information, as well as runHoover results to the console.  
        Limitation: there is no automatic PASS/FAIL check. To be considered in further versions :)
