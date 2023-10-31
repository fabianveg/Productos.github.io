   const guardar = document.getElementById('guardar');
 
 guardar.addEventListener('click', () =>{
    const nombreInput = document.getElementById('nombre').value;
    const descripcionInput = document.getElementById('descripcion').value;
    const precioInput = document.getElementById('precio').value;

    const obj={
       nombre:nombreInput,
       precio:precioInput,
       descripcion: descripcionInput
       
    }
    console.log(obj);
    fetch("https://siaweb-nodejs.carlos-reneren7.repl.co/productos" ,{ 
        method: 'POST',
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

