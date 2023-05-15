// Sistema Red Bus transporte

class Usuario {
    constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
  }
  }
  const usuario1 = new Usuario("Juan", -200);
  const usuario2 = new Usuario("Maria", 600);
  const usuario3 = new Usuario("Pedro", 1200);
  
  const arrayUsuarios = [usuario1, usuario2, usuario3];
  
  function menu() {
    alert("Bienvenido Red Bus Transporte");
    let opcion = parseInt(
      prompt(
        "Seleccione una opción:\n1) Ver Estado de Cuenta\n2) Depósito\n3) Formas Alternativas de Carga\n4) Salir"
      )
  );
  return opcion;
  }
  // Estado de cuenta
  
  function verEstadoCuenta() {
    let nombre = prompt("Ingrese el nombre del usuario: ");
    let usuario = arrayUsuarios.find(
        (usuario) => usuario.nombre.toLowerCase() === nombre.toLowerCase()
      );
  if (usuario) {
      alert(`Estado de cuenta de ${usuario.nombre}:\nSaldo: $${usuario.saldo}`);
  } else {
      alert("Usuario no encontrado.");
  }
  }
  // Deposito
  
  function deposito() {
    let nombre = prompt("Ingrese el nombre del usuario: ");
    let usuario = arrayUsuarios.find(
        (usuario) => usuario.nombre.toLowerCase() === nombre.toLowerCase()
      );
  if (usuario) {
      let monto = parseInt(prompt("Ingrese monto a depositar: "));
      usuario.saldo += monto;
      alert("Su saldo actual es de: $" + usuario.saldo);
      console.log(`El usuario ${usuario.nombre} depositó: $ ${monto}`);
  } else {
      alert("Usuario no encontrado.");
  }
  }
  // Cargar alternativas informacion 
  
  function formasAlternativasCarga() {
    alert("Puede cargar saldo en las siguientes direcciones:\n* Av.Colon 1500 A\n* Urquiza 300 B\n* Bv. San Juan");
  }

  let opcion = menu();

  if (opcion === 1) {
    verEstadoCuenta();
  } else if (opcion === 2) {
    deposito();
  } else if (opcion === 3) {
    formasAlternativasCarga();
  } else if (opcion === 4) {
    salir();
  } else {
    alert("Opcion no valida");
  }

  // Agradecimiento

  function salir() {
    alert("Gracias por utilizar nuestros servicios.");
  }
  salir ();