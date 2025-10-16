async function Pais(parametro) {
    
  const root = document.getElementById("root");
  const res = await fetch(`https://restcountries.com/v3.1/name/${parametro}`);
  const data = await res.json();

  const pais = data[0];

  // Const para buscar la version de la info en español
  const nombreES = pais.translations.spa
    ? pais.translations.spa.common
    : pais.name.common;

  const paisHTML = `
    <section class="c-pais">
      <img src="${pais.flags.png}" alt="Bandera de ${nombreES}">
      <p><strong>País:</strong> ${nombreES}</p>
      <p><strong>Nombre oficial:</strong> ${
        pais.translations.spa
          ? pais.translations.spa.official
          : pais.name.official
      }</p>
      <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : 'No disponible'}</p>
      <p><strong>Región:</strong> ${pais.region}</p>
    </section>
  `;

  root.innerHTML = paisHTML;
}