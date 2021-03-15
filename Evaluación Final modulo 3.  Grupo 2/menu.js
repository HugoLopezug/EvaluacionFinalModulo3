/* Js que le da o quita la clase responsive al menu */
function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive"; /* ojo con el espacio, DEBE ESTER para que el css reconosca dos clases diferentes*/
    } else {
      x.className = "topnav";
    }
  }
