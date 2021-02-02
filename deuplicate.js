var nam = [3 , 8 , 9 , 3 , 8 , 10];
var uniqueName = [];

for (let i = 0; i < nam.length; i++) {
    
    var elemant = nam[i];
    var index = uniqueName.indexOf(elemant);
    if( index == -1){
        uniqueName.push(elemant);
    }
}

console.log(uniqueName);
