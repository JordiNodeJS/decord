---
mode: 'agent'
description: 'Implementa diseños modernos y responsive usando mejores prácticas de layout (Flexbox, Grid, Gaps), TailwindCSS y shadcn/ui'
---

# Implementación de Diseños Modernos con Mejores Prácticas

Implementa diseños modernos, responsive y accesibles utilizando mejores prácticas de layout (Flexbox, Grid, Gaps), TailwindCSS, shadcn/ui y documentación de librerías.

## Contexto del diseño

**Descripción del diseño a implementar:** ${input:designDescription:Descripción clara del diseño, componente o sección a implementar}

**Framework base:** ${input:framework:Framework base del proyecto (Next.js, React, Vite, etc.) - default: Next.js}

**Ruta o componente destino:** ${input:targetPath:Ruta donde crear el componente o sección (ej: /components/Hero, app/page.tsx)}

**Referencia visual (opcional):** ${input:referenceUrl:URL o descripción de referencia visual si existe}

## Principios fundamentales de diseño

**⚠️ PRIORIZACIÓN CRÍTICA: Layouts y Espaciado antes que Colores**

### Reglas de Oro

1. **Layouts y espaciado son PRIORIDAD ALTA:**
   - Paddings, margins, gaps, dimensiones, estructuras de layout (grid/flexbox) deben ser perfectos
   - Un layout incorrecto arruina completamente la percepción del diseño

2. **Estructura visual es PRIORIDAD MEDIA:**
   - Tipografías, bordes y sombras se aplican después de layouts

3. **Colores: Usa el theme de shadcn/ui:**
   - NO intentes replicar colores exactos personalizados
   - Usa colores semánticos del theme (primary, secondary, muted, accent, destructive, etc.)
   - Los colores del theme están optimizados para accesibilidad y coherencia

4. **Mobile-First Approach:**
   - Siempre comienza con diseño móvil (sin prefijos)
   - Añade breakpoints progresivamente: `md:`, `lg:`, `xl:`, `2xl:`

5. **Mejores prácticas de espaciado:**
   - Prefiere `gap-*` sobre `space-x-*` o `space-y-*` cuando sea posible
   - Usa valores de la escala de Tailwind (no valores arbitrarios)
   - Espaciado consistente y escalable

## Sistema de Layout y Espaciado

### 1. Containers y Max-Width

**Principio:** Usa contenedores consistentes con max-width apropiado

```tsx
// ✅ Correcto
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  {/* contenido */}
</div>

// ✅ Alternativa para contenido centrado
<div className="container mx-auto px-4 max-w-4xl">
  {/* contenido */}
</div>
```

**Mejores prácticas:**
- Usa `container mx-auto px-4` como base
- Añade padding responsive: `sm:px-6 lg:px-8` según necesidad
- Define max-width consistente: `max-w-7xl` (1280px), `max-w-6xl` (1152px), `max-w-4xl` (896px), etc.
- Consulta documentación: `get-library-docs /websites/tailwindcss --topic "container max-width"`

### 2. Sistema de Espaciado Consistente

**Principio:** Usa escala de espaciado de Tailwind de forma consistente y responsive

**Section Padding:**
```tsx
<section className="py-16 md:py-20 lg:py-24 xl:py-32">
  {/* contenido */}
</section>
```

**Gap en Grids:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* items */}
</div>
```

**Gap en Flex:**
```tsx
// ✅ Correcto - Prefiere gap sobre space-x/space-y
<div className="flex gap-4">
  <Button>1</Button>
  <Button>2</Button>
</div>

// ⚠️ Evitar (a menos que el diseño lo requiera específicamente)
<div className="flex space-x-4">
  <Button>1</Button>
  <Button>2</Button>
</div>
```

**Padding Interno de Cards:**
```tsx
<Card className="p-6 lg:p-8">
  {/* contenido */}
</Card>
```

**Mejores prácticas:**
- **NO uses valores arbitrarios** a menos que sea absolutamente necesario
- Usa escala de Tailwind: `4, 6, 8, 12, 16, 20, 24, 32, etc.`
- Consulta documentación: `get-library-docs /websites/tailwindcss --topic "spacing padding margin gap"`

### 3. Grid Layouts - Mejores Prácticas

**Principio:** Mobile-first con breakpoints progresivos

**Grid Básico Responsive:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* items */}
</div>
```

**Grid Asimétrico:**
```tsx
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
  <div className="md:row-span-2">
    {/* imagen grande */}
  </div>
  <div>{/* imagen pequeña 1 */}</div>
  <div>{/* imagen pequeña 2 */}</div>
</div>
```

**Grid con Auto-fit:**
```tsx
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
  {/* items */}
</div>
```

**Mejores prácticas:**
- **Siempre comienza con 1 columna:** `grid grid-cols-1`
- **Breakpoints consistentes:**
  - Móvil: `grid-cols-1` (default)
  - Tablet: `md:grid-cols-2`
  - Desktop: `lg:grid-cols-3` o `lg:grid-cols-4`
- Usa `row-span-*` y `col-span-*` para layouts creativos
- Consulta documentación: `get-library-docs /websites/tailwindcss --topic "grid layout responsive"`

### 4. Flexbox Layouts - Mejores Prácticas

**Principio:** Dirección responsive y alineación clara

**Dirección Responsive:**
```tsx
<div className="flex flex-col md:flex-row gap-6">
  {/* items */}
</div>
```

**Alineación:**
```tsx
// Horizontal
<div className="flex justify-start">   {/* izquierda */}
<div className="flex justify-center"> {/* centro */}
<div className="flex justify-between"> {/* espacio entre */}
<div className="flex justify-evenly"> {/* espacio uniforme */}

// Vertical
<div className="flex items-start">    {/* arriba */}
<div className="flex items-center">  {/* centro */}
<div className="flex items-stretch"> {/* estirar */}
<div className="flex items-baseline"> {/* baseline */}
```

**Wrap cuando sea necesario:**
```tsx
<div className="flex flex-wrap gap-4">
  {/* items que pueden desbordarse */}
</div>
```

**Mejores prácticas:**
- Prefiere `gap-*` sobre `space-x-*` o `space-y-*`
- Usa `flex-wrap` cuando los items puedan desbordarse
- Consulta documentación: `get-library-docs /websites/tailwindcss --topic "flexbox justify align items"`

### 5. Ocultación Selectiva

**Principio:** Usa utilidades de Tailwind para mostrar/ocultar elementos

```tsx
// Ocultar en móvil, mostrar en desktop
<div className="hidden md:block">
  {/* contenido desktop */}
</div>

// Mostrar solo en móvil
<div className="block md:hidden">
  {/* contenido móvil */}
</div>
```

**Mejores prácticas:**
- Evita `display: none` en CSS personalizado
- Usa utilidades de Tailwind: `hidden`, `block`, `md:block`, `md:hidden`

### 6. Tipografía Responsive

**Principio:** Escala de tamaños responsive progresiva

```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Título
</h1>

<p className="text-base md:text-lg lg:text-xl">
  Párrafo
</p>
```

**Mejores prácticas:**
- Usa escala de tamaños responsive: `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
- Consulta documentación: `get-library-docs /websites/tailwindcss --topic "typography responsive font-size"`

### 7. Imágenes Responsive

**Principio:** Imágenes optimizadas y responsive

```tsx
// Next.js Image
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descripción"
  width={800}
  height={600}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// Con aspect-ratio de shadcn/ui
<AspectRatio ratio={16 / 9}>
  <Image src="/image.jpg" alt="Descripción" fill className="object-cover" />
</AspectRatio>
```

**Mejores prácticas:**
- Usa Next.js `Image` con `sizes` prop para responsive images
- Aplica `object-cover` o `object-contain` según necesidad
- Usa `aspect-ratio` de shadcn/ui para mantener proporciones consistentes

## Composición de Componentes shadcn/ui

### Estructura de Componentes

**Principio:** Usa el patrón de composición de shadcn/ui

```tsx
// ✅ Correcto - Composición de shadcn/ui
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent className="p-6">
    {/* contenido */}
  </CardContent>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

**Mejores prácticas:**
- Consulta documentación de cada componente: `get-component-docs <component>`
- Usa `className` prop para extender estilos sin modificar el componente base
- Mantén la estructura original del componente shadcn/ui

### Spacing en Componentes shadcn/ui

**Carousel:**
```tsx
<CarouselContent className="-ml-4 md:-ml-6">
  <CarouselItem className="pl-4 md:pl-6">...</CarouselItem>
</CarouselContent>
```

**FieldGroup:**
```tsx
<FieldGroup className="flex flex-col gap-6">
  <Field>...</Field>
  <Field>...</Field>
</FieldGroup>
```

**Mejores prácticas:**
- Consulta documentación específica de cada componente para patrones de spacing
- Usa padding negativo + padding positivo para espaciado en carousels cuando sea necesario

## Patrones de Layout Comunes

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center">
  <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Título Principal
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground">
          Descripción
        </p>
      </div>
      <div>
        {/* Imagen o contenido */}
      </div>
    </div>
  </div>
</section>
```

### Feature Grid

```tsx
<div className="container mx-auto px-4 py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    {features.map((feature) => (
      <Card key={feature.id} className="p-6 lg:p-8">
        <CardHeader>
          <CardTitle>{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{feature.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
```

### Asymmetric Image Layout

```tsx
<div className="container mx-auto px-4 py-16">
  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
    <div className="md:row-span-2">
      {/* imagen grande */}
    </div>
    <div>{/* imagen pequeña 1 */}</div>
    <div>{/* imagen pequeña 2 */}</div>
  </div>
</div>
```

### Centered Content

```tsx
<div className="container mx-auto px-4 max-w-4xl">
  <div className="text-center space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold">Título</h2>
    <p className="text-lg text-muted-foreground">Descripción</p>
  </div>
</div>
```

## Proceso de implementación

### Fase 1: Análisis y planificación

1. **Analiza el diseño:**
   - Identifica estructura de layout (grid, flex, containers)
   - Identifica espaciados (padding, margin, gap) y cómo varían por breakpoint
   - Identifica componentes reutilizables
   - Identifica tipografías y tamaños responsive

2. **Consulta documentación:**
   - Resuelve IDs de librerías: `resolve-library-id <libraryName>`
   - Obtén documentación: `get-library-docs <libraryId> --topic <topic>`
   - Consulta componentes de shadcn/ui: `list-components`, `get-component-docs <component>`

3. **Planifica la implementación:**
   - Identifica qué componentes de shadcn/ui usar
   - Identifica qué componentes crear desde cero
   - Planifica estructura responsive (mobile-first)

### Fase 2: Implementación

1. **Estructura base:**
   - Crea estructura del componente o sección
   - Implementa containers y max-width
   - Configura responsive desde el inicio (mobile-first)

2. **Layouts y Espaciado (ALTA PRIORIDAD):**
   - Implementa grids o flexbox según diseño
   - Aplica espaciados usando `gap-*` y escala de Tailwind
   - Ajusta dimensiones y alineación
   - Verifica en todos los breakpoints

3. **Estructura Visual (MEDIA PRIORIDAD):**
   - Aplica tipografías con variantes responsive
   - Ajusta bordes y sombras
   - Implementa efectos visuales principales

4. **Colores del Theme (BAJA PRIORIDAD):**
   - Usa colores semánticos del theme de shadcn/ui
   - NO intentes replicar colores exactos personalizados
   - Mapea colores del diseño a colores semánticos apropiados

5. **Componentes shadcn/ui:**
   - Instala componentes necesarios: `install-component <component>`
   - Usa composición correcta de componentes
   - Aplica spacing apropiado según documentación

### Fase 3: Validación

1. **Validación de Layout:**
   - ✅ Containers usan `container mx-auto px-4` con max-width apropiado
   - ✅ Espaciado consistente usando escala de Tailwind
   - ✅ Grids y flexbox usan `gap-*` en lugar de margin cuando sea posible
   - ✅ Mobile-first approach aplicado
   - ✅ Componentes shadcn/ui usan composición correcta
   - ✅ No hay overflow horizontal en ningún breakpoint
   - ✅ Padding vertical de secciones usa escala responsive

2. **Testing responsive:**
   - Verifica en móvil (375px)
   - Verifica en tablet (768px)
   - Verifica en desktop (1920px)
   - Valida interactividad (hover, clicks, animaciones)

3. **Optimización:**
   - Verifica que no haya errores en consola
   - Revisa performance si es necesario
   - Verifica accesibilidad básica

## Herramientas a utilizar

### shadcn/ui MCP
- `list-components`: Lista todos los componentes disponibles
- `get-component-docs <component>`: Obtiene documentación de un componente
- `install-component <component>`: Instala un componente en el proyecto

### Chrome DevTools MCP (si hay referencia visual)
- `navigate_page <url>`: Navega a la referencia
- `take_snapshot`: Captura el estado actual del DOM
- `take_screenshot`: Captura visual de la página
- `resize_page <width> <height>`: Cambia el tamaño para probar breakpoints
- `evaluate_script`: Extrae información de estilos y dimensiones

### Context7 MCP
- `resolve-library-id <libraryName>`: Resuelve el ID de una librería
- `get-library-docs <libraryId> --topic <topic>`: Obtiene documentación de una librería
  - Útil para: Next.js, React, TailwindCSS, shadcn/ui, etc.

## Criterios de finalización

La implementación se considera completa cuando:

- ✅ Layouts y espaciado perfectos en todos los breakpoints
- ✅ Responsive design funcionando perfectamente (móvil, tablet, desktop)
- ✅ Mejores prácticas de maquetación aplicadas:
  - ✅ Containers usan `container mx-auto px-4` con max-width apropiado
  - ✅ Espaciado consistente usando escala de Tailwind (no valores arbitrarios)
  - ✅ Grids y flexbox usan `gap-*` en lugar de margin cuando sea posible
  - ✅ Mobile-first approach aplicado
  - ✅ Componentes shadcn/ui usan composición correcta y spacing apropiado
  - ✅ No hay overflow horizontal en ningún breakpoint
- ✅ Componentes funcionando correctamente
- ✅ Interactividad completa en todos los dispositivos
- ✅ Sin errores en consola
- ✅ Código limpio, bien estructurado y con enfoque mobile-first

## Salida esperada

Proporciona:

1. **Resumen de implementación:**
   - Componentes creados o modificados
   - Archivos generados
   - Componentes de shadcn/ui instalados

2. **Verificación de criterios:**
   - Lista de verificación completa de todos los criterios de finalización
   - Estado de cada criterio: ✅ Cumplido / ❌ No cumplido / ⚠️ Parcialmente cumplido

3. **Código generado:**
   - Archivos creados o modificados
   - Componentes implementados
   - Estilos aplicados

4. **Recomendaciones (si aplica):**
   - Sugerencias para mejoras futuras
   - Optimizaciones adicionales posibles

