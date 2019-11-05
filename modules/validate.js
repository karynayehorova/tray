//This function validates the fields within output array
export function validate (outputArray){

    const roomWidth = outputArray[0][0]; // getting room width
    const roomLength = outputArray[0][1]; // getting room height
    const positionX = outputArray[1][0]; // getting current x position of hoover 
    const positionY = outputArray[1][1]; // getting current y position of hoover 

    /*Getting driving instructions. Expected format example: ["N","N","S",...]. For that getting the last value of the output array, and splitting each character.*/
    const instructions = outputArray[outputArray.length -1][0];

    // Validate input.txt file format. At least room dimension, initial coordinates and instructions should be presented:
    if (outputArray.length<3) {
        throw "Invalid input.txt format: input.txt file should have at least room dimensions, initial coordinate, and navigation instructions.";
    }
    // Validate instructions line includes only "N","S","W","E" characters. 
    if (instructions.search(/[^NSWE]+/)>=0){
        throw "Driving instructions must include only \"N\", \"S\", \"W\", \"E\" characters (upper case)";
    }
    for (let i=0; i<outputArray.length -1; i++){
        // Validate that each line has two parameters: 
        if(outputArray[i].length!=2){
            throw "Invalid input.txt format: Ensure that each line has only two coordinates and no extra spaces.";
        }
        // Validate that all outputArray values are numbers except the instructions line:
        for(let j=0; j<outputArray[i].length; j++){
            if(isNaN(outputArray[i][j])){
                throw "Invalid input.txt format: One or more of coordinates parameter is not a number.";
            }
            // Checking there are no negative values in input.txt.
            if(outputArray[i][j]<0){
                throw "Room dimensions or coordinates cannot take negative values.";
            }
        }
    }
    // Validate room width and length is not zero
    if(0==roomLength || 0==roomWidth){
        throw 'Room dimension cannot be zero.'
    }
    //  Validate initial coordinates are within room boundaries: 
    if(positionX>roomWidth || positionY>roomLength){
        throw "Initial robotic hoover prosition is beyond the room limits.";
    }
}