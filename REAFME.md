# PagosTech - Catálogo de Electrodomésticos

## Descripción del Proyecto

PagosTech es un moderno y elegante catálogo digital de electrodomésticos desarrollado con tecnologías web actuales. La plataforma ofrece una experiencia de usuario excepcional para explorar, filtrar y consultar sobre una amplia gama de productos para el hogar.

## Características Principales

**Diseño Responsivo:** Adaptado perfectamente para dispositivos móviles, tablets y escritorio
**Interfaz Moderna:** Utilizando Bootstrap 5.3.0 con animaciones fluidas y efectos visuales atractivos
**Catálogo Completo:** 20+ productos organizados en 6 categorías diferentes
**Sistema de Filtros Avanzado:** Búsqueda por texto, categoría y marca
**Integración con WhatsApp:** Consulta directa de productos via WhatsApp
**Galería de Imágenes:** Modal interactivo con carrusel de imágenes
**Precios con Descuento:** Visualización clara de ofertas y ahorros

## Categorías de Productos

**Categoría**	**Descripción**	**Productos** **Disponibles**
Cocinas	Cocinas a gas y eléctricas de última generación	6 productos
Heladeras	Refrigeradores eficientes con tecnología inverter	4 productos
Lavarropas	Lavadoras automáticas y semiautomáticas	4 productos
Aires Acondicionados	Sistemas de climatización con eficiencia energética	2 productos
Termotanques	Calentadores de agua eléctricos y a gas	2 productos
Lavavajillas	Lavavajillas eficientes y de bajo consumo	2 productos

## Tecnologías Utilizadas

### Frontend

**HTML5** - Estructura semántica y accesible
**CSS3** - Variables CSS, Grid, Flexbox, Animaciones
**Bootstrap 5.3.0** - Framework CSS responsivo
**JavaScript ES6+** - Interactividad y lógica de negocio
**Font Awesome 6.4.0** - Iconografía moderna
**AOS (Animate On Scroll)** - Animaciones al hacer scroll

## Características Técnicas

**Arquitectura Modular:** Código organizado y mantenible
**Optimización SEO:** Meta tags, Open Graph, estructura semántica
**Accesibilidad:** Navegación por teclado, ARIA labels, contraste adecuado
**Performance:** Preload de recursos críticos, lazy loading implícito
**Responsive Design:** Mobile-first approach con breakpoints específicos

## Funcionalidades Destacadas

### Sistema de Búsqueda y Filtrado

- Búsqueda en tiempo real con debounce de 300ms
- Filtrado por categorías con navegación visual
- Filtrado por marcas (Samsung, LG, Philco, Whirlpool, etc.)
- Limpieza rápida de todos los filtros

### Gestión de Precios
- Visualización de precios originales y con descuento
- Cálculo automático de ahorro en pesos y porcentaje
- Formato de moneda colombiana (COP)
- Badges destacados para productos en oferta

### Integración Comercial

- Botón de WhatsApp por producto con mensaje predefinido
- Información de contacto múltiple (teléfono, WhatsApp, email)
- Mensajes personalizados con detalles del producto seleccionado
- Enlaces directos a redes sociales

### Experiencia de Usuario

- Animaciones suaves en scroll y hover
- Modal de imágenes con carrusel interactivo
- Indicador de galería para productos con múltiples imágenes
- Scroll to top button con comportamiento inteligente
- Estados de carga y mensajes de "no resultados"

## Características de Diseño

### Paleta de Colores
css
--primary: #0072CF;      /* Azul corporativo */
--primary-dark: #0056a3; /* Azul oscuro */
--whatsapp: #25D366;     /* Verde WhatsApp */
--discount: #dc3545;     /* Rojo descuentos */
--dark: #343a40;         /* Texto principal */

### Efectos Visuales

- Gradientes modernos en botones y secciones
- Sombras suaves con múltiples capas
- Animaciones CSS personalizadas (floating, pulse, fadeInUp)
- Transiciones suaves en todas las interacciones
- Backdrop filters para efectos de glassmorphism

### Estructura del Proyecto

PagosTech/
├── index.html                 
├── public/
│   ├── css/
│   │   └── catalogoClient.css 
│   ├── js/
│   │   └── catalogoClient.js  
│   └── images/
│       └── favicon.ico        
└── README.md                  

## Instalación y Uso

### Requisitos Previos
- Servidor web local (XAMPP, WAMP, Live Server, etc.)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Pasos de Instalación
- Clonar o descargar los archivos del proyecto
- Colocar los archivos en el directorio del servidor web
- Asegurar que las rutas de los recursos sean accesibles
- Abrir index.html en el navegador o través del servidor local

### Personalización

- Productos: Modificar el array products en catalogoClient.js
- Estilos: Editar variables CSS en :root section
- Contacto: Actualizar números y emails en el footer
- Colores: Cambiar la paleta modificando las variables CSS

### Información de Contacto

- 📞 Teléfono: +57 300 421 0781
- 💬 WhatsApp: +57 300 421 0781
- 📧 Email: ingjorgepertuz1@gmail.com
- 🌐 Servicio: Toda Colombia

## Mantenimiento y Mejoras

### Agregar Nuevos Productos

javascript
{
    id: 21,
    name: "NUEVO PRODUCTO",
    category: "cocinas",
    brand: "Marca",
    description: "Descripción del producto",
    specs: ["Especificación 1", "Especificación 2"],
    price: 1000000,
    originalPrice: 1200000,
    discount: 17,
    images: ["url-imagen-1", "url-imagen-2"],
    hasDiscount: true
}

### Personalizar Estilos

Modificar las variables CSS en catalogoClient.css:

css
:root {
    --primary: #TuColorPrincipal;
    --primary-dark: #TuColorOscuro;
    /* ... más personalizaciones */
}

### Características de Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA para screen readers
- Contraste de colores WCAG AA compliant
- Skip links para navegación rápida
- Textos alternativos en imágenes
- Focus states visibles

## Licencia
© 2024 PagosTech. Todos los derechos reservados.