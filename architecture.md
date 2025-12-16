```text
/
├── index.html          # Punto de entrada principal
├── styles/
│   ├── main.css        # Archivo principal (imports)
│   ├── base.css        # Reset, variables, tipografía
│   ├── layout.css      # Header, Footer, Grid sistema
│   ├── components.css  # Botones, Cards, Forms
│   └── modules/        # Estilos específicos por módulo
│       ├── hero.css
│       ├── services.css
│       └── carousel.css
├── js/
│   ├── main.js         # Entry point (inicializa módulos)
│   ├── modules/
│   │   ├── ui.js       # UI general (Menú móvil, floating form)
│   │   ├── animations.js # IntersectionObservers (fade-ins)
│   │   ├── carousel.js # Configuración de SwiperJS (Integraciones)
│   │   └── services.js # Lógica manual para sección de Servicios (Legacy)
│   └── utils/
│       └── validators.js # Validaciones de formulario
└── assets/
    ├── images/
    └── videos/
```

## 1. Módulos JavaScript

### `main.js`
Punto de entrada. Importa e inicializa los controladores.
```javascript
import { initUI } from './modules/ui.js';
import { initCarousels } from './modules/carousel.js';
import { initAnimations } from './modules/animations.js';
import { initServicesLegacy } from './modules/services.js';

document.addEventListener('DOMContentLoaded', () => {
    initUI();
    initCarousels();
    initAnimations();
    initServicesLegacy();
});
```

### `carousel.js` (SwiperJS Implementation)
Centraliza la lógica de Swiper. Actualmente gestiona:

1.  **Carrusel de Integraciones (Estilo "n8n")**:
    *   Implementación de doble fila con desplazamiento automático continuo.
    *   Fila 1: `autoplay: { reverseDirection: false }`.
    *   Fila 2: `autoplay: { reverseDirection: true }`.
    *   Incluye iconos y nombres de las marcas.

### `services.js` (Legacy Implementation)
Maneja la lógica de la sección de Servicios.
*   **Estado:** Se decidió mantener la implementación original (no Swiper) por preferencia de diseño.
*   **Funcionalidad:** Lista interactiva a la izquierda que actualiza una tarjeta de detalles a la derecha.
*   **Interacción:** Clic en items de lista o uso de flechas de navegación en la tarjeta.

### `ui.js`
Maneja la lógica de interfaz que no requiere librerías externas:
-   **Floating Form Panel**: Lógica de apertura/cierre (`classList.toggle`).
-   **Mobile Menu**: Toggle del menú hamburguesa.
-   **Video Background**: Manejo de fallback y loop para el video del Hero.

## 2. Integración HTMX

Según el análisis del HTML actual, HTMX aportará valor en:

1.  **Formulario de Contacto (`#contact-form`)**:
    *   En lugar de un `submit` estándar o fetch manual, usar atributos hx.
    *   Ejemplo: `<form hx-post="/api/contact" hx-swap="outerHTML" hx-target="#form-response">`.
    *   Permite mostrar mensajes de éxito/error sin recargar y sin escribir JS complejo.

2.  **Lazy Loading (Opcional)**:
    *   *Si la sección de integraciones crece, se puede cargar bajo demanda con `hx-trigger="revealed"`.