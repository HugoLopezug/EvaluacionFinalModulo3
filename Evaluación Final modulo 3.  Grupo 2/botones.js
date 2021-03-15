function validacion() {

    var mensaje = confirm("¿Desea validar y modificar los chequeos de esta visita?");

    if (mensaje) {

        window.location = "responderchecklist.html"
    }
    //Detectamos si el usuario denegó el mensaje
    else {
        window.location = "listadovisitas.html"
    }
}

function contar() {
    // para borrar la lista primera lita si es que se pregunta de nuevo
    var element = document.getElementById("borrar")
    if (element){
        element.remove();
    }

    var checkboxes = document.getElementById("form1").checkbox; //Array que contiene los checkbox
    var cont = 0; //Variable que lleva la cuenta de los checkbox pulsados
    
    var div = document.createElement("div")
    div.className = "centrar"
    div.setAttribute("id","borrar")

    var h2 = document.createElement("h2")
    h2.innerHTML=("Chequeos Validados")
    div.appendChild(h2)
    h2.className = "centrar"

    for (var x = 0; x < checkboxes.length; x++) {
        if (checkboxes[x].checked) {
            cont = cont + 1;
        }
    }
    var ul = document.createElement("ul")
    ul.className = "bloque"

    if (cont >= 1) {

        alert("El número de checkbox pulsados es " + cont);

        for (var x = 0; x < checkboxes.length; x++) {
            if (checkboxes[x].checked) {
                var li = document.createElement("li")
                var p = document.createElement("p")
                p.appendChild(document.createTextNode(checkboxes[x].value))
                li.appendChild(p)
                ul.appendChild(li)
                div.appendChild(ul)
                document.body.appendChild(div)
            }
        }
    }
    else {
        alert("no ha seleccionado ningun checkbox")
        return
    }
}

window.onload = function () {
    n = new Date();
    //Año
    y = n.getFullYear();
    //Mes
    m = n.getMonth() + 1;
    //Día
    d = n.getDate();
    //Lo ordenas a gusto.
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
}


function validador() {

    var pago, rut;
    pago = document.getElementById("pago").value;
    rut = document.getElementById("rut").value

    var expresion = /^\d{7,8}-[k|K|\d]{1}$/;
    var bt = document.getElementById("pago")
    var bt2 = document.getElementById("rut")

    bt.style.backgroundColor = ""
    bt.style.borderBottomColor = ""
    bt2.style.backgroundColor = ""
    bt2.style.borderBottomColor = ""


    if(pago=="" && rut !='') {
        bt.style.backgroundColor = "red"
        bt.style.borderBottomColor = "green"
        return false;
       
    }

    else if(pago!="" && rut =='') {
        bt2.style.backgroundColor = "red"
        bt2.style.borderBottomColor = "green"
        return false;
       
    }

    else if (pago == "" && rut == '') {
        bt.style.backgroundColor = "red"
        bt2.style.backgroundColor = "red"
        bt.style.borderBottomColor = "green"
        bt2.style.borderBottomColor = "green"
       
        return false;
    }

    
    else if (pago > 99999999 || pago < 0) {
       
        bt.style.backgroundColor = "red"
        bt.style.borderBottomColor = "green"
        alert("Pago excede al máximo permitido")
        return false;
    }

    else if (!expresion.test(rut)) {
        
        
        bt2.style.borderBottomColor = "green"
        bt2.style.backgroundColor = "red"
        alert("Rut erroneo")
        return false;
    }

    else if (rut[rut.length - 2] != "-") {
        alert("No ingresó el guión correctamente")
        bt2.style.backgroundColor = "red"
        bt2.style.borderBottomColor = "green"
       
        return false;
    }

    else if (rut.length < 8 || rut.length > 10) {
        
        bt2.style.backgroundColor = "red"
        bt2.style.borderBottomColor = "green"
        alert("Rut demasiado corto o largo")
        return false;
    }

    else {
        alert("Todos los datos son válidos :)")
    }
}





