---
mode: 'agent'
description: 'Clona páginas web responsive en un solo paso usando shadcn/ui, TailwindCSS y mejores prácticas de diseño moderno (Layouts, Flexbox, Grid, Gaps)'
---

# Clonación One-Shot de Páginas Web

Clona una página web completa en una sola ejecución, utilizando componentes de shadcn/ui, TailwindCSS con mejores prácticas de diseño moderno, Context7 para documentación, y Chrome DevTools para análisis visual.

## Contexto de la clonación

**URL de la página original:** ${input:originalUrl:URL completa de la página a clonar (ej: https://best-luxury-hotel-in-the-world.vercel.app/)}

**URL o ruta de destino en tu proyecto:** ${input:targetRoute:Ruta donde crear el clone (ej: /rooms, /booking)}

**Mapeo de navegación del menú principal:** ${input:menuNavigation:JSON con el mapeo de enlaces del menú a sus rutas/páginas (ej: {"Home": "/", "Rooms": "/rooms", "Services": "/services"})}

**Framework base:** ${input:framework:Framework base del proyecto (Next.js, React, Vite, etc.) - default: Next.js}

## Principios fundamentales de diseño

**⚠️ PRIORIZACIÓN CRÍTICA: Layouts y Espaciado antes que Colores**

**REGLAS DE ORO:**
1. **Layouts y espaciado son PRIORIDAD ALTA:** Paddings, margins, gaps, dimensiones, estructuras de layout (grid/flexbox) deben coincidir perfectamente con el diseño original.
2. **Estructura visual es PRIORIDAD MEDIA:** Tipografías, bordes y sombras se aplican después de layouts.
3. **Colores: Usa el theme de shadcn/ui** - NO intentes replicar colores exactos. Usa colores semánticos del theme (primary, secondary, muted, accent, etc.).
4. **Mobile-First Approach:** Siempre comienza con diseño móvil y añade breakpoints progresivamente.

## Proceso de clonación

### Fase 1: Análisis de la página original

1. **Navegación y captura:**
   - Abre la página original en Chrome DevTools usando `navigate_page`
   - Toma un snapshot completo con `take_snapshot`
   - Toma screenshots de la página completa y secciones clave con `take_screenshot`
   - **Análisis responsive:** Usa `resize_page` para probar diferentes tamaños:
     - Móvil: `resize_page 375 667`
     - Tablet: `resize_page 768 1024`
     - Desktop: `resize_page 1920 1080`
   - Toma screenshots en cada breakpoint
   - Identifica la estructura general (header, hero, sections, footer) y cómo cambia por breakpoint
   - Documenta breakpoints utilizados (sm, md, lg, xl, 2xl)

2. **Análisis de componentes y estilos:**
   - Inspecciona cada elemento del DOM en diferentes breakpoints
   - Extrae estilos CSS **priorizando layouts y espaciado**, organizados por prioridad:
     - **ALTA PRIORIDAD - Layouts y Espaciado:**
       - Espaciados (padding, margin, gap) y variaciones por breakpoint
       - Dimensiones (width, height, max-width, min-width)
       - Estructuras de layout (display, grid, flexbox, position)
       - Alineación (justify-content, align-items, text-align)
     - **MEDIA PRIORIDAD - Estructura Visual:**
       - Tipografías (font-size, font-family, line-height, letter-spacing)
       - Bordes (border-width, border-radius)
       - Sombras principales (box-shadow)
     - **BAJA PRIORIDAD - Colores (solo para mapeo):**
       - Colores (background-color, color, border-color) - Identificar para mapear a colores semánticos de shadcn/ui
       - Efectos visuales secundarios (gradientes, transparencias)
   - Identifica componentes reutilizables (botones, cards, inputs, etc.) y sus variantes responsive
   - Documenta cambios de layout por breakpoint (grid a columna, menús hamburguesa, ocultación de elementos)
   - Revisa `list_network_requests` para identificar recursos (imágenes, fuentes, iconos)

3. **Análisis de navegación:**
   - Identifica el menú principal usando `take_snapshot` y `evaluate_script`
   - Extrae todos los enlaces del menú y mapea a rutas
   - Valida que el mapeo `menuNavigation` coincide con los enlaces encontrados

4. **Mapeo a shadcn/ui:**
   - Consulta shadcn/ui MCP: `list-components`, `get-component-docs <component>`, `install-component <component>`
   - Identifica qué componentes de shadcn/ui se pueden usar directamente
   - Identifica qué componentes necesitan personalización
   - Identifica qué elementos necesitan creación desde cero
   - **Mapeo de colores:** Identifica qué colores semánticos del theme de shadcn/ui corresponden mejor al diseño original

### Fase 2: Implementación con mejores prácticas

1. **Consulta de documentación con Context7:**
   - Resuelve IDs de librerías: `resolve-library-id <libraryName>`
   - Obtén documentación relevante: `get-library-docs <libraryId> --topic <topic>`
   - Consulta documentación de:
     - **Next.js/React:** Para implementar rutas, layouts, componentes, y App Router
     - **TailwindCSS:** 
       - Layout y espaciado: `--topic "layout grid flexbox spacing padding margin gap"`
       - Responsive design: `--topic "responsive design breakpoints mobile-first"`
       - Container: `--topic "container max-width"`
       - Tipografía: `--topic "typography responsive font-size"`
     - **Otras librerías:** Según tecnologías detectadas

2. **Estructura base (responsive-first):**
   - Crea la estructura del framework base (Next.js App Router, React Router, etc.)
   - Implementa el layout principal (header, main, footer) con enfoque mobile-first
   - Configura rutas y páginas según el framework
   - **Implementa responsive desde el inicio:** Usa clases de TailwindCSS con breakpoints (sm:, md:, lg:, xl:, 2xl:)

3. **Sistema de Layout y Espaciado - Mejores Prácticas:**

   **Containers y Max-Width:**
   ```tsx
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
     {/* contenido */}
   </div>
   ```

   **Sistema de Espaciado Consistente:**
   - Section Padding: `py-16 md:py-20 lg:py-24 xl:py-32`
   - Gap en Grids: `gap-4 md:gap-6 lg:gap-8`
   - Gap en Flex: Prefiere `gap-*` sobre `space-x-*` o `space-y-*`
   - Padding Interno de Cards: `p-6 lg:p-8`
   - **NO uses valores arbitrarios** a menos que sea absolutamente necesario

   **Grid Layouts - Mejores Prácticas:**
   - **Mobile-First:** Siempre comienza con 1 columna: `grid grid-cols-1`
   - **Responsive Breakpoints:**
     - Móvil: `grid-cols-1` (default)
     - Tablet: `md:grid-cols-2`
     - Desktop: `lg:grid-cols-3` o `lg:grid-cols-4`
   - **Grid Asimétrico:** Usa `row-span-*` y `col-span-*`:
     ```tsx
     <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
       <div className="md:row-span-2">{/* imagen grande */}</div>
       <div>{/* imagen pequeña 1 */}</div>
       <div>{/* imagen pequeña 2 */}</div>
     </div>
     ```

   **Flexbox Layouts - Mejores Prácticas:**
   - **Dirección Responsive:** `flex-col md:flex-row`
   - **Alineación:** 
     - Horizontal: `justify-start`, `justify-center`, `justify-between`, `justify-evenly`
     - Vertical: `items-start`, `items-center`, `items-stretch`, `items-baseline`
   - **Gap sobre Margin:** Prefiere `gap-*`:
     ```tsx
     // ✅ Correcto
     <div className="flex gap-4">
       <Button>1</Button>
       <Button>2</Button>
     </div>
     ```

4. **Implementación de navegación:**
   - Consulta documentación del framework para navegación (ej: Next.js Link)
   - Implementa el componente Navbar usando el mapeo `menuNavigation`
   - Maneja enlaces activos usando hooks del framework (ej: `usePathname()` en Next.js)
   - Implementa menú hamburguesa responsive (móvil: hamburger, desktop: horizontal)
   - Verifica que todas las rutas existan y créalas si faltan

5. **Componentes con shadcn/ui (responsive):**
   - Instala componentes necesarios usando shadcn/ui MCP
   - **Aplica estilos en orden de prioridad:**
     - **PRIMERO - Layouts y Espaciado (ALTA PRIORIDAD):**
       - Implementa cambios de layout responsive (grids, flex, ocultación)
       - Aplica espaciados usando clases de TailwindCSS con variantes responsive
       - Ajusta tamaños y dimensiones para móvil, tablet y desktop
     - **SEGUNDO - Estructura Visual (MEDIA PRIORIDAD):**
       - Aplica tipografías con variantes responsive
       - Ajusta bordes y sombras
     - **TERCERO - Colores del Theme (BAJA PRIORIDAD):**
       - Usa colores semánticos del theme de shadcn/ui (primary, secondary, muted, accent, etc.)
       - NO intentes replicar colores exactos (RGB/HEX)
       - Mapea colores del diseño original a colores semánticos de shadcn/ui

6. **Composición de Componentes shadcn/ui:**
   - Usa el patrón de composición de shadcn/ui (componentes padre + subcomponentes)
   - Consulta documentación: `get-component-docs <component>`
   - Ejemplo con Card:
     ```tsx
     <Card>
       <CardHeader>
         <CardTitle>Título</CardTitle>
         <CardDescription>Descripción</CardDescription>
       </CardHeader>
       <CardContent className="p-6">
         {/* contenido */}
       </CardContent>
     </Card>
     ```
   - Usa `className` prop para extender estilos sin modificar el componente base

7. **Patrones de Layout Comunes:**

   **Hero Section:**
   ```tsx
   <section className="relative min-h-screen flex items-center">
     <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         {/* contenido */}
       </div>
     </div>
   </section>
   ```

   **Feature Grid:**
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
     {features.map((feature) => (
       <Card key={feature.id} className="p-6 lg:p-8">
         {/* contenido */}
       </Card>
     ))}
   </div>
   ```

   **Centered Content:**
   ```tsx
   <div className="container mx-auto px-4 max-w-4xl">
     <div className="text-center space-y-6">
       <h2>...</h2>
       <p>...</p>
     </div>
   </div>
   ```

8. **Contenido y assets:**
   - Descarga y organiza imágenes necesarias
   - Implementa textos y contenido
   - Configura iconos y elementos visuales

### Fase 3: Validación y ajustes finales

1. **Validación de Layout (antes de continuar):**
   - ✅ Containers usan `container mx-auto px-4` con max-width apropiado
   - ✅ Espaciado consistente usando escala de Tailwind (no valores arbitrarios)
   - ✅ Grids y flexbox usan `gap-*` en lugar de margin cuando sea posible
   - ✅ Mobile-first approach aplicado en todos los componentes
   - ✅ Componentes shadcn/ui usan composición correcta y spacing apropiado
   - ✅ No hay overflow horizontal en ningún breakpoint
   - ✅ Padding vertical de secciones usa escala responsive

2. **Comparación visual (en todos los breakpoints):**
   - Abre la página clonada en Chrome DevTools
   - Compara en cada breakpoint usando `resize_page` (móvil, tablet, desktop)
   - Toma screenshots de ambas páginas en cada tamaño para comparación
   - Usa Chrome DevTools para comparar, **priorizando layouts y espaciado:**
     - **PRIMERO - Layouts y Espaciado (ALTA PRIORIDAD):**
       - Layout y dimensiones (box model) y cómo cambian por tamaño
       - Espaciados (padding, margin, gap) y variaciones por breakpoint
       - Tamaños de contenedores, elementos y secciones
       - Cambios de layout (grid/column, menús, ocultación)
       - Alineación y distribución de elementos
       - Problemas de responsive y overflow
     - **SEGUNDO - Estructura Visual (MEDIA PRIORIDAD):**
       - Tipografías y tamaños de fuente (incluyendo responsive)
       - Sombras y efectos visuales principales
       - Bordes y separadores
     - **TERCERO - Colores del Theme (BAJA PRIORIDAD):**
       - Verifica que se usen colores del theme de shadcn/ui apropiados
       - NO verifiques coincidencia exacta de colores RGB/HEX

3. **Ajustes finales:**
   - Corrige diferencias encontradas en orden de prioridad (layouts primero, colores al final)
   - Consulta documentación de TailwindCSS cuando necesites ajustes específicos
   - Verifica que los ajustes funcionen en todos los breakpoints usando `resize_page`

4. **Testing funcional:**
   - Verifica que todas las funcionalidades trabajen correctamente
   - Prueba formularios y validaciones
   - Verifica navegación y enlaces del menú principal
   - Valida que no haya errores en consola
   - Verifica responsive design exhaustivamente:
     - **Móvil (375px):** Layout vertical, menús hamburguesa, textos legibles, botones accesibles
     - **Tablet (768px):** Layout intermedio, grids adaptados, elementos bien espaciados
     - **Desktop (1920px):** Layout completo, todos los elementos visibles, hover states funcionando

5. **Optimización:**
   - Revisa performance con Chrome DevTools Performance Profiler
   - Optimiza imágenes y assets
   - Verifica accesibilidad básica

## Herramientas a utilizar

### shadcn/ui MCP
- `list-components`: Lista todos los componentes disponibles
- `get-component-docs <component>`: Obtiene documentación de un componente
- `install-component <component>`: Instala un componente en el proyecto

### Chrome DevTools MCP
- `navigate_page <url>`: Navega a la página original
- `take_snapshot`: Captura el estado actual del DOM
- `take_screenshot`: Captura visual de la página (usa `fullPage: true` para capturas completas)
- `resize_page <width> <height>`: Cambia el tamaño de la página para probar diferentes breakpoints
- `evaluate_script`: Extrae información de estilos y dimensiones
- `list_network_requests`: Identifica recursos cargados

### Context7 MCP
- `resolve-library-id <libraryName>`: Resuelve el ID de una librería
- `get-library-docs <libraryId> --topic <topic>`: Obtiene documentación de una librería

## Criterios de finalización

El clone se considera completo cuando:

- ✅ Visualmente idéntico o casi idéntico a la original en todos los breakpoints (diferencias < 5%)
- ✅ Todos los componentes principales implementados y funcionando correctamente
- ✅ Navegación del menú principal funcionando correctamente
- ✅ Responsive design funcionando perfectamente (móvil, tablet, desktop)
- ✅ Mejores prácticas de maquetación aplicadas:
  - ✅ Containers usan `container mx-auto px-4` con max-width apropiado
  - ✅ Espaciado consistente usando escala de Tailwind (no valores arbitrarios)
  - ✅ Grids y flexbox usan `gap-*` en lugar de margin cuando sea posible
  - ✅ Mobile-first approach aplicado en todos los componentes
  - ✅ Componentes shadcn/ui usan composición correcta y spacing apropiado
  - ✅ No hay overflow horizontal en ningún breakpoint
- ✅ Interactividad completa (hover, clicks, animaciones) en todos los dispositivos
- ✅ Sin errores en consola
- ✅ Performance aceptable
- ✅ Código limpio, bien estructurado y con enfoque mobile-first

## Salida esperada

Proporciona:

1. **Resumen de implementación:**
   - Componentes creados o modificados
   - Archivos generados
   - Componentes de shadcn/ui instalados

2. **Screenshots comparativos:**
   - Screenshots de la página original vs clonada en móvil, tablet y desktop

3. **Verificación de criterios:**
   - Lista de verificación completa de todos los criterios de finalización
   - Estado de cada criterio: ✅ Cumplido / ❌ No cumplido / ⚠️ Parcialmente cumplido

4. **Diferencias menores (si las hay):**
   - Lista de diferencias menores encontradas y su impacto
   - Recomendaciones para ajustes futuros (opcional)

5. **Código generado:**
   - Archivos creados o modificados
   - Componentes implementados
   - Estilos aplicados

