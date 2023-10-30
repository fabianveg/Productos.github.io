document.addEventListener('DOMContentLoaded', () => {
    const tablaProductos = document.getElementById('tablaProductos');
    const tbody = tablaProductos.querySelector('tbody');

    // Realiza una solicitud GET a la API y crea la tabla
    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
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
                    // Aquí puedes agregar la lógica para "Ver" el producto
                    alert('Ver producto: ' + producto.nombre);
                });

                cellVer.appendChild(verButton);
            });
        })
        .catch(error => console.error('Error:', error));
});
