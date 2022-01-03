/********************************************** 
 * Sentencia IF / ELSE                        *
 * *******************************************/

// IF       significa SI
// ELSE     Delo contrario
// ===      Igual tanto en el contenido, como en el tipo de dato
// ES5          
// ES6      


var nombre = 'NEO'; //Variable String
var estadoCivil = 'casado'; // variable String
var alcohol = false; // variable booleana


if (estadoCivil === 'soltero'){
    console.log(nombre + ' es infeliz');
}else{
    console.log(nombre + ' totalmente feliz');
}

/*************** */

if (alcohol === true){
    console.log('Neo es alcoholico');
}else{
    console.log('Neo no es alcoholico');
}