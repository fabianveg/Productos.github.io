document.addEventListener('DOMContentLoaded', () => {
    const tablaProductos = document.getElementById('tablaProductos');
    const tbody = tablaProductos.querySelector('tbody');

    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
        .then(response => response.json())
        .then(data => {
            data.forEach((producto, index) => {
                const row = tbody.insertRow();
                const cellNombre = row.insertCell(0);
                const cellDescripcion = row.insertCell(1);
                const cellPrecio = row.insertCell(2);
                const cellVer = row.insertCell(3);

                cellNombre.textContent = producto.nombre;
                cellDescripcion.textContent = producto.descripcion;
                cellPrecio.textContent = producto.precio;

                const verButton = document.createElement('button');
                verButton.textContent = 'Ver';
                verButton.addEventListener('click', () => {
                    // Redirigir a la página de edición con parámetros
                    const url = new URL('editar.html', window.location.href);
                    const params = new URLSearchParams();
                    params.append('nombre', producto.nombre);
                    params.append('descripcion', producto.descripcion);
                    params.append('precio', producto.precio);
                    url.search = params.toString();
                    window.location.href = url.href;
                });

                cellVer.appendChild(verButton);
            });
        })
        .catch(error => console.error('Error:', error));
});