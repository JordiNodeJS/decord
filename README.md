# WEBCODE - Museum of Modern Art Gallery

Clon del sitio web DECORD original construido con Next.js 16, TypeScript y CSS Modules. Rebranded como WEBCODE.

## 🏗️ Estructura del Proyecto

Este proyecto sigue la estructura recomendada por la documentación oficial de Next.js 16 con App Router:

```
📁 webcode/
├── 📁 app/                    # App Router - Solo rutas y layouts
│   ├── layout.tsx             # Root layout (obligatorio)
│   ├── page.tsx               # Home page
│   ├── loading.tsx            # Loading UI
│   ├── not-found.tsx          # 404 page
│   └── 📁 [rutas]/            # Rutas de la aplicación
│       └── page.tsx
├── 📁 components/             # Componentes reutilizables (raíz)
│   ├── 📁 layout/             # Header, Footer, Navigation
│   ├── 📁 sections/           # Hero, About, Gallery, etc.
│   ├── 📁 ui/                 # Button, Card, Input, etc.
│   └── 📁 animations/         # ScrollReveal, FadeIn, etc.
├── 📁 styles/                 # Estilos globales (raíz)
│   ├── 📁 tokens/             # 🎨 Design Tokens (nuevo)
│   │   ├── colors.css         # Paleta de colores
│   │   ├── spacing.css        # Sistema de espaciado
│   │   ├── typography.css     # Tipografía
│   │   ├── layout.css         # Layouts y breakpoints
│   │   ├── effects.css        # Sombras, transiciones
│   │   ├── components.css     # Tokens de componentes
│   │   └── index.css          # Import de todos los tokens
│   ├── globals.css            # Estilos base
│   ├── variables.css          # CSS Variables (legacy)
│   └── mixins.css             # Mixins y utilities
├── 📁 lib/                    # Utilidades y helpers (raíz)
│   ├── utils.ts               # Funciones utilitarias
│   └── constants.ts           # Constantes
├── 📁 data/                   # Datos mock/estáticos (raíz)
│   ├── artworks.ts            # Obras de arte
│   ├── events.ts              # Eventos
│   ├── team.ts                # Equipo
│   └── blog.ts                # Blog posts
├── 📁 public/                 # Assets estáticos (raíz)
│   ├── 📁 images/
│   └── 📁 fonts/
└── 📁 docs/                   # Documentación
    ├── MASTER_PROMPT_FOR_LLM.md  # Guía completa de clonación
    ├── DESIGN_TOKENS.md          # 🎨 Sistema de tokens (nuevo)
    └── ESTRUCTURA_PROYECTO.md    # Guía de estructura
```

## 🎨 Sistema de Design Tokens

Este proyecto utiliza un **sistema de design tokens** para garantizar consistencia visual:

### ¿Qué son los Design Tokens?

Los Design Tokens son variables CSS reutilizables que almacenan decisiones de diseño (colores, espaciado, tipografía, etc.). En lugar de valores hardcoded, usamos tokens semánticos:

```css
/* ❌ Incorrecto */
.button {
  background-color: #d4af37;
  padding: 12px 24px;
}

/* ✅ Correcto */
.button {
  background-color: var(--color-primary-gold);
  padding: var(--spacing-3) var(--spacing-6);
}
```

### Categorías de Tokens

1. **Colores** (`colors.css`): Paleta completa del sitio WEBCODE
   - `--color-primary-gold`: #d4af37 (accent principal)
   - `--color-background-primary`: #0a0a0a (fondo oscuro)
   - `--color-text-primary`: #fafafa (texto claro)

2. **Espaciado** (`spacing.css`): Sistema basado en 8px
   - `--spacing-4`: 16px (gap entre elementos)
   - `--spacing-8`: 32px (padding de cards)
   - `--spacing-32`: 128px (padding de secciones)

3. **Tipografía** (`typography.css`): Fuentes y text styles
   - `--font-family-primary`: 'Playfair Display' (títulos)
   - `--font-size-5xl`: 64px (hero title)
   - `--letter-spacing-widest`: 0.1em (característico de WEBCODE)

4. **Layout** (`layout.css`): Containers y breakpoints
5. **Effects** (`effects.css`): Sombras, transiciones, animaciones
6. **Components** (`components.css`): Tokens específicos de componentes

### Uso en Componentes

```tsx
// Button.module.css
.button {
  background-color: var(--color-primary-gold);
  height: var(--button-height-md);
  padding: 0 var(--button-padding-x-md);
  font-size: var(--button-font-size-md);
  border-radius: var(--radius-button);
  transition: var(--transition-colors);
}

.button:hover {
  background-color: var(--color-hover-gold);
}
```

### Documentación Completa

Ver [DESIGN_TOKENS.md](./docs/DESIGN_TOKENS.md) para:

- Catálogo completo de todos los tokens
- Guía de cuándo usar cada token
- Ejemplos de uso
- Guía de mantenimiento

## 📦 Path Aliases

El proyecto utiliza path aliases configurados en `tsconfig.json`:

```typescript
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import { formatDate } from "@/lib/utils";
import { artworks } from "@/data/artworks";
import "@/styles/globals.css";
```

## 🎨 Metodología CSS

Este proyecto usa **CSS Modules** con metodología **BEM**:

```tsx
// components/ui/Button/Button.tsx
import styles from "./Button.module.css";

export default function Button({ variant = "primary" }) {
  return <button className={styles.button}>{/* Contenido */}</button>;
}
```

```css
/* components/ui/Button/Button.module.css */
.button {
  /* Estilos base */
}

.button--primary {
  /* Modificador primary */
}

.button__icon {
  /* Elemento icon */
}
```

## 🚀 Convenciones de Nomenclatura

### Componentes

- **PascalCase** para nombres de carpetas y archivos: `Button/`, `ArtworkCard.tsx`
- **BEM** para clases CSS: `.card`, `.card__title`, `.card--featured`

### Archivos

- `Component.tsx` - Componente principal
- `Component.module.css` - Estilos del componente
- `Component.test.tsx` - Tests (opcional)

### Organización

```
components/
├── ui/
│   └── Button/
│       ├── Button.tsx           # Componente
│       └── Button.module.css    # Estilos
```

## 📝 Guías de Desarrollo

### Crear un Nuevo Componente

1. Crear carpeta en la ubicación apropiada:
   - `components/ui/` - Componentes UI básicos
   - `components/sections/` - Secciones de página
   - `components/layout/` - Componentes de layout

2. Crear archivos del componente:

```bash
components/ui/MyComponent/
├── MyComponent.tsx
└── MyComponent.module.css
```

3. Estructura básica del componente:

```tsx
import styles from "./MyComponent.module.css";

interface MyComponentProps {
  title: string;
  // ... props
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className={styles.component}>
      <h2 className={styles.component__title}>{title}</h2>
    </div>
  );
}
```

### Crear una Nueva Página

1. Crear carpeta en `app/`:

```bash
app/nueva-pagina/
└── page.tsx
```

2. Estructura básica:

```tsx
// app/nueva-pagina/page.tsx
import Hero from "@/components/sections/Hero/Hero";

export default function NuevaPaginaPage() {
  return (
    <>
      <Hero />
      {/* Más secciones */}
    </>
  );
}
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev
# o
pnpm dev

# Build
npm run build
# o
pnpm build

# Producción
npm start
# o
pnpm start

# Linting
npm run lint
# o
pnpm lint
```

## 📚 Documentación Adicional

- [DESIGN_TOKENS.md](./docs/DESIGN_TOKENS.md) - 🎨 **Sistema de Design Tokens** (NUEVO)
- [MASTER_PROMPT_FOR_LLM.md](./docs/MASTER_PROMPT_FOR_LLM.md) - Guía completa de clonación
- [ESTRUCTURA_PROYECTO.md](./docs/ESTRUCTURA_PROYECTO.md) - Estructura del proyecto
- [Next.js Documentation](https://nextjs.org/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [BEM Methodology](https://getbem.com/)

## 🎯 Características del Proyecto

- ✅ Next.js 16 con App Router
- ✅ TypeScript estricto
- ✅ CSS Modules con metodología BEM
- ✅ 🎨 **Sistema de Design Tokens** (NUEVO)
- ✅ Estructura de carpetas según documentación oficial
- ✅ Path aliases configurados
- ✅ Componentes organizados por tipo
- ✅ Responsive design
- ✅ Optimización de imágenes con next/image
- ✅ SEO optimizado

## 📄 Licencia

Este proyecto es un clon educativo con fines de aprendizaje. Rebranded como WEBCODE (info@webcode.es | www.webcode.es).
