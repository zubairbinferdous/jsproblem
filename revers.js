

function reversString (str) {
    var revers = "";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        revers = char + revers;
    }
    return revers;
}

var statment = " hello i am zubair ";
var result = reversString(statment);
console.log(result);