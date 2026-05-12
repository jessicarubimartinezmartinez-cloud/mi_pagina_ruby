// ===== MENSAJE PROYECTO =====

function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "Cuida y protege a los animales";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

function mostrarnota() {
    const mensaje = document.getElementById("mensaje2");

    mensaje.textContent = "Hola, mi nombre es Ruby y mi color favorito es el rosa";
    mensaje.style.display = "block";
    mensaje.style.opacity = "1";
    mensaje.style.transform = "translateY(0)";
}




// ===== SOBRE MI =====
function mostrarSobreMi() {
    const mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "me gusta el color rosa";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}

// ===== PREGUNTAS FRECUENTES =====
function mostrarPreguntas() {
    const mensaje = document.getElementById("mensaje3");

    mensaje.innerHTML = "cuida bien a tus mascotas";
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}




// ===== MOSTRAR / OCULTAR =====

function toggleInfo() {
    let x = document.getElementById("miInfo");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// ===== MODO OSCURO Y CLARO =====

const modo = document.getElementById("modo");
const body = document.body;

// Empieza en modo oscuro
body.classList.add("oscuro");

modo.addEventListener("change", () => {

    if (modo.checked) {
        body.classList.remove("oscuro");
        body.classList.add("claro");
    } else {
        body.classList.remove("claro");
        body.classList.add("oscuro");
    }

});



function mostrarnota() {
    const mensaje = document.getElementById("mensaje2");

    mensaje.textContent = "Hola, mi nombre es Ruby y mi color favorito es el rosa";
    mensaje.style.display = "block";

    // fuerza reinicio de animación
    mensaje.style.opacity = "0";
    mensaje.style.transform = "translateY(10px)";

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 50);
}






    



