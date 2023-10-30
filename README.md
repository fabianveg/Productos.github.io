# Productos.github.io

document.addEventListener("DOMContentLoaded", () => {
    const dataContainer = document.getElementById("data-container");

    // Realizar una solicitud GET a la API utilizando fetch
    fetch("https://www.datos.gov.co/resource/3r8k-vvxe.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: Código de estado - ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Procesar los datos recibidos
            data.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.innerHTML = `
                 
                    <tr>
                        <td>  ${item.razon_social} </td> 
                        <td>D${item.nit}</td>
                       
                    </tr>
              
                </table>
                `;
                dataContainer.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
});
