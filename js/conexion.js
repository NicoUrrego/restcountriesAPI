let totalPaises = 20;
let paises = [];

// Conectar API
async function Conexion(filtrotipo = "All") {
  let url;

  if (filtrotipo === "All") {
    url = "https://restcountries.com/v3.1/all?fields=name,flags,population,translations,region";
  } else {
    // Filtrar por región 
    url = `https://restcountries.com/v3.1/region/${filtrotipo}?fields=name,flags,population,translations,region`;
  }

  const res = await fetch(url);
  const data = await res.json();

  // Limitar resultados
  return data.slice(0, totalPaises);
}

function mostrarMas() {
  const root = document.getElementById("root");
  const mas = document.createElement("button");
  mas.textContent = "Mostrar Mas";
  mas.classList.add("mostrar-mas");
  mas.addEventListener("click", totalPaises + 10);
  root.appendChild(mas);
}
// Carga general al iniciar
async function General() {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando países...</p>";

  paises = await Conexion("All");

  const listaHTML = generarLista(paises);
  root.innerHTML = listaHTML;

  Home();
}

// Filtra según resultado
async function FiltroConexion(Elfiltro) {
  const root = document.getElementById("root");
  root.innerHTML = "<p>Cargando...</p>";

  paises = await Conexion(Elfiltro);

  const listaHTML = generarLista(paises);
  root.innerHTML = listaHTML;

  agregarBotonVolver();
}