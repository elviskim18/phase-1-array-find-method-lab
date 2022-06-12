// code your solution here

function superbowlWin (array)  {
    for(const item of array){
        if(item.result === "W"){
            return item.year;
        }
    }
        
    }