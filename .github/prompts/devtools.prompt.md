---
mode: 'agent'
description: 'Depura aplicaciones Next.js usando Chrome DevTools y Next.js DevTools de forma conjunta'
---

# Depuración e Inspección con Chrome DevTools y Next.js DevTools

Depura problemas, inspecciona elementos/estilos y clona diseños de tu aplicación Next.js utilizando Chrome DevTools y Next.js DevTools de forma complementaria.

## Contexto del problema

**Tipo de tarea:** ${input:taskType:Depuración / Inspección de estilos / Clonación de diseño / Comparación de sitios}

**Problema a depurar/analizar:** ${input:problem:Describe el problema, la funcionalidad que necesitas depurar o el elemento/diseño que quieres clonar (ej: error de hidratación, problema de rendimiento, botón con estilos específicos, layout de un componente, etc.)}

**URL o ruta afectada:** ${input:url:URL o ruta de la página afectada (ej: /rooms, /booking, https://sitio-referencia.com)}

**URL de referencia (opcional):** ${input:refUrl:URL del sitio de referencia si estás clonando/comparando diseños}

**Severidad:** ${input:severity:Alta / Media / Baja}

## Pasos a seguir

### 1. Preparación del entorno
- Asegúrate de tener Next.js DevTools instalado y configurado en tu proyecto
- Inicia el servidor de desarrollo si no lo estuviera ya: `pnpm dev`
- Abre Chrome DevTools utilizando el mcp devtools chrome
- Si estás comparando sitios, abre ambas URLs en pestañas separadas

### 2. Análisis con Next.js DevTools (para debugging de tu app)
- Usa Next.js DevTools para:
  - Inspeccionar el árbol de componentes React
  - Revisar el estado y props de los componentes
  - Identificar componentes que se re-renderizan innecesariamente
  - Analizar el tiempo de carga de cada componente

### 3. Análisis con Chrome DevTools

#### Para debugging general:
- Usa Chrome DevTools para:
  - Revisar la consola de errores y warnings
  - Inspeccionar la pestaña Network para verificar peticiones HTTP
  - Analizar el rendimiento con Performance Profiler
  - Revisar el almacenamiento (LocalStorage, SessionStorage, Cookies)
  - Inspeccionar elementos del DOM y aplicar cambios en tiempo real

#### Para inspección y clonación de estilos:
- **Pestaña Elements:**
  - Selecciona el elemento a inspeccionar usando el selector (⌘+Shift+C o Ctrl+Shift+C)
  - En el panel derecho, revisa todas las pestañas:
    - **Styles:** CSS aplicado, especificidad, hojas de estilo, variables CSS
    - **Computed:** Valores finales calculados de todas las propiedades CSS
    - **Layout:** Box model (margin, border, padding, dimensiones)
    - **Event Listeners:** Eventos JavaScript asociados
    - **Properties:** Propiedades del objeto DOM
  
- **Extracción completa de estilos:**
  1. Click derecho en el elemento → "Inspect"
  2. En Styles, copia todos los selectores y reglas CSS aplicadas
  3. En Computed, verifica valores finales (incluyendo herencias)
  4. Anota las variables CSS usadas (busca `--variable-name`)
  5. Verifica pseudo-elementos (::before, ::after) y pseudo-clases (:hover, :focus)
  6. Captura fuentes personalizadas desde la pestaña "Computed" → Font
  7. Revisa animaciones y transiciones en la pestaña "Animations"

- **Comparación entre dos sitios:**
  1. Inspecciona el mismo elemento en ambos sitios
  2. Compara lado a lado:
     - Estructura HTML (nesting, clases, IDs)
     - Propiedades CSS (colores, tamaños, espaciados)
     - Box model (margins, paddings exactos)
     - Tipografía (font-family, size, weight, line-height, letter-spacing)
     - Sombras (box-shadow, text-shadow)
     - Bordes y border-radius
     - Backgrounds (colors, gradients, images, positions)
     - Transformaciones y transiciones
  3. Toma screenshots de ambos elementos con "Capture node screenshot"
  4. Usa la herramienta "Coverage" para ver CSS no utilizado

- **Herramientas avanzadas de Chrome DevTools:**
  - **Color Picker:** Extrae colores exactos (hex, rgb, hsl) con el eyedropper
  - **CSS Overview:** Panel → More tools → CSS Overview (analiza colores, fuentes, media queries del sitio completo)
  - **Lighthouse:** Analiza accesibilidad y best practices del diseño
  - **Rendering Tab:** Visualiza repaint areas, layout shifts, y rendering issues
  - **Animations Tab:** Inspecciona y modifica animaciones CSS/JS frame por frame

### 4. Análisis conjunto
- Combina información de ambas herramientas:
  - Correlaciona los componentes re-renderizados (Next.js DevTools) con los eventos del Performance Profiler (Chrome DevTools)
  - Verifica si los errores de consola (Chrome DevTools) corresponden a componentes específicos (Next.js DevTools)
  - Analiza cómo las peticiones de red (Chrome DevTools) afectan el estado de los componentes (Next.js DevTools)
  - Para clonación: Mapea los elementos DOM inspeccionados a los componentes React correspondientes

### 5. Clonación y replicación de diseños

#### Proceso de clonación paso a paso:
1. **Estructura HTML:**
   - Copia el árbol DOM del elemento desde Elements tab
   - Identifica las clases y estructura semántica
   - Documenta data-attributes relevantes

2. **Estilos CSS:**
   - Exporta todos los estilos del elemento (click derecho → Copy → Copy styles)
   - Copia valores computed para propiedades clave
   - Extrae variables CSS personalizadas del :root
   - Documenta media queries relevantes

3. **Recursos externos:**
   - Descarga fuentes customizadas (Network tab → Filter: Font)
   - Guarda imágenes y assets (Network tab → Filter: Img)
   - Extrae SVGs y iconos inlineados

4. **JavaScript e interacciones:**
   - Revisa Event Listeners asociados
   - Documenta animaciones y transiciones
   - Identifica librerías de terceros usadas (Sources tab)

5. **Implementación en tu proyecto:**
   - Crea el componente React equivalente
   - Traduce las clases CSS a tu sistema de estilos (CSS Modules, Tailwind, styled-components, etc.)
   - Implementa las interacciones con React hooks
   - Ajusta para responsive design

### 6. Solución y verificación
- Implementa las correcciones o el diseño clonado
- Verifica la solución usando ambas herramientas para confirmar que el problema se resolvió o que el diseño es idéntico
- Compara visualmente usando overlays o comparación lado a lado
- Valida con Lighthouse que mantienes buenas prácticas

## Salida esperada

Proporciona:
- Análisis detallado del problema o diseño usando ambas herramientas
- Capturas o evidencia de lo encontrado en cada herramienta
- Para debugging: Pasos específicos para reproducir el problema
- Para clonación: Documentación completa de:
  - Estructura HTML del elemento
  - Todos los estilos CSS aplicados (incluyendo computed values)
  - Box model detallado (margins, paddings, borders)
  - Tipografía completa (fonts, sizes, weights, spacing)
  - Colores exactos (con códigos hex/rgb)
  - Animaciones y transiciones
  - Assets externos (fuentes, imágenes, iconos)
- Solución propuesta con código si es necesario
- Para clonación: Componente React + estilos implementados
- Verificación de que la solución/clonación funciona usando ambas herramientas
- Comparación visual (screenshots) antes/después o original/clon

## Ejemplos de uso

### Ejemplo 1: Debugging
**Problema:** "Los componentes se re-renderizan constantemente cuando cambio de página"

**Análisis sugerido:**
1. Next.js DevTools: Identificar qué componentes se re-renderizan y por qué
2. Chrome DevTools: Revisar Performance Profiler para ver el patrón de re-renders
3. Chrome DevTools: Verificar si hay listeners de eventos sin limpiar en la consola
4. Combinar: Correlacionar los re-renders con eventos de red o cambios de estado
5. Solución: Implementar memoización o corregir dependencias de useEffect

### Ejemplo 2: Clonación de diseño
**Problema:** "Quiero clonar exactamente el botón de CTA de https://ejemplo.com"

**Análisis sugerido:**
1. Chrome DevTools Elements: Inspeccionar el botón en el sitio de referencia
2. Copiar estructura HTML y todas las clases
3. Extraer todos los estilos (Styles + Computed):
   - Background: gradient linear de #FF6B6B a #FF8E53
   - Padding: 16px 32px
   - Border-radius: 8px
   - Font: 'Inter', 16px, weight 600
   - Box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3)
   - Transition: all 0.3s ease
   - Hover: transform: translateY(-2px), box-shadow aumenta
4. Revisar Event Listeners para interacciones
5. Crear componente Button.tsx con los estilos exactos
6. Verificar visualmente con screenshot comparison

### Ejemplo 3: Comparación de sitios
**Problema:** "Mi header no se ve igual que el de referencia, necesito identificar las diferencias"

**Análisis sugerido:**
1. Abrir ambos sitios en pestañas separadas
2. Inspeccionar header en ambos con Chrome DevTools
3. Comparar en Computed tab:
   - Alturas (tu sitio: 64px, referencia: 80px) ← Diferencia encontrada
   - Paddings horizontales (tu sitio: 16px, referencia: 24px) ← Diferencia encontrada
   - Font sizes del logo (tu sitio: 18px, referencia: 20px) ← Diferencia encontrada
4. Comparar box-shadow: Referencia tiene sombra sutil, tu sitio no
5. Implementar correcciones con los valores exactos
6. Tomar screenshots de ambos para verificación visual

## Tips para clonación precisa

- **Usa el eyedropper** para extraer colores exactos de cualquier pixel
- **Copia el estilo computed** para tener valores finales sin ambigüedades
- **Revisa las fuentes** en la pestaña Computed → Rendered Fonts para ver exactamente qué tipografía se renderiza
- **Inspecciona hover states** activando `:hov` en la pestaña Styles
- **Usa "Capture node screenshot"** para comparaciones pixel-perfect
- **Exporta CSS** con click derecho → Copy → Copy styles para todo el elemento de una vez
- **Compara responsive** usando Device Toolbar (⌘+Shift+M) en diferentes breakpoints

Usa ambos DevTools de forma complementaria para obtener una visión completa del problema o para clonar diseños con precisión pixel-perfect.
