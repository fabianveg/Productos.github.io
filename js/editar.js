document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nombreInput = document.getElementById('nombre');
    const descripcionInput = document.getElementById('descripcion');
    const precioInput = document.getElementById('precio');
    
    // Rellenar los campos del formulario con los parámetros de la URL
    if (params.has('nombre')) {
        nombreInput.value = params.get('nombre');
    }
    if (params.has('descripcion')) {
        descripcionInput.value = params.get('descripcion');
    }
    if (params.has('precio')) {
        precioInput.value = params.get('precio');
    }
    
    // Añade aquí la lógica para guardar los cambios si es necesario
    // Puedes escuchar el evento click del botón "Guardar Cambios" (id="guardar") y enviar los datos al servidor.
});