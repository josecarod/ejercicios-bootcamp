/*
//manera 1 
const arreglo1 = []
console.log(arreglo1);

//manera2
const arreglo2 = Array.of(1, 'Hola', true);
console.log(arreglo2);

//manera3
const arreglo3 = new Array(3, true, 'adios');
console.log(arreglo3);
*/
const frutas = ['manzana', 'naranjas', 'uvas', 'sandias', [1, 2, 3, 4, 5, ['A','B','C','D']]];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);



//metodos

/* length = longitud 
conocer la longitud de nuestro arreglo
*/

const letras  = ['A','B','C','D'];
console.log(letras.length)

/*
push
añade un elemento al final del arreglo
*/

letras.push('E');
console.log(letras);

/* pop = elimina el ultimo elemento */
letras.pop();
console.log(letras);


/* unshift = agrega un elemento al inicio */
letras.unshift(1);
console.log(letras);


/*
shift
elimina el primer elemento del arreglo
*/
letters.shift();
console.log(letters);









