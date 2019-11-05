//Searching whether a patch with [x,y] coordinates is within dirty patches. If yes, adding it to cleaned patches array (but only once). 

export function findPatch (dirtyPatches, cleanedPatches, xPosition, yPosition){
    //Serching  whether [x,y] patch is in dirtyPatches array
    let candidate = dirtyPatches.filter(function(patch){
                if (patch[0]==xPosition && patch[1]==yPosition){
                    return patch;
                } 
            });
    // if found (length >0) and is not among of already cleaned patches, adding candidate to cleanedPatches array. 
    if (candidate.length > 0 && !cleanedPatches.includes(candidate[0])){
        cleanedPatches.push(candidate[0]);
    }
    return cleanedPatches;
}
