document.addEventListener('DOMContentLoaded', () => {
    const tablaProductos = document.getElementById('tablaProductos');
    const tbody = tablaProductos.querySelector('tbody');
    const actualizar = document.getElementById('actualizar')
    const eliminar = document.getElementById('eliminar');
    


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
                verButton.setAttribute('data-bs-toggle', 'modal');
                verButton.setAttribute('data-bs-target', '#exampleModal');
                verButton.addEventListener('click', () => {
                    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos/' + producto.nombre)
                        .then(response => response.json())
                        .then(data => {
                            localStorage.setItem('nombre',producto.nombre)
                            console.log(producto.nombre)
                            console.log(data)
                           document.getElementById('nombre').value = data.nombre;
                            document.getElementById('descripcion').value = data.descripcion;
                            document.getElementById('precio').value =data.precio;
                        })
                    // Redirigir a la página de edición con parámetros
                    // const url = new URL('editar.html', window.location.href);
                    // const params = new URLSearchParams();
                    // params.append('nombre', producto.nombre);
                    // params.append('descripcion', producto.descripcion);
                    // params.append('precio', producto.precio);
                    // url.search = params.toString();
                    // window.location.href = url.href;
                });

                cellVer.appendChild(verButton);
            });
        })
        .catch(error => console.error('Error:', error));


         
 actualizar.addEventListener('click', () =>{
    const nombreInput = document.getElementById('nombre').value;
    const descripcionInput = document.getElementById('descripcion').value;
    const precioInput = document.getElementById('precio').value;
    var nombre = localStorage.getItem('nombre');
    const obj={
       nombre:nombreInput,
       precio:precioInput,
       descripcion: descripcionInput
       
    }
    console.log(obj);
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos/"+nombre ,{ 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(obj)
        

    })
    .then(res => res.json())
    .then(data => {console.log(data)
        alert("Si sirve");
    })
    .catch(e=>{alert("no sirve")
    console.log(e)
})

 })

 eliminar.addEventListener('click', () =>{
    const nombreInput = document.getElementById('nombre').value;
    const descripcionInput = document.getElementById('descripcion').value;
    const precioInput = document.getElementById('precio').value;

    const obj={
       nombre:nombreInput,
       precio:precioInput,
       descripcion: descripcionInput
       
    }
    console.log(obj);
//     fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos/"+obj.nombre ,{ 
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//           },
//         body: JSON.stringify(obj)
        

//     })
//     .then(res => res.json())
//     .then(data => {console.log(data)
//         alert("Si sirve");
//     })
//     .catch(e=>{alert("no sirve")
//     console.log(e)
// })

for (let index = 0; index < 10; index++) {
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos/pavo " ,{ 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },

        

    })
    .then(res => res.json())
    .then(data => {console.log(data)
        alert("Si sirve");
    })
    .catch(e=>{
    console.log(e)
    
})
console.log( ":)")

    
}
 })

});


