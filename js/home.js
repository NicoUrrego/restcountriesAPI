function generarLista(arraypaises) {
  let listaHTML = "";

  for (let i = 0; i < arraypaises.length; i++) {
    const pais = arraypaises[i];
    const id = pais.population; 

    listaHTML += `
      <div class="c-lista-paises pais-${id}"onclick="Pais('${pais.name.common}')">
        <img src="${pais.flags.png}" width="auto" height="60" alt="Bandera de ${pais.name.common}">
        <p>${pais.translations?.spa?.common || pais.name.common}</p>
      </div>
    `;
  }

  return listaHTML;
}

async function mostrarPaises() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,translations");
  const data = await res.json();

  document.getElementById("root").innerHTML = generarLista(data);
}

mostrarPaises();

function Home(){

    var root = document.getElementById("root");
    root.innerHTML = ""

    const regiones = ["americas", "europe", "asia", "africa", "oceania"];

    const contenedorFiltro = document.createElement("section");
    contenedorFiltro.classList.add("region-container"); 

    for (let i = 0; i < regiones.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = regiones[i];
        
        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(regiones[i]); 
        });

        // Agregar el botón al contenedor
        contenedorFiltro.appendChild(btn);
    }

    document.getElementById("root").appendChild(contenedorFiltro)
}