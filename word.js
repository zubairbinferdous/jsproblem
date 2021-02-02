
var sppech = "i am a good programmer. javascript. ";

var count = 0;
for (let i = 0; i < sppech.length; i++) {
    
    var char = sppech[i];
    if (char == " " && sppech[i-1] != " ") {
        count++;
    }
    
}
count++;
console.log(count);