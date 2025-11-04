# Reglas de Codificación - Next.js 16

Este documento establece las reglas y mejores prácticas para el desarrollo con Next.js 16 en este proyecto.

## Package Manager
- **Requerido**: Usar `pnpm` como gestor de paquetes
- NO usar `npm` ni `yarn` en ningún caso
- Usar `pnpm dlx` para ejecutar paquetes temporalmente (equivalente a `npx`)

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
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
```

### Client Components
- **Solo usar cuando sea absolutamente necesario** (interactividad, hooks, event handlers)
- Deben tener la directiva `'use client'` al inicio del archivo, antes de cualquier import
- Usar solo para interactividad del lado del cliente
- Pueden importar Server Components como hijos

```tsx
// ✅ Client Component
'use client'

import { useState } from 'react'

export default function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
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
const staticData = await fetch('https://api.example.com/data', {
  cache: 'force-cache'
})

// ✅ Dynamic data
const dynamicData = await fetch('https://api.example.com/data', {
  cache: 'no-store'
})

// ✅ ISR con revalidación
const revalidatedData = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 } // revalidar cada hora
})
```

### Acceso a Cookies y Headers
- Usar `cookies()` y `headers()` de `next/headers` en Server Components
- Estas funciones son async y deben ser awaited

```tsx
import { cookies, headers } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const headerStore = await headers()
  const theme = cookieStore.get('theme')
  const authHeader = headerStore.get('authorization')
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
'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  return <div>{post.title}</div>
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
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
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
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  )
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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
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
import { Suspense } from 'react'
import { PostFeed, Weather } from './components'

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
  )
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
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### 4. Variables de Entorno
- Usar `process.env` para variables de entorno
- Para runtime env vars, usar `connection()` de `next/server` en Server Components

```tsx
import { connection } from 'next/server'

export default async function Component() {
  await connection()
  const value = process.env.MY_RUNTIME_VALUE
  // ...
}
```

### 5. Metadata y SEO
- Usar `metadata` export para SEO en páginas
- Usar `generateMetadata` para metadata dinámica

```tsx
export const metadata = {
  title: 'Home',
  description: 'Home page description',
}

// O dinámico
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.description,
  }
}
```

## Errores Comunes a Evitar

### ❌ NO hacer esto:
1. Usar `'use client'` innecesariamente
2. Usar hooks de React en Server Components
3. Usar `next/router` en App Router (usar `next/navigation`)
4. Anidar `<a>` dentro de `<Link>`
5. Usar `getServerSideProps` o `getStaticProps` (migrar a fetch)
6. Importar Server Components en Client Components directamente
7. Olvidar que `params` es una Promise en Next.js 16

### ✅ Hacer esto:
1. Usar Server Components por defecto
2. Separar claramente Server y Client Components
3. Usar `fetch()` con opciones de caché apropiadas
4. Usar layouts anidados en lugar de HOCs
5. Aprovechar streaming con Suspense
6. Typear correctamente con TypeScript

## Scripts y Recursos Externos

### Next.js Script Component
- Usar `next/script` para cargar scripts de terceros
- Especificar estrategia de carga apropiada

```tsx
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Script
        src="https://example.com/script.js"
        strategy="afterInteractive"
      />
    </>
  )
}
```

## Gestión de Paquetes con pnpm

### Uso de pnpm (Requerido)
- **SIEMPRE** usar `pnpm` como gestor de paquetes (NO usar npm ni yarn)
- Todas las operaciones de instalación, actualización y eliminación de paquetes deben usar pnpm

```bash
# ✅ Instalar dependencias
pnpm install

# ✅ Instalar un paquete
pnpm add package-name

# ✅ Instalar como dependencia de desarrollo
pnpm add -D package-name

# ✅ Actualizar un paquete
pnpm update package-name

# ✅ Eliminar un paquete
pnpm remove package-name
```

### Uso de pnpm dlx
- **SIEMPRE** usar `pnpm dlx` para ejecutar paquetes de forma temporal (equivalente a `npx`)
- `pnpm dlx` descarga y ejecuta paquetes sin instalarlos globalmente

```bash
# ✅ Ejecutar herramientas CLI temporalmente
pnpm dlx create-next-app@latest my-app
pnpm dlx shadcn-ui@latest add button
pnpm dlx prisma migrate dev

# ❌ NO usar npx
# npx create-next-app@latest
```

### Ejemplos Comunes

```bash
# Instalar shadcn/ui components
pnpm dlx shadcn@latest add button

# Ejecutar herramientas de desarrollo
pnpm dlx eslint .
pnpm dlx prettier --write .

# Generar código con CLI tools
pnpm dlx prisma generate
pnpm dlx next-remote-watch
```

### Scripts en package.json
- Los scripts definidos en `package.json` se ejecutan con `pnpm run` o simplemente `pnpm`
- `pnpm` es más eficiente que npm para manejar dependencias y scripts

```bash
# Ejecutar scripts
pnpm dev
pnpm build
pnpm start
pnpm lint

# Equivalente a
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
```

### Reglas Importantes
1. **NUNCA usar npm** - Solo pnpm está permitido
2. **Siempre usar pnpm dlx** en lugar de npx para herramientas temporales
3. **Comprobar pnpm-lock.yaml** en commits (NO package-lock.json o yarn.lock)
4. **Documentar comandos pnpm** en README y documentación del proyecto

## Estándares del Proyecto

- **Empaquetador**: Usar `pnpm` y `pnpm dlx` (NO npm, NO yarn)
- **Commits**: Generar commits en inglés
- **TypeScript**: Usar tipos estrictos
- **Código**: Seguir estas reglas de codificación consistentemente

---

**Nota**: Estas reglas están basadas en la documentación oficial de Next.js 16 y las mejores prácticas de la comunidad. Revisar periódicamente para mantenerlas actualizadas.

