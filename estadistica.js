// ===================== DATOS ESTADÍSTICOS DEL CATÁLOGO =====================
// Fuente: documento maestro de investigación (valores promedio de rangos técnicos)

const especiesNombres = ['Maíz','Trigo','Arroz','Frijol','Tomate','Lechuga','Zanahoria','Brócoli','Papa','Aguacate','Plátano','Algodón'];
const datosGerminacion = [5, 13.5, 7, 8.5, 8.5, 5, 8.5, 8.5, 17.5, 15, 25, 7.5];
const datosAgua = [650, 550, 1250, 400, 500, 550, 425, 425, 600, 850, 1000, 1000];

// ===================== FUNCIONES ESTADÍSTICAS =====================
function calcularMedia(arr){
  return arr.reduce((a,b) => a+b, 0) / arr.length;
}

function calcularMediana(arr){
  const ordenado = [...arr].sort((a,b) => a-b);
  const n = ordenado.length;
  const mitad = Math.floor(n/2);
  return n % 2 === 0 ? (ordenado[mitad-1] + ordenado[mitad]) / 2 : ordenado[mitad];
}

function calcularModa(arr){
  const conteo = {};
  arr.forEach(v => conteo[v] = (conteo[v] || 0) + 1);
  let maxFrecuencia = 0;
  let modas = [];
  for(const valor in conteo){
    if(conteo[valor] > maxFrecuencia){
      maxFrecuencia = conteo[valor];
      modas = [valor];
    } else if(conteo[valor] === maxFrecuencia && maxFrecuencia > 1){
      modas.push(valor);
    }
  }
  if(maxFrecuencia <= 1) return 'No hay moda (todos los valores son únicos o aparecen igual número de veces)';
  return modas.join(', ');
}

function calcularDesviacionEstandar(arr){
  const media = calcularMedia(arr);
  const sumaCuadrados = arr.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
  return Math.sqrt(sumaCuadrados / arr.length);
}

function calcularRango(arr){
  return Math.max(...arr) - Math.min(...arr);
}

// ===================== RENDERIZADO =====================
function renderizarResumen(elementoId, arr, unidad){
  const media = calcularMedia(arr).toFixed(1);
  const mediana = calcularMediana(arr).toFixed(1);
  const moda = calcularModa(arr);
  const desviacion = calcularDesviacionEstandar(arr).toFixed(1);
  const rango = calcularRango(arr).toFixed(1);

  document.getElementById(elementoId).innerHTML = `
    <div class="stat-mini"><span class="stat-mini-label">Media</span><span class="stat-mini-valor">${media} ${unidad}</span></div>
    <div class="stat-mini"><span class="stat-mini-label">Mediana</span><span class="stat-mini-valor">${mediana} ${unidad}</span></div>
    <div class="stat-mini"><span class="stat-mini-label">Moda</span><span class="stat-mini-valor stat-mini-valor-pequena">${moda}</span></div>
    <div class="stat-mini"><span class="stat-mini-label">Desv. estándar</span><span class="stat-mini-valor">${desviacion} ${unidad}</span></div>
    <div class="stat-mini"><span class="stat-mini-label">Rango</span><span class="stat-mini-valor">${rango} ${unidad}</span></div>
  `;
}

function crearGrafica(canvasId, datos, etiqueta, color){
  const ctx = document.getElementById(canvasId);
  if(!ctx) return;
  const media = calcularMedia(datos);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: especiesNombres,
      datasets: [
        {
          label: etiqueta,
          data: datos,
          backgroundColor: color,
          borderRadius: 6,
        },
        {
          label: 'Media',
          data: especiesNombres.map(() => media),
          type: 'line',
          borderColor: '#7F5539',
          borderWidth: 2,
          borderDash: [6,4],
          pointRadius: 0,
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { font: { family: 'Outfit', size: 11 } } }
      },
      scales: {
        x: { ticks: { font: { size: 10 } } },
        y: { beginAtZero: true }
      }
    }
  });
}

function inicializarEstadistica(){
  if(typeof Chart === 'undefined'){
    console.warn('Chart.js no se cargó correctamente.');
    return;
  }
  crearGrafica('graficaGerminacion', datosGerminacion, 'Días', '#52B788');
  crearGrafica('graficaAgua', datosAgua, 'mm/ciclo', '#74C69D');

  renderizarResumen('resumenGerminacion', datosGerminacion, 'días');
  renderizarResumen('resumenAgua', datosAgua, 'mm');

  const mediaAgua = calcularMedia(datosAgua).toFixed(0);
  const mediaGerm = calcularMedia(datosGerminacion).toFixed(1);
  const maxAguaIdx = datosAgua.indexOf(Math.max(...datosAgua));
  const maxGermIdx = datosGerminacion.indexOf(Math.max(...datosGerminacion));

  document.getElementById('textoInterpretacion').innerHTML =
    `En promedio, las especies del catálogo requieren <strong>${mediaGerm} días</strong> para germinar y <strong>${mediaAgua} mm</strong> de agua por ciclo. ` +
    `<strong>${especiesNombres[maxAguaIdx]}</strong> destaca como el valor más alto en requerimiento de agua, debido a su sistema de cultivo por inundación, ` +
    `mientras que <strong>${especiesNombres[maxGermIdx]}</strong> presenta el mayor tiempo de germinación/brotación del grupo. ` +
    `La dispersión de los datos (reflejada en la desviación estándar) muestra que no existe un patrón único de cultivo: cada especie responde a condiciones biológicas distintas.`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Esperar un momento a que Chart.js (CDN externo) esté disponible
  if(typeof Chart !== 'undefined'){
    inicializarEstadistica();
  } else {
    window.addEventListener('load', inicializarEstadistica);
  }
});
