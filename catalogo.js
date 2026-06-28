// ===================== DATOS DEL CATÁLOGO DE ESPECIES =====================
// Estilo SVG: flat design, formas simples, 2-3 tonos, sin contornos duros (ref. usuario)

const especies = [
  {
    id:'maiz', nombre:'Maíz', cientifico:'Zea mays', categoria:'cereal', categoriaLabel:'Cereal',
    resumen:'Originario de Mesoamérica, es uno de los cultivos más importantes del mundo y la base de la dieta tradicional mexicana. Proviene de la domesticación de una gramínea silvestre llamada teocintle.',
    cuidados:'Requiere temperaturas cálidas (óptimo 20–25 °C), suelos bien drenados y abundante luz solar. Se siembra tradicionalmente junto con frijol y calabaza en el sistema conocido como "milpa".',
    germinacion:'4 a 6 días', agua:'500 a 800 mm/ciclo',
    curioso:'El maíz silvestre (teocintle) tiene mazorcas diminutas, casi sin granos aprovechables.',
    color1:'#E9C46A', color2:'#74C69D',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M50 118 L78 118 L70 130 L58 130 Z" fill="#52B788"/><ellipse cx="50" cy="62" rx="26" ry="42" fill="#E9C46A"/><path d="M30 40 C26 56 26 72 34 90M40 28 C36 48 36 70 44 96M50 22 C50 46 50 76 50 102M60 28 C64 48 64 70 56 96M70 40 C74 56 74 72 66 90" stroke="#D9A23B" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M24 50 C8 46 -2 28 4 10 C22 14 30 32 24 50Z" fill="#74C69D"/><path d="M76 50 C92 46 102 28 96 10 C78 14 70 32 76 50Z" fill="#52B788"/></svg>`
  },
  {
    id:'trigo', nombre:'Trigo', cientifico:'Triticum aestivum', categoria:'cereal', categoriaLabel:'Cereal',
    resumen:'Cereal originario del suroeste asiático, domesticado hace aproximadamente 10,000 años. Es la base de la harina, el pan y la pasta a nivel mundial.',
    cuidados:'Prefiere climas templados (10–25 °C), suelos profundos con buen drenaje y pH entre 6 y 7.5. Existen variedades de invierno y de primavera.',
    germinacion:'12 a 15 días', agua:'450 a 650 mm/ciclo',
    curioso:'Junto con la cebada, fue de los primeros cereales domesticados en el Creciente Fértil.',
    color1:'#E9C46A', color2:'#C9A227',
    svg:`<svg viewBox="0 0 100 130" width="100%"><rect x="47" y="60" width="6" height="65" fill="#52B788"/><path d="M50 20 L38 35 L42 50 L33 60 L50 60 L67 60 L58 50 L62 35 Z" fill="#E9C46A"/><g stroke="#D9A23B" stroke-width="2" stroke-linecap="round"><line x1="50" y1="25" x2="38" y2="18"/><line x1="50" y1="32" x2="62" y2="25"/><line x1="50" y1="40" x2="36" y2="34"/><line x1="50" y1="47" x2="64" y2="40"/><line x1="50" y1="54" x2="38" y2="50"/></g></svg>`
  },
  {
    id:'arroz', nombre:'Arroz', cientifico:'Oryza sativa', categoria:'cereal', categoriaLabel:'Cereal',
    resumen:'Alimento base para más de la mitad de la población mundial. Fue domesticado de forma independiente en distintas regiones de Asia y África.',
    cuidados:'Se cultiva principalmente bajo inundación controlada, ya que tolera el encharcamiento mejor que la mayoría de los cereales. Requiere temperaturas cálidas (óptimo 23 °C).',
    germinacion:'Aproximadamente 7 días', agua:'1,000 a 1,500 mm/ciclo',
    curioso:'A diferencia de casi todos los demás cultivos, el exceso de agua no perjudica al arroz.',
    color1:'#FAF7F0', color2:'#74C69D',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M50 125 C40 100 40 70 50 50" stroke="#52B788" stroke-width="4" fill="none" stroke-linecap="round"/><g fill="#FAF7F0" stroke="#D9D0BC" stroke-width="1"><ellipse cx="42" cy="45" rx="6" ry="11" transform="rotate(-20 42 45)"/><ellipse cx="50" cy="38" rx="6" ry="11"/><ellipse cx="58" cy="45" rx="6" ry="11" transform="rotate(20 58 45)"/><ellipse cx="45" cy="58" rx="6" ry="11" transform="rotate(-15 45 58)"/><ellipse cx="55" cy="58" rx="6" ry="11" transform="rotate(15 55 58)"/></g><path d="M30 110 C45 118 55 118 70 110" stroke="#74C69D" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/></svg>`
  },
  {
    id:'frijol', nombre:'Frijol', cientifico:'Phaseolus vulgaris', categoria:'leguminosa', categoriaLabel:'Leguminosa',
    resumen:'Leguminosa originaria de Mesoamérica, pilar de la dieta tradicional junto con el maíz. Componente central del sistema agrícola de la milpa.',
    cuidados:'Se desarrolla en climas templados a cálidos con suelos bien drenados. Fija nitrógeno atmosférico en el suelo mediante simbiosis con bacterias Rhizobium.',
    germinacion:'7 a 10 días', agua:'300 a 500 mm/ciclo',
    curioso:'Sembrar frijol junto a maíz literalmente fertiliza el suelo de forma natural.',
    color1:'#7F5539', color2:'#52B788',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M30 40 C20 60 22 90 38 108 C50 120 64 118 70 104 C50 100 40 80 42 58 C44 44 38 36 30 40Z" fill="#74C69D"/><g fill="#7F5539"><ellipse cx="42" cy="62" rx="7" ry="10" transform="rotate(20 42 62)"/><ellipse cx="48" cy="78" rx="7" ry="10" transform="rotate(15 48 78)"/><ellipse cx="52" cy="94" rx="7" ry="10" transform="rotate(10 52 94)"/></g><path d="M30 40 C26 28 30 16 40 12" stroke="#52B788" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id:'tomate', nombre:'Tomate', cientifico:'Solanum lycopersicum', categoria:'hortaliza', categoriaLabel:'Hortaliza',
    resumen:'Originario de Mesoamérica, es una de las hortalizas más consumidas del mundo. Botánicamente es una fruta tipo baya.',
    cuidados:'Requiere climas cálidos (25–30 °C para germinar), suelos francos ricos en materia orgánica y riego regular sin encharcamiento.',
    germinacion:'7 a 10 días', agua:'400 a 600 mm/ciclo',
    curioso:'Aunque se usa como verdura, botánicamente el tomate es una fruta: se desarrolla del ovario de la flor.',
    color1:'#E76F51', color2:'#52B788',
    svg:`<svg viewBox="0 0 100 130" width="100%"><circle cx="50" cy="72" r="32" fill="#E76F51"/><path d="M50 40 L44 28 L50 34 L56 22 L58 36 L66 28 L60 42" fill="#52B788"/><ellipse cx="40" cy="60" rx="8" ry="5" fill="#F4A261" opacity="0.6"/></svg>`
  },
  {
    id:'lechuga', nombre:'Lechuga', cientifico:'Lactuca sativa', categoria:'hortaliza', categoriaLabel:'Hortaliza de hoja',
    resumen:'Hortaliza de hoja de ciclo corto, una de las más cultivadas en huertos urbanos y domésticos por su rapidez de crecimiento.',
    cuidados:'Prefiere climas frescos (15–20 °C), suelos ricos en materia orgánica y buen drenaje. Sensible al calor excesivo.',
    germinacion:'4 a 6 días', agua:'500 a 600 mm/ciclo',
    curioso:'Es uno de los cultivos más usados en sistemas hidropónicos por su ciclo corto.',
    color1:'#74C69D', color2:'#52B788',
    svg:`<svg viewBox="0 0 100 130" width="100%"><g fill="#74C69D"><path d="M50 100 C30 95 18 75 24 55 C36 60 46 78 50 100Z"/><path d="M50 100 C70 95 82 75 76 55 C64 60 54 78 50 100Z"/><path d="M50 105 C32 98 24 80 30 62 C42 68 50 86 50 105Z" fill="#52B788"/><path d="M50 105 C68 98 76 80 70 62 C58 68 50 86 50 105Z" fill="#52B788"/><path d="M50 110 C40 100 38 86 44 75 C50 82 52 96 50 110Z" fill="#94D4A8"/></g></svg>`
  },
  {
    id:'zanahoria', nombre:'Zanahoria', cientifico:'Daucus carota', categoria:'hortaliza', categoriaLabel:'Hortaliza de raíz',
    resumen:'Raíz comestible rica en betacarotenos (precursores de vitamina A), cultivada en climas templados de todo el mundo.',
    cuidados:'Necesita suelos profundos, sueltos y libres de piedras. Prefiere temperaturas de 20–30 °C para germinar.',
    germinacion:'7 a 10 días', agua:'350 a 500 mm/ciclo',
    curioso:'El color naranja característico es resultado de selección artificial relativamente reciente.',
    color1:'#F4A261', color2:'#52B788',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M50 50 L38 115 C38 122 62 122 62 115 Z" fill="#F4A261"/><path d="M44 60 L56 60 M42 75 L58 75 M44 90 L56 90" stroke="#D9824A" stroke-width="2" stroke-linecap="round"/><path d="M50 50 C44 30 30 22 20 24 C26 36 36 46 50 50Z" fill="#52B788"/><path d="M50 50 C56 30 70 22 80 24 C74 36 64 46 50 50Z" fill="#74C69D"/></svg>`
  },
  {
    id:'brocoli', nombre:'Brócoli', cientifico:'Brassica oleracea', categoria:'hortaliza', categoriaLabel:'Hortaliza de flor',
    resumen:'Se consume su inflorescencia, rica en vitaminas C y K. Pertenece a la misma especie que la col y la coliflor.',
    cuidados:'Prefiere climas frescos, suelos fértiles bien drenados y riego constante. Sensible al calor extremo.',
    germinacion:'7 a 10 días', agua:'350 a 500 mm/ciclo',
    curioso:'El brócoli, la coliflor y el repollo son, botánicamente, la misma especie cultivada de forma selectiva.',
    color1:'#52B788', color2:'#3E7A52',
    svg:`<svg viewBox="0 0 100 130" width="100%"><rect x="46" y="85" width="8" height="35" fill="#94D4A8"/><circle cx="50" cy="65" r="28" fill="#3E7A52"/><circle cx="36" cy="55" r="9" fill="#52B788"/><circle cx="50" cy="48" r="10" fill="#52B788"/><circle cx="64" cy="55" r="9" fill="#52B788"/><circle cx="44" cy="70" r="8" fill="#74C69D"/><circle cx="58" cy="70" r="8" fill="#74C69D"/></svg>`
  },
  {
    id:'papa', nombre:'Papa', cientifico:'Solanum tuberosum', categoria:'tuberculo', categoriaLabel:'Tubérculo',
    resumen:'Tubérculo domesticado hace aproximadamente 8,000 años en la región andina, cerca del lago Titicaca.',
    cuidados:'Prefiere climas templados a fríos, suelos sueltos y bien drenados. Se siembra a partir de tubérculos-semilla.',
    germinacion:'14 a 21 días (emergencia)', agua:'500 a 700 mm/campaña',
    curioso:'Existen miles de variedades de papa nativas en los Andes con colores y formas muy distintas.',
    color1:'#C68B59', color2:'#7F5539',
    svg:`<svg viewBox="0 0 100 130" width="100%"><ellipse cx="50" cy="75" rx="30" ry="24" fill="#C68B59"/><circle cx="38" cy="68" r="2.5" fill="#7F5539"/><circle cx="58" cy="62" r="2.5" fill="#7F5539"/><circle cx="62" cy="82" r="2.5" fill="#7F5539"/><circle cx="42" cy="86" r="2.5" fill="#7F5539"/><path d="M50 51 C46 38 50 26 58 20" stroke="#52B788" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M58 20 C54 22 50 22 48 18" stroke="#74C69D" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id:'aguacate', nombre:'Aguacate', cientifico:'Persea americana', categoria:'fruta', categoriaLabel:'Fruta',
    resumen:'Fruto originario de Mesoamérica (Coxcatlán, Puebla). Se reconocen tres razas: mexicana, guatemalteca y antillana.',
    cuidados:'Requiere climas cálidos a templados, buena exposición solar y suelos con buen drenaje. Tarda años en producir sus primeros frutos.',
    germinacion:'12 a 18 días (vivero)', agua:'600 a 1,100 mm/año',
    curioso:'Sus flores son funcionalmente masculinas y femeninas en momentos distintos del día.',
    color1:'#52B788', color2:'#7F5539',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M50 35 C30 35 22 60 28 85 C34 108 66 108 72 85 C78 60 70 35 50 35Z" fill="#52B788"/><ellipse cx="50" cy="80" rx="14" ry="17" fill="#7F5539"/><path d="M50 35 L46 22" stroke="#3E7A52" stroke-width="3" stroke-linecap="round"/></svg>`
  },
  {
    id:'platano', nombre:'Plátano', cientifico:'Musa paradisiaca', categoria:'fruta', categoriaLabel:'Fruta',
    resumen:'Fruto tropical que no se reproduce por semilla, sino mediante hijuelos que crecen del rizoma de la planta madre.',
    cuidados:'Necesita climas cálidos y húmedos, sin tolerancia a heladas, y riego abundante y constante.',
    germinacion:'20 a 30 días (brotación)', agua:'700 a 1,300 mm/año',
    curioso:'El "tallo" del plátano no es leñoso: son las bases enrolladas de sus propias hojas (pseudotallo).',
    color1:'#E9C46A', color2:'#52B788',
    svg:`<svg viewBox="0 0 100 130" width="100%"><path d="M30 50 C20 65 22 90 38 100 C48 106 56 100 54 88 C46 86 38 78 38 64 C38 56 32 50 30 50Z" fill="#E9C46A"/><path d="M40 50 C30 65 32 90 48 100 C58 106 66 100 64 88 C56 86 48 78 48 64 C48 56 42 50 40 50Z" fill="#F2D38B"/><path d="M50 50 C40 65 42 90 58 100 C68 106 76 100 74 88 C66 86 58 78 58 64 C58 56 52 50 50 50Z" fill="#E9C46A"/><path d="M40 50 C36 38 40 26 48 22" stroke="#52B788" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id:'algodon', nombre:'Algodón', cientifico:'Gossypium hirsutum', categoria:'industrial', categoriaLabel:'Industrial',
    resumen:'Planta cultivada por la fibra que rodea sus semillas, usada en textiles. Domesticada en México hace ~3,400 años a.C.',
    cuidados:'Climas cálidos, temperaturas superiores a 14 °C para germinar (óptimo 20 °C) y riego constante por su alta demanda hídrica.',
    germinacion:'5 a 10 días', agua:'700 a 1,300 mm/ciclo',
    curioso:'Aunque no es alimento, comparte técnicas de siembra con los cultivos alimenticios.',
    color1:'#FAF7F0', color2:'#A8A29E',
    svg:`<svg viewBox="0 0 100 130" width="100%"><rect x="47" y="70" width="6" height="50" fill="#52B788"/><circle cx="50" cy="55" r="22" fill="#FAF7F0" stroke="#D9D0BC" stroke-width="1.5"/><circle cx="36" cy="48" r="13" fill="#FAF7F0" stroke="#D9D0BC" stroke-width="1.5"/><circle cx="64" cy="48" r="13" fill="#FAF7F0" stroke="#D9D0BC" stroke-width="1.5"/><path d="M40 75 L36 65 M60 75 L64 65" stroke="#7F5539" stroke-width="2.5" stroke-linecap="round"/></svg>`
  }
];

// ===================== RENDERIZADO DEL CATÁLOGO =====================
function crearTarjetaHTML(esp){
  return `
    <article class="ficha-card" data-categoria="${esp.categoria}" data-id="${esp.id}" tabindex="0" role="button" aria-label="Ver ficha de ${esp.nombre}">
      <div class="ficha-svg" style="background:linear-gradient(160deg, ${esp.color1}22, ${esp.color2}22)">${esp.svg}</div>
      <span class="ficha-categoria">${esp.categoriaLabel}</span>
      <h3 class="ficha-nombre">${esp.nombre}</h3>
      <p class="ficha-cientifico">${esp.cientifico}</p>
    </article>
  `;
}

function inicializarCatalogo(){
  const grid = document.getElementById('gridCatalogo');
  if(!grid) return;
  grid.innerHTML = especies.map(crearTarjetaHTML).join('');

  // Filtros
  const botones = document.querySelectorAll('.filtro-btn');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      const filtro = btn.dataset.filtro;
      document.querySelectorAll('.ficha-card').forEach(card => {
        const mostrar = filtro === 'todas' || card.dataset.categoria === filtro;
        card.style.display = mostrar ? '' : 'none';
      });
    });
  });

  // Modal
  const overlay = document.getElementById('modalOverlay');
  const modalCerrar = document.getElementById('modalCerrar');

  function abrirModal(id){
    const esp = especies.find(e => e.id === id);
    if(!esp) return;
    document.getElementById('modalSvg').innerHTML = esp.svg;
    document.getElementById('modalCategoria').textContent = esp.categoriaLabel;
    document.getElementById('modalTitulo').textContent = esp.nombre;
    document.getElementById('modalCientifico').textContent = esp.cientifico;
    document.getElementById('modalResumen').textContent = esp.resumen;
    document.getElementById('modalGerminacion').textContent = esp.germinacion;
    document.getElementById('modalAgua').textContent = esp.agua;
    document.getElementById('modalCuidados').textContent = esp.cuidados;
    document.getElementById('modalCurioso').innerHTML = '<strong>Dato curioso:</strong> ' + esp.curioso;
    overlay.classList.add('activo');
    document.body.style.overflow = 'hidden';
  }

  function cerrarModal(){
    overlay.classList.remove('activo');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.ficha-card').forEach(card => {
    card.addEventListener('click', () => abrirModal(card.dataset.id));
    card.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); abrirModal(card.dataset.id); } });
  });
  modalCerrar.addEventListener('click', cerrarModal);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) cerrarModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') cerrarModal(); });
}

document.addEventListener('DOMContentLoaded', inicializarCatalogo);
