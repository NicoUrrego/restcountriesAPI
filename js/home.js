function buscadorfuncion(sza) {
  const root = document.getElementById("root");

  if (sza.length >= 3) {
    const filtrados = [];

    for (let i = 0; i < paises.length; i++) {
      const nombre = paises[i].name.common.toLowerCase();
      const traduccion = paises[i].translations?.spa?.common?.toLowerCase() || "";

      // Busca por nombre en inglés o español
      if (nombre.includes(sza.toLowerCase()) || traduccion.includes(sza.toLowerCase())) {
        filtrados.push(paises[i]);
      }
    }

    let listaHTML = generarLista(filtrados);
    root.innerHTML = listaHTML;
  } else {
  
    contenedor.innerHTML = generarLista(paisesMostrados);
  }
}

function generarLista(arraypaises) {
  let listaHTML = "";

  for (let i = 0; i < arraypaises.length; i++) {
    const pais = arraypaises[i];
    const id = pais.population;

    listaHTML += `
      <div class="c-lista-paises pais-${id}" onclick="Pais('${pais.name.common}')">
        <img src="${pais.flags.png}" width="auto" height="60" alt="Bandera de ${pais.name.common}">
        <p>${pais.translations?.spa?.common || pais.name.common}</p>
      </div>`;
  }

  return listaHTML;
}

function agregarBotonVolver() {
  const root = document.getElementById("root");
  const btnVolver = document.createElement("button");
  btnVolver.textContent = "Volver al inicio";
  btnVolver.classList.add("btn-volver");
  btnVolver.addEventListener("click", General);
  root.appendChild(btnVolver);
}

function Home() {
  const root = document.getElementById("root");

  //buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar País...";
    buscador.addEventListener("input", () => {
            buscadorfuncion(buscador.value);
    });

  if (document.querySelector(".region-container")) return;
  
  const regiones = ["americas", "europe", "asia", "africa", "oceania"];
  const contenedorFiltro = document.createElement("section");
  contenedorFiltro.classList.add("region-container");

  for (let i = 0; i < regiones.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = regiones[i].toUpperCase();

    // Evento filtrar
    btn.addEventListener("click", () => {
      FiltroConexion(regiones[i]);
    });

    contenedorFiltro.appendChild(btn);

    //contenedor
    const listaHTML = generarLista(paises)
    var contenedorPaises = document.createElement("section")
    contenedorPaises.id = "la-lista"
    contenedorPaises.innerHTML = listaHTML
  }

  // Agregar al inicio 
  root.prepend(buscador)
  root.prepend(contenedorPaises)
  root.prepend(contenedorFiltro)
  
}