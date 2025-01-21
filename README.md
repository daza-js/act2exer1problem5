
# Ejercicio 5: genera un tercer arreglo basado en los valores mínimos de dos arreglos de números enteros

---

### Descripción del Código

1. **Definición de los Arreglos Iniciales**:
   Se definen dos arreglos con números enteros y una cantidad de elementos igual.
   ```javascript
   const array1 = [10, 20, 30, 40, 50];
   const array2 = [15, 18, 25, 35, 45];
   ```

2. **Creación del Tercer Arreglo**:
   El tercer arreglo se genera utilizando un bucle `for`, comparando los elementos correspondientes de los dos arreglos y almacenando el valor menor.
   ```javascript
   const minArray = [];
   for (let i = 0; i < array1.length; i++) {
       minArray.push(Math.min(array1[i], array2[i]));
   }
   ```

   **Análisis**:
   - `Math.min(array1[i], array2[i])` se utiliza para obtener el menor de los dos valores en cada posición.
   - Los valores menores se almacenan en el nuevo arreglo `minArray`.

3. **Ordenar el Arreglo en Orden Descendente**:
   Una vez generado el tercer arreglo, se ordena en orden descendente utilizando el método `sort`.
   ```javascript
   minArray.sort((a, b) => b - a);
   ```

4. **Impresión de Resultados**:
   El programa muestra los tres arreglos en consola.
   ```javascript
   console.log("Primer arreglo:", array1);
   console.log("Segundo arreglo:", array2);
   console.log("Tercer arreglo (menores en orden descendente):", minArray);
   ```

---

### Código Completo

```javascript
// Definir los dos arreglos iniciales
const array1 = [10, 20, 30, 40, 50];
const array2 = [15, 18, 25, 35, 45];

// Crear el tercer arreglo con los valores mínimos
const minArray = [];
for (let i = 0; i < array1.length; i++) {
    minArray.push(Math.min(array1[i], array2[i]));
}

// Ordenar el tercer arreglo en orden descendente
minArray.sort((a, b) => b - a);

// Mostrar resultados
console.log("Primer arreglo:", array1);
console.log("Segundo arreglo:", array2);
console.log("Tercer arreglo (menores en orden descendente):", minArray);
```

---

### Ejecución de la Aplicación

1. **Preparar el entorno**:
   - Instale Node.js si no está instalado en su sistema.

2. **Crear el archivo**:
   - Guarde el código anterior en un archivo llamado `minArrayDesc.js`.

3. **Ejecutar el programa**:
   - En la terminal, ejecute el siguiente comando:
     ```bash
     node minArrayDesc.js
     ```

4. **Ver resultados**:
   - El programa imprimirá los tres arreglos, indicando cómo se generó el tercer arreglo.

---

### Resultado Esperado

Para los arreglos de ejemplo:
```javascript
array1 = [10, 20, 30, 40, 50];
array2 = [15, 18, 25, 35, 45];
```

El resultado será:
```
Primer arreglo: [10, 20, 30, 40, 50]
Segundo arreglo: [15, 18, 25, 35, 45]
Tercer arreglo (menores en orden descendente): [40, 30, 20, 10]
```

---