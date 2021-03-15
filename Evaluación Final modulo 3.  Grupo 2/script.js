//funcion para cambiar el formato a las tablas, usado en listadoasesorias.html
$(document).ready(function () {
    $("#estilo1").on("click", function () {
        $("#listadoasesorias").css("background-color", "")
            .css("font", "")
            .css("border-color", "")
            .css("text-align", "")
            .removeClass()
            .addClass("table table-dark table-hover")
    });

    $("#estilo2").on("click", function () {
        $("#listadoasesorias").css("background-color","rgba(202, 96, 96, 0.733)")
            .css("font", "bold 110% monospace")
            .css("border-color", "")
            .css("text-align", "center")
            .removeClass()
            .addClass("table table-dark table-striped")
    });

    $("#estilo3").on("click", function () {
        $("#listadoasesorias").css("background-color", "#53e2f5bb")
            .css("font", "small-caps 100%/150% serif")
            .css("border-color", "rgba(83, 226, 245, 0.733)")
            .css("text-align", "right")
            .removeClass()
            .addClass("table table-success table-striped")
    });

    $("#estilo4").on("click", function () {
        $("#listadoasesorias").css("background-color", "")
            .css("font", "")
            .css("border-color", "")
            .css("text-align", "")
            .removeClass()
            .addClass("table table-striped table-bordered")
    });
});



// metodo que valida formato del rut XXXXXXXX-X, incluyendo k y K

$.validator.addMethod("validaRun", function isValidRUT(rut) {
    if (!rut | typeof rut !== 'string') return false;

    var regexp = /^\d{7,8}-[k|K|\d]{1}$/;
    return regexp.test(rut);
}, "rut valido");

//

$.validator.addMethod("noIgual", function (value, element, arg) {

    return arg != element.value;
});

// metodo que valida que contenido de texto sean solo letras mayusculas y minusculas

$.validator.addMethod("sololetras", function sonLetrasSolamente(texto) {
    var regex = /^[a-zA-Z ]+$/;
    return regex.test(texto);
});


// metodo que valida el ingreso solo de numeros

$.validator.addMethod("soloNumeros", function sonNumerosSolamente(numb) {
    var regex = /^[0-9]+$/;
    return regex.test(numb);
});

$.validator.addMethod("validaFechaAccidente", function lafecha(fecha) {

    var hoy = new Date();
    //console.log(hoy); revisa la fecha de hoy

    var fecha = $('#fechaAccidente').val();
    var fechaFormulario = Date.parse(fecha);

    //console.log(fechaFormulario) revisa la fecha ingresada

    if (hoy < fechaFormulario)
        return false;
    else
        return true;


});

// metodo que valida formato de correo electronico

$.validator.addMethod("formatoCorreo", function compruebacorreo(correo) {

    var regex = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(correo);
});

// metodo que valida ingreso de numero telefonico +569xxxxxxxx

$.validator.addMethod("numerochile", function telefonoChile(numb) {

    var regex = /^(\+?56){1}(9)\d{8}$/
    return regex.test(numb);
});

$(function () {
    $("form[name='formulario']").validate({

        rules: {
            idAsist: {

                required: true,
                min: 1,
                max: 9999
            },

            idAcc: {
                required: true,
                min: 1,
                max: 9999
            },

            nombreCompleto: {
                required: true,
                minlength: 1,
                maxlength: 100,
                sololetras: true,
            },

            run: {
                required: true,
                validaRun: true,
            },

            rut: {
                required: true,
                validaRun: true,
            },

            nombres: {
                required: true,
                minlength: 3,
                maxlength: 50,
            },

            apellidos: {
                required: true,
                minlength: 3,
                maxlength: 50,
            },

            sistSalud: {
                required: true,
                noIgual: "0"
            },

            telefono: {
                required: true,
                numerochile: true,
            },

            clave: {
                required: true,
                soloNumeros: true,
                maxlength: 20,
                minlength: 4,
            },

            direccion: {
                required: true,
                minlength: 8,
                maxlength: 70,
            },

            comuna: {
                required: true,
                minlength: 4,
                maxlength: 70,
            },

            edad: {
                required: true,
                min: 18,
                max: 150,
            },

            correo: {
                required: true,
                formatoCorreo: true,
                email: true,
            },

            fechaAccidente: {
                required: true,
                validaFechaAccidente: true,
            },

            horaAccidente: {
                required: true
            },

            lugar: {
                required: true,
                maxlength: 150,
            },

            origen: {
                required: true,
                maxlength: 100,
            },

            selectCliente: {
                required: true,
                noIgual: "0"
            },

            consecuencias: {
                maxlength: 100
            }
        },

        // Mensjes de error de la validaci´n 

        messages: {

            idAsist: {
                required: "Por favor, introduzca su ID",
                min: "Debe ingresar un numero",
                max: "ID no debe exceder el 9999",
            },

            idAcc: {
                required: "Por favor, introduzca su ID",
                min: "Debe ingresar un numero",
                max: "ID no debe exceder el 9999",
            },

            run: {
                required: "Por favor, ingrese su run",
                validaRun: "Run invalido"
            },

            rut: {
                required: "Por favor, ingrese su rut",
                validaRun: "Rut invalido"
            },

            nombres: {
                required: "Por favor, introduzca sus nombres",
                minlength: "Nombres demasiado cortos",
                maxlength: "Nombres demasiado largos",
            },

            apellidos: {
                required: "Por favor, introduzca sus apellidos",
                minlength: "Apellidos demasiado cortos",
                maxlength: "Apellidos demasiado largos",
            },

            nombreCompleto: {

                required: "Por favor, introduzca su nombre completo",
                minlength: "Nombre completo demasiado corto",
                maxlength: "Nombre completo demasiado largo",
                sololetras: "No puede ingresar numeros"

            },

            sistSalud: {

                required: "Por favor elije una de las opciones",
                noIgual: "Por favor elije una de las opciones"
            },

            telefono: {

                required: "Por favor, introduzca su telefono",

                numerochile: "Ingrese telefono +569xxxxxxxx",

            },

            clave: {
                required: "Por favor ingrese su contraseña",
                soloNumeros: "La contraseña solo debe llevar numeros",
                minlength: "Su contraseña es demasiado corta",
                maxlength: "La contraseña es demasiado larga"
            },

            direccion: {

                required: "Por favor, introduzca direccion",
                minlength: "Su direccion es muy corta",
                maxlength: "Su direccion es muy larga",

            },

            comuna: {
                required: "Por favor, introduzca su comuna",
                minlength: "Campo comuna muy corta",
                maxlength: "Comuna muy larga",
            },

            edad: {

                required: "Por favor, introduzca su edad",
                min: "Debe ser mayor de 18 años",
                max: "Por favor ingrese una edad valida",

            },

            correo: {

                required: "Por favor ingrese su correo",
                formatoCorreo: "Ingrese un correo valido (XXXXX@XX.XX)",
                email: "Ingrese un correo valido (XXXXX@XX.XX)"

            },

            fechaAccidente: {

                required: "Por favor ingrese fecha de accidente",
                validaFechaAccidente: "Ingrese fecha anterior al dia de hoy"
            },

            horaAccidente: {

                required: "Por favor ingrese hora del accidente"

            },

            lugar: {

                required: "Por favor ingrese lugar de accidente",
                maxlength: "El limite es de 150 caracteres"

            },

            origen: {

                required: "Por favor ingrese origen de accidente",
                maxlength: "El limite es de 100 caracteres"

            },

            selectCliente: {

                required: "Por favor elije una de los clientes",
                noIgual: "Por favor elije una de los clientes"
            },

            consecuencias: {

                maxlength: "El limite es de 100 caracteres"

            },

        },

        submitHandler: function (form) {
            form.submit();
        }

    });
});

