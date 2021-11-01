( function( x ){
    delete x; //Que hace esto?
    return x;
  } )( 1 );
console.log(( function( x ){
    delete x; //Que hace esto?
    return x;
  } )( 1 ));