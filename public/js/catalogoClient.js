// public/js/catalogoClient.js
// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Product Data with multiple images and discount prices
const products = [
  // Cocinas
  {
    id: 1,
    name: "SIRENA Multigas",
    category: "cocinas",
    brand: "Sirena",
    description: "Cocina multigas de 47cm en color blanco, ideal para espacios reducidos.",
    specs: ["47cm de ancho", "Multigas", "Color blanco", "4 hornillas"],
    price: 850000,
    originalPrice: 950000,
    discount: 11,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg",
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
    ],
    hasDiscount: true
  },
  {
    id: 2,
    name: "USMAN Infinity",
    category: "cocinas",
    brand: "Usman",
    description: "Cocina con puerta visor de 55cm, 4 hornillas y diseño moderno.",
    specs: ["55cm de ancho", "Puerta con visor", "4 hornillas", "Diseño moderno"],
    price: 1250000,
    originalPrice: 1450000,
    discount: 14,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg",
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
    ],
    hasDiscount: true
  },
  {
    id: 3,
    name: "PEABODY PB28",
    category: "cocinas",
    brand: "Peabody",
    description: "Cocina multigas de 50cm en color blanco, eficiente y duradera.",
    specs: ["50cm de ancho", "Multigas", "Color blanco", "Alta eficiencia"],
    price: 950000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg"
    ],
    hasDiscount: false
  },
  {
    id: 4,
    name: "ESCORIAL Candor",
    category: "cocinas",
    brand: "Escorial",
    description: "Cocina a gas natural en color blanco, perfecta para tu cocina.",
    specs: ["Gas natural", "Color blanco", "Diseño elegante", "Fácil limpieza"],
    price: 1100000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg",
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
    ],
    hasDiscount: false
  },
  {
    id: 5,
    name: "ESCORIAL Palace Cristal",
    category: "cocinas",
    brand: "Escorial",
    description: "Cocina autolimpiante a gas natural con acabado en cristal.",
    specs: ["Autolimpiante", "Gas natural", "Acabado cristal", "Fácil mantenimiento"],
    price: 1800000,
    originalPrice: 2200000,
    discount: 18,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg",
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
    ],
    hasDiscount: true
  },
  {
    id: 6,
    name: "ESCORIAL Master Clásico",
    category: "cocinas",
    brand: "Escorial",
    description: "Cocina a gas natural de 56cm en color negro, estilo clásico.",
    specs: ["56cm de ancho", "Gas natural", "Color negro", "Estilo clásico"],
    price: 1450000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg"
    ],
    hasDiscount: false
  },

  // Heladeras
  {
    id: 7,
    name: "PHILCO Top Mount",
    category: "heladeras",
    brand: "Philco",
    description: "Heladera Top Mount de 298L en color blanco/plateado.",
    specs: ["298L de capacidad", "Top Mount", "Blanca/Plateada", "Eficiente"],
    price: 1650000,
    originalPrice: 1850000,
    discount: 11,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      "https://images.unsplash.com/photo-1584568694244-47b2a5a0dab9"
    ],
    hasDiscount: true
  },
  {
    id: 8,
    name: "SAMSUNG RT29K507JS8",
    category: "heladeras",
    brand: "Samsung",
    description: "Heladera Samsung de última generación con tecnología inverter.",
    specs: ["Tecnología Inverter", "Eficiencia A+", "Diseño moderno", "Gran capacidad"],
    price: 2300000,
    originalPrice: 2800000,
    discount: 18,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      "https://images.unsplash.com/photo-1584568694244-47b2a5a0dab9",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5"
    ],
    hasDiscount: true
  },
  {
    id: 9,
    name: "WHIRLPOOL WRM39CK",
    category: "heladeras",
    brand: "Whirlpool",
    description: "Heladera No Frost de 340L, mantiene tus alimentos frescos por más tiempo.",
    specs: ["340L de capacidad", "No Frost", "Tecnología 6th Sense", "Eficiencia energética"],
    price: 2800000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    ],
    hasDiscount: false
  },
  {
    id: 10,
    name: "DREAN HDR280",
    category: "heladeras",
    brand: "Drean",
    description: "Heladera blanca de 277L, ideal para familias pequeñas.",
    specs: ["277L de capacidad", "Color blanco", "Diseño compacto", "Bajo consumo"],
    price: 1350000,
    originalPrice: 1550000,
    discount: 13,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
      "https://images.unsplash.com/photo-1584568694244-47b2a5a0dab9"
    ],
    hasDiscount: true
  },

  // Lavarropas
  {
    id: 11,
    name: "PHILCO PHLF6510B",
    category: "lavarropas",
    brand: "Philco",
    description: "Lavarropas de 6.5kg con 800RPM, eficiente y silencioso.",
    specs: ["6.5kg de capacidad", "800RPM", "Múltiples programas", "Bajo consumo"],
    price: 1200000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1"
    ],
    hasDiscount: false
  },
  {
    id: 12,
    name: "PHILCO PHLF8014P12",
    category: "lavarropas",
    brand: "Philco",
    description: "Lavarropas inverter de 8kg con 1400RPM, tecnología de punta.",
    specs: ["8kg de capacidad", "1400RPM", "Tecnología Inverter", "14 programas"],
    price: 1850000,
    originalPrice: 2150000,
    discount: 14,
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
      "https://images.unsplash.com/photo-1584568694244-47b2a5a0dab9",
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5"
    ],
    hasDiscount: true
  },
  {
    id: 13,
    name: "SAMSUNG WW65A4000EE",
    category: "lavarropas",
    brand: "Samsung",
    description: "Lavarropas Samsung de 6.5kg con 1000RPM, calidad garantizada.",
    specs: ["6.5kg de capacidad", "1000RPM", "Carga frontal", "Eco Bubble"],
    price: 1550000,
    originalPrice: 1750000,
    discount: 11,
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
      "https://images.unsplash.com/photo-1584568694244-47b2a5a0dab9"
    ],
    hasDiscount: true
  },
  {
    id: 14,
    name: "DREAN NEXT 6.06 ECO",
    category: "lavarropas",
    brand: "Drean",
    description: "Lavarropas ecológico de 6kg con carga frontal.",
    specs: ["6kg de capacidad", "Carga frontal", "Tecnología ECO", "Bajo consumo de agua"],
    price: 1100000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1"
    ],
    hasDiscount: false
  },

  // Aires Acondicionados
  {
    id: 15,
    name: "TCL Split Frío/Calor",
    category: "aires",
    brand: "TCL",
    description: "Aire acondicionado split frío/calor de 3200W, ideal para habitaciones.",
    specs: ["3200W de potencia", "Función frío/calor", "Tecnología inverter", "Bajo ruido"],
    price: 1900000,
    originalPrice: 2300000,
    discount: 17,
    images: [
      "https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg",
      "https://images.pexels.com/photos/8972625/pexels-photo-8972625.jpeg",
      "https://images.pexels.com/photos/8972628/pexels-photo-8972628.jpeg"
    ],
    hasDiscount: true
  },
  {
    id: 16,
    name: "LG HSEL5400INV",
    category: "aires",
    brand: "LG",
    description: "Aire acondicionado inverter de 5400W, eficiencia energética máxima.",
    specs: ["5400W de potencia", "Tecnología Inverter", "Función frío/calor", "WiFi compatible"],
    price: 3200000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg"
    ],
    hasDiscount: false
  },

  // Termotanques
  {
    id: 17,
    name: "ESCORIAL 45L",
    category: "termotanques",
    brand: "Escorial",
    description: "Termotanque eléctrico de 45L, ideal para baños pequeños.",
    specs: ["45L de capacidad", "Eléctrico", "Termostato ajustable", "Aislamiento eficiente"],
    price: 450000,
    originalPrice: 520000,
    discount: 13,
    images: [
      "https://media.istockphoto.com/id/1199059128/photo/house-heating-concept-modern-home-gas-fired-boiler-3d-rendering.jpg",
      "https://media.istockphoto.com/id/1199059128/photo/house-heating-concept-modern-home-gas-fired-boiler-3d-rendering.jpg"
    ],
    hasDiscount: true
  },
  {
    id: 18,
    name: "UNIVERSAL 60L",
    category: "termotanques",
    brand: "Universal",
    description: "Termotanque de 60L, perfecto para uso familiar moderado.",
    specs: ["60L de capacidad", "Alta eficiencia", "Durable", "Fácil instalación"],
    price: 650000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://media.istockphoto.com/id/1199059128/photo/house-heating-concept-modern-home-gas-fired-boiler-3d-rendering.jpg"
    ],
    hasDiscount: false
  },

  // Lavavajillas
  {
    id: 19,
    name: "SAMSUNG DW60M6050FS",
    category: "lavavajillas",
    brand: "Samsung",
    description: "Lavavajillas para 14 cubiertos con 7 programas de lavado.",
    specs: ["14 cubiertos", "7 programas", "Tecnología Eco Bubble", "Bajo consumo"],
    price: 2100000,
    originalPrice: 2500000,
    discount: 16,
    images: [
      "https://images.pexels.com/photos/3829549/pexels-photo-3829549.jpeg",
      "https://images.pexels.com/photos/5824891/pexels-photo-5824891.jpeg",
      "https://images.pexels.com/photos/5824903/pexels-photo-5824903.jpeg"
    ],
    hasDiscount: true
  },
  {
    id: 20,
    name: "PIONNER X503PH",
    category: "lavavajillas",
    brand: "Pionner",
    description: "Lavavajillas compacto para 4 sets de cubiertos.",
    specs: ["4 sets de cubiertos", "Compacto", "Eficiente", "Fácil uso"],
    price: 850000,
    originalPrice: null,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/3829549/pexels-photo-3829549.jpeg"
    ],
    hasDiscount: false
  }
];

// State
const state = {
  filteredProducts: [...products],
  currentCategory: "",
  currentBrand: "",
  currentSearch: "",
};

// DOM Elements
const elements = {
  productsGrid: document.getElementById("productsGrid"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  brandFilter: document.getElementById("brandFilter"),
  clearFilters: document.getElementById("clearFilters"),
  noResults: document.getElementById("noResults"),
  imageModal: document.getElementById("imageModal"),
  carouselInner: document.getElementById("carouselInner"),
  imageModalLabel: document.getElementById("imageModalLabel")
};

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeBrandFilter();
  renderProducts();
  setupEventListeners();
  setupCategoryCards();
  setupScrollToTop();
});

function initializeBrandFilter() {
  const brands = [...new Set(products.map((product) => product.brand))].sort();
  const brandFilter = elements.brandFilter;

  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function setupEventListeners() {
  elements.searchInput.addEventListener("input", debounce(handleSearch, 300));
  elements.categoryFilter.addEventListener("change", handleCategoryChange);
  elements.brandFilter.addEventListener("change", handleBrandChange);
  elements.clearFilters.addEventListener("click", handleClearFilters);
}

function setupCategoryCards() {
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      elements.categoryFilter.value = category;
      handleCategoryChange();

      // Scroll to products
      document.getElementById("products").scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function setupScrollToTop() {
  const scrollButton = document.querySelector('.scroll-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
}

function handleSearch(e) {
  state.currentSearch = e.target.value.toLowerCase();
  applyFilters();
}

function handleCategoryChange() {
  state.currentCategory = elements.categoryFilter.value;
  applyFilters();
}

function handleBrandChange() {
  state.currentBrand = elements.brandFilter.value;
  applyFilters();
}

function handleClearFilters() {
  elements.searchInput.value = "";
  elements.categoryFilter.value = "";
  elements.brandFilter.value = "";

  state.currentSearch = "";
  state.currentCategory = "";
  state.currentBrand = "";

  applyFilters();
}

function applyFilters() {
  let filtered = [...products];

  // Apply search filter
  if (state.currentSearch) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(state.currentSearch) ||
        product.description.toLowerCase().includes(state.currentSearch) ||
        product.brand.toLowerCase().includes(state.currentSearch)
    );
  }

  // Apply category filter
  if (state.currentCategory) {
    filtered = filtered.filter(
      (product) => product.category === state.currentCategory
    );
  }

  // Apply brand filter
  if (state.currentBrand) {
    filtered = filtered.filter(
      (product) => product.brand === state.currentBrand
    );
  }

  state.filteredProducts = filtered;
  renderProducts();
}

function renderProducts() {
  const productsGrid = elements.productsGrid;
  const noResults = elements.noResults;

  if (state.filteredProducts.length === 0) {
    productsGrid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  productsGrid.innerHTML = state.filteredProducts
    .map(
      (product) => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" style="padding: 1rem 0.5rem;">
          <div class="product-card">
            <div class="product-image" style="background-image: url('${product.images[0]}')" 
                 onclick="openImageModal(${product.id})">
              <span class="product-badge">${getCategoryLabel(product.category)}</span>
              ${product.images.length > 1 ? `
                <div class="image-gallery-indicator">
                  <i class="fas fa-images"></i>
                  <span>${product.images.length}</span>
                </div>
              ` : ''}
              ${product.hasDiscount ? `
                <div class="discount-badge">
                  -${product.discount}%
                </div>
              ` : ''}
            </div>
            <div class="product-content">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-description">${product.description}</p>
              <ul class="product-specs">
                ${product.specs.map((spec) => `
                  <li><i class="fas fa-check"></i> ${spec}</li>
                `).join("")}
              </ul>
              <div class="product-pricing">
                ${product.hasDiscount ? `
                  <div class="original-price">
                    ${formatPrice(product.originalPrice)}
                  </div>
                  <div class="discount-price">
                    ${formatPrice(product.price)}
                  </div>
                  <div class="discount-text">
                    Ahorras ${formatPrice(product.originalPrice - product.price)}
                  </div>
                ` : `
                  <div class="normal-price">
                    ${formatPrice(product.price)}
                  </div>
                `}
              </div>
              <button class="btn btn-whatsapp" onclick="openWhatsApp(${product.id})">
                <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function formatPrice(price) {
  if (!price) return '';
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

function getCategoryLabel(category) {
  const labels = {
    cocinas: "Cocina",
    heladeras: "Heladera",
    lavarropas: "Lavarropas",
    aires: "Aire Acond.",
    termotanques: "Termotanque",
    lavavajillas: "Lavavajillas",
  };
  return labels[category] || category;
}

function openImageModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Update modal title
  elements.imageModalLabel.textContent = product.name;

  // Clear previous carousel items
  elements.carouselInner.innerHTML = '';

  // Add new carousel items
  product.images.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    carouselItem.innerHTML = `
      <img src="${image}" class="d-block w-100" alt="${product.name} - Imagen ${index + 1}" style="max-height: 500px; object-fit: contain;">
    `;
    elements.carouselInner.appendChild(carouselItem);
  });

  // Show modal
  const modal = new bootstrap.Modal(elements.imageModal);
  modal.show();
}

function openWhatsApp(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const phoneNumber = "573004210781";

  // Convertir el array de especificaciones a formato de lista con asteriscos
  const specsList = product.specs
    .map((spec) => `* ${spec}`)
    .join("\n");

  // Construir mensaje con información de precio y descuento
  let priceInfo = '';
  if (product.hasDiscount) {
    priceInfo = `
*Precio Original:* ${formatPrice(product.originalPrice)}
*Precio con Descuento:* ${formatPrice(product.price)}
*¡Ahorras ${product.discount}%!*`;
  } else {
    priceInfo = `*Precio:* ${formatPrice(product.price)}`;
  }

  const message = `¡Hola! Estoy interesado en el producto:

*${product.name}*

${priceInfo}

*Especificaciones:*
${specsList}

*Descripción:* ${product.description}

Por favor, envíenme más información sobre disponibilidad y formas de pago.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});