
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let newArray = []
  
  for (i = 0; i < arreglo1.length; i++) {
    for (j = 0; j < arreglo2.length; j++)
    if (arreglo1[i] == arreglo2[j] ) {
      newArray.push(arreglo1[i]);
    }
    
    

  }
  
  document.write(newArray)
}
let a = [4,2,3]
let b = [4,0,3,4]

buscoInterseccion(a, b)
 
