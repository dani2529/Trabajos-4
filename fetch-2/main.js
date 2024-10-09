let contenido = document.getElementById("contenido");
let boton = document.getElementById("mostrar");

boton.addEventListener("click", mostrarApiData1, true);



async function mostrarApiData1() {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url);
  const data = await res.json();

  contenido.innerHTML = `
                            <img src='${data.results[0].picture.large}'>
                            <p> celular: ${data.results[0].cell}</p>
                            <p> email: ${data.results[0].email}</p>
                            <p> genero: ${data.results[0].gender}</p>                
                            <p> Nombre: ${data.results[0].name.first}</p>
                            <p> apellido: ${data.results[0].name.last}</p>
                            `;

  console.log(data, "data <---- async");

  console.log("entro a la funcnion async");
}
