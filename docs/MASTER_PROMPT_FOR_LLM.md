# 🎯 MASTER PROMPT: Clonar Sitios Web con Alta Fidelidad Visual

## 📌 Propósito del Prompt

Este prompt está diseñado para que cualquier LLM pueda clonar sitios web con **90-97% de similitud visual**, basado en la experiencia exitosa de clonar un sitio web de hotel de lujo. Incluye metodología probada, errores comunes a evitar, y decisiones críticas de arquitectura.

---

## Pagina a clonar
- **URL Original:** [DECORD](https://ld-wt73.template-help.com/tf/decord_v1/)

## 🎓 CONTEXTO DE APRENDIZAJE

Este sitio web es una **galería de arte moderno y museo** llamada DECORD. Sus características distintivas son:

### Identidad Visual
- **Estética:** Minimalista, elegante, sofisticada
- **Paleta de colores:** Tonos oscuros (negro/gris oscuro) con acentos claros y dorados
- **Tipografía:** Tipografía serif elegante para títulos, sans-serif para cuerpo
- **Espaciado:** Generoso uso de espacio en blanco (whitespace)
- **Fotografía:** Imágenes de alta calidad de obras de arte y espacios de galería

### Elementos Característicos
1. **Hero con título grande:** "MUSEUM OF MODERN ART" con tipografía espaciada
2. **Navegación minimalista:** Logo "ART GALLERY" en esquina, menú hamburguesa
3. **Grid de galería:** Layouts tipo masonry/grid con imágenes de diferentes aspect ratios
4. **Tarjetas de eventos:** Diseño con fecha destacada (formato DD/MM)
5. **Sección de estadísticas:** Números grandes con descripciones (15 años, 34 artistas, etc.)
6. **Filtros de categorías:** "ANAMORPHOSIS", "PHOTOREALISM", "SURREALISM", etc.
7. **Footer con CTA:** "LET'S TALK" con fondo oscuro
8. **Hover effects sutiles:** Zoom en imágenes, overlays con información

### Secciones Principales
- **Home:** Hero + About + Stats + Gallery preview + Events + Testimonials + Blog
- **About:** Historia de la galería + Estadísticas + Team members con fotos
- **Gallery:** Grid de obras con filtros por categoría artística + lightbox
- **Events:** Lista de exposiciones con fechas, descripciones y botón "GET TICKETS"
- **Contacts:** Formulario de contacto + información (teléfono, email, horarios)

### Características Técnicas a Implementar
- **Animaciones sutiles:** Fade-in al hacer scroll, parallax suave
- **Lightbox/Modal:** Para ver imágenes de galería en tamaño completo
- **Filtrado dinámico:** En galería por categorías de arte
- **Sticky header:** Navegación que se queda fija al hacer scroll
- **Loading animation:** Animación de carga inicial
- **Smooth scroll:** Transiciones suaves entre secciones

## 🚀 PROMPT PRINCIPAL

```markdown
# INSTRUCCIONES: Clonar Sitio Web con Alta Fidelidad Visual

## OBJETIVO
Clonar el sitio web [DECORD](https://ld-wt73.template-help.com/tf/decord_v1/) con **mínimo 100% de similitud visual**, 
creando una réplica funcional, responsive y optimizada usando Next.js 16 
(App Router), TypeScript y CSS Modules utilizando la metodología BEM.

**URLs de referencia:**
- Sitio original: https://ld-wt73.template-help.com/tf/decord_v1/
- Enlaces del sitio original:
  - Home: https://ld-wt73.template-help.com/tf/decord_v1/
  - About: https://ld-wt73.template-help.com/tf/decord_v1/about.html
  - Gallery: https://ld-wt73.template-help.com/tf/decord_v1/gallery.html
  - Contact: https://ld-wt73.template-help.com/tf/decord_v1/contacts.html

## REQUISITOS GENERALES

1. **Traducción:** Todo el contenido debe traducirse al español (mantener coherencia con temática de arte).
2. **Assets:** Descarga las imágenes de obras de arte y assets necesarios del sitio original y optimízalos para web (WebP, tamaños adecuados).
3. **Estructura:** Crea una estructura de carpetas clara para componentes, estilos (CSS Modules) y assets organizados por sección.
4. **Performance:** Optimiza el rendimiento usando lazy loading para imágenes de galería y optimización con next/image.
5. **Responsive:** Asegúrate de que el sitio clonado sea completamente responsive, especialmente los grids de galería que deben adaptarse a diferentes dispositivos.
6. **Lightbox:** Implementa un sistema de visualización de imágenes en modal/lightbox para la galería.
7. **Animaciones:** Implementa animaciones sutiles de fade-in y slide-up al hacer scroll.

## FASE 1: ANÁLISIS Y PLANIFICACIÓN (30% del tiempo)

### 1.1 Captura Visual Completa
- [ ] Abrir el sitio original en navegador con DevTools
- [ ] Tomar screenshots en 3 resoluciones:
  - Desktop: 1920x1080
  - Tablet: 768x1024
  - Mobile: 375x667
- [ ] Capturar estados hover de:
  - Imágenes de galería (zoom + overlay)
  - Tarjetas de eventos
  - Botones "GET TICKETS" y "READ MORE"
  - Links de navegación
  - Filtros de categorías
- [ ] Grabar video de interacciones:
  - Animaciones de scroll (fade-in)
  - Transición de menú hamburguesa
  - Apertura de lightbox en galería
  - Filtrado de categorías
- [ ] Capturar loading animation inicial

### 1.2 Análisis Estructural
Crear documento de análisis con esta estructura:

**Por cada sección del sitio:**

#### [NOMBRE DE SECCIÓN]

**Layout:**
- Tipo de grid/flexbox utilizado
- Número de columnas (desktop/tablet/mobile)
- Gaps y spacing específicos

**Elementos visuales:**
- Background (color, imagen, gradient, overlay)
- Bordes (radius, colors, widths)
- Sombras (box-shadow específicos)
- Efectos especiales (blur, glassmorphism, gradients)

**Tipografía:**
- Fuentes utilizadas (families)
- Tamaños por breakpoint (font-size en px)
- Pesos (font-weight)
- Line-heights y letter-spacing

**Colores exactos:**
- Extraer HEX codes con DevTools (Inspect > Computed)
- Anotar colores primarios, secundarios, acentos
- Variaciones hover/active

**Interactividad:**
- Hover effects (transform, color changes, etc.)
- Click behaviors
- Animaciones (duration, easing, delays)
- Scroll animations (fade-in, slide-up, etc.)

**Imágenes:**
- Rutas y nombres de archivos
- Dimensiones reales
- Aspect ratios
- Object-fit utilizado


### 1.3 Identificar Componentes Reutilizables
Lista todos los patrones repetidos:

#### Componentes UI Básicos
- **Button:** Variante primaria (dorada/accent), outline, con hover effects
- **Link:** Con underline animation
- **Input/Textarea:** Estilo minimalista con bordes sutiles
- **Logo:** "ART GALLERY" con tipografía específica

#### Componentes de Contenido
- **ArtworkCard:** Imagen + título + artista + año (con hover zoom + overlay)
- **EventCard:** Fecha destacada + título + descripción + horario + botón "GET TICKETS"
- **BlogCard:** Imagen + título + fecha + excerpt + "READ MORE"
- **TeamMemberCard:** Foto + nombre + cargo
- **StatCard:** Número grande + título + descripción
- **TestimonialCard:** Quote + nombre del cliente

#### Componentes de Layout
- **Header/Navbar:** Logo + menú hamburguesa + navegación sticky
- **Hero:** Título grande centrado con espaciado tipográfico
- **Section:** Container con padding vertical generoso
- **Footer:** Fondo oscuro + navegación + "LET'S TALK" CTA + legal links
- **Breadcrumb:** "HOME | SECTION NAME"

#### Componentes Interactivos
- **MobileMenu:** Menú desplegable full-screen
- **CategoryFilter:** Botones de filtro para galería (All Artworks, categorías de arte)
- **Lightbox/Modal:** Visualización de imágenes en tamaño completo
- **LoadingAnimation:** Animación inicial del sitio
- **ScrollReveal:** Componente para animaciones al hacer scroll

### 1.4 Priorización con MoSCoW

**Must Have (Crítico para similitud):**
- Paleta de colores oscuros con acentos dorados exactos
- Tipografía elegante con espaciado característico del título principal
- Grid de galería responsive con aspect ratios variados
- Hero con "MUSEUM OF MODERN ART" centrado
- Navegación minimalista con hamburger menu
- Footer oscuro con "LET'S TALK"
- Hover effects en imágenes (zoom + overlay)
- Estadísticas destacadas con números grandes
- Tarjetas de eventos con fecha prominente

**Should Have (Importante pero no crítico):**
- Lightbox funcional para galería
- Animaciones de scroll (fade-in)
- Filtrado por categorías en galería
- Loading animation inicial
- Smooth scroll entre secciones
- Parallax sutil en hero

**Could Have (Nice to have):**
- Transiciones de página complejas
- Animaciones avanzadas de hover
- Easter eggs en interacciones
- Micro-animaciones en iconos

**Won't Have (Fuera de scope):**
- Sistema de tickets real
- Backend para blog/eventos
- Sistema de autenticación
- E-commerce para venta de arte


## FASE 2: CONFIGURACIÓN DEL PROYECTO (10% del tiempo)

### 2.1 Setup Inicial
```bash
# Crear proyecto Next.js con TypeScript
npx create-next-app@latest decord-clone --typescript --app --no-tailwind --no-src-dir

cd decord-clone
```

**IMPORTANTE:** Seguir la estructura oficial de Next.js 16 App Router:
- `app/` - Solo para rutas y layouts
- `components/` - En la raíz del proyecto para componentes reutilizables
- `styles/` - En la raíz del proyecto para estilos globales
- `lib/` - En la raíz del proyecto para utilidades
- `data/` - En la raíz del proyecto para datos mock

Ver [ESTRUCTURA_PROYECTO.md](./ESTRUCTURA_PROYECTO.md) para más detalles.

### 2.2 Estructura de Carpetas (Next.js 16 App Router - Oficial)
```
📁 proyecto-raiz/
├── 📁 app/                         # App Router - Solo rutas y layouts
│   ├── layout.tsx                  # Root layout (obligatorio)
│   ├── page.tsx                    # Home page
│   ├── loading.tsx                 # Loading UI
│   ├── not-found.tsx               # 404 page
│   ├── error.tsx                   # Error boundary
│   ├── 📁 about/
│   │   └── page.tsx
│   ├── 📁 gallery/
│   │   └── page.tsx
│   └── 📁 contact/
│       └── page.tsx
├── 📁 components/                  # Componentes reutilizables (raíz)
│   ├── 📁 layout/
│   │   ├── 📁 Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── 📁 Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── 📁 MobileMenu/
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MobileMenu.module.css
│   │   └── 📁 Breadcrumb/
│   │       ├── Breadcrumb.tsx
│   │       └── Breadcrumb.module.css
│   ├── 📁 sections/
│   │   ├── 📁 Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── 📁 About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── 📁 Stats/
│   │   │   ├── Stats.tsx
│   │   │   └── Stats.module.css
│   │   ├── 📁 GallerySection/
│   │   │   ├── GallerySection.tsx
│   │   │   └── GallerySection.module.css
│   │   ├── 📁 Events/
│   │   │   ├── EventsSection.tsx
│   │   │   └── EventsSection.module.css
│   │   ├── 📁 Team/
│   │   │   ├── TeamSection.tsx
│   │   │   └── TeamSection.module.css
│   │   ├── 📁 Testimonials/
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── TestimonialsSection.module.css
│   │   └── 📁 Blog/
│   │       ├── BlogSection.tsx
│   │       └── BlogSection.module.css
│   ├── 📁 ui/
│   │   ├── 📁 Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── 📁 ArtworkCard/
│   │   │   ├── ArtworkCard.tsx
│   │   │   └── ArtworkCard.module.css
│   │   ├── 📁 EventCard/
│   │   │   ├── EventCard.tsx
│   │   │   └── EventCard.module.css
│   │   ├── 📁 BlogCard/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogCard.module.css
│   │   ├── 📁 TeamMemberCard/
│   │   │   ├── TeamMemberCard.tsx
│   │   │   └── TeamMemberCard.module.css
│   │   ├── 📁 StatCard/
│   │   │   ├── StatCard.tsx
│   │   │   └── StatCard.module.css
│   │   ├── 📁 CategoryFilter/
│   │   │   ├── CategoryFilter.tsx
│   │   │   └── CategoryFilter.module.css
│   │   ├── 📁 Lightbox/
│   │   │   ├── Lightbox.tsx
│   │   │   └── Lightbox.module.css
│   │   └── 📁 LoadingAnimation/
│   │       ├── LoadingAnimation.tsx
│   │       └── LoadingAnimation.module.css
│   └── 📁 animations/
│       ├── 📁 ScrollReveal/
│       │   ├── ScrollReveal.tsx
│       │   └── ScrollReveal.module.css
│       └── 📁 FadeIn/
│           ├── FadeIn.tsx
│           └── FadeIn.module.css
├── 📁 styles/                      # Estilos globales (raíz)
│   ├── globals.css
│   ├── variables.css
│   └── mixins.css
├── 📁 lib/                         # Utilidades y helpers (raíz)
│   ├── utils.ts
│   └── constants.ts
├── 📁 data/                        # Datos mock/estáticos (raíz)
│   ├── artworks.ts
│   ├── events.ts
│   ├── team.ts
│   └── blog.ts
├── 📁 public/                      # Assets estáticos (raíz)
│   ├── 📁 images/
│   │   ├── 📁 artworks/
│   │   │   ├── power-of-atom.webp
│   │   │   ├── cubes.webp
│   │   │   ├── stairs.webp
│   │   │   └── ...
│   │   ├── 📁 hero/
│   │   │   └── hero-bg.webp
│   │   ├── 📁 team/
│   │   │   ├── devon-lane.webp
│   │   │   └── ...
│   │   ├── 📁 blog/
│   │   │   └── ...
│   │   └── 📁 icons/
│   │       └── logo.svg
│   └── 📁 fonts/
│       └── ...
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

### Estructura Explicada (Según Documentación Oficial)

#### 📁 `app/` - App Router (Solo rutas)
- **Propósito:** Define la estructura de rutas de la aplicación
- **Contenido:** Solo archivos de rutas (`page.tsx`), layouts (`layout.tsx`), loading, error, etc.
- **NO contener:** Componentes reutilizables, utilidades, o estilos compartidos
- **Colocación:** Puedes colocar componentes dentro de carpetas de rutas si son específicos de esa ruta

```typescript
// ✅ CORRECTO - app/page.tsx
import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}
```

```typescript
// ❌ INCORRECTO - No poner componentes compartidos en app/
// app/components/Button.tsx <- NO HACER ESTO
```

#### 📁 `components/` - Componentes Reutilizables (Raíz del Proyecto)
- **Propósito:** Todos los componentes React reutilizables
- **Ubicación:** Raíz del proyecto (al mismo nivel que `app/`)
- **Organización:** Por tipo (layout, sections, ui, animations)
- **Con CSS Modules:** Cada componente con su `.module.css` correspondiente

```typescript
// ✅ CORRECTO - components/ui/Button/Button.tsx
'use client'
import styles from './Button.module.css'

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>
}
```

#### 📁 `styles/` - Estilos Globales (Raíz del Proyecto)
- **Propósito:** CSS global, variables, mixins
- **Ubicación:** Raíz del proyecto
- **Archivos:** `globals.css`, `variables.css`, `mixins.css`
- **Importación:** Se importan en `app/layout.tsx`

```typescript
// app/layout.tsx
import '@/styles/globals.css'
import '@/styles/variables.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
```

#### 📁 `lib/` - Utilidades y Helpers (Raíz del Proyecto)
- **Propósito:** Funciones utilitarias, constantes, helpers
- **Ubicación:** Raíz del proyecto
- **Contenido:** Lógica reutilizable sin UI

#### 📁 `data/` - Datos Mock/Estáticos (Raíz del Proyecto)
- **Propósito:** Datos de ejemplo, configuraciones
- **Ubicación:** Raíz del proyecto
- **Uso:** Simular APIs, contenido estático

#### 📁 `public/` - Assets Estáticos (Raíz del Proyecto)
- **Propósito:** Imágenes, fuentes, archivos estáticos
- **Ubicación:** Raíz del proyecto
- **Acceso:** Directamente desde `/` en la aplicación

### Configuración de Path Aliases
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
      "@/lib/*": ["lib/*"],
      "@/data/*": ["data/*"],
      "@/public/*": ["public/*"]
    }
  }
}
```

### Importaciones Correctas
```typescript
// ✅ Importar componentes desde la raíz
import Header from '@/components/layout/Header/Header'
import Hero from '@/components/sections/Hero/Hero'
import Button from '@/components/ui/Button/Button'

// ✅ Importar estilos globales solo en layout.tsx
import '@/styles/globals.css'

// ✅ Importar utilidades
import { formatDate } from '@/lib/utils'

// ✅ Importar datos
import { artworks } from '@/data/artworks'
```

### 2.3 Configuración de CSS Variables
```css
/* app/styles/variables.css */
:root {
  /* Colors - Paleta DECORD (Art Gallery) */
  --color-primary: #0a0a0a;           /* Negro profundo para fondos */
  --color-secondary: #1a1a1a;         /* Gris muy oscuro */
  --color-accent: #d4af37;            /* Dorado elegante */
  --color-accent-light: #e5c965;      /* Dorado claro hover */
  --color-text: #333333;              /* Texto principal */
  --color-text-light: #666666;        /* Texto secundario */
  --color-text-dark: #0a0a0a;         /* Texto en fondos claros */
  --color-background: #ffffff;        /* Fondo blanco */
  --color-background-light: #f8f8f8;  /* Gris muy claro */
  --color-border: #e5e5e5;            /* Bordes sutiles */
  --color-overlay: rgba(0, 0, 0, 0.7); /* Overlay para imágenes */

  /* Typography - Elegante para galería de arte */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-secondary: 'Playfair Display', Georgia, serif;
  --font-accent: 'Cormorant Garamond', Georgia, serif; /* Para títulos grandes */
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 2rem;      /* 32px */
  --font-size-4xl: 2.5rem;    /* 40px */
  --font-size-5xl: 3.5rem;    /* 56px */
  --font-size-6xl: 4.5rem;    /* 72px - Para "MUSEUM OF MODERN ART" */

  /* Letter spacing - Importante para el look elegante */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
  --letter-spacing-wider: 0.1em;
  --letter-spacing-widest: 0.2em;     /* Para título principal */

  /* Spacing */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
  --spacing-4xl: 6rem;     /* 96px */
  --spacing-5xl: 8rem;     /* 128px */

  /* Breakpoints (para usar en media queries) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
  --transition-slowest: 800ms ease;

  /* Shadows - Sutiles para estética minimalista */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.15);

  /* Border Radius */
  --radius-sm: 0.125rem;    /* 2px - Muy sutil */
  --radius-md: 0.25rem;     /* 4px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 1rem;        /* 16px */

  /* Z-index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-lightbox: 1060;
  --z-tooltip: 1070;

  /* Grid - Para galería */
  --gallery-gap: 1.5rem;
  --gallery-columns-mobile: 1;
  --gallery-columns-tablet: 2;
  --gallery-columns-desktop: 3;
}
```

### 2.4 Global Styles con BEM Reset
```css
/* app/styles/globals.css */
@import './variables.css';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Container utilities */
.container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}

/* Section spacing */
.section {
  padding: var(--spacing-3xl) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--spacing-4xl) 0;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 7rem 0;
  }
}

/* Typography utilities */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-secondary);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-base);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}
```

### 2.5 Mixins CSS (usando @layer)
```css
/* app/styles/mixins.css */

/* Flexbox mixins */
@layer utilities {
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Grid helpers */
  .grid-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }

  /* Glassmorphism effect */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: var(--shadow-lg);
  }

  /* Text truncate */
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Aspect ratio boxes */
  .aspect-16-9 {
    aspect-ratio: 16 / 9;
  }

  .aspect-4-3 {
    aspect-ratio: 4 / 3;
  }

  .aspect-square {
    aspect-ratio: 1 / 1;
  }
}
```


## FASE 3: IMPLEMENTACIÓN ITERATIVA (50% del tiempo)

### 3.1 Metodología de Desarrollo
**IMPORTANTE:** Desarrollar sección por sección, NO todo de una vez.

**Por cada sección:**

#### 1. Crear componente base con CSS Module
```tsx
// app/components/Hero/Hero.tsx
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        {/* Contenido */}
      </div>
    </section>
  )
}
```

```css
/* app/components/Hero/Hero.module.css */
.hero {
  padding: var(--spacing-4xl) 0;
  position: relative;
}

.hero__container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .hero {
    padding: 7rem 0;
  }
  
  .hero__container {
    padding: 0 var(--spacing-lg);
  }
}
```

#### 2. Implementar estructura HTML semántica con BEM
```tsx
// Ejemplo de estructura BEM
<section className={styles.services}>
  <div className={styles.services__container}>
    <h2 className={styles.services__title}>Nuestros Servicios</h2>
    <div className={styles.services__grid}>
      <div className={styles['services__card']}>
        <div className={styles['services__card-icon']}>
          {/* Icono */}
        </div>
        <h3 className={styles['services__card-title']}>Título</h3>
        <p className={styles['services__card-description']}>Descripción</p>
      </div>
    </div>
  </div>
</section>
```

```css
/* Estilos BEM correspondientes */
.services {
  padding: var(--spacing-4xl) 0;
}

.services__container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.services__title {
  font-size: var(--font-size-3xl);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

.services__card {
  background: var(--color-background);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.services__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.services__card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: var(--spacing-md);
}

.services__card-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.services__card-description {
  color: var(--color-text-light);
  line-height: 1.6;
}

@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### 3. Agregar contenido (textos e imágenes)
```tsx
import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__image}>
          <Image 
            src="/images/about/interior.webp"
            alt="Interior del hotel de lujo"
            width={600}
            height={400}
            className={styles['about__image-img']}
          />
        </div>
        <div className={styles.about__content}>
          <h2 className={styles.about__title}>Sobre Nosotros</h2>
          <p className={styles.about__text}>
            Texto descriptivo aquí...
          </p>
        </div>
      </div>
    </section>
  )
}
```

#### 4. Refinar estilos visuales
```css
/* Colores exactos extraídos del sitio original */
.about {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 4rem 0;
}

.about__title {
  font-family: var(--font-secondary);
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.about__text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a4a4a;
  text-align: justify;
}

/* Borders y shadows exactos */
.about__image-img {
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}
```

#### 5. Agregar interactividad
```css
/* Hover effects */
.about__card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.about__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.about__card:hover::before {
  left: 100%;
}

.about__card:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}
```

#### 6. Optimizar responsive
```css
/* Mobile-first approach */
.about__container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding: 0 var(--spacing-md);
}

.about__image {
  width: 100%;
}

.about__content {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .about__container {
    flex-direction: row;
    align-items: center;
    padding: 0 var(--spacing-lg);
  }

  .about__image,
  .about__content {
    width: 50%;
  }

  .about__title {
    font-size: 3rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .about__container {
    max-width: 1320px;
    margin: 0 auto;
    gap: var(--spacing-3xl);
  }

  .about__title {
    font-size: 3.5rem;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .about__container {
    gap: var(--spacing-4xl);
  }
}
```

#### 7. Verificar en navegador
- Comparar lado a lado con original
- Ajustar hasta 95%+ similitud

### 3.2 Componentes Críticos Comunes

#### ArtworkCard Component (Crítico para Galería)
```tsx
// app/components/ui/ArtworkCard/ArtworkCard.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ArtworkCard.module.css'

interface ArtworkCardProps {
  image: string
  title: string
  artist: string
  year: number
  category: string
  onImageClick?: () => void
}

export default function ArtworkCard({ 
  image, 
  title, 
  artist, 
  year,
  category,
  onImageClick 
}: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <article 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onImageClick}
    >
      <div className={styles.card__image}>
        <Image 
          src={image} 
          alt={`${title} by ${artist}`}
          fill
          className={styles['card__image-img']}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`${styles.card__overlay} ${isHovered ? styles['card__overlay--visible'] : ''}`}>
          <div className={styles.card__info}>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__artist}>{artist}, {year}</p>
          </div>
          <button className={styles.card__zoom} aria-label="Ver imagen completa">
            +
          </button>
        </div>
      </div>
    </article>
  )
}
```

```css
/* app/components/ui/ArtworkCard/ArtworkCard.module.css */
.card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--color-background);
}

.card__image {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4; /* Ajustar según imagen */
  overflow: hidden;
}

.card__image-img {
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card:hover .card__image-img {
  transform: scale(1.1);
}

.card__overlay {
  position: absolute;
  inset: 0;
  background: var(--color-overlay);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--spacing-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.card__overlay--visible {
  opacity: 1;
}

.card__info {
  color: white;
}

.card__title {
  font-family: var(--font-secondary);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.card__artist {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
}

.card__zoom {
  align-self: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-accent);
  color: white;
  font-size: var(--font-size-2xl);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.card__zoom:hover {
  background: var(--color-accent-light);
  transform: scale(1.1);
}
```

#### EventCard Component
```tsx
// app/components/ui/EventCard/EventCard.tsx
import Link from 'next/link'
import styles from './EventCard.module.css'

interface EventCardProps {
  date: string // formato: "21/02"
  title: string
  dateRange: string // "February 21 - February 26"
  time: string // "10 AM-8 PM"
  description: string
  slug: string
}

export default function EventCard({
  date,
  title,
  dateRange,
  time,
  description,
  slug
}: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.card__date}>
        <span className={styles.card__day}>{date.split('/')[0]}</span>
        <span className={styles.card__month}>/{date.split('/')[1]}</span>
      </div>
      <div className={styles.card__content}>
        <Link href={`/events/${slug}`} className={styles.card__title}>
          {title}
        </Link>
        <div className={styles.card__meta}>
          <p className={styles.card__daterange}>{dateRange}, {time}</p>
          <p className={styles.card__label}>Reception</p>
        </div>
        <p className={styles.card__description}>{description}</p>
        <button className={styles.card__button}>OBTENER ENTRADAS</button>
      </div>
    </article>
  )
}
```

```css
/* app/components/ui/EventCard/EventCard.module.css */
.card {
  display: flex;
  gap: var(--spacing-xl);
  padding: var(--spacing-2xl) 0;
  border-bottom: 1px solid var(--color-border);
}

.card__date {
  font-family: var(--font-secondary);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-dark);
  flex-shrink: 0;
  line-height: 1;
}

.card__day {
  font-size: var(--font-size-4xl);
}

.card__month {
  color: var(--color-text-light);
}

.card__content {
  flex: 1;
}

.card__title {
  font-family: var(--font-secondary);
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-text-dark);
  text-decoration: none;
  display: inline-block;
  margin-bottom: var(--spacing-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  transition: color var(--transition-base);
}

.card__title:hover {
  color: var(--color-accent);
}

.card__meta {
  margin-bottom: var(--spacing-md);
}

.card__daterange {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.card__label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-dark);
}

.card__description {
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.card__button {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-xl);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-wider);
  cursor: pointer;
  transition: all var(--transition-base);
}

.card__button:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    gap: var(--spacing-md);
  }
  
  .card__date {
    font-size: var(--font-size-2xl);
  }
}
```

#### StatCard Component (Para estadísticas destacadas)
```tsx
// app/components/ui/StatCard/StatCard.tsx
import styles from './StatCard.module.css'

interface StatCardProps {
  number: string
  title: string
  description: string
}

export default function StatCard({ number, title, description }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__number}>{number}</div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
    </div>
  )
}
```

```css
/* app/components/ui/StatCard/StatCard.module.css */
.card {
  text-align: center;
  padding: var(--spacing-xl);
}

.card__number {
  font-family: var(--font-secondary);
  font-size: var(--font-size-6xl);
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: var(--spacing-md);
}

.card__title {
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}

.card__description {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text-light);
  max-width: 300px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .card__number {
    font-size: var(--font-size-5xl);
  }
}
```
```tsx
// app/components/Button/Button.tsx
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  ].filter(Boolean).join(' ')

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
```

```css
/* app/components/Button/Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
  border: 2px solid transparent;
  text-align: center;
}

/* Variants */
.button--primary {
  background: var(--color-accent);
  color: white;
}

.button--primary:hover {
  background: #c29d2e;
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.button--secondary {
  background: var(--color-primary);
  color: white;
}

.button--secondary:hover {
  background: #2a2a2a;
  transform: translateY(-2px);
}

.button--outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.button--outline:hover {
  background: var(--color-primary);
  color: white;
}

/* Sizes */
.button--sm {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
}

.button--md {
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-base);
}

.button--lg {
  padding: 1rem 2rem;
  font-size: var(--font-size-lg);
}
```

#### Card Component
```tsx
// app/components/Card/Card.tsx
import styles from './Card.module.css'
import Image from 'next/image'

interface CardProps {
  image: string
  title: string
  description: string
  link?: string
}

export default function Card({ image, title, description, link }: CardProps) {
  const CardWrapper = link ? 'a' : 'div'
  
  return (
    <CardWrapper 
      href={link} 
      className={styles.card}
    >
      <div className={styles.card__image}>
        <Image 
          src={image} 
          alt={title}
          fill
          className={styles['card__image-img']}
        />
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
      </div>
    </CardWrapper>
  )
}
```

```css
/* app/components/Card/Card.module.css */
.card {
  display: block;
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.card__image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.card__image-img {
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.card:hover .card__image-img {
  transform: scale(1.1);
}

.card__content {
  padding: var(--spacing-lg);
}

.card__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text);
}

.card__description {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  line-height: 1.6;
}
```

#### Navbar Component
```tsx
// app/components/Navbar/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''}`}>
      <div className={styles.navbar__container}>
        <Link href="/" className={styles.navbar__logo}>
          DECORD
        </Link>

        <button 
          className={styles.navbar__toggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.navbar__hamburger}></span>
        </button>

        <ul className={`${styles.navbar__menu} ${isMobileMenuOpen ? styles['navbar__menu--open'] : ''}`}>
          <li className={styles.navbar__item}>
            <Link href="/" className={styles.navbar__link}>Inicio</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/about" className={styles.navbar__link}>Nosotros</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/gallery" className={styles.navbar__link}>Galería</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link href="/contact" className={styles.navbar__link}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
```

```css
/* app/components/Navbar/Navbar.module.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
  padding: var(--spacing-md) 0;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-sm) 0;
}

.navbar__container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-family: var(--font-secondary);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.navbar__logo:hover {
  color: var(--color-accent);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.navbar__hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--transition-base);
}

.navbar__menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  list-style: none;
}

.navbar__item {
  /* No extra styles needed */
}

.navbar__link {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text);
  transition: color var(--transition-base);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.navbar__link:hover {
  color: var(--color-accent);
}

.navbar__link:hover::after {
  width: 100%;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: white;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    transform: translateX(-100%);
    transition: transform var(--transition-base);
  }

  .navbar__menu--open {
    transform: translateX(0);
  }

  .navbar__link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm) 0;
  }
}
```



## FASE 4: TESTING Y REFINAMIENTO (10% del tiempo)

### 4.1 Testing Responsive
```bash
# Abrir en DevTools y probar:
- iPhone SE (375px)
- iPad (768px)
- MacBook Pro (1440px)
- Full HD (1920px)
```

**Checklist por breakpoint:**
- [ ] Todo el contenido visible sin scroll horizontal
- [ ] Imágenes mantienen aspect ratio
- [ ] Texto legible (mínimo 16px en body)
- [ ] Botones táctiles (mínimo 44x44px)
- [ ] Spacing proporcional
- [ ] Navigation funcional

### 4.2 Comparación Visual Lado a Lado
1. Abrir sitio original en una ventana
2. Abrir clone en otra ventana
3. Alinear verticalmente
4. Comparar sección por sección:
   - ✅ Colores exactos
   - ✅ Spacing similar (±5px aceptable)
   - ✅ Tipografía comparable
   - ✅ Hover effects equivalentes
   - ✅ Layout idéntico

### 4.3 Performance Audit
```bash
# Lighthouse en DevTools
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90
```

**Optimizaciones comunes:**
- Usar `next/image` para todas las imágenes
- Lazy loading en secciones below-the-fold
- Minimizar JavaScript bundle
- Preload fuentes críticas

### 4.4 Console Verification
```bash
# Objetivo: 0 errores, 0 warnings críticos
- No 404s (imágenes, fuentes)
- No TypeScript errors
- No ESLint errors críticos
- LCP dentro de 2.5s
```

## 📋 CHECKLIST DE CALIDAD FINAL

### Visual (Objetivo: 95%+)
- [ ] Colors match exactamente (DevTools Color Picker)
- [ ] Typography sizes idénticos por breakpoint
- [ ] Spacing consistente (padding, margins, gaps)
- [ ] Borders y shadows replicados
- [ ] Hover effects equivalentes
- [ ] Animations smooth (300-500ms durations)
- [ ] Images aspect ratios correctos

### Funcional
- [ ] Todos los links funcionan
- [ ] Forms validados correctamente
- [ ] Navigation smooth scroll
- [ ] Mobile menu toggle funciona
- [ ] Carousels swipeable en móvil
- [ ] Modals abren/cierran correctamente

### Responsive
- [ ] Mobile (320px-640px): Layout apilado, touch-friendly
- [ ] Tablet (768px-1024px): Layout intermedio, 2-3 columnas
- [ ] Desktop (1280px+): Layout completo, max-width containers

### Performance
- [ ] Lighthouse Performance >90
- [ ] LCP <2.5s
- [ ] No layout shifts (CLS <0.1)
- [ ] Images optimizadas (WebP, Next.js Image)

### Código
- [ ] TypeScript sin errores
- [ ] ESLint sin warnings críticos
- [ ] Componentes reutilizables extraídos
- [ ] Naming conventions consistentes
- [ ] Comments en código complejo

## 🚨 ERRORES COMUNES Y SOLUCIONES

### ERROR 1: "Navbar links no son visibles"
**Causa:** Color de texto igual al background
**Solución:**
```css
/* MAL */
.navbar {
  background: rgb(45, 57, 75);
}
.navbar__link {
  color: white; /* Blanco sobre oscuro OK */
}

/* BIEN - Si navbar es claro */
.navbar {
  background: rgba(255, 255, 255, 0.95);
}
.navbar__link {
  color: #333; /* Oscuro sobre claro */
}
```

### ERROR 2: "Imágenes distorsionadas"
**Causa:** No especificar aspect-ratio o object-fit
**Solución:**
```css
/* MAL */
.image-container {
  width: 100%;
  height: 300px;
}

/* BIEN */
.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}

.image-container img {
  object-fit: cover; /* o object-contain según necesidad */
  width: 100%;
  height: 100%;
}
```

### ERROR 3: "Fechas inválidas en date inputs"
**Causa:** Formato de fecha incorrecto
**Solución:**
```tsx
// MAL
<input type="date" defaultValue="2024-01-30" />  // Si hoy es 2025-11-04

// BIEN
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowStr = tomorrow.toISOString().split('T')[0]

<input type="date" defaultValue={tomorrowStr} min={tomorrowStr} />
```

### ERROR 4: "Glassmorphism no se ve bien"
**Causa:** Valores de blur y opacity incorrectos
**Solución:**
```css
/* Glassmorphism efectivo */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);  /* 10-20% opacity */
  backdrop-filter: blur(10px);            /* 10-20px blur */
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### ERROR 5: "Hover effects bruscos"
**Causa:** No especificar transition
**Solución:**
```css
/* MAL */
.button:hover {
  background: #f5c518;
}

/* BIEN */
.button {
  transition: all 0.3s ease;
}

.button:hover {
  background: #f5c518;
}

/* MEJOR (aplicar globalmente) */
* {
  transition: color 0.3s ease, background 0.3s ease;
}
```

### ERROR 6: "Grid no responsive"
**Causa:** No usar media queries correctamente
**Solución:**
```css
/* MAL */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* BIEN - Mobile first */
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 columna */
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columnas */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columnas */
  }
}
```

### ERROR 7: "Scroll animations no se activan"
**Causa:** Intersection Observer no configurado correctamente
**Solución:**
```tsx
'use client'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 } // Se activa cuando 10% es visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={isVisible ? styles.visible : styles.hidden}
    >
      {/* Contenido */}
    </div>
  )
}
```

```css
.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### ERROR 8: "Container muy estrecho/amplio"
**Causa:** Max-width incorrecto
**Solución:**
```css
/* Analizar el original y usar el max-width exacto */
.container {
  max-width: 1320px; /* Común: 1280px o 1320px */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
}
```

### ERROR 9: "Padding inconsistente entre secciones"
**Causa:** Cada componente usa valores diferentes
**Solución:**
```css
/* Estandarizar en globals.css */
.section {
  padding: 4rem 0;
}

@media (min-width: 768px) {
  .section {
    padding: 5rem 0;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 7rem 0;
  }
}
```

O crear componente Section wrapper:
```tsx
// app/components/Section/Section.tsx
import styles from './Section.module.css'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  )
}
```

### ERROR 10: "Build errors con import paths"
**Causa:** Imports relativos vs alias
**Solución:**
```json
// tsconfig.json - Verificar paths
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

```tsx
// Usar alias consistentemente
import Button from '@/components/Button/Button'  // ✅
import Button from '../Button/Button'            // ❌
```

## 📊 MÉTRICAS DE ÉXITO

### Similitud Visual
- **90-94%:** Muy bueno - Pequeños detalles difieren
- **95-97%:** Excelente - Casi indistinguible
- **98-100%:** Perfecto - Pixel-perfect (raramente necesario)

### Desarrollo Time
- **Análisis:** 3-4 horas (30%)
- **Setup:** 1 hora (10%)
- **Implementación:** 5-6 horas (50%)
- **Testing:** 1 hora (10%)
- **Total:** 10-12 horas para sitio complejo

### Documentación
Generar estos documentos durante el desarrollo:
1. **COMPARISON_ANALYSIS.md** - Análisis exhaustivo original vs clone
2. **IMPLEMENTATION_LOG.md** - Decisiones de arquitectura
3. **FIXES_APPLIED.md** - Errores encontrados y soluciones
4. **FINAL_SUMMARY.md** - Resumen ejecutivo con screenshots

## 🎯 DECISIONES DE ARQUITECTURA CRÍTICAS

### 1. Estructura de Componentes y CSS Modules
**Organización recomendada:**
```
app/components/
├── Button/
│   ├── Button.tsx
│   └── Button.module.css
├── Card/
│   ├── Card.tsx
│   └── Card.module.css
└── Navbar/
    ├── Navbar.tsx
    └── Navbar.module.css
```

**Convenciones de nomenclatura BEM:**
- **Bloque:** `.button`, `.card`, `.navbar`
- **Elemento:** `.button__icon`, `.card__title`, `.navbar__link`
- **Modificador:** `.button--primary`, `.card--featured`, `.navbar--scrolled`

### 2. CSS Variables vs Hard-coded Values
**Usa CSS Variables para:**
- Colores del sistema
- Spacing consistente
- Tipografía base
- Breakpoints
- Transitions y animations

**Usa valores hard-coded para:**
- Valores únicos específicos de un componente
- Ajustes finos de posicionamiento
- Casos edge muy específicos

### 3. Server vs Client Components
```tsx
// Server Component (default) - Sin interactividad
export default function AboutSection() {
  return <section>Static content</section>
}

// Client Component - Con state, events, hooks
"use client"
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return <nav onClick={() => setIsOpen(!isOpen)}>...</nav>
}
```

### 4. Image Optimization Strategy
```tsx
// Hero/Above-fold images
<Image src="..." priority />  // Preload

// Below-fold images
<Image src="..." loading="lazy" />  // Lazy load

// Decorative images
<Image src="..." alt="" />  // Empty alt for decorative

// Content images
<Image src="..." alt="Descriptive text" />
```

### 5. Font Loading Best Practice
```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',  // FOIT prevention
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

```css
/* Usar las fuentes en CSS */
.heading {
  font-family: var(--font-playfair);
}

.body-text {
  font-family: var(--font-inter);
}
```

## 🔄 WORKFLOW ITERATIVO RECOMENDADO

### Iteración 1: Foundation (Día 1)
1. Setup proyecto con Next.js y TypeScript
2. Configurar CSS Modules y variables (paleta DECORD específica)
3. Implementar Header minimalista ("ART GALLERY") + menú hamburguesa
4. Implementar Hero con "MUSEUM OF MODERN ART" (tipografía espaciada crítica)
5. Sistema de colores oscuros con acento dorado
6. Primera comparación visual

**Objetivo:** 60-70% similitud

**Componentes creados:**
- Header/Navbar con logo minimalista
- Hero con título grande espaciado
- Loading animation
- Variables CSS con paleta exacta

### Iteración 2: Content Sections (Día 2)
1. About section con historia de la galería
2. Stats cards con números grandes (15 años, 34 artistas, etc.)
3. Gallery preview con grid de obras (ArtworkCard con hover zoom)
4. Events section con EventCard (fecha prominente)
5. Testimonials section
6. Blog preview con BlogCard
7. Footer oscuro con "LET'S TALK"
8. Responsive base implementado
9. Segunda comparación visual

**Objetivo:** 80-85% similitud

**Componentes creados:**
- ArtworkCard con overlay y zoom
- EventCard con diseño de fecha
- StatCard para estadísticas
- BlogCard
- Footer con CTA grande

### Iteración 3: Páginas Internas & Interactividad (Día 3)
1. Página About completa con Team section
2. Página Gallery completa con:
   - CategoryFilter funcional
   - Grid masonry responsive
   - Lightbox para visualización
3. Página Contact con formulario
4. Breadcrumbs en páginas internas
5. Scroll animations (fade-in al entrar en viewport)
6. Hover effects refinados (zoom suave en imágenes)
7. Tercera comparación visual

**Objetivo:** 90-95% similitud

**Componentes creados:**
- Lightbox/Modal para galería
- CategoryFilter con estados activos
- TeamMemberCard
- ContactForm
- ScrollReveal wrapper
- Breadcrumb component

### Iteración 4: Polish, Testing & Optimization (Día 4)
1. Ajustes finos de tipografía (letter-spacing crítico)
2. Perfeccionar animaciones de scroll
3. Optimizar imágenes (WebP, lazy loading)
4. Responsive testing exhaustivo (especialmente grid de galería)
5. Performance audit con Lighthouse
6. Accessibility improvements (alt texts, ARIA labels)
7. Testing de lightbox (teclado ESC, click fuera)
8. Verificar filtrado de categorías funciona correctamente
9. Final comparison + documentation
10. Ajuste de colores exactos si hay diferencias

**Objetivo:** 95-97% similitud + production ready

**Tareas de optimización:**
- Verificar letter-spacing en título hero
- Ajustar aspect ratios de imágenes en grid
- Perfeccionar overlay opacity en hover
- Validar color dorado exacto
- Testing de menú mobile
- Smooth transitions entre páginas

## 💡 TIPS AVANZADOS

### 1. Extracción de Colores Exactos
```javascript
// En DevTools Console del sitio original
$$('*').forEach(el => {
  const bg = window.getComputedStyle(el).backgroundColor
  if (bg !== 'rgba(0, 0, 0, 0)') console.log(el.tagName, bg)
})
```

### 2. Comparación Visual Automatizada
```bash
# Instalar Percy para visual regression testing
npm install --save-dev @percy/cli @percy/puppeteer

# Capturar snapshots
npx percy snapshot http://localhost:3000
npx percy snapshot https://original-site.com

# Comparar automáticamente
npx percy compare
```

### 3. Debugging Responsive Issues
```css
/* Agregar temporalmente en globals.css */
* {
  outline: 1px solid red !important;
}

/* Ver breakpoints activos */
body::before {
  content: 'XS';
  position: fixed;
  top: 0;
  right: 0;
  background: red;
  color: white;
  padding: 0.5rem;
  z-index: 9999;
}

@media (min-width: 640px) {
  body::before { 
    content: 'SM'; 
    background: orange; 
  }
}

@media (min-width: 768px) {
  body::before { 
    content: 'MD'; 
    background: yellow; 
    color: black; 
  }
}

@media (min-width: 1024px) {
  body::before { 
    content: 'LG'; 
    background: green; 
  }
}

@media (min-width: 1280px) {
  body::before { 
    content: 'XL'; 
    background: blue; 
  }
}
```

### 4. Performance: Preload Critical Assets
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="/fonts/custom-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 5. Smooth Scroll con CSS
```css
/* globals.css */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Height of fixed navbar */
}
```

O con JavaScript para más control:
```tsx
// En el componente de navegación
<Link 
  href="#about"
  onClick={(e) => {
    e.preventDefault()
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }}
>
  Sobre Nosotros
</Link>
```

## 🎨 ESPECIFICACIONES VISUALES DECORD

### Paleta de Colores Exacta
Extraer con DevTools del sitio original:
- **Fondo principal:** `#ffffff` o `#fafafa`
- **Texto principal:** `#0a0a0a` o `#1a1a1a`
- **Texto secundario:** `#666666` o `#7a7a7a`
- **Acento dorado:** `#d4af37` o similar
- **Overlay imágenes:** `rgba(0, 0, 0, 0.7)` a `rgba(0, 0, 0, 0.8)`
- **Bordes:** `#e5e5e5` o `#d4d4d4`

### Tipografía Específica
```css
/* Verificar en sitio original y replicar */
--font-hero: 'Cormorant Garamond', Georgia, serif; /* Para "MUSEUM OF MODERN ART" */
--font-headings: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, sans-serif;

/* Letter spacing crítico */
.hero-title {
  letter-spacing: 0.2em; /* MUY espaciado */
  text-transform: uppercase;
}

.section-title {
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Animaciones Específicas
```css
/* Zoom en hover de imágenes de galería */
.artwork-image {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.artwork-card:hover .artwork-image {
  transform: scale(1.1);
}

/* Fade-in al hacer scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal {
  animation: fadeInUp 0.8s ease forwards;
}

/* Loading animation (spinner inicial) */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Layouts de Galería
```css
/* Masonry Grid - Variable aspect ratios */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  gap: var(--gallery-gap);
}

.gallery-item:nth-child(3n+1) {
  grid-row: span 2; /* Tall */
}

.gallery-item:nth-child(5n+2) {
  grid-column: span 2; /* Wide */
}

/* O usar CSS Grid auto-flow: dense para mejor distribución */
.gallery-grid--auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  gap: var(--gallery-gap);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
  }
  
  .gallery-item:nth-child(3n+1),
  .gallery-item:nth-child(5n+2) {
    grid-row: span 1;
    grid-column: span 1;
  }
}
```

### Footer "LET'S TALK" Específico
```css
.footer-cta {
  background: var(--color-primary); /* Negro profundo */
  color: white;
  padding: var(--spacing-5xl) 0;
  text-align: center;
}

.footer-cta__title {
  font-family: var(--font-accent);
  font-size: var(--font-size-5xl);
  font-weight: 400;
  letter-spacing: var(--letter-spacing-widest);
  margin-bottom: var(--spacing-2xl);
}

.footer-cta__image {
  max-width: 200px;
  margin: 0 auto;
  opacity: 0.3;
}
```

### Datos de Ejemplo para DECORD
```typescript
// app/data/artworks.ts
export const artworks = [
  {
    id: 1,
    title: 'The Power of Atom',
    artist: 'Frank Anderson',
    year: 2016,
    category: 'abstract',
    image: '/images/artworks/power-of-atom.webp',
    aspectRatio: '3/4' // Portrait
  },
  {
    id: 2,
    title: 'Cubes',
    artist: 'Emma Smith',
    year: 2018,
    category: 'hyperrealism',
    image: '/images/artworks/cubes.webp',
    aspectRatio: '4/3' // Landscape
  },
  // ... más obras
]

// app/data/events.ts
export const events = [
  {
    id: 1,
    date: '21/02',
    title: 'International Fine Art Exhibition',
    dateRange: 'February 21 - February 26',
    time: '10 AM-8 PM',
    description: 'The International Fine Art Exhibition serves as an opportunity for unique creatives from all around the world to demonstrate their talents.',
    slug: 'international-fine-art-exhibition'
  },
  // ... más eventos
]

// app/lib/constants.ts
export const CATEGORIES = [
  'anamorphosis',
  'photorealism',
  'surrealism',
  'hyperrealism',
  'abstract'
]

export const STATS = [
  { number: '15', title: 'Years of Experience', description: 'Our gallery was established in 2002 to display masterpieces from all over the world.' },
  { number: '34', title: 'Famous Artists', description: 'We have gathered the greatest artworks of 20th century.' },
  { number: '89', title: 'Successful Exhibitions', description: 'Amazing collections of modern and experimental art, abstract and portrait art are represented in our gallery.' },
  { number: '12', title: 'Current Exhibitions', description: 'We have a selection of thousands of artworks from some of the best names in contemporary fine art.' }
]
```

## 📝 TEMPLATE DE DOCUMENTACIÓN

### COMPARISON_ANALYSIS.md
```markdown
# Análisis Comparativo: Original vs Clone

## Resumen Ejecutivo
- URL Original: https://ld-wt73.template-help.com/tf/decord_v1/
- Fecha Análisis: [fecha]
- Similitud Objetivo: 95%

## Sección por Sección

### 1. Navbar
**Original:**
- Background: [color/opacity/blur]
- Height: [px]
- Logo: [descripción]
- Links: [estilos]
- Hover: [efectos]

**Clone:**
- [Descripción implementación]

**Diferencias:**
- [Lista diferencias críticas]

**Plan de Acción:**
- [ ] [Corrección 1]
- [ ] [Corrección 2]

### 2. Hero Section
[Mismo formato...]

### 3. About Section
[Mismo formato...]

[Repetir para cada sección...]
```

### IMPLEMENTATION_LOG.md
```markdown
# Log de Implementación

## [Fecha] - Sesión 1: Setup
- ✅ Proyecto inicializado con Next.js 16
- ✅ CSS Modules configurado
- ✅ Variables CSS definidas en variables.css
- ⚠️ Issue: [descripción] → Solucionado con [...]

## [Fecha] - Sesión 2: Navbar + Hero
- ✅ Navbar con sticky behavior y CSS Modules
- ✅ Hero con background image optimizado
- ❌ Glassmorphism no perfecto → Pendiente refinar valores de blur

## [Fecha] - Sesión 3: Secciones de Contenido
- ✅ About section implementada con BEM
- ✅ Services grid responsive
- ✅ Gallery con lazy loading

[Continuar por sesión...]
```

## 🎓 CONCLUSIÓN

Este prompt incorpora **10+ horas de experiencia real** clonando un sitio complejo, 
condensadas en una metodología repetible con CSS Modules y metodología BEM. 

Específicamente adaptado para **DECORD - Galería de Arte Moderno**, con énfasis en:

### Elementos Críticos para Similitud 95%+

1. **Tipografía espaciada:** El título "MUSEUM OF MODERN ART" con `letter-spacing: 0.2em` es CRÍTICO
2. **Paleta oscura elegante:** Negro profundo + dorado como acento, no desviarse
3. **Grid de galería:** Masonry layout con aspect ratios variables, debe verse fluido
4. **Hover effects sutiles:** Zoom suave (1.1x) con overlay oscuro en imágenes
5. **Minimalismo:** Mucho espacio en blanco, bordes sutiles, no recargar
6. **Fecha prominente:** En EventCard, el formato DD/MM debe destacar visualmente
7. **Footer oscuro:** "LET'S TALK" con fondo negro completo
8. **Navegación minimalista:** Logo pequeño "ART GALLERY", menú hamburguesa

### La Clave del Éxito

1. **Análisis exhaustivo inicial** (no saltear esta fase) - Especialmente tipografía y spacing
2. **Desarrollo iterativo** con comparaciones frecuentes - Cada sección verificada
3. **Documentación continua** para no perder contexto - Anotar valores exactos
4. **Testing en múltiples breakpoints** desde el inicio - Grid debe adaptarse perfecto
5. **Refinamiento obsesivo** de los últimos 5-10% de similitud - Letter-spacing y colores exactos
6. **Uso consistente de BEM** para CSS mantenible - Especialmente en componentes complejos
7. **CSS Variables** para valores reutilizables - Paleta de colores centralizada
8. **Lightbox funcional** - Parte esencial de la experiencia de galería
9. **Animaciones sutiles** - Fade-in y zoom, nunca distractoras

### Diferencias Críticas vs Otros Proyectos

**DECORD NO es:**
- ❌ Colorido o vibrante (es elegante y minimalista)
- ❌ Con muchos botones CTA (es discreto)
- ❌ Con animaciones llamativas (es sutil)
- ❌ E-commerce (es informativo/expositivo)

**DECORD ES:**
- ✅ Minimalista y sofisticado
- ✅ Tipografía con mucho spacing
- ✅ Fotografía como protagonista
- ✅ Experiencia de galería/museo
- ✅ Interacciones sutiles y elegantes

**Resultado esperado:** 95-97% de similitud visual en 10-12 horas para este sitio de galería de arte.

---

## 📎 RECURSOS ADICIONALES

### Documentación Técnica
- [Next.js 16 App Router Guide](https://nextjs.org/docs)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [BEM Methodology](https://getbem.com/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

### Herramientas de Testing
- [WebPageTest](https://www.webpagetest.org) - Performance testing
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated audits
- [Can I Use](https://caniuse.com) - Browser compatibility checker

### Inspiración y Referencias
- [Art Gallery Design Patterns](https://www.awwwards.com/websites/art-gallery/)
- [Museum Website Best Practices](https://www.smashingmagazine.com/category/design/)
- [Typography in Art Websites](https://typ.io/)

### Tipografías Recomendadas (si no se pueden extraer exactas)
- **Hero/Títulos grandes:** Cormorant Garamond, Cinzel, Bodoni Moda
- **Títulos secciones:** Playfair Display, Libre Baskerville
- **Cuerpo de texto:** Inter, Work Sans, IBM Plex Sans

```

---

**Version:** 2.0 - DECORD Specific
**Actualización:** CSS Modules + BEM + Art Gallery Focus (Nov 2025)  
**Sitio objetivo:** DECORD - Museum of Modern Art Gallery
**Basado en:** Experiencia real de clonación de sitios complejos  
**Mantenido por:** Análisis exhaustivo del sitio original  
**Licencia:** Open source - Usar libremente con atribución
