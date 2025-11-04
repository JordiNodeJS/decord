---
mode: 'agent'
description: 'Clona páginas web responsive de forma iterativa usando shadcn/ui MCP, Context7, DevTools y comparación visual hasta conseguir una réplica perfecta en todos los dispositivos'
---

# Clonación Iterativa de Páginas Web

Clona una página web original de forma iterativa, utilizando componentes de shadcn/ui mediante MCP, Context7 para documentación de librerías, Chrome DevTools para análisis visual, y comparación continua hasta lograr una réplica responsive lo más parecida posible en móvil, tablet y desktop.

## Contexto de la clonación

**URL de la página original:** ${input:originalUrl:URL completa de la página a clonar (ej: https://best-luxury-hotel-in-the-world.vercel.app)}

**URL o ruta de destino en tu proyecto:** ${input:targetRoute:Ruta donde crear el clone (ej: /rooms, /booking)}

**Prioridad de elementos:** ${input:priority:Elementos más importantes a clonar primero (ej: Hero, Navbar, Footer, Cards, Forms)}

**Iteración actual:** ${input:iteration:Número de iteración (1, 2, 3...) o "primera vez"}

**Mapeo de navegación del menú principal:** ${input:menuNavigation:JSON con el mapeo de enlaces del menú a sus rutas/páginas (ej: {"Home": "/", "Rooms": "/rooms", "Services": "/services", "About": "/about", "Contact": "/contact"})}

## Proceso iterativo de clonación

**⚠️ PRIORIZACIÓN CRÍTICA: Layouts y Espaciado antes que Colores**

**REGLAS DE ORO para la clonación:**
1. **Layouts y espaciado son PRIORIDAD ALTA:** Paddings, margins, gaps, dimensiones, estructuras de layout (grid/flexbox) deben coincidir perfectamente con el diseño original. Esto es lo más importante de todo.
2. **Estructura visual es PRIORIDAD MEDIA:** Tipografías, bordes y sombras se corrigen después de layouts.
3. **Colores: Usa el theme de shadcn/ui** - NO intentes replicar colores exactos de la página original. Usa los colores semánticos del theme de shadcn/ui (primary, secondary, muted, accent, destructive, etc.) que mejor se adapten al diseño. El sistema de colores de shadcn/ui está diseñado para ser coherente y accesible.
4. **Nunca ajustes colores personalizados hasta que layouts y espaciado estén perfectos.** Un layout incorrecto arruina completamente la percepción del diseño. Los colores del theme de shadcn/ui ya están optimizados y son una prioridad mucho menor.

### Fase 1: Análisis inicial de la página original

1. **Navegación y captura:**
   - Abre la página original en Chrome DevTools
   - Toma un snapshot completo de la página usando `take_snapshot`
   - Toma screenshots de la página completa y de secciones clave
   - **Análisis responsive:** Usa `resize_page` para probar diferentes tamaños (móvil: 375x667, tablet: 768x1024, desktop: 1920x1080)
   - Toma screenshots en cada breakpoint para documentar el comportamiento responsive
   - Identifica la estructura general (header, hero, sections, footer) y cómo cambia en cada breakpoint
   - Documenta breakpoints utilizados (sm, md, lg, xl, 2xl) y cambios de layout

2. **Análisis de componentes:**
   - Inspecciona cada elemento del DOM usando Chrome DevTools en diferentes breakpoints
   - Extrae estilos CSS **priorizando layouts y espaciado sobre colores**, y cómo varían por breakpoint:
     - **PRIMERO - Layouts y Espaciado (ALTA PRIORIDAD):**
       - Espaciados (padding, margin, gap) y cómo varían por breakpoint
       - Dimensiones (width, height, max-width, min-width)
       - Estructuras de layout (display, grid, flexbox, position)
       - Alineación (justify-content, align-items, text-align)
     - **SEGUNDO - Estructura Visual (MEDIA PRIORIDAD):**
       - Tipografías (font-size, font-family, line-height, letter-spacing)
       - Bordes (border-width, border-radius)
       - Sombras principales (box-shadow)
           - **TERCERO - Detalles Estéticos (BAJA PRIORIDAD, solo para mapeo):**
        - Colores (background-color, color, border-color) - **NO los repliques exactamente**, solo identifícalos para mapearlos a los colores semánticos del theme de shadcn/ui (primary, secondary, muted, accent, etc.)
        - Efectos visuales secundarios (gradientes, transparencias menores)
   - Identifica componentes reutilizables (botones, cards, inputs, etc.) y sus variantes responsive
   - Documenta cambios de layout por breakpoint (grid a columna, menús hamburguesa, ocultación de elementos)
   - Documenta animaciones y transiciones en todos los tamaños
   - Revisa la pestaña Network para identificar recursos (imágenes, fuentes, iconos) y variantes responsive

3. **Análisis de navegación y estructura de páginas:**
   - **Identifica el menú principal:** Localiza el componente de navegación (Navbar) en el DOM
   - **Extrae enlaces del menú:** Usa `take_snapshot` y `evaluate_script` para extraer todos los enlaces del menú principal
   - **Mapea enlaces a destinos:** Para cada enlace del menú, identifica:
     - El texto del enlace (ej: "Home", "Rooms", "Services", "About", "Contact")
     - La URL de destino en la página original (ej: "/", "/rooms", "/services", "/about", "/contact")
     - Si el enlace es un ancla dentro de la misma página (ej: anclas como "hero", "services") o una ruta a otra página
   - **Verifica estructura de páginas:** Navega a cada enlace del menú usando `navigate_page` para identificar:
     - Qué secciones están en páginas diferentes
     - Qué secciones están en la misma página con anclas
     - La estructura de rutas del sitio original
   - **Documenta el mapeo completo:** Crea un mapeo JSON de todos los enlaces del menú a sus rutas correspondientes:
     ```json
     {
       "Home": "/",
       "Rooms": "/rooms",
       "Services": "/services",
       "About": "/about",
       "Contact": "/contact"
     }
     ```
   - **Valida consistencia:** Asegúrate de que el mapeo proporcionado en `menuNavigation` coincide con los enlaces encontrados en la página original

4. **Mapeo a shadcn/ui:**
   - Para cada componente identificado, consulta shadcn/ui MCP:
     - Lista componentes disponibles: `list-components`
     - Obtén documentación específica: `get-component-docs <component>`
     - Instala componentes necesarios: `install-component <component>`
   - Identifica qué componentes de shadcn/ui se pueden usar directamente
   - Identifica qué componentes necesitan personalización
   - Identifica qué elementos necesitan creación desde cero
   - **Mapeo de colores:** Identifica qué colores semánticos del theme de shadcn/ui (primary, secondary, muted, accent, destructive, etc.) corresponden mejor a los colores del diseño original. NO intentes replicar colores exactos, solo mapea a los colores semánticos del theme.

### Fase 2: Implementación inicial

1. **Consulta de documentación con Context7:**
   - Resuelve el ID de librería necesaria: `resolve-library-id <libraryName>` (ej: "next.js", "react", "tailwindcss")
   - Obtén documentación relevante: `get-library-docs <libraryId> --topic <topic>`
   - Consulta documentación de:
     - **Next.js**: Para implementar rutas, layouts, server components, y App Router
     - **React**: Para patrones de componentes, hooks, y manejo de estado
     - **TailwindCSS**: Para clases de utilidad, responsive design (breakpoints, media queries), y customización
     - **Otras librerías**: Según las tecnologías detectadas en la página original

2. **Estructura base (responsive-first):**
   - Usa la documentación de Next.js para crear la estructura correcta
   - Implementa el layout principal (header, main, footer) siguiendo un enfoque mobile-first
   - Configura rutas y páginas según la documentación de Next.js App Router
   - Aplica patrones de React recomendados según la documentación
   - **Implementa responsive desde el inicio:** Usa clases de TailwindCSS con breakpoints (sm:, md:, lg:, xl:, 2xl:)
   - Asegura que todos los componentes sean responsive desde su primera implementación

3. **Implementación de navegación y enlaces del menú principal:**
   - **Consulta documentación de Next.js Link:** 
     - `get-library-docs /vercel/next.js --topic "Link component navigation"`
     - Aprende cómo usar `next/link` para navegación entre páginas
   - **Implementa el componente Navbar:**
     - Crea o modifica el componente Navbar (ej: `components/Navbar.tsx`)
     - Usa el mapeo `menuNavigation` proporcionado para crear los enlaces del menú
     - Implementa cada enlace usando `next/link` de Next.js:
       ```tsx
       import Link from 'next/link'
       
       const menuItems = {
         "Home": "/",
         "Rooms": "/rooms",
         "Services": "/services",
         "About": "/about",
         "Contact": "/contact"
       }
       
       {Object.entries(menuItems).map(([label, href]) => (
         <Link key={label} href={href}>
           {label}
         </Link>
       ))}
       ```
   - **Maneja enlaces activos:**
     - Usa `usePathname()` de `next/navigation` para detectar la ruta actual
     - Aplica estilos activos al enlace correspondiente
     - Consulta documentación: `get-library-docs /vercel/next.js --topic "usePathname navigation hooks"`
   - **Implementa menú hamburguesa responsive:**
     - En móvil, muestra menú hamburguesa que se despliega con los enlaces
     - En desktop, muestra el menú completo horizontal
     - Asegura que todos los enlaces funcionen correctamente en ambos estados
   - **Verifica que todas las rutas existan:**
     - Para cada ruta en `menuNavigation`, verifica que existe la página correspondiente
     - Si una página no existe, créala como una página vacía o con contenido básico
     - Usa la estructura de Next.js App Router: `app/[ruta]/page.tsx`
   - **Valida navegación funcional:**
     - Prueba cada enlace del menú en diferentes breakpoints (móvil, tablet, desktop)
      - Verifica que la navegación funciona correctamente sin recargar la página (client-side navigation)
      - Asegúrate de que los estilos activos se aplican correctamente al cambiar de página

4. **Componentes con shadcn/ui (responsive):**
   - Instala componentes de shadcn/ui necesarios usando MCP
   - Consulta documentación de TailwindCSS para personalización avanzada y responsive utilities
   - Personaliza componentes según los estilos extraídos en cada breakpoint, **priorizando layouts y espaciado sobre colores:**
     - **PRIMERO - Aplica layouts y espaciado (ALTA PRIORIDAD):**
       - Implementa cambios de layout responsive (grids, flex, ocultación de elementos) según el diseño original
       - Aplica espaciados (padding, margin, gap) del diseño original usando clases de TailwindCSS con variantes responsive
       - Ajusta tamaños y dimensiones para coincidir en móvil, tablet y desktop
     - **SEGUNDO - Aplica estructura visual (MEDIA PRIORIDAD):**
       - Aplica tipografías del diseño original con variantes responsive
       - Ajusta bordes y sombras para coincidir en móvil, tablet y desktop
           - **TERCERO - Aplica colores del theme de shadcn/ui (BAJA PRIORIDAD, solo después de layouts):**
        - **Usa los colores semánticos del theme de shadcn/ui** (primary, secondary, muted, accent, destructive, etc.) en lugar de intentar replicar colores exactos
        - Consulta la documentación de shadcn/ui sobre el sistema de colores: `get-component-docs <component>` para ver qué colores usa cada componente
        - Mapea los colores del diseño original a los colores semánticos de shadcn/ui que mejor se adapten
        - **NO personalices colores fuera del theme** hasta que layouts y espaciado estén perfectos
        - Los colores del theme de shadcn/ui ya están optimizados para accesibilidad y coherencia visual

4. **Contenido y assets:**
   - Descarga y organiza imágenes necesarias
   - Implementa textos y contenido
   - Configura iconos y elementos visuales

### Fase 2.5: Mejores prácticas de maquetación con Tailwind CSS y shadcn/ui

**CRÍTICO:** Antes de continuar con la comparación, asegúrate de que la implementación sigue las mejores prácticas de maquetación. Esta fase debe ejecutarse durante y después de la implementación inicial.

#### 1. Sistema de Layout y Espaciado

**Principios fundamentales:**

1. **Containers y Max-Width:**
   - Usa `container mx-auto px-4` o `container mx-auto px-4 sm:px-6 lg:px-8` para contenedores principales
   - Define max-width consistente: `max-w-7xl` (1280px) o `max-w-6xl` (1152px) según el diseño original
   - Consulta documentación de TailwindCSS con Context7 sobre containers: `get-library-docs /websites/tailwindcss --topic "container max-width"`
   - Ejemplo correcto:
   ```tsx
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
     {/* contenido */}
   </div>
   ```

2. **Sistema de Espaciado Consistente:**
   - **Section Padding:** Usa padding vertical responsive: `py-16 md:py-20 lg:py-24 xl:py-32`
   - **Gap en Grids:** Usa `gap-4 md:gap-6 lg:gap-8` para espaciado consistente entre items
   - **Gap en Flex:** Prefiere `gap-*` sobre `space-x-*` o `space-y-*` cuando sea posible (mejor performance y más flexible)
   - **Padding Interno de Cards:** Usa `p-6 lg:p-8` para padding responsive interno
   - Consulta documentación de TailwindCSS sobre spacing scale: `get-library-docs /websites/tailwindcss --topic "spacing padding margin gap"`
   - **NO uses valores arbitrarios** a menos que sea absolutamente necesario para coincidir pixel-perfect con el original

3. **Grid Layouts - Mejores Prácticas:**
   - **Mobile-First:** Siempre comienza con 1 columna: `grid grid-cols-1`
   - **Responsive Breakpoints:** Usa breakpoints consistentes:
     - Móvil: `grid-cols-1` (default)
     - Tablet: `md:grid-cols-2`
     - Desktop: `lg:grid-cols-3` o `lg:grid-cols-4`
   - **Grid Asimétrico:** Usa `row-span-*` y `col-span-*` para layouts creativos:
     ```tsx
     <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
       <div className="md:row-span-2">{/* imagen grande */}</div>
       <div>{/* imagen pequeña 1 */}</div>
       <div>{/* imagen pequeña 2 */}</div>
     </div>
     ```
   - **Grid Template Areas:** Para layouts complejos, usa `grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` o valores específicos
   - Consulta documentación: `get-library-docs /websites/tailwindcss --topic "grid layout responsive"`
   - **Subgrid:** Si necesitas alineación precisa en grids anidados, considera `grid-cols-subgrid` (requiere soporte)

4. **Flexbox Layouts - Mejores Prácticas:**
   - **Dirección Responsive:** Usa `flex-col md:flex-row` para cambiar dirección según breakpoint
   - **Alineación:** 
     - Horizontal: `justify-start`, `justify-center`, `justify-between`, `justify-evenly`
     - Vertical: `items-start`, `items-center`, `items-stretch`, `items-baseline`
   - **Wrap:** Usa `flex-wrap` cuando los items puedan desbordarse
   - **Gap sobre Margin:** Prefiere `gap-*` sobre `space-x-*` o `space-y-*`:
     ```tsx
     // ✅ Correcto
     <div className="flex gap-4">
       <Button>1</Button>
       <Button>2</Button>
     </div>
     
     // ⚠️ Evitar (a menos que el diseño original lo requiera)
     <div className="flex space-x-4">
       <Button>1</Button>
       <Button>2</Button>
     </div>
     ```
   - Consulta documentación: `get-library-docs /websites/tailwindcss --topic "flexbox justify align items"`

#### 2. Composición de Componentes shadcn/ui

**Principios de composición:**

1. **Estructura de Componentes:**
   - Usa el patrón de composición de shadcn/ui (componentes padre + subcomponentes)
   - Consulta documentación de cada componente: `get-component-docs <component>`
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

2. **Spacing en Componentes shadcn/ui:**
   - **Carousel:** Usa padding negativo + padding positivo para espaciado:
     ```tsx
     <CarouselContent className="-ml-4 md:-ml-6">
       <CarouselItem className="pl-4 md:pl-6">...</CarouselItem>
     </CarouselContent>
     ```
   - **FieldGroup:** Usa `gap-*` para espaciado entre campos:
     ```tsx
     <FieldGroup className="flex flex-col gap-6">
       <Field>...</Field>
       <Field>...</Field>
     </FieldGroup>
     ```
   - **Sidebar:** Usa `SidebarInset` para correcto spacing cuando el sidebar está presente
   - Consulta documentación específica de cada componente para patrones de spacing

3. **Personalización de Componentes:**
   - Usa `className` prop para extender estilos sin modificar el componente base
   - Mantén la estructura original del componente shadcn/ui
   - Si necesitas cambios significativos, considera crear un wrapper component:
     ```tsx
     export function CustomCard({ children, ...props }) {
       return (
         <Card className="hover:shadow-2xl transition-shadow" {...props}>
           {children}
         </Card>
       )
     }
     ```

#### 3. Estrategias de Layout Responsive

1. **Mobile-First Approach:**
   - **SIEMPRE** comienza con el diseño móvil (sin prefijos)
   - Añade breakpoints progresivamente: `md:`, `lg:`, `xl:`, `2xl:`
   - Ejemplo:
     ```tsx
     <div className="
       grid grid-cols-1 
       md:grid-cols-2 
       lg:grid-cols-3 
       gap-4 
       md:gap-6 
       lg:gap-8
     ">
     ```

2. **Ocultación Selectiva:**
   - Usa `hidden md:block` para ocultar en móvil y mostrar en desktop
   - Usa `block md:hidden` para mostrar solo en móvil
   - Evita `display: none` en CSS personalizado, usa utilidades de Tailwind

3. **Tipografía Responsive:**
   - Usa escala de tamaños responsive: `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
   - Consulta documentación: `get-library-docs /websites/tailwindcss --topic "typography responsive font-size"`

4. **Imágenes Responsive:**
   - Usa Next.js `Image` con `sizes` prop para responsive images
   - Aplica `object-cover` o `object-contain` según necesidad
   - Usa `aspect-ratio` de shadcn/ui para mantener proporciones consistentes

#### 4. Patrones de Layout Comunes

1. **Hero Section:**
   ```tsx
   <section className="relative min-h-screen flex items-center">
     <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         {/* contenido */}
       </div>
     </div>
   </section>
   ```

2. **Feature Grid:**
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
     {features.map((feature) => (
       <Card key={feature.id} className="p-6 lg:p-8">
         {/* contenido */}
       </Card>
     ))}
   </div>
   ```

3. **Asymmetric Image Layout:**
   ```tsx
   <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
     <div className="md:row-span-2">
       {/* imagen grande */}
     </div>
     <div>{/* imagen pequeña 1 */}</div>
     <div>{/* imagen pequeña 2 */}</div>
   </div>
   ```

4. **Centered Content:**
   ```tsx
   <div className="container mx-auto px-4 max-w-4xl">
     <div className="text-center space-y-6">
       <h2>...</h2>
       <p>...</p>
     </div>
   </div>
   ```

#### 5. Validación de Layout

**Antes de pasar a comparación visual, verifica:**

1. ✅ **Containers:** Todos los contenedores principales usan `container mx-auto px-4`
2. ✅ **Espaciado Consistente:** Padding vertical de secciones usa escala responsive
3. ✅ **Grid/Flex:** Todos los layouts usan `gap-*` en lugar de margin cuando sea posible
4. ✅ **Mobile-First:** Todos los componentes comienzan sin prefijos y añaden breakpoints progresivamente
5. ✅ **Max-Width:** Contenedores tienen max-width apropiado según diseño original
6. ✅ **shadcn/ui:** Componentes usan composición correcta y spacing apropiado
7. ✅ **No Overflows:** No hay scroll horizontal no deseado en ningún breakpoint
8. ✅ **Breakpoints Coherentes:** Breakpoints coinciden con el diseño original (verifica con DevTools)

**Herramientas de validación:**
- Usa Chrome DevTools para verificar computed styles en cada breakpoint
- Verifica que no haya conflictos de margin/padding
- Revisa que los grids respeten el `gap` definido
- Asegúrate de que flexbox items se alineen correctamente

**Consulta documentación cuando sea necesario:**
- `get-library-docs /websites/tailwindcss --topic "layout grid flexbox"`
- `get-library-docs /websites/tailwindcss --topic "spacing padding margin gap"`
- `get-library-docs /websites/tailwindcss --topic "responsive design breakpoints"`
- `get-component-docs <component>` para cada componente shadcn/ui usado

### Fase 3: Comparación y depuración (usando DevTools)

1. **Comparación visual (en todos los breakpoints):**
   - Abre ambas páginas lado a lado (original y clone)
   - **Compara en cada breakpoint:** Usa `resize_page` para probar móvil, tablet y desktop
   - Toma screenshots de ambas páginas en cada tamaño para comparación
   - Usa Chrome DevTools en ambas páginas para comparar, **priorizando layouts y espaciado sobre colores:**
     - **PRIMERO - Layouts y Espaciado (ALTA PRIORIDAD):**
       - Layout y dimensiones (box model) y cómo cambian por tamaño
       - Espaciados (padding, margin, gap) y sus variaciones por breakpoint
       - Tamaños de contenedores, elementos y secciones
       - Cambios de layout (grid/column, menús, ocultación de elementos)
       - Alineación y distribución de elementos
       - Problemas de responsive y overflow
     - **SEGUNDO - Estructura Visual (MEDIA PRIORIDAD):**
       - Tipografías y tamaños de fuente (incluyendo cambios responsive)
       - Sombras y efectos visuales principales
       - Bordes y separadores
           - **TERCERO - Colores del Theme (BAJA PRIORIDAD, solo para validar mapeo):**
        - Verifica que los colores usados sean del theme de shadcn/ui (primary, secondary, muted, accent, etc.)
        - NO verifiques coincidencia exacta de colores RGB/HEX con la página original
        - Solo asegúrate de que el mapeo de colores del diseño original a colores semánticos de shadcn/ui sea apropiado
        - Efectos visuales secundarios
     - Computed styles de elementos equivalentes en cada breakpoint, **enfocándose primero en propiedades de layout y espaciado**

2. **Análisis con Next.js DevTools:**
   - Inspecciona el árbol de componentes React en tu clone
   - Verifica que los componentes se renderizan correctamente
   - Identifica componentes que necesitan ajustes

3. **Identificación de diferencias (por breakpoint):**
   - Crea una lista detallada de diferencias encontradas en cada breakpoint, **organizadas por prioridad (layouts primero, colores al final):**
     - **ALTA PRIORIDAD - Layouts y Espaciado:**
       - Diferencias de espaciado (paddings, margins, gaps y cómo varían por breakpoint)
       - Diferencias de tamaño y dimensiones (contenedores, elementos, secciones)
       - Elementos mal posicionados o con layout incorrecto
       - Problemas de responsive (elementos que no se adaptan, overflow, desbordamientos)
       - Diferencias en grids, flexbox, y estructuras de layout
       - Breakpoints que no coinciden con el diseño original
       - Elementos faltantes o mal ocultados en ciertos breakpoints
     - **MEDIA PRIORIDAD - Estructura Visual:**
       - Diferencias de tipografía (tamaños de fuente responsive, line-height, letter-spacing)
       - Diferencias de bordes y sombras
       - Animaciones o transiciones faltantes
           - **BAJA PRIORIDAD - Colores del Theme (solo validar mapeo, no coincidencia exacta):**
        - Verificar que se usen colores del theme de shadcn/ui apropiados
        - NO documentar diferencias de color exacto (RGB/HEX) con la página original
        - Solo validar que el mapeo de colores del diseño original a colores semánticos de shadcn/ui sea apropiado
        - Efectos visuales secundarios (gradientes sutiles, transparencias menores)
   - **Documenta primero las diferencias de layout y espaciado** antes de detallar diferencias de color

### Fase 4: Iteración y refinamiento

1. **Priorización de correcciones:**
   - Organiza las diferencias por prioridad (alta, media, baja)
   - **PRIORIDAD ALTA - Layouts y Espaciado (CRÍTICO):**
     - Diferencias en paddings, margins y gaps (incluyendo variaciones por breakpoint)
     - Problemas de layout (grid, flexbox, positioning)
     - Problemas de responsive (elementos que no se adaptan, overflow, desbordamientos)
     - Espaciado vertical y horizontal entre secciones y componentes
     - Tamaños y dimensiones de contenedores y elementos
     - Alineación y distribución de elementos
   - **PRIORIDAD MEDIA - Estructura Visual:**
     - Tipografías y tamaños de fuente (incluyendo responsive)
     - Bordes y sombras
     - Espaciado interno de componentes
       - **PRIORIDAD BAJA - Colores del Theme:**
      - Verificar que se usen colores semánticos del theme de shadcn/ui (primary, secondary, muted, accent, etc.)
      - NO intentar replicar colores exactos de la página original
      - Solo ajustar el mapeo de colores si el tema elegido no es apropiado
      - Efectos visuales secundarios (gradientes sutiles, transparencias menores)
    - **Regla de oro:** Corrige layout y espaciado antes que cualquier ajuste de color. Un layout incorrecto es mucho más notorio que cualquier diferencia de color. Los colores del theme de shadcn/ui ya están optimizados.

2. **Ajustes incrementales (con enfoque responsive y mejores prácticas de layout):**
   - Para cada diferencia identificada en cada breakpoint, **corrige en orden de prioridad (layouts primero, colores al final):**
     - **PRIMERO - Corrige Layouts y Espaciado (ALTA PRIORIDAD):**
       - **Consulta documentación de TailwindCSS con Context7:**
         - Layout y espaciado: `get-library-docs /websites/tailwindcss --topic "layout grid flexbox spacing"`
         - Breakpoints y responsive: `get-library-docs /websites/tailwindcss --topic "responsive design breakpoints"`
         - Container y max-width: `get-library-docs /websites/tailwindcss --topic "container max-width"`
       - **Aplica mejores prácticas de maquetación:**
         - Usa `gap-*` en lugar de `space-x-*` o `space-y-*` cuando sea posible
         - Asegura que containers usen `container mx-auto px-4` con max-width apropiado
         - Verifica que padding vertical de secciones use escala responsive (`py-16 md:py-20 lg:py-24`)
         - Aplica mobile-first: comienza sin prefijos y añade breakpoints progresivamente
       - **Ajusta estilos CSS o clases de Tailwind** con variantes responsive (sm:, md:, lg:, xl:, 2xl:) enfocándote en:
         - Padding, margin y gap (usando valores de la escala de Tailwind)
         - Width, height, max-width, min-width
         - Display, grid, flexbox properties
         - **NO uses valores arbitrarios** a menos que sea absolutamente necesario para coincidir pixel-perfect
         - Prefiere clases de utilidad de Tailwind sobre CSS personalizado
       - **Modifica componentes de shadcn/ui** si es necesario, asegurando que:
         - Mantengan la estructura de composición original
         - Usen spacing apropiado según documentación del componente
         - Sean responsive desde su implementación
       - **Crea componentes personalizados** cuando sea requerido usando mejores prácticas de React y responsive design
       - **Verifica cambios en tiempo real** en todos los breakpoints usando `resize_page`
       - **Asegura que los ajustes funcionen correctamente** en móvil, tablet y desktop
       - **Valida que no se introduzcan problemas de layout:** overflow horizontal, elementos cortados, espaciado inconsistente
     - **SEGUNDO - Corrige Estructura Visual (MEDIA PRIORIDAD):**
       - Tipografías y tamaños de fuente (incluyendo responsive)
       - Bordes y sombras principales
       - Consulta documentación: `get-library-docs /websites/tailwindcss --topic "typography responsive font-size"`
           - **TERCERO - Aplica colores del theme de shadcn/ui (BAJA PRIORIDAD, solo después de corregir layouts):**
        - **Usa colores semánticos del theme de shadcn/ui** (primary, secondary, muted, accent, destructive, etc.)
        - Consulta documentación de shadcn/ui: `get-component-docs <component>` para ver qué colores usa cada componente
        - Mapea los colores del diseño original a colores semánticos de shadcn/ui apropiados
        - **NO intentes replicar colores exactos (RGB/HEX)** de la página original
        - **NO ajustes colores hasta que layouts y espaciado estén perfectos**
        - Los colores del theme de shadcn/ui ya están optimizados para accesibilidad y coherencia
        - Efectos visuales secundarios
     - **Consulta documentación de React si necesitas implementar patrones avanzados o hooks** (como useMediaQuery) para mejorar layouts responsive

3. **Verificación continua (responsive):**
   - Después de cada ajuste, compara nuevamente con la original en todos los breakpoints
   - Toma screenshots para documentar el progreso en móvil, tablet y desktop
   - Verifica que no se hayan introducido nuevos problemas de responsive
   - Comprueba que no haya overflow horizontal, elementos cortados o mal posicionados

### Fase 5: Validación final y verificación de criterios

**CRÍTICO: Esta fase DEBE ejecutarse en cada iteración antes de considerar la tarea completa.**

1. **Comparación exhaustiva (responsive):**
   - Compara sección por sección en cada breakpoint (móvil, tablet, desktop)
   - Verifica responsive design exhaustivamente:
     - **Móvil (375px):** Layout vertical, menús hamburguesa, textos legibles, botones accesibles
     - **Tablet (768px):** Layout intermedio, grids adaptados, elementos bien espaciados
     - **Desktop (1920px):** Layout completo, todos los elementos visibles, hover states funcionando
   - Valida interactividad (hover, clicks, animaciones) en todos los dispositivos
   - Revisa estados (loading, error, empty) en cada breakpoint
   - Verifica que no haya problemas de overflow, scroll horizontal no deseado, o elementos cortados

2. **Testing funcional:**
   - Verifica que todas las funcionalidades trabajen correctamente
   - Prueba formularios y validaciones
   - **Verifica navegación y enlaces del menú principal:**
     - Prueba cada enlace del menú navegando a todas las páginas
     - Verifica que la navegación es client-side (sin recargar la página)
     - Confirma que los enlaces activos se destacan correctamente en cada página
     - Valida que el menú hamburguesa funciona en móvil y enlaza correctamente
     - Verifica que todas las rutas del mapeo `menuNavigation` tienen páginas correspondientes
   - Valida que no haya errores en consola

3. **Optimización:**
   - Revisa performance con Chrome DevTools Performance Profiler
   - Verifica que no haya re-renders innecesarios con Next.js DevTools
   - Optimiza imágenes y assets
   - Verifica accesibilidad básica

4. **Verificación obligatoria de criterios de finalización:**
   - **DEBES verificar cada ítem de la sección "Criterios de finalización"** antes de considerar la tarea completa
   - **Crea una lista de verificación** documentando el estado de cada criterio:
     - ✅ Cumplido / ❌ No cumplido / ⚠️ Parcialmente cumplido
   - **Si algún criterio NO está cumplido:**
     - **NO debes finalizar la tarea**
     - **DEBES continuar iterando** automáticamente
     - Documenta qué criterios faltan y crea un plan de acción para la siguiente iteración
     - Vuelve a la Fase 4 (Iteración y refinamiento) para corregir los criterios faltantes
   - **Solo cuando TODOS los criterios estén cumplidos** puedes considerar la tarea completa
   - **Documenta la verificación** en la salida de la iteración, mostrando claramente el estado de cada criterio

## Herramientas a utilizar

### shadcn/ui MCP
- `list-components`: Lista todos los componentes disponibles
- `get-component-docs <component>`: Obtiene documentación de un componente
- `install-component <component>`: Instala un componente en el proyecto
- `list-blocks`: Lista bloques pre-construidos disponibles
- `get-block-docs <block>`: Obtiene documentación de un block
- `install-blocks <block>`: Instala un block completo

### Chrome DevTools MCP
- `navigate_page <url>`: Navega a la página original
- `take_snapshot`: Captura el estado actual del DOM
- `take_screenshot`: Captura visual de la página (usa `fullPage: true` para capturas completas)
- `resize_page <width> <height>`: **CRÍTICO para responsive** - Cambia el tamaño de la página para probar diferentes breakpoints
  - Móvil: `resize_page 375 667`
  - Tablet: `resize_page 768 1024`
  - Desktop: `resize_page 1920 1080`
- `evaluate_script`: Extrae información de estilos y dimensiones (útil para detectar media queries)
- `list_network_requests`: Identifica recursos cargados

### Next.js DevTools
- Inspección del árbol de componentes
- Análisis de props y estado
- Identificación de re-renders

### Context7 MCP
- `resolve-library-id <libraryName>`: Resuelve el ID de una librería (ej: "next.js", "react", "tailwindcss")
- `get-library-docs <libraryId> --topic <topic>`: Obtiene documentación de una librería
  - Útil para consultar:
    - **Next.js**: App Router, Server Components, routing, layouts, metadata
    - **React**: Componentes, hooks, estado, efectos, patrones
    - **TailwindCSS**: 
      - **Layout y espaciado:** `--topic "layout grid flexbox spacing padding margin gap"`
      - **Responsive design:** `--topic "responsive design breakpoints mobile-first"`
      - **Container y max-width:** `--topic "container max-width"`
      - **Tipografía:** `--topic "typography responsive font-size"`
      - Clases de utilidad, customización, dark mode
    - **shadcn/ui**: Composición de componentes, spacing patterns, responsive components
    - **Framer Motion**: Animaciones y transiciones (si se detectan en la página original)
    - **Otras librerías**: Según las tecnologías utilizadas en la página original

## Prompts relacionados y uso complementario

### Referencia a devtools.prompt.md

Si durante el proceso de clonación encuentras problemas específicos que requieren un análisis más profundo de depuración, puedes usar el prompt `/devtools` de forma complementaria:

- **Cuándo usar `/devtools`:**
  - Cuando encuentres errores de hidratación de Next.js
  - Cuando necesites analizar problemas de rendimiento específicos
  - Cuando identifiques componentes que se re-renderizan innecesariamente
  - Cuando necesites correlacionar errores de consola con componentes específicos
  - Cuando requieras un análisis detallado del árbol de componentes React

- **Cómo usar ambos prompts juntos:**
  1. Usa `/clone-page` para el proceso general de clonación iterativa
  2. Si encuentras un problema específico de depuración, usa `/devtools` con:
     - El problema específico a depurar
     - La URL o ruta afectada
     - La severidad del problema
  3. Una vez resuelto el problema de depuración, vuelve a `/clone-page` para continuar con la iteración

- **Ejemplo de flujo:**
  ```
  1. `/clone-page` → Identifica diferencia visual en el Hero
  2. `/devtools` → Analiza por qué el componente Hero se re-renderiza constantemente
  3. `/clone-page` → Aplica la corrección y continúa con la siguiente diferencia
  ```

El prompt `/devtools` proporciona una metodología estructurada para depurar problemas específicos usando Chrome DevTools y Next.js DevTools de forma complementaria, mientras que `/clone-page` se enfoca en el proceso iterativo completo de clonación visual.

## Salida esperada por iteración

Para cada iteración, proporciona:

1. **Análisis de la iteración actual:**
   - Qué se implementó o ajustó en esta iteración
   - Screenshots comparativos (antes/después) en todos los breakpoints
   - Lista de diferencias encontradas y corregidas, **organizadas por prioridad (layouts primero, colores al final)**
   - **Enfócate en reportar primero correcciones de layouts y espaciado** antes de mencionar ajustes de color

2. **Verificación de criterios de finalización (OBLIGATORIO):**
   - **Lista de verificación completa** de todos los criterios de finalización:
     - ✅ Visualmente idéntico o casi idéntico (< 5% diferencias) en todos los breakpoints
     - ✅ Todos los componentes principales implementados y funcionando
     - ✅ Responsive design perfecto (móvil, tablet, desktop)
     - ✅ Breakpoints coinciden con el diseño original
     - ✅ Mejores prácticas de maquetación aplicadas (todos los sub-criterios)
     - ✅ Interactividad completa en todos los dispositivos
     - ✅ Sin errores en consola
     - ✅ Performance aceptable
     - ✅ Código limpio y bien estructurado
   - **Estado de cada criterio:** ✅ Cumplido / ❌ No cumplido / ⚠️ Parcialmente cumplido
   - **Si hay criterios NO cumplidos:** Documenta específicamente qué falta y por qué

3. **Diferencias restantes:**
   - Lista detallada de lo que aún falta o necesita ajuste
   - Priorización de las siguientes correcciones
   - Estimación de complejidad
   - **Relación con criterios no cumplidos:** Vincula cada diferencia con los criterios de finalización afectados

4. **Decisión de continuidad:**
   - **Si TODOS los criterios están cumplidos:** Tarea completa, proporciona resumen final
   - **Si hay criterios NO cumplidos:** 
     - **DEBES continuar iterando automáticamente**
     - No finalices la tarea
     - Proporciona plan de acción detallado para la siguiente iteración

5. **Próximos pasos (si aplica):**
   - Plan de acción para la siguiente iteración
   - Componentes de shadcn/ui a instalar/ajustar
   - Ajustes de CSS/Tailwind necesarios
   - Criterios específicos a abordar

6. **Código generado:**
   - Archivos creados o modificados
   - Componentes implementados
   - Estilos aplicados

## Criterios de finalización

El clone se considera completo cuando:

- ✅ Visualmente idéntico o casi idéntico a la original en todos los breakpoints (diferencias < 5%)
- ✅ Todos los componentes principales implementados y funcionando correctamente
- ✅ **Navegación del menú principal funcionando correctamente:**
  - ✅ Todos los enlaces del menú apuntan a las rutas correctas según el mapeo `menuNavigation`
  - ✅ Navegación client-side funciona sin recargar la página (usando Next.js Link)
  - ✅ Enlaces activos se destacan correctamente usando `usePathname()`
  - ✅ Menú hamburguesa funciona correctamente en móvil
  - ✅ Todas las rutas del menú tienen páginas correspondientes creadas
- ✅ **Responsive design funcionando perfectamente:**
  - ✅ Móvil (375px): Layout correcto, sin overflow, elementos accesibles
  - ✅ Tablet (768px): Layout intermedio funcional
  - ✅ Desktop (1920px): Layout completo con todos los elementos
- ✅ Breakpoints coinciden con el diseño original
- ✅ **Mejores prácticas de maquetación aplicadas:**
  - ✅ Containers usan `container mx-auto px-4` con max-width apropiado
  - ✅ Espaciado consistente usando escala de Tailwind (no valores arbitrarios)
  - ✅ Grids y flexbox usan `gap-*` en lugar de margin cuando sea posible
  - ✅ Mobile-first approach aplicado en todos los componentes
  - ✅ Componentes shadcn/ui usan composición correcta y spacing apropiado
  - ✅ No hay overflow horizontal en ningún breakpoint
  - ✅ Padding vertical de secciones usa escala responsive
- ✅ Interactividad completa (hover, clicks, animaciones) en todos los dispositivos
- ✅ Sin errores en consola
- ✅ Performance aceptable en todos los dispositivos
- ✅ Código limpio, bien estructurado y con enfoque mobile-first

## Ejemplo de uso

**Iteración 1:**
- URL original: https://best-luxury-hotel-in-the-world.vercel.app/
- Prioridad: Hero section, Navbar, Cards de habitaciones
- Iteración: primera vez

**Proceso:**
1. Análisis de la página original con Chrome DevTools en móvil, tablet y desktop usando `resize_page`
2. Consulta documentación de Next.js con Context7 para estructura de rutas
3. Consulta documentación de TailwindCSS con Context7:
   - Layout y espaciado: `get-library-docs /websites/tailwindcss --topic "layout grid flexbox spacing"`
   - Breakpoints y responsive: `get-library-docs /websites/tailwindcss --topic "responsive design breakpoints"`
   - Container: `get-library-docs /websites/tailwindcss --topic "container max-width"`
4. Instalación de componentes shadcn/ui: Card, Button, Badge
5. Implementación inicial del Hero, Navbar y Cards aplicando mejores prácticas:
   - Containers con `container mx-auto px-4` y max-width apropiado
   - Grids con `gap-*` responsive
   - Mobile-first approach en todos los componentes
   - Padding vertical responsive en secciones
6. Validación de layout según Fase 2.5
7. Comparación visual en todos los breakpoints identificando diferencias de espaciado y layout (priorizando layouts, no colores exactos)
8. Lista de ajustes responsive y de maquetación para iteración 2 (enfoque en layouts y espaciado)

**Iteración 2:**
- Mismo contexto
- Iteración: 2

**Proceso:**
1. Consulta documentación de TailwindCSS con Context7:
   - Layout y espaciado: `get-library-docs /websites/tailwindcss --topic "layout grid flexbox spacing"`
   - Espaciados responsive
   - Tipografía: `get-library-docs /websites/tailwindcss --topic "typography responsive font-size"`
2. Ajuste de espaciados según diferencias encontradas en cada breakpoint (priorizando layouts):
   - Aplicando `gap-*` en lugar de margin cuando sea posible
   - Verificando containers y max-width
   - Ajustando padding vertical con escala responsive
3. Corrección de problemas de responsive identificados (overflow, elementos mal posicionados)
4. Consulta documentación de React con Context7 si se necesitan patrones avanzados (useMediaQuery, etc.)
5. Implementación de Footer responsive usando mejores prácticas de layout
6. Ajuste de tipografías usando documentación de TailwindCSS con variantes responsive
7. Validación de layout según Fase 2.5
8. Comparación visual en todos los breakpoints mostrando mejora
9. Lista de ajustes finos responsive y de maquetación para iteración 3

## Regla de iteración obligatoria

**CRÍTICO: DEBES iterar automáticamente hasta que TODOS los criterios de finalización se cumplan.**

- **NO finalices la tarea** hasta que hayas verificado y cumplido cada ítem de la sección "Criterios de finalización"
- **En cada iteración:** Ejecuta la Fase 5 (Validación final y verificación de criterios) y documenta el estado de cada criterio
- **Si hay criterios no cumplidos:** Continúa automáticamente con la siguiente iteración sin esperar instrucciones del usuario
- **Solo cuando TODOS los criterios estén cumplidos:** Considera la tarea completa y proporciona un resumen final

Continúa iterando hasta lograr el clone completo y responsive. **IMPORTANTE:** 

1. **En cada paso, verifica y compara en móvil, tablet y desktop** usando `resize_page`
2. **Usa DevTools en cada paso** para validar y comparar en todos los breakpoints
3. **Consulta Context7** para documentación cuando necesites implementar funcionalidades específicas de Next.js, React, TailwindCSS (especialmente layout, spacing, responsive utilities) u otras librerías
4. **Aplica mejores prácticas de maquetación** en cada iteración:
   - Usa containers, max-width y espaciado consistente
   - Prefiere `gap-*` sobre margin cuando sea posible
   - Aplica mobile-first approach
   - Valida layouts según Fase 2.5 antes de continuar
5. **El diseño responsive y las mejores prácticas de layout** son prioridad en cada iteración
6. **Al finalizar cada iteración:** Verifica obligatoriamente todos los criterios de finalización antes de decidir continuar o finalizar

