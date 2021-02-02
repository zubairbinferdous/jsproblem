var a = 5;
var b = 7;
// console.log( "befor swap: a=", a , "b=", b );
var temp = a;
 a = b;
 b = temp; 
//  console.log( "after swap: a=", a , "b=", b );


// a=b;
// b=a;
// console.log( "after swap: a=", a , "b=", b );

var x = 10;
var y = 11;

x =  x+y;
y =  x-y;
x = x- y;

// console.log( "after swap: x=", x , "y=", y );

var p = 5;
var q = 6;

[p , q] = [q,p];
console.log( "after swap: p=", p , "q=", q );

