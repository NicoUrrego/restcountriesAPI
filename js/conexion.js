let totalPaises = 10;
let paises = [];

// conectar API
async function Conexion(filtrotipo) {
  let url = "https://restcountries.com/v3.1/all";

  if (filtrotipo && filtrotipo !== "All") {
    url = `https://restcountries.com/v3.1/region/${filtrotipo}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  // Limitar los resultados
  return data.slice(0, totalPaises);
}

// Carga al iniciar
async function General() {
  if (paises.length === 0) {
    paises = await Conexion("All");
  }
  Home();
}

// Filtra según el tipo seleccionado
async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "Cargando...";
  paises = await Conexion(Elfiltro);

  const listaHTML = generarLista(paises);
  document.getElementById("la-lista").innerHTML = listaHTML;
}