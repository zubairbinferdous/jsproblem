
// var num = [79 , 66 , 88 , 90 , 177];
// var sum = 0; 

// for (let i = 0; i < num.length; i++) {
   
//     var elemant = num[i];
//     sum = elemant + sum ;
//     console.log(sum);
    
// }

//console.log(sum);

function Sum(number) {
    var num = 0;
    for (let i = 0; i < number.length; i++) {
        
         var elemant = number[i];
         num = elemant + num;
        
    }
    return num;
}

 var result = Sum( [10 , 20 , 30] );
 console.log(result);


