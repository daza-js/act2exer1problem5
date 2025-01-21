// Definir dos arreglos de números enteros con valores de elección libre
const array1 = [34, 12, 56, 78, 23];
const array2 = [45, 10, 50, 70, 20];

// Función para generar un tercer arreglo con el menor valor de cada posición
function generateMinArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      throw new Error("Los arreglos deben tener el mismo tamaño.");
  }

  // Crear un arreglo con el menor valor de cada posición
  const minArray = arr1.map((value, index) => Math.min(value, arr2[index]));

  // Ordenar el arreglo resultante en orden descendente
  return minArray.sort((a, b) => b - a);
}

// Generar el tercer arreglo
const resultArray = generateMinArray(array1, array2);

// Mostrar los resultados
console.log("Arreglo 1:", array1);
console.log("Arreglo 2:", array2);
console.log("Arreglo resultante (valores menores ordenados de forma descendente):", resultArray);