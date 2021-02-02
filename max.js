var business = 1050;
var minister = 2850;
var sochib   = 950;

var max = Math.max(business , minister , sochib);
console.log(max);


if (business > minister) {
    if (business > sochib) {
        console.log( "business is the big ");
    }else{
        console.log('sochib is big');
    }
}
else{
    if (minister > sochib) {
        console.log("minister is big" );

    }else{
        console.log('sochib is big')
    }
}
