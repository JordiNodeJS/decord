# DECORD - Museum of Modern Art Gallery

Clon del sitio web [DECORD](https://ld-wt73.template-help.com/tf/decord_v1/) construido con Next.js 16, TypeScript y CSS Modules.

## 🏗️ Estructura del Proyecto

Este proyecto sigue la estructura recomendada por la documentación oficial de Next.js 16 con App Router:

```
📁 decord/
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
│   ├── globals.css            # Estilos base
│   ├── variables.css          # CSS Variables
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
    └── MASTER_PROMPT_FOR_LLM.md
```

## 📦 Path Aliases

El proyecto utiliza path aliases configurados en `tsconfig.json`:

```typescript
import Header from '@/components/layout/Header/Header'
import Hero from '@/components/sections/Hero/Hero'
import Button from '@/components/ui/Button/Button'
import { formatDate } from '@/lib/utils'
import { artworks } from '@/data/artworks'
import '@/styles/globals.css'
```

## 🎨 Metodología CSS

Este proyecto usa **CSS Modules** con metodología **BEM**:

```tsx
// components/ui/Button/Button.tsx
import styles from './Button.module.css'

export default function Button({ variant = 'primary' }) {
  return (
    <button className={styles.button}>
      {/* Contenido */}
    </button>
  )
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
import styles from './MyComponent.module.css'

interface MyComponentProps {
  title: string
  // ... props
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className={styles.component}>
      <h2 className={styles.component__title}>{title}</h2>
    </div>
  )
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
import Hero from '@/components/sections/Hero/Hero'

export default function NuevaPaginaPage() {
  return (
    <>
      <Hero />
      {/* Más secciones */}
    </>
  )
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

- [Next.js Documentation](https://nextjs.org/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [BEM Methodology](https://getbem.com/)
- [MASTER_PROMPT_FOR_LLM.md](./docs/MASTER_PROMPT_FOR_LLM.md) - Guía completa de desarrollo

## 🎯 Características del Proyecto

- ✅ Next.js 16 con App Router
- ✅ TypeScript estricto
- ✅ CSS Modules con metodología BEM
- ✅ Estructura de carpetas según documentación oficial
- ✅ Path aliases configurados
- ✅ Componentes organizados por tipo
- ✅ Responsive design
- ✅ Optimización de imágenes con next/image
- ✅ SEO optimizado

## 📄 Licencia

Este proyecto es un clon educativo del sitio DECORD con fines de aprendizaje.
