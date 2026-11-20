
const dbDeportes = {
  futbol: {
    recomendaciones: [
      "Kit Pro: Jersey Transpirable + Shorts de Alta Flexibilidad + Tachones para Pasto Natural.",
      "Kit Entrenamiento: Playera Térmica + Espinilleras de Fibra + Tenis para Pasto Sintético."
    ],
    precioKit: 1450,
    items: [
      { id: 1, name: "Tachones de Fútbol Pro", price: 1200, img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=400&q=80" },
      { id: 2, name: "Jersey Deportivo DryFit", price: 450, img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80" },
      { id: 3, name: "Espinilleras Anatómicas", price: 280, img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80" },
      { id: 4, name: "Balón de Fútbol Profesional", price: 650, img: "https://images.unsplash.com/photo-1614632537456-7468770f7d91?auto=format&fit=crop&w=400&q=80" },
      { id: 5, name: "Shorts de Fútbol Ligeros", price: 320, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=400&q=80" },
      { id: 6, name: "Medias de Compresión Largas", price: 180, img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=80" },
      { id: 7, name: "Guantes de Portero Pro", price: 850, img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80" },
      { id: 8, name: "Camiseta Térmica Interior", price: 400, img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80" },
      { id: 9, name: "Mochila Porta Balón", price: 700, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  basketball: {
    recomendaciones: [
      "Kit Superior: Tenis High-Top con amortiguación + Jersey Oversize sin mangas + Muñequeras.",
      "Kit Urbano: Sudadera ligera + Shorts holgados de malla + Tenis antiderrapante."
    ],
    precioKit: 1950,
    items: [
      { id: 3, name: "Short Holgado Malla", price: 350, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  running: {
    recomendaciones: [
      "Kit Maratón: Tenis de Carbono Ultraligeros + Playera Reflectante + Mallas de Compresión.",
      "Kit Ligero: Shorts con malla interna + Visera deportiva + Tenis con amortiguación suave."
    ],
    precioKit: 1650,
    items: [
      { id: 6, name: "Playera Reflectante", price: 380, img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  gym: {
    recomendaciones: [
      "Kit Fuerza: Playera de compresión + Shorts elásticos + Cinturón lumbar + Tenis suela plana.",
      "Kit Hypertrophy: Camiseta de tirantes (Tank top) + Guantes con agarre + Pants ajustables."
    ],
    precioKit: 950,
    items: [
      { id: 8, name: "Guantes de Entrenamiento", price: 250, img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  tenis: {
    recomendaciones: [
      "Kit Pro Court: Polo con tecnología antisudor + Shorts con bolsas + Tenis agarre lateral.",
      "Kit Ajustado: Gorra visera + Muñequeras + Chaqueta cortavientos ligera."
    ],
    precioKit: 850,
    items: [
      { id: 9, name: "Polo Deportivo Tenis", price: 550, img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  natacion: {
    recomendaciones: [
      "Kit Hidrodinámico: Traje de baño alta resistencia al cloro + Gorro silicona + Goggles antirreflejo.",
      "Kit Entrenamiento: Toalla microfibra + Zapatillas acuáticas + Jammer de natación."
    ],
    precioKit: 550,
    items: [
      { id: 10, name: "Goggles de Natación Antiempañante", price: 300, img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  ciclismo: {
    recomendaciones: [
      "Kit Ruta: Jersey aerodinámico con bolsillos + Bib short con badana + Casco ligero.",
      "Kit MTB: Rompevientos + Guantes acolchados + Zapatillas para pedal de contacto."
    ],
    precioKit: 1100,
    items: [
      { id: 11, name: "Jersey Ciclismo Aerodinámico", price: 850, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80" }
    ]
  }
};

const dbModa = {
  casual: {
    recomendaciones: [
      "Kit Casual Diario: Sudadera Hoodie Urban + Pants Casual Sport + Tenis Blancos.",
      "Kit Relax: Playera Oversize de Algodón + Jogger básico de felpa."
    ],
    precioKit: 1200,
    items: [
      { id: 101, name: "Sudadera Hoodie Urban", price: 750, img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80" },
      { id: 102, name: "Pants Casual Sport", price: 600, img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=400&q=80" },
      { id: 103, name: "Playera Básica de Algodón", price: 300, img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80" },
      { id: 104, name: "Chamarra de Mezclilla Casual", price: 1100, img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=400&q=80" },
      { id: 105, name: "Tenis Urbanos Blancos", price: 900, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80" },
      { id: 106, name: "Jogger de Felpa Cómodo", price: 550, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" },
      { id: 107, name: "Gorra Casual Trucker", price: 250, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80" },
      { id: 108, name: "Camisa Casual de Lino", price: 650, img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80" },
      { id: 109, name: "Mochila Casual Escolar", price: 800, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  urbano: {
    recomendaciones: [
      "Kit Streetwear: Chamarra Bomber + Pantalón Cargo con múltiples bolsas.",
      "Kit Nocturno: Sudadera Estampada + Gorra Trucker + Lentes de Sol."
    ],
    precioKit: 1500,
    items: [
      { id: 110, name: "Chamarra Bomber Estilo Urbano", price: 950, img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=400&q=80" }
    ]
  }
};


let deporteActual = 'futbol';
let indexRecSports = 0;

let modaActual = 'casual';
let indexRecFashion = 0;

let carritoCompras = [];

let loginForm = document.getElementById('login-form');
if(loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'block';
  });
}

function cambiarVista(vistaDestino) {
  let vHub = document.getElementById('view-hub');
  let vSports = document.getElementById('view-sports');
  let vFashion = document.getElementById('view-fashion');

  vHub.style.display = 'none';
  vSports.style.display = 'none';
  vFashion.style.display = 'none';

  if(vistaDestino === 'hub') {
    vHub.style.display = 'block';
  } else if(vistaDestino === 'deportiva') {
    vSports.style.display = 'block';
    seleccionarDeporte('futbol');
  } else if(vistaDestino === 'moda') {
    vFashion.style.display = 'block';
    seleccionarModa('casual');
  }
}


function seleccionarDeporte(keyDeporte, eventoClick) {
  deporteActual = keyDeporte;
  indexRecSports = 0;
  
  document.querySelectorAll('#view-sports .sport-tab').forEach(el => el.classList.remove('active'));
  if (eventoClick && eventoClick.target) {
    eventoClick.target.classList.add('active');
  } else {
    let t = document.querySelector(`#view-sports .sport-tab[onclick*="'${keyDeporte}'"]`);
    if(t) t.classList.add('active');
  }

  refrescarRecSports();
  pintarCatalogo(dbDeportes[keyDeporte].items, 'products-container-sports');
}

function refrescarRecSports() {
  let data = dbDeportes[deporteActual];
  document.getElementById('rec-title-sports').innerText = `Kit Recomendado: ${deporteActual.toUpperCase()}`;
  document.getElementById('rec-desc-sports').innerText = data.recomendaciones[indexRecSports];
}


function seleccionarModa(keyModa, eventoClick) {
  modaActual = keyModa;
  indexRecFashion = 0;
  
  document.querySelectorAll('#view-fashion .sport-tab').forEach(el => el.classList.remove('active'));
  if (eventoClick && eventoClick.target) {
    eventoClick.target.classList.add('active');
  } else {
    let t = document.querySelector(`#view-fashion .sport-tab[onclick*="'${keyModa}'"]`);
    if(t) t.classList.add('active');
  }

  refrescarRecFashion();
  pintarCatalogo(dbModa[keyModa].items, 'products-container-fashion');
}

function refrescarRecFashion() {
  let data = dbModa[modaActual];
  document.getElementById('rec-title-fashion').innerText = `Estilo Sugerido: ${modaActual.toUpperCase()}`;
  document.getElementById('rec-desc-fashion').innerText = data.recomendaciones[indexRecFashion];
}


function generateAlternativeRecommendation(seccion) {
  if(seccion === 'sports') {
    let recs = dbDeportes[deporteActual].recomendaciones;
    indexRecSports = (indexRecSports + 1) % recs.length;
    refrescarRecSports();
  } else {
    let recs = dbModa[modaActual].recomendaciones;
    indexRecFashion = (indexRecFashion + 1) % recs.length;
    refrescarRecFashion();
  }
}


function pintarCatalogo(listaItems, contenedorId) {
  let caja = document.getElementById(contenedorId);
  let htmlContenido = "";
  
  for(let i = 0; i < listaItems.length; i++) {
    let prod = listaItems[i];
    htmlContenido += `
      <div class="product-card">
        <img src="${prod.img}" alt="${prod.name}">
        <div class="product-info">
          <h4>${prod.name}</h4>
          <div class="price">$${prod.price}</div>
        </div>
        <div class="product-controls">
          <div class="inline-controls">
            <select id="size-${prod.id}" class="select-custom">
              <option value="S">Talla S</option>
              <option value="M" selected>Talla M</option>
              <option value="L">Talla L</option>
              <option value="XL">Talla XL</option>
            </select>
            <input type="number" id="qty-${prod.id}" value="1" min="1" class="select-custom" style="width: 70px;">
          </div>
          <button class="btn" onclick="agregarAlCarro(${prod.id}, '${prod.name}', ${prod.price})">Agregar al Carrito</button>
        </div>
      </div>
    `;
  }
  caja.innerHTML = htmlContenido;
}


function filterProducts(tipoSeccion) {
  if(tipoSeccion === 'sports') {
    let texto = document.getElementById('search-input-sports').value.toLowerCase();
    let filtrados = dbDeportes[deporteActual].items.filter(x => x.name.toLowerCase().includes(texto));
    pintarCatalogo(filtrados, 'products-container-sports');
  } else {
    let texto = document.getElementById('search-input-fashion').value.toLowerCase();
    let filtrados = dbModa[modaActual].items.filter(x => x.name.toLowerCase().includes(texto));
    pintarCatalogo(filtrados, 'products-container-fashion');
  }
}
function agregarKitAlCarrito(tipoSeccion) {
  let tituloKit = "";
  let precioKit = 0;

  if(tipoSeccion === 'sports') {
    tituloKit = `Kit Completo (${deporteActual.toUpperCase()})`;
    precioKit = dbDeportes[deporteActual].precioKit;
  } else {
    tituloKit = `Kit Completo Estilo (${modaActual.toUpperCase()})`;
    precioKit = dbModa[modaActual].precioKit;
  }

  let yaExiste = carritoCompras.find(item => item.name === tituloKit);
  if(yaExiste) {
    yaExiste.qty += 1;
  } else {
    carritoCompras.push({
      id: 'kit-' + Math.floor(Math.random() * 1000),
      name: tituloKit,
      price: precioKit,
      size: 'Paquete Estándar',
      qty: 1
    });
  }

  actualizarUIcarrito();
  alert(`¡${tituloKit} agregado al carrito con éxito!`);
}


function agregarAlCarro(idItem, nombreItem, precioItem) {
  let tallaSeleccionada = document.getElementById(`size-${idItem}`).value;
  let cantidadSeleccionada = parseInt(document.getElementById(`qty-${idItem}`).value);

  let encontrado = carritoCompras.find(x => x.id === idItem && x.size === tallaSeleccionada);

  if (encontrado) {
    encontrado.qty += cantidadSeleccionada;
  } else {
    carritoCompras.push({
      id: idItem,
      name: nombreItem,
      price: precioItem,
      size: tallaSeleccionada,
      qty: cantidadSeleccionada
    });
  }
  actualizarUIcarrito();
  alert(`Se añadió "${nombreItem}" (Talla ${tallaSeleccionada}) al carrito.`);
}
function cambiarCantidadItem(indice, nuevaCantidad) {
  let cantidadVal = parseInt(nuevaCantidad);
  if(cantidadVal <= 0) {
    eliminarItemCarro(indice);
  } else {
    carritoCompras[indice].qty = cantidadVal;
    actualizarUIcarrito();
  }
}
function eliminarItemCarro(indice) {
  carritoCompras.splice(indice, 1);
  actualizarUIcarrito();
}

function actualizarUIcarrito() {
  let cajaItems = document.getElementById('cart-items-container');
  let badgeContador = document.getElementById('cart-count');
  let textoTotal = document.getElementById('cart-total');

  let piezasTotales = 0;
  let dineroTotal = 0;
  if(carritoCompras.length === 0) {
    cajaItems.innerHTML = '<p style="color: var(--text-muted);">Tu carrito está vacío.</p>';
  } else {
    let htmlGeneradoCarro = "";
    for(let k = 0; k < carritoCompras.length; k++) {
      let item = carritoCompras[k];
      piezasTotales += item.qty;
      dineroTotal += (item.price * item.qty);

      htmlGeneradoCarro += `
        <div class="cart-item">
          <div>
            <h4>${item.name}</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Detalle: ${item.size} | $${item.price} c/u</p>
          </div>
          <div class="cart-actions">
            <input type="number" value="${item.qty}" min="1" onchange="cambiarCantidadItem(${k}, this.value)">
            <button class="btn btn-danger" style="padding: 5px 10px;" onclick="eliminarItemCarro(${k})" title="Eliminar / Reembolsar">🗑️</button>
          </div>
        </div>
      `;
    }
    cajaItems.innerHTML = htmlGeneradoCarro;
  }

  badgeContador.innerText = piezasTotales;
  textoTotal.innerText = dineroTotal.toFixed(2);
}

function toggleCart() {
  let modalCarro = document.getElementById("cart-modal");
  if(modalCarro.style.display === "flex") {
    modalCarro.style.display = "none";
  } else {
    modalCarro.style.display = "flex";
  }
}
function checkout() {
  if(carritoCompras.length === 0) {
    alert("sin articulo");
    return;
  }
  alert("buena compraa realizasda");
  carritoCompras = [];
  actualizarUIcarrito();
  toggleCart();
}