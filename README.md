
# Ejercicio 5: Generacion de un arreglo desde dos arreglos de números enteros predefinidos


### Descripción del Código

1. **Definición de los Arreglos Iniciales**:
   Dos arreglos con valores enteros se definen al inicio del programa. Estos arreglos deben tener el mismo tamaño para garantizar que cada posición se compare correctamente.
   ```javascript
   const array1 = [34, 12, 56, 78, 23];
   const array2 = [45, 10, 50, 70, 20];
   ```

2. **Función para Generar el Tercer Arreglo**:
   La función `generateMinArray` recibe los dos arreglos como argumentos y realiza las siguientes operaciones:
   - Comprueba que los arreglos tengan el mismo tamaño. Si no es así, lanza un error.
   - Utiliza el método `map` para recorrer los elementos de `array1` y comparar con los elementos correspondientes de `array2`.
   - Usa `Math.min` para seleccionar el menor valor de cada posición.
   - Ordena el arreglo resultante en orden descendente utilizando el método `sort`.

   ```javascript
   function generateMinArray(arr1, arr2) {
       if (arr1.length !== arr2.length) {
           throw new Error("Los arreglos deben tener el mismo tamaño.");
       }

       // Crear un arreglo con el menor valor de cada posición
       const minArray = arr1.map((value, index) => Math.min(value, arr2[index]));

       // Ordenar el arreglo resultante en orden descendente
       return minArray.sort((a, b) => b - a);
   }
   ```

   **Análisis**:
   - La validación inicial garantiza que el programa no procese arreglos con tamaños diferentes, evitando errores.
   - La función es modular y reutilizable, lo que permite trabajar con otros arreglos si se necesita.

3. **Generación del Arreglo Resultante**:
   - Se llama a la función `generateMinArray` con los dos arreglos iniciales.
   - Se almacena el arreglo resultante en la variable `resultArray`.
   ```javascript
   const resultArray = generateMinArray(array1, array2);
   ```

4. **Impresión de Resultados**:
   - Los tres arreglos se muestran en la consola con mensajes descriptivos.
   ```javascript
   console.log("Arreglo 1:", array1);
   console.log("Arreglo 2:", array2);
   console.log("Arreglo resultante (valores menores ordenados de forma descendente):", resultArray);
   ```

---

### Código Completo

```javascript
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
```

---

### Ejecución del Programa
1. Abre la terminal y dirígete a la carpeta del proyecto:
   ```bash
   cd act2exer1problem5
   ```

2. Ejecuta la aplicación:
   ```bash
   npm start
   ```
3. **Ver resultados**:
   - El programa imprimirá los tres arreglos en la consola.

---

### Resultado Esperado

Para los arreglos definidos como:
```javascript
const array1 = [34, 12, 56, 78, 23];
const array2 = [45, 10, 50, 70, 20];
```

El resultado será:
```
Arreglo 1: [34, 12, 56, 78, 23]
Arreglo 2: [45, 10, 50, 70, 20]
Arreglo resultante (valores menores ordenados de forma descendente): [34, 23, 20, 12, 10]
```

---
