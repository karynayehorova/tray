 // This function converts text obtained from the input text file to an array in a specific format. Format example:[[5, 5], [1, 2], [1, 0], [2, 2], [2, 3], ["NNESEESWNWW"]])
 export function convertTextToArray(text){

        /*Step1: Each string split by '\n'
    Example of expected result [["5 5"], ["1 2"], ["1 0"], ["2 2"], ["2 3"], ["NNESEESWNWW"]]*/
    let outputArray = text.split('\n').map(function(outputArray){ 
        /*Step 2: each array element string split by space
        Example of expected result: [["5", "5"], ["1", "2"], ["1", "0"], ["2", "2"], ["2", "3"], ["NNESEESWNWW"]]*/
        outputArray = outputArray.split(' ');
        /*Step 3: Each element of the array convert to a number (Int) and if it is not a number (driving instructions string), do not change the vallue
        Example of expected result: [[5, 5], [1, 2], [1, 0], [2, 2], [2, 3], ["NNESEESWNWW"]] */
         outputArray = outputArray.map((arrayValue) => {
            if (!isNaN(arrayValue)){
                // if a number, parse to Int
                arrayValue = parseInt(arrayValue);
            }
            return arrayValue;
        });
        return outputArray;
    });
    return outputArray;
}