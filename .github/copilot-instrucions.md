# Reglas de Codificación - DECORD Project (Next.js 16)

Este documento establece las reglas y mejores prácticas para el desarrollo del proyecto DECORD, un clon del sitio web [DECORD Art Gallery](https://ld-wt73.template-help.com/tf/decord_v1/).

## 🎯 Objetivo del Proyecto

Clonar el sitio web DECORD con **100% de similitud visual**, creando una réplica funcional, responsive y optimizada usando:

- Next.js 16 (App Router)
- TypeScript
- CSS Modules con metodología BEM
- Sistema de Design Tokens

## 🎨 CRÍTICO: Sistema de Design Tokens

### Regla de Oro

> **NUNCA escribir valores hardcoded en CSS. SIEMPRE usar Design Tokens.**

### Tokens Disponibles

Todos los tokens están definidos en `styles/tokens/`:

- `colors.css` - Paleta DECORD (gold #d4af37, backgrounds oscuros)
- `spacing.css` - Sistema de 8px base
- `typography.css` - Fuentes Playfair Display (títulos) + Inter (cuerpo)
- `layout.css` - Containers, breakpoints, grids
- `effects.css` - Sombras, transitions, border-radius
- `components.css` - Tokens específicos de componentes

### Antes de Escribir CSS

1. **Consultar tokens existentes** en `docs/DESIGN_TOKENS.md`
2. **Buscar token semántico** apropiado
3. **Usar var()** para referenciar tokens
4. **NO crear valores nuevos** sin justificación

### Ejemplos de Uso Correcto

```css
/* ❌ INCORRECTO - Valores hardcoded */
.button {
  background-color: #d4af37;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
}

/* ✅ CORRECTO - Usando tokens */
.button {
  background-color: var(--color-primary-gold);
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--button-font-size-md);
  border-radius: var(--radius-button);
  transition: var(--transition-colors);
}
```

### Tokens Más Importantes

#### Colores

```css
--color-primary-gold: #d4af37; /* Accent principal */
--color-background-primary: #0a0a0a; /* Fondo oscuro */
--color-text-primary: #fafafa; /* Texto claro */
--color-hover-gold: #e6c968; /* Hover dorado */
```

#### Espaciado (múltiplos de 8px)

```css
--spacing-4: 16px; /* Gap entre elementos */
--spacing-6: 24px; /* Gap entre cards */
--spacing-8: 32px; /* Padding de cards */
--spacing-32: 128px; /* Padding de secciones */
```

#### Tipografía

```css
--font-family-primary: "Playfair Display", serif; /* Títulos */
--font-family-secondary: "Inter", sans-serif; /* Cuerpo */
--letter-spacing-widest: 0.1em; /* ⭐ CARACTERÍSTICO DECORD */
```

### Característica Visual Distintiva

**CRÍTICO:** El título hero de DECORD usa `letter-spacing: 0.1em` (widest). Esto es único e identificativo:

```css
.hero__title {
  font-size: var(--hero-title-font-size);
  letter-spacing: var(--letter-spacing-widest); /* ⭐ NO OLVIDAR */
  font-family: var(--font-family-primary);
}
```

## 📁 Estructura del Proyecto

### Convención Oficial Next.js 16 App Router

```
decord/
├── app/                    # Solo rutas y layouts
│   ├── layout.tsx
│   ├── page.tsx
│   └── [rutas]/page.tsx
├── components/             # ⚠️ EN RAÍZ, NO en app/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   └── animations/
├── styles/                 # ⚠️ EN RAÍZ, NO en app/
│   ├── tokens/             # 🎨 Design Tokens
│   │   ├── colors.css
│   │   ├── spacing.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── effects.css
│   │   ├── components.css
│   │   └── index.css
│   └── globals.css
├── lib/                    # Utilidades
├── data/                   # Datos mock
└── public/                 # Assets estáticos
```

### ⚠️ ERRORES COMUNES A EVITAR

```
❌ app/components/    # INCORRECTO
✅ components/        # CORRECTO

❌ app/styles/        # INCORRECTO
✅ styles/            # CORRECTO
```

## 🎨 CSS Modules con BEM

### Metodología BEM Obligatoria

```tsx
// ✅ Estructura correcta
// Component.tsx
import styles from "./Component.module.css";

export default function Component() {
  return (
    <div className={styles.component}>
      <h2 className={styles.component__title}>Title</h2>
      <button className={styles.component__button}>Click</button>
    </div>
  );
}
```

```css
/* Component.module.css */
.component {
  /* Bloque */
}

.component__title {
  /* Elemento */
}

.component__button {
  /* Elemento */
}

.component--featured {
  /* Modificador */
}
```

### Organización de Componentes

```
components/ui/Button/
├── Button.tsx
└── Button.module.css
```

Cada componente en su propia carpeta con su CSS Module.

## 📦 Package Manager

## 📦 Package Manager

- **Requerido**: Usar `pnpm` como gestor de paquetes
- NO usar `npm` ni `yarn` en ningún caso
- Usar `pnpm dlx` para ejecutar paquetes temporalmente (equivalente a `npx`)

## 🎯 Componentes DECORD Específicos

### Componentes UI a Implementar

1. **Button** - Variantes: primary (gold), secondary, outline
2. **ArtworkCard** - Con hover zoom + overlay
3. **EventCard** - Con fecha destacada en dorado
4. **BlogCard** - Imagen + título + excerpt
5. **TeamMemberCard** - Foto + nombre + cargo
6. **StatCard** - Número grande + descripción
7. **CategoryFilter** - Botones de filtro de galería
8. **Lightbox** - Modal para imágenes en tamaño completo

### Efectos Visuales Requeridos

```css
/* Hover en imágenes de galería */
.artwork-card__image {
  transition: var(--transition-transform);
}

.artwork-card:hover .artwork-card__image {
  transform: var(--animation-image-zoom); /* scale(1.05) */
}

/* Overlay en hover */
.artwork-card__overlay {
  opacity: 0;
  transition: var(--transition-base);
}

.artwork-card:hover .artwork-card__overlay {
  opacity: 1;
}
```

### Paleta de Colores DECORD

**SIEMPRE usar estos colores a través de tokens:**

- Fondo principal: `var(--color-background-primary)` (#0a0a0a)
- Accent dorado: `var(--color-primary-gold)` (#d4af37)
- Texto claro: `var(--color-text-primary)` (#fafafa)
- Texto secundario: `var(--color-text-secondary)` (#a3a3a3)
- Cards: `var(--color-background-elevated)` (#2a2a2a)

## 📝 Path Aliases

Configurados en `tsconfig.json`:

```tsx
// ✅ Usar path aliases
import Hero from "@/components/sections/Hero/Hero";
import Button from "@/components/ui/Button/Button";
import { formatDate } from "@/lib/utils";
import { artworks } from "@/data/artworks";
import "@/styles/globals.css";

// ❌ NO usar rutas relativas largas
import Hero from "../../../components/sections/Hero/Hero";
```

## 🔍 Proceso de Creación de Componentes

### 1. ANTES de escribir código

- [ ] Consultar `docs/DESIGN_TOKENS.md`
- [ ] Identificar tokens necesarios (colores, spacing, typography)
- [ ] Verificar si existe componente similar

### 2. Estructura del componente

```tsx
// components/ui/Button/Button.tsx
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### 3. CSS con tokens

```css
/* components/ui/Button/Button.module.css */
.button {
  /* Usar SOLO tokens, NO valores hardcoded */
  background-color: var(--color-primary-gold);
  height: var(--button-height-md);
  padding: 0 var(--button-padding-x-md);
  font-size: var(--button-font-size-md);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  border-radius: var(--radius-button);
  transition: var(--transition-colors);
}

.button:hover {
  background-color: var(--color-hover-gold);
  transform: translateY(-1px);
}
```

## 📚 Documentación Requerida

Antes de crear componentes, revisar:

1. **`docs/MASTER_PROMPT_FOR_LLM.md`** - Guía completa de clonación
2. **`docs/DESIGN_TOKENS.md`** - Catálogo de tokens (⚠️ CRÍTICO)
3. **`docs/ESTRUCTURA_PROYECTO.md`** - Estructura de carpetas
4. **Sitio original**: https://ld-wt73.template-help.com/tf/decord_v1/

## 🚨 Checklist Antes de Implementar

- [ ] ¿Estoy usando tokens en lugar de valores hardcoded?
- [ ] ¿El componente está en la carpeta correcta (components/, NO app/components/)?
- [ ] ¿Estoy usando metodología BEM en CSS Modules?
- [ ] ¿Estoy usando path aliases (@/) en imports?
- [ ] ¿El letter-spacing del hero es 0.1em (widest)?
- [ ] ¿Los colores son los del tema oscuro DECORD?
- [ ] ¿El espaciado sigue múltiplos de 8px?

## Arquitectura y Router

### App Router (Requerido)

- **SIEMPRE** usar el App Router (`app/` directory), NO el Pages Router (`pages/` directory)
- Todas las rutas deben estar definidas en el directorio `app/`
- Usar el sistema de archivos para definir rutas y layouts anidados

### Convenciones de Archivos

- `page.tsx` / `page.jsx`: Define una ruta y es accesible públicamente
- `layout.tsx` / `layout.jsx`: Define un layout compartido para segmentos de ruta
- `template.tsx` / `template.jsx`: Define un template que se recrea en cada navegación
- `loading.tsx` / `loading.jsx`: Define un estado de carga para un segmento
- `error.tsx` / `error.jsx`: Define un límite de error para un segmento
- `not-found.tsx` / `not-found.jsx`: Define una página 404 personalizada

## Server Components vs Client Components

### Server Components (Default)

- **Por defecto, todos los componentes son Server Components**
- No necesitan la directiva `'use client'`
- Pueden hacer data fetching directamente usando `async/await`
- No pueden usar hooks de React (`useState`, `useEffect`, etc.)
- No pueden usar event handlers
- Pueden acceder directamente a APIs del servidor (`cookies()`, `headers()`, etc.)
- Pueden retornar tipos complejos (Date, Map, Set) sin serialización

```tsx
// ✅ Server Component
async function getData() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

### Client Components

- **Solo usar cuando sea absolutamente necesario** (interactividad, hooks, event handlers)
- Deben tener la directiva `'use client'` al inicio del archivo, antes de cualquier import
- Usar solo para interactividad del lado del cliente
- Pueden importar Server Components como hijos

```tsx
// ✅ Client Component
"use client";

import { useState } from "react";

export default function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Regla de Oro

> **Usar Server Components por defecto. Solo convertir a Client Component cuando necesites interactividad del cliente.**

## Data Fetching

### Fetch en Server Components

- Usar `fetch()` directamente en Server Components
- Usar opciones de caché apropiadas:
  - `cache: 'force-cache'` (default): Para datos estáticos (equivalente a `getStaticProps`)
  - `cache: 'no-store'`: Para datos dinámicos en cada request (equivalente a `getServerSideProps`)
  - `next: { revalidate: N }`: Para revalidación incremental (ISR)

```tsx
// ✅ Static data
const staticData = await fetch("https://api.example.com/data", {
  cache: "force-cache",
});

// ✅ Dynamic data
const dynamicData = await fetch("https://api.example.com/data", {
  cache: "no-store",
});

// ✅ ISR con revalidación
const revalidatedData = await fetch("https://api.example.com/data", {
  next: { revalidate: 3600 }, // revalidar cada hora
});
```

### Acceso a Cookies y Headers

- Usar `cookies()` y `headers()` de `next/headers` en Server Components
- Estas funciones son async y deben ser awaited

```tsx
import { cookies, headers } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const theme = cookieStore.get("theme");
  const authHeader = headerStore.get("authorization");
  // ...
}
```

## Routing y Navegación

### Link Component

- **SIEMPRE** usar `Link` de `next/link` para navegación interna
- NO envolver `<Link>` con `<a>` (Next.js 13+)
- El prefetch está habilitado por defecto en producción

```tsx
import Link from 'next/link'

// ✅ Correcto
<Link href="/about">About</Link>

// ❌ Incorrecto (Next.js 13+)
<Link href="/about"><a>About</a></Link>
```

### Hooks de Navegación (Solo en Client Components)

- Usar hooks de `next/navigation` (NO de `next/router`)
- `useRouter`, `usePathname`, `useSearchParams` solo funcionan en Client Components

```tsx
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // ...
}
```

### Segmentos Dinámicos

- Usar `[slug]` para rutas dinámicas
- `params` es una Promise en Next.js 16 y debe ser awaited

```tsx
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <div>{post.title}</div>;
}
```

## Layouts

### Root Layout

- **SIEMPRE** debe existir `app/layout.tsx` como layout raíz
- Debe incluir `<html>` y `<body>` tags
- Debe aceptar `children: React.ReactNode`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

### Layouts Anidados

- Los layouts se anidan automáticamente
- Cada segmento de ruta puede tener su propio layout
- Los layouts son persistentes y no se re-renderizan en navegación

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}
```

## TypeScript

### Tipos para Parámetros de Rutas

- `params` siempre es una Promise en Next.js 16
- Typear correctamente los parámetros de ruta

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
```

### Tipos de App Router

- Usar tipos nativos de TypeScript para props de componentes
- No necesitar tipos especiales para Server Components

## Streaming y Suspense

### Usar Suspense para Streaming

- Envolver componentes async con `Suspense` para habilitar streaming
- Proporcionar fallbacks apropiados

```tsx
import { Suspense } from "react";
import { PostFeed, Weather } from "./components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
```

## Mejores Prácticas

### 1. Colocación de Código

- Mantener Server Components cerca de donde se usan
- Separar lógica de negocio en funciones auxiliares
- Usar colocation de componentes relacionados

### 2. Importaciones

- Importar Server Components directamente en Server Components
- Importar Client Components en Server Components (se renderizan en el cliente)
- NO importar Server Components en Client Components directamente

### 3. Performance

- Usar `next/dynamic` para code splitting de componentes pesados
- Usar `loading.tsx` para estados de carga
- Implementar error boundaries con `error.tsx`

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

### 4. Variables de Entorno

- Usar `process.env` para variables de entorno
- Para runtime env vars, usar `connection()` de `next/server` en Server Components

```tsx
import { connection } from "next/server";

export default async function Component() {
  await connection();
  const value = process.env.MY_RUNTIME_VALUE;
  // ...
}
```

### 5. Metadata y SEO

- Usar `metadata` export para SEO en páginas
- Usar `generateMetadata` para metadata dinámica

```tsx
export const metadata = {
  title: "Home",
  description: "Home page description",
};

// O dinámico
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.description,
  };
}
```

## Errores Comunes a Evitar

### ❌ NO hacer esto:

1. **Valores hardcoded en CSS** - SIEMPRE usar tokens
2. **Componentes en app/components/** - Deben estar en raíz
3. **Olvidar letter-spacing: 0.1em en hero** - Es característica distintiva
4. **Usar colores que no sean del tema DECORD** - Solo paleta oscura con gold
5. Usar `'use client'` innecesariamente
6. Usar hooks de React en Server Components
7. Usar `next/router` en App Router (usar `next/navigation`)
8. Anidar `<a>` dentro de `<Link>`
9. Usar `getServerSideProps` o `getStaticProps` (migrar a fetch)
10. Importar Server Components en Client Components directamente
11. Olvidar que `params` es una Promise en Next.js 16
12. **Spacing que no sea múltiplo de 8px** - Usar tokens de spacing
13. **Imports sin path aliases** - Siempre usar @/

### ✅ Hacer esto:

1. **Consultar tokens ANTES de escribir CSS**
2. **Usar var(--token-name) en todo el CSS**
3. **Seguir metodología BEM estrictamente**
4. **Verificar fidelidad visual con sitio original**
5. Usar Server Components por defecto
6. Separar claramente Server y Client Components
7. Usar `fetch()` con opciones de caché apropiadas
8. Usar layouts anidados en lugar de HOCs
9. Aprovechar streaming con Suspense
10. Typear correctamente con TypeScript
11. **Mantener componentes en estructura correcta** (raíz, no en app/)
12. **Documentar nuevos tokens si se crean**

## 🎨 Flujo de Trabajo Recomendado

### Para clonar una sección del sitio:

1. **Analizar visualmente** la sección en el sitio original
2. **Extraer información de diseño**:
   - Colores → buscar token correspondiente
   - Espaciado → medir y usar token de spacing
   - Tipografía → identificar fuente y tamaño (tokens)
   - Efectos → hover, transiciones (tokens de effects)

3. **Crear componente**:

   ```bash
   components/sections/NuevaSeccion/
   ├── NuevaSeccion.tsx
   └── NuevaSeccion.module.css
   ```

4. **Escribir JSX** con estructura semántica

5. **Escribir CSS** usando SOLO tokens:

   ```css
   .seccion {
     padding: var(--spacing-section-y) 0;
     background: var(--color-background-primary);
   }

   .seccion__title {
     font-size: var(--font-size-3xl);
     color: var(--color-text-primary);
     margin-bottom: var(--spacing-6);
   }
   ```

6. **Verificar fidelidad visual** comparando con original

7. **Testear responsive** en diferentes breakpoints

## 📱 Responsive Design

### Breakpoints (usar tokens)

```css
/* Mobile first approach */
.component {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  /* Tablet: var(--breakpoint-md) */
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  /* Desktop: var(--breakpoint-lg) */
  .component {
    /* Desktop styles */
  }
}
```

### Spacing responsive

```css
.section {
  /* Usar tokens semánticos que ya incluyen responsive */
  padding: var(--spacing-section-y-mobile) var(--spacing-container-x-mobile);
}

@media (min-width: 768px) {
  .section {
    padding: var(--spacing-section-y) var(--spacing-container-x);
  }
}
```

## 🔧 Herramientas de Desarrollo

### DevTools para Extracción

1. **Inspector** - Para colores, spacing, fuentes
2. **Computed styles** - Para valores exactos
3. **ColorZilla** - Para extraer colores precisos
4. **WhatFont** - Para identificar tipografías
5. **Page Ruler** - Para medir distancias

### Verificación de Tokens

```bash
# Buscar valores hardcoded (NO debe haber)
grep -r "#[0-9a-f]\{6\}" components/

# Buscar spacing hardcoded (NO debe haber)
grep -r "[0-9]\+px" components/**/*.module.css
```

## 📖 Referencias del Proyecto

- **Sitio original**: https://ld-wt73.template-help.com/tf/decord_v1/
- **Design Tokens**: `docs/DESIGN_TOKENS.md`
- **Master Prompt**: `docs/MASTER_PROMPT_FOR_LLM.md`
- **Estructura**: `docs/ESTRUCTURA_PROYECTO.md`
- **Next.js Docs**: https://nextjs.org/docs

## Estándares del Proyecto

- **Stack**: Next.js 16 + TypeScript + CSS Modules + Design Tokens
- **Empaquetador**: `pnpm` y `pnpm dlx` (NO npm, NO yarn)
- **Commits**: Generar commits en inglés
- **CSS**: SOLO usar Design Tokens (NO valores hardcoded)
- **Metodología CSS**: BEM estricta
- **Estructura**: Next.js 16 oficial (components en raíz)
- **Fidelidad visual**: 90-97% de similitud con DECORD original

---

## 🎯 Recordatorios Finales

### Antes de cada componente:

1. ✅ Leer `docs/DESIGN_TOKENS.md`
2. ✅ Identificar tokens necesarios
3. ✅ Verificar estructura de carpetas
4. ✅ Usar metodología BEM
5. ✅ NO escribir valores hardcoded

### Características DECORD críticas:

- 🌟 **Letter-spacing: 0.1em** en hero title
- 🎨 **Paleta oscura** con gold accent (#d4af37)
- 📏 **Espaciado generoso** (múltiplos de 8px)
- ✨ **Hover zoom** en imágenes (scale 1.05)
- 🖼️ **Tipografía elegante** (Playfair Display + Inter)

**Nota**: Este archivo está optimizado para el proyecto DECORD. Seguir estas reglas garantiza alta fidelidad visual y código mantenible.

---

## 📚 Documentación Completa

### Documentación del Proyecto

- **Design Tokens**: `docs/DESIGN_TOKENS.md` - ⚠️ CRÍTICO: Consultar ANTES de escribir CSS
- **Master Prompt**: `docs/MASTER_PROMPT_FOR_LLM.md` - Guía completa de clonación
- **Estructura**: `docs/ESTRUCTURA_PROYECTO.md` - Convenciones de carpetas

### Referencias Externas

- **Sitio original**: https://ld-wt73.template-help.com/tf/decord_v1/
- **Next.js 16 Docs**: https://nextjs.org/docs
- **CSS Modules**: https://github.com/css-modules/css-modules
- **BEM Methodology**: https://getbem.com/

---

**Última actualización**: Noviembre 2025 - Optimizado para proyecto DECORD con Design Tokens
