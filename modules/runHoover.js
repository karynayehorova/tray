/* Function that runs the hoover. 

1. It fetches the input file and converts fetched result to text,
2. Converts text to an array of values using convertTextToArray() function. Output array format example: [[5, 5], [1, 2], [1, 0], [2, 2], [2, 3], ["NNESEESWNWW"]],
3. Validates the output array using validate() function,
4. Implements hoover navidation logic, and 
5. verifies whether a patch has been cleaned (findPatch())

runHoover() function returns and array of x and y coordinate of hoover's final position and number of cleaned patches.  
*/

import { validate } from './validate.js';
import { findPatch } from './findPatch.js';
import { convertTextToArray } from './convertTextToArray.js';

export function runHoover(inputFile){
    const result = fetch(inputFile)  
    .then((resp) => resp.text()) // obtaining text from the input file
    .then((text) => {
    /* returning an array, where elements would represent an arrays of room dimensions or hover positions and last element will represent the direction sequence. Example: [[5, 5], [1, 2], [1, 0], [2, 2], [2, 3], ["NNESEESWNWW"]]*/
    return convertTextToArray(text);
    })
    .then((outputArray) => {

        //validate array has proper values 
        validate(outputArray);

        // Initializing room width, lenght, current position, driving instructions: 
        const roomWidth = outputArray[0][0];
        const roomLength = outputArray[0][1];
        let xPosition = outputArray[1][0];
        let yPosition = outputArray[1][1];
        const instructions = outputArray[outputArray.length -1][0].split(''); //Expected format example: ["N","N","S",...]
        const dirtyPatches = outputArray.slice(2, outputArray.length-1);// Getting array of dirty patches
        
        //Initializing a new array that will store cleaned patches. 
        let cleanedPatches = new Array(); 

        // Implementing changing coordinate logic depending on the instruction. 
        for(let i=0;i<instructions.length; i++)
        {
            switch(instructions[i]){
                 case "N":
                    yPosition++;
                    break;
                case "S":
                    yPosition--;
                    break;
                case "W": 
                    xPosition--;
                    break;
                case "E":
                    xPosition++;
                    break;
                default:
                    //we shouldn't be able to get there because validation() step will terminate the program if instructions string is invalid. 
            }

            // Skidding the hoover when hitting the wall
            if(xPosition>=roomWidth){xPosition = roomWidth-1;}
            if(yPosition>=roomLength){yPosition = roomLength-1;} 
            if(xPosition<0){xPosition = 0;} 
            if(yPosition<0){yPosition = 0;}

            //After coordinate is changed, verify if a new coordinate is in dirtyPatches array. If yes, update cleanedPatches array with correspondent x,y patch position
            try{
                findPatch(dirtyPatches, cleanedPatches, xPosition, yPosition);
                //console.log(cleanedPatches);
            }
            catch(error){
                console.error(error)
            }
        }

    // Displaying the results: 
    console.log(xPosition + " " + yPosition);
    console.log(cleanedPatches.length);

    //returning the result 
    return [xPosition, yPosition, cleanedPatches.length];
    })
    .catch( (error) => console.log(error));
return result;
}