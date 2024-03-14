var numero1, numero2,sumaDivNum1,sumaDivNum2,sumaDivisores; 

numero1 = parseInt(prompt("Ingrese el valor de Número 1"));
numero2 = parseInt(prompt("Ingrese el valor de Número 2"));

//Función para calcular la suma de los divisores de un número
function sumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        suma += i;
      }
    }
    return suma;
  }
  //Esta funcion nos ayuda a determinar si dos números son amigos
  function sonAmigos(numero1, numero2) {

    //Calcula la suma de los divisores de cada número
    const sumaDivNum1 = sumaDivisores(numero1);
    const sumaDivNum2 = sumaDivisores(numero2);

    //Esta estructura nos ayuda a saber si la suma de los divisores de "num1" es igual a "num2" y viceversa son amigos
    if (sumaDivNum1 === numero2 && sumaDivNum2 === numero1) {
      return true;
    } else {
      return false;
    }
  }
  
  //Y por ultimo, esta estructura nos dice si los números ingresados son amigos o no, mostrando un mensaje por pantalla
  if (sonAmigos(numero1, numero2)) {
   alert(numero1 + numero2 + " Son números amigos");
  } else {
    alert(numero1 + numero2 + " No son numeros amigos");
  }