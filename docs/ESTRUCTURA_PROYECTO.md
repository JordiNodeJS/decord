# 📁 Estructura del Proyecto DECORD

## Resumen Ejecutivo

Este proyecto sigue la **estructura oficial de Next.js 16 con App Router** según la documentación de Vercel.

### Principio Fundamental

> **La carpeta `app/` es SOLO para rutas y layouts. Los componentes reutilizables van en la raíz del proyecto.**

---

## 🗂️ Ubicación de Archivos

### ✅ CORRECTO

```
📁 proyecto-raiz/
├── 📁 app/                    # ✅ Solo rutas
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       └── page.tsx
├── 📁 components/             # ✅ Todos los componentes aquí (raíz)
│   ├── layout/
│   ├── sections/
│   └── ui/
├── 📁 styles/                 # ✅ Estilos globales (raíz)
│   ├── globals.css
│   └── variables.css
├── 📁 lib/                    # ✅ Utilidades (raíz)
└── 📁 data/                   # ✅ Datos (raíz)
```

### ❌ INCORRECTO

```
📁 proyecto-raiz/
└── 📁 app/                    # ❌ NO poner todo dentro de app/
    ├── components/            # ❌ Mal ubicado
    ├── styles/                # ❌ Mal ubicado
    ├── lib/                   # ❌ Mal ubicado
    └── page.tsx
```

---

## 📋 Directorio Detallado

### `app/` - App Router

**Propósito:** Define rutas de la aplicación  
**Contenido:** Solo archivos especiales de Next.js

```
app/
├── layout.tsx              # Root layout (obligatorio)
├── page.tsx                # Ruta: /
├── loading.tsx             # Loading UI
├── error.tsx               # Error boundary
├── not-found.tsx           # 404 page
├── about/
│   └── page.tsx            # Ruta: /about
├── gallery/
│   └── page.tsx            # Ruta: /gallery
└── contact/
    └── page.tsx            # Ruta: /contact
```

**Archivos especiales:**

- `page.tsx` - Define una ruta
- `layout.tsx` - Layout compartido
- `loading.tsx` - UI de carga
- `error.tsx` - Manejo de errores
- `not-found.tsx` - Página 404
- `route.ts` - API endpoint

### `components/` - Componentes Reutilizables

**Ubicación:** Raíz del proyecto  
**Propósito:** Todos los componentes React

```
components/
├── layout/                 # Componentes de estructura
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   └── MobileMenu/
├── sections/              # Secciones de página
│   ├── Hero/
│   ├── About/
│   ├── GallerySection/
│   └── Events/
├── ui/                    # Componentes UI básicos
│   ├── Button/
│   ├── ArtworkCard/
│   ├── EventCard/
│   └── Lightbox/
└── animations/            # Componentes de animación
    ├── ScrollReveal/
    └── FadeIn/
```

### `styles/` - Estilos Globales

**Ubicación:** Raíz del proyecto  
**Propósito:** CSS global y variables

```
styles/
├── globals.css            # Reset, estilos base
├── variables.css          # CSS Variables
└── mixins.css             # Utilidades CSS
```

**Importación:**

```tsx
// app/layout.tsx
import "@/styles/globals.css";
import "@/styles/variables.css";
```

### `lib/` - Utilidades

**Ubicación:** Raíz del proyecto  
**Propósito:** Funciones helpers, constantes

```
lib/
├── utils.ts               # Funciones utilitarias
├── constants.ts           # Constantes
└── formatters.ts          # Formateadores
```

### `data/` - Datos Mock

**Ubicación:** Raíz del proyecto  
**Propósito:** Datos de ejemplo, configuraciones

```
data/
├── artworks.ts            # Lista de obras
├── events.ts              # Lista de eventos
├── team.ts                # Miembros del equipo
└── blog.ts                # Posts del blog
```

### `public/` - Assets Estáticos

**Ubicación:** Raíz del proyecto  
**Propósito:** Imágenes, fuentes, archivos públicos

```
public/
├── images/
│   ├── artworks/
│   ├── hero/
│   ├── team/
│   └── icons/
└── fonts/
```

**Acceso:**

```tsx
<Image src="/images/hero/hero-bg.webp" alt="Hero" />
```

---

## 🔗 Path Aliases

Configurados en `tsconfig.json`:

```json
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

### Uso:

```tsx
// ✅ Importaciones correctas
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import { formatDate } from "@/lib/utils";
import { artworks } from "@/data/artworks";
import "@/styles/globals.css";

// ❌ Evitar rutas relativas largas
import Header from "../../../components/layout/Header/Header";
```

---

## 📐 Convenciones de Nomenclatura

### Archivos y Carpetas

- **Componentes:** `PascalCase` - `Button/`, `ArtworkCard.tsx`
- **Utilidades:** `camelCase` - `utils.ts`, `formatDate.ts`
- **Estilos:** `kebab-case` o `PascalCase.module.css`

### Clases CSS (BEM)

```css
/* Bloque */
.card {
}

/* Elemento */
.card__title {
}
.card__image {
}

/* Modificador */
.card--featured {
}
.card--large {
}
```

### Variables CSS

```css
/* Prefijo para categoría */
--color-primary
--font-heading
--spacing-md
--shadow-lg
--z-modal
```

---

## 🎯 Flujo de Trabajo

### 1. Crear Nueva Página

```bash
# Crear archivo de ruta
app/nueva-pagina/page.tsx
```

```tsx
// app/nueva-pagina/page.tsx
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";

export default function NuevaPaginaPage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
```

### 2. Crear Nuevo Componente

```bash
# Crear carpeta y archivos
components/ui/NewComponent/
├── NewComponent.tsx
└── NewComponent.module.css
```

```tsx
// components/ui/NewComponent/NewComponent.tsx
import styles from "./NewComponent.module.css";

interface NewComponentProps {
  title: string;
}

export default function NewComponent({ title }: NewComponentProps) {
  return (
    <div className={styles.component}>
      <h2 className={styles.component__title}>{title}</h2>
    </div>
  );
}
```

### 3. Usar Componente en Página

```tsx
// app/page.tsx
import NewComponent from "@/components/ui/NewComponent/NewComponent";

export default function HomePage() {
  return <NewComponent title="Hola" />;
}
```

---

## 📊 Comparación: Pages Router vs App Router

| Aspecto          | Pages Router (Old)   | App Router (New)        |
| ---------------- | -------------------- | ----------------------- |
| Carpeta de rutas | `pages/`             | `app/`                  |
| Componentes      | `components/` (raíz) | `components/` (raíz) ✅ |
| Estilos globales | `styles/` (raíz)     | `styles/` (raíz) ✅     |
| Data fetching    | `getStaticProps`     | `async/await` directo   |
| Layouts          | `_app.tsx`           | `layout.tsx`            |
| Loading states   | Custom               | `loading.tsx`           |
| Error handling   | `_error.tsx`         | `error.tsx`             |

---

## ✅ Checklist de Estructura

Verifica que tu proyecto cumpla:

- [ ] Carpeta `app/` solo contiene rutas y archivos especiales de Next.js
- [ ] Carpeta `components/` está en la raíz del proyecto
- [ ] Carpeta `styles/` está en la raíz del proyecto
- [ ] Carpeta `lib/` está en la raíz del proyecto
- [ ] Carpeta `data/` está en la raíz del proyecto
- [ ] `tsconfig.json` tiene configurados los path aliases
- [ ] Cada componente tiene su carpeta con `.tsx` y `.module.css`
- [ ] Se usan importaciones con `@/` en lugar de rutas relativas
- [ ] Las clases CSS siguen la metodología BEM
- [ ] Los componentes están organizados por tipo (layout, sections, ui, animations)

---

## 🔍 Referencias

- [Next.js Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js App Router](https://nextjs.org/docs/app)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [BEM Methodology](https://getbem.com/)

---

**Última actualización:** Noviembre 2025  
**Next.js Version:** 16+  
**Router:** App Router
