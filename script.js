function ingresar(){
    var usuario=document.getElementById("usuario").value;
    var clave=document.getElementById("clave").value;

    if (usuario==="fede" && clave==="1234"){
        alert("bienvenido al sistema");
        window.location.href="pagina.html";
    } else {
        alert("usuario o contraseña incorrecta");
        document.getElementById("mensaje").innerText = "Usuario o clave incorrectos";
    }
     
}

function mostrarinfo(){
    var tipo = document.getElementById("tipo").value;
    var tamaño = document.getElementById("tamaño").value;
    var info = "";

    if (tipo === "Practica" && tamaño === "S") {
        info =
        "Parapente para alumnos de 23m para 50-75kg| Precio: $700";
    }
    if (tipo === "Practica" && tamaño === "M") {
        info =
        "Parapente para alumnos de 26m para 70-95kg| Precio: $800";
    }
    if (tipo === "Practica" && tamaño === "L") {
        info =
        "Parapente para alumnos de 30m para 90-110kg| Precio: $900";
    }
    if (tipo === "Practica" && tamaño === "XL") {
        info =
        "Parapente para alumnos de 34m para 110-130kg| Precio: $1000";
    }

    if  (tipo === "Intermedio" && tamaño === "S") {
        info =
        "Parapente para post-alumnos de 21m para 50-75kg| Precio: $1100";   
    }
    if (tipo === "Intermedio" && tamaño === "M") {
        info =
        "Parapente para post-alumnos de 24m para 70-95kg| Precio: $1200";
    }
    if (tipo === "Intermedio" && tamaño === "L") {
        info =
        "Parapente para post-alumnos de 26m para 90-110kg| Precio: $1300";
    }
    if (tipo === "Intermedio" && tamaño === "XL") {
        info =
        "Parapente para post-alumnos de 32m para 110-130kg| Precio: $1400";
    }
    
    if (tipo === "Acrobatico" && tamaño === "S") {
        info =
        "Parapente para competidores de 15m para 50-75kg| Precio: $2000";   
    }
    if (tipo === "Acrobatico" && tamaño === "M") {
        info =
        "Parapente para competidores de 16m para 70-95kg| Precio: $2100";
    }
    if (tipo === "Acrobatico" && tamaño === "L") {
        info =
        "Parapente para competidores de 17m para 90-110kg| Precio: $2200";
    }
    if (tipo === "Acrobatico" && tamaño === "XL") {
        info =
        "Parapente para competidores de 18m para 110-130kg| Precio: $2300";
    }

    if (tipo === "Tandem" && tamaño === "S") {
        info =
        "Parapente para 2 personas de 38m hasta 180kg| Precio: $3000";   
    }
    if (tipo === "Tandem" && tamaño === "M") {
        info =
        "Parapente para 2 personas de 42m hasta 200kg| Precio: $3200";
    }
    if (tipo === "Tandem" && tamaño === "L") {
        info =
        "Parapente para 2 personas de 45m hasta 220kg| Precio: $3400";
    }
    if (tipo === "Tandem" && tamaño === "XL") {
        info =
        "Parapente para 2 personas de 48m hasta 240kg| Precio: $3600";
    }



    document.getElementById("resultado").innerText = info;
     }
