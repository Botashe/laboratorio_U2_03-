function enviarDatos(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    const datos = {
        Nombre:nombre,
        Apellido:apellido,
        Email:email,
        Edad:edad
    }

    console.log(datos)
}