// code your solution here

function superbowlWin (collection)  {
    for(const element of collection){
        if(element.result === "W"){
            return element.year;
        }
    }
        
    }