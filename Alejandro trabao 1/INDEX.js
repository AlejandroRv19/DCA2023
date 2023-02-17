function sumar(numeros, array) {
    const sum = numeros + array.reduce((a, b) => a + b, 0);
    return sum;
  }
  
  const numeros = 2;
  const array = [1, 2, 3, 4, 5]; // la suma del array da 15//
  const sumaTotal = sumar(numeros, array);
  
  console.log(`La suma de ${numeros} y los elementos del array es ${sumaTotal}`); //aqui da la suma total del numeros y del array"//




  swal("¡Hola, Profe leider!", "Este es un mensaje de sweetalert una libreria ahora abre console log y podras ver la otra libreria que es lodash", "success");


        function mostrarAlerta() {
        swal({
          title: "¡Hola, mundo!",
          text: "Este es un mensaje de prueba",
          icon: "success",
          buttons: {
            cancel: "Cancelar",
            confirm: "Aceptar",
          },
        }).then((result) => {
          if (result) {
            swal("¡Bien hecho!", "Has hecho clic en Aceptar", "success");
          } else {
            swal("¡Cancelado!", "Has hecho clic en Cancelar", "error");
          }
        });
      }
 