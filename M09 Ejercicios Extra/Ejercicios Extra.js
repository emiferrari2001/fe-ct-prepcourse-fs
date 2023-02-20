/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = [];
   for (key in objeto) {
      var arregloNuevoActual = [key , objeto[key]];
      arregloDeArreglos.push(arregloNuevoActual);
   }
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letrasSeparadas = string.split('');
   var objetoOrdenado = {};
   var variablesVarias = [];
   letrasSeparadas.sort();
   var letraAnterior = letrasSeparadas[0];
   var contadorLetraActual = 0; 
   for (let i = 0; i<letrasSeparadas.length; i++) {
      var letraActual = letrasSeparadas[i];     

      if (letraAnterior == letraActual) {
         contadorLetraActual = contadorLetraActual + 1;
      } else {
         objetoOrdenado[letraAnterior] = contadorLetraActual;         
         contadorLetraActual = 1;
         letraAnterior = letraActual;
      }
      // para que no se pierda la ultima letra
      objetoOrdenado[letraAnterior] = contadorLetraActual;

      }
      
      return objetoOrdenado;
   }

   function capToFront(string) {
      // Recibes un string con algunas letras en mayúscula y otras en minúscula.
      // Debes enviar todas las letras en mayúscula al comienzo del string.
      // Retornar el string.
      // [EJEMPLO]: soyHENRY ---> HENRYsoy
      // Tu código:
      var letrasSeparadas = string.split('');
      console.log(letrasSeparadas)
      var arrayMayusc = [];
      var arrayMinusc = [];
      for (let i = 0; i< string.length; i++){
         var letraActual = string[i];
   
         if (letraActual == letraActual.toUpperCase()){
            
            arrayMayusc.push(letraActual);
         } else {
            arrayMinusc.push(letraActual);
         }
        
      }
      var stringMayusc = arrayMayusc.join('');
         var stringMinusc = arrayMinusc.join('');
         var todoJunto = stringMayusc+stringMinusc;
      return todoJunto;
   }

   function asAmirror(frase) {
      // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
      // La diferencia es que cada palabra estará escrita al inverso.
      // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
      // Tu código:
      var arrayEspejado = [];
      var arrayPalabras = frase.split(' ');
      console.log(arrayPalabras);
      // ahora tengo que recorrer cada palabra y espejarla
      arrayPalabras.forEach(palabra => {
         var palabraActual = [];
         arrayPalabras[palabra] = "";
         for (let i = 0; i<palabra.length; i++){
            var caracterActual = palabra[i];
            palabraActual.unshift(caracterActual);
         }
         var palabraActualJunta = palabraActual.join('');
         arrayEspejado.push(palabraActualJunta);
         var resultadoFinal = arrayEspejado.join(' ');

      });
      
      var resultadoEspejado = arrayEspejado.join(' ');
      return resultadoEspejado;
   }

   function capicua(numero) {
      // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
      // Caso contrario: "No es capicua".
      // Tu código:
   
      // condicional de si numero es igual al derecho que al reves
      var nroReves = 0;
      // metodo split no funciona con integer por lo que hay que convertirlo a string
      var nroString = numero.toString();
      var nroSeparado = nroString.split('');
      var nroEspejado = [];
      var evaluarCapicua = nroSeparado.forEach(nro => {         
         for (let i = 0; i<nro.length ; i++){
            nroEspejado.unshift(nro);
            
         }         
      });
      var nroEspejadoJunto = nroEspejado.join('');
      // si convierto a integer me quita el primer digito si es cero
      if (nroEspejadoJunto === nroString){
         return "Es capicua";
      } else {
         return "No es capicua";
      }       
   }

   function deleteAbc(string) {
      // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
      // Retorna el string sin estas letras.
      // Tu código:
      var arrayLetras = [];
   
      for (let i = 0; i<string.length; i++){
         var letraActual = string[i];
         if (letraActual == "a" || letraActual == "b" || letraActual == "c" ) {
            continue;
         } else {
            arrayLetras.push(letraActual);
         }
      }
         var resultadoFinal = arrayLetras.join('');
         return resultadoFinal;
   }

   function sortArray(arrayOfStrings) {
      // Recibes un arreglo de strings.
      // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
      // de la longitud de cada string.
      // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
      // Tu código:
      
      
      var nuevoArray = arrayOfStrings.sort((a, b) => a.length - b.length);
   return nuevoArray;
   }

   function buscoInterseccion(array1, array2) {
      // Recibes dos arreglos de números.
      // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
      // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
      // Si no tienen elementos en común, retornar un arreglo vacío.
      // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
      // Tu código:
   
   
      // tengo que:
      // comparar cada valor del primer array con cada valor del segundo
      // si alguno coincide, ahi debo recorrer el nuevo array para comprobar que no se repita ese valor
      // si se repite, se saltea
      // si no se repite, se agrega al array
      var nuevoArreglo = [''];
      var largo1 = array1.length;
      var largo2 = array2.length;
      // recorro el que sea mas largo 
      
      var recorreArray1 = array1.forEach(nroArray1 => {
         for (let i = 0; i<array2.length; i++){
            if (nroArray1 != array2[i]){
               console.log("el numero del primer array " + nroArray1 + " y el nro del segundo " + array2[i] + " son distintos");
               continue;
            } else if (nroArray1 == array2[i]) {
               for (let a = 0; a<nuevoArreglo.length; a++){
                  if (nuevoArreglo[a] == '') {
                     console.log(array2[i] + " es el primer valor que se repite");
                     nuevoArreglo.pop();
                     nuevoArreglo.push(array2[i]);
                     console.log("Caso 1: nuevo arreglo: " +nuevoArreglo);
                  } else if(nuevoArreglo[a] != array2[i]){
                     console.log("los numeros son iguales, no se repitio su valor y el valor es: " + array2[i]);
                     nuevoArreglo.push(array2[i]);
                     console.log("Caso 2: nuevo arreglo: " + nuevoArreglo);                 
                  } else {
                     console.log("Caso 3: los numeros son iguales pero el valor " + array2[i] + " ya se encuentra en el nuevo array");
                     break;
                  }
               }
            }
         }
         
      });
      if (nuevoArreglo[0] == '') {
         nuevoArreglo.pop();
      }
      console.log("nuevo arreglo: " + nuevoArreglo);
         return nuevoArreglo;
   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
