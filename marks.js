var marks = [56, 89, 99, 54, 74, 22, 52 , 90, 88];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {  
   var elemant = marks[i];
   if (elemant > max) {
       max = elemant;
   }
    
}

console.log('highest value is :', max );