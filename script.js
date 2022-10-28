
let botonResumen = document.querySelector("#Resumen")

botonResumen.addEventListener("click",
    function calcularDescuento() {
        let nombre = document.querySelector("#Nombre").value
        let apellido = document.querySelector("#Apellido").value
        let correo = document.querySelector("#Correo").value
        let costo = document.querySelector("#Costo").value
        let categoria = document.querySelector("#Categoria").value
        let descuento = descuentoRealizado(categoria, costo)

        let contenedorNombre = document.querySelector("#Mensaje")

        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }

        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Descuento a nombre de: " + nombre + " " + apellido + ". Será enviado al correo: " + correo + ". El costo de su viaje sin descuento: " + costo + ". Total a pagar es: $" + descuento
        contenedorNombre.appendChild(mensaje);

    })

function descuentoRealizado(categoria, costo) {
    let descuentoParcial;
    if (categoria == "Menores") {
        let porcentajeMenores = 0.80 * costo
        descuentoParcial = costo - porcentajeMenores;
        return descuentoParcial;
    } if (categoria == "Jubilados") {
        let porcentajeJubilados = 0.50 * costo
        descuentoParcial = costo - porcentajeJubilados;
        return descuentoParcial;
    } if (categoria == "Estudiantes") {
        let porcentajeEstudiantes = 0.15 * costo
        descuentoParcial = costo - porcentajeEstudiantes;
        return descuentoParcial;
    }
}   
