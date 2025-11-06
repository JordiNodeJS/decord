---
mode: "agent"
description: "Implementa y verifica accesibilidad web según WCAG 2.2 (Web Content Accessibility Guidelines 2.2)"
---

# Accesibilidad Web según WCAG 2.2

Implementa y verifica que tu aplicación web cumpla con los estándares de accesibilidad WCAG 2.2 (Web Content Accessibility Guidelines 2.2).

## Contexto de la tarea

**Tipo de verificación:** ${input:verificationType:Auditoría completa / Verificación específica / Implementación de mejora / Corrección de error de accesibilidad}

**Nivel de conformidad objetivo:** ${input:conformanceLevel:A / AA / AAA}

**Componente o página a revisar:** ${input:component:Describe el componente, página o funcionalidad específica a revisar (ej: formulario de contacto, navegación principal, galería de imágenes, etc.)}

**Problema específico (si aplica):** ${input:issue:Describe el problema de accesibilidad identificado o la mejora que necesitas implementar}

**URL o ruta afectada:** ${input:url:URL o ruta de la página afectada (ej: /contact, /gallery, /about)}

## Principios fundamentales de WCAG 2.2

### 1. Perceptible

- **1.1 Texto alternativo:** Todo contenido no textual debe tener texto alternativo
- **1.2 Medios temporales:** Proporcionar alternativas para audio y video
- **1.3 Adaptable:** Crear contenido que se pueda presentar de diferentes formas
- **1.4 Distinguible:** Facilitar que los usuarios vean y oigan el contenido

### 2. Operable

- **2.1 Accesible por teclado:** Toda funcionalidad debe ser accesible mediante teclado
- **2.2 Tiempo suficiente:** Proporcionar tiempo suficiente para leer y usar el contenido
- **2.3 Convulsiones:** No diseñar contenido que pueda causar convulsiones
- **2.4 Navegable:** Proporcionar formas de ayudar a los usuarios a navegar

### 3. Comprensible

- **3.1 Legible:** Hacer el contenido de texto legible y comprensible
- **3.2 Predecible:** Hacer que las páginas web aparezcan y funcionen de manera predecible
- **3.3 Asistencia de entrada:** Ayudar a los usuarios a evitar y corregir errores

### 4. Robusto

- **4.1 Compatible:** Maximizar la compatibilidad con las tecnologías asistivas actuales y futuras

## Criterios de conformidad WCAG 2.2 (nuevos y actualizados)

### Nuevos criterios en WCAG 2.2:

- **2.4.11 Focus Not Obscured (Minimum) (AA):** El foco del teclado no debe estar completamente oculto
- **2.4.12 Focus Not Obscured (Enhanced) (AAA):** El foco del teclado no debe estar parcialmente oculto
- **2.4.13 Focus Appearance (Minimum) (AA):** El indicador de foco debe tener un área mínima
- **2.4.14 Focus Appearance (Enhanced) (AAA):** El indicador de foco debe tener un área y contraste mejorados
- **2.5.7 Dragging Movements (AA):** Las acciones de arrastrar deben tener una alternativa accesible por teclado
- **2.5.8 Target Size (Minimum) (AA):** Los objetivos interactivos deben tener un tamaño mínimo de 24x24 CSS pixels
- **3.2.6 Consistent Help (A):** Si hay ayuda disponible, debe estar en un lugar consistente
- **3.3.7 Redundant Entry (A):** No requerir que el usuario ingrese la misma información dos veces
- **3.3.8 Accessible Authentication (Minimum) (AA):** No requerir que el usuario resuelva un rompecabezas para autenticarse
- **3.3.9 Accessible Authentication (Enhanced) (AAA):** No requerir que el usuario use una autenticación cognitiva

## Checklist de verificación por categoría

### Texto alternativo y contenido no textual

- [ ] Todas las imágenes tienen atributo `alt` descriptivo
- [ ] Las imágenes decorativas usan `alt=""` (vacío)
- [ ] Los iconos tienen texto alternativo o `aria-label`
- [ ] Los gráficos y diagramas tienen descripciones detalladas
- [ ] Los botones con solo iconos tienen `aria-label` o texto visible
- [ ] Los campos de formulario tienen etiquetas asociadas (`<label>` o `aria-labelledby`)

### Navegación y estructura

- [ ] La página tiene un encabezado principal (`<h1>`)
- [ ] Los encabezados están en orden jerárquico (h1 → h2 → h3)
- [ ] Hay landmarks ARIA apropiados (`<nav>`, `<main>`, `<aside>`, etc.)
- [ ] Los enlaces tienen texto descriptivo (evitar "clic aquí", "más info")
- [ ] Hay un mecanismo para saltar al contenido principal (skip link)
- [ ] La navegación es consistente en todas las páginas
- [ ] Los breadcrumbs están implementados correctamente

### Interacción por teclado

- [ ] Todo el contenido es accesible mediante teclado (Tab, Enter, Espacio, flechas)
- [ ] El orden de tabulación es lógico y sigue el flujo visual
- [ ] Los elementos interactivos tienen indicador de foco visible
- [ ] El foco no queda atrapado en ningún componente
- [ ] Los modales y diálogos pueden cerrarse con Esc
- [ ] Las acciones de arrastrar tienen alternativa por teclado
- [ ] Los objetivos interactivos tienen tamaño mínimo de 24x24px

### Formularios

- [ ] Todos los campos tienen etiquetas asociadas
- [ ] Los campos requeridos están marcados claramente
- [ ] Los mensajes de error son descriptivos y están asociados al campo
- [ ] Los mensajes de error se anuncian a lectores de pantalla (`aria-live`)
- [ ] No se requiere ingresar la misma información dos veces (redundancia)
- [ ] Los campos tienen `autocomplete` cuando es apropiado
- [ ] Los grupos de campos relacionados usan `<fieldset>` y `<legend>`

### Contraste y legibilidad

- [ ] El contraste de texto es al menos 4.5:1 para texto normal (AA)
- [ ] El contraste de texto es al menos 3:1 para texto grande (18pt+ o 14pt+ bold) (AA)
- [ ] El contraste de texto es al menos 7:1 para texto normal (AAA)
- [ ] El contraste de componentes UI es al menos 3:1 (AA)
- [ ] El texto puede redimensionarse hasta 200% sin pérdida de funcionalidad
- [ ] No se usa solo el color para transmitir información

### Multimedia

- [ ] Los videos tienen subtítulos (closed captions)
- [ ] Los videos tienen transcripciones o descripciones de audio
- [ ] Los controles de video son accesibles por teclado
- [ ] No hay contenido que parpadee más de 3 veces por segundo
- [ ] Los audios tienen transcripciones

### ARIA y semántica

- [ ] Se usa HTML semántico cuando es posible (preferir `<button>` sobre `<div>`)
- [ ] Los roles ARIA se usan solo cuando es necesario
- [ ] Los estados ARIA están actualizados (`aria-expanded`, `aria-selected`, etc.)
- [ ] Las regiones live están configuradas correctamente (`aria-live="polite"` o `"assertive"`)
- [ ] Los landmarks ARIA están implementados correctamente
- [ ] No hay conflictos entre roles ARIA y elementos HTML semánticos

### Responsive y adaptabilidad

- [ ] El contenido es usable en orientación vertical y horizontal
- [ ] El contenido funciona en diferentes tamaños de pantalla
- [ ] No hay scroll horizontal en viewports estándar
- [ ] Los objetivos táctiles tienen espaciado adecuado (mínimo 24x24px)

## Herramientas de verificación

### Automatizadas

1. **Lighthouse (Chrome DevTools):**
   - Ejecuta auditoría de accesibilidad
   - Revisa puntuación y problemas identificados
   - Verifica contraste de colores

2. **axe DevTools:**
   - Extensión de navegador para auditorías
   - Integración con Chrome DevTools
   - Detección de problemas ARIA y semánticos

3. **WAVE (Web Accessibility Evaluation Tool):**
   - Extensión de navegador
   - Visualización de estructura de página
   - Identificación de errores y advertencias

4. **Pa11y:**
   - Herramienta CLI para automatización
   - Integración en CI/CD
   - Reportes detallados

### Manuales

1. **Navegación por teclado:**
   - Desactiva el mouse
   - Navega toda la página usando solo Tab, Enter, Espacio, flechas
   - Verifica que todo sea accesible

2. **Lectores de pantalla:**
   - **NVDA** (Windows, gratuito)
   - **JAWS** (Windows, comercial)
   - **VoiceOver** (macOS/iOS, incluido)
   - **TalkBack** (Android, incluido)
   - Navega la página y verifica que el contenido sea anunciado correctamente

3. **Verificación de contraste:**
   - Usa Color Contrast Analyzer
   - Verifica con WebAIM Contrast Checker
   - Usa el eyedropper de Chrome DevTools

## Implementación en Next.js/React

### Componentes accesibles

#### Botones

```tsx
// ✅ Correcto
<button onClick={handleClick} aria-label="Cerrar modal">
  <CloseIcon />
</button>

// ❌ Incorrecto
<div onClick={handleClick} className="button">
  <CloseIcon />
</div>
```

#### Formularios

```tsx
// ✅ Correcto
<label htmlFor="email">Correo electrónico</label>
<input
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert" aria-live="polite">
  {error}
</span>

// ❌ Incorrecto
<input type="email" placeholder="Email" />
```

#### Navegación

```tsx
// ✅ Correcto
<nav aria-label="Navegación principal">
  <ul>
    <li>
      <a href="/">Inicio</a>
    </li>
    <li>
      <a href="/about">Acerca de</a>
    </li>
  </ul>
</nav>
```

#### Modales

```tsx
// ✅ Correcto
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Título del modal</h2>
  <p id="modal-description">Descripción del modal</p>
  <button aria-label="Cerrar modal">×</button>
</div>
```

### Skip links

```tsx
// Agregar al inicio del layout
<a href="#main-content" className="skip-link">
  Saltar al contenido principal
</a>

<style jsx>{`
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
  }
  .skip-link:focus {
    top: 0;
  }
`}</style>
```

### Focus management

```tsx
// Hook para manejar foco en modales
import { useEffect, useRef } from "react";

function useFocusTrap(isOpen: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      firstElement?.focus();
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  return containerRef;
}
```

### Indicadores de foco visibles

```css
/* Estilos para indicadores de foco */
:focus-visible {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Para elementos personalizados */
.custom-button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.5);
}
```

## Pasos de verificación

### 1. Auditoría inicial

- [ ] Ejecuta Lighthouse en modo accesibilidad
- [ ] Revisa el reporte y anota todos los problemas
- [ ] Ejecuta axe DevTools y compara resultados
- [ ] Documenta el puntaje actual de accesibilidad

### 2. Verificación manual

- [ ] Navega la página completa usando solo teclado
- [ ] Verifica que todos los elementos interactivos sean accesibles
- [ ] Prueba con un lector de pantalla (NVDA, VoiceOver, etc.)
- [ ] Verifica contraste de todos los textos
- [ ] Redimensiona el texto al 200% y verifica usabilidad

### 3. Corrección de problemas

- [ ] Prioriza problemas críticos (nivel A)
- [ ] Corrige problemas de nivel AA para cumplir estándar mínimo
- [ ] Implementa mejoras de nivel AAA si es posible
- [ ] Documenta cambios realizados

### 4. Verificación final

- [ ] Re-ejecuta Lighthouse y verifica mejora del puntaje
- [ ] Re-ejecuta axe DevTools
- [ ] Verifica manualmente con teclado y lector de pantalla
- [ ] Prueba en diferentes navegadores y dispositivos
- [ ] Documenta el puntaje final y nivel de conformidad alcanzado

## Salida esperada

Proporciona:

- **Reporte de auditoría inicial:** Puntaje de accesibilidad y lista de problemas identificados
- **Análisis de problemas:** Descripción detallada de cada problema con su nivel de severidad (A/AA/AAA)
- **Plan de corrección:** Priorización de problemas y estrategia de implementación
- **Código corregido:** Componentes y estilos actualizados con mejoras de accesibilidad
- **Reporte final:** Puntaje mejorado y verificación de conformidad con WCAG 2.2
- **Recomendaciones:** Mejoras adicionales para alcanzar niveles superiores de conformidad

## Ejemplos de uso

### Ejemplo 1: Auditoría completa

**Tarea:** "Realiza una auditoría completa de accesibilidad en la página de contacto"

**Proceso sugerido:**

1. Ejecutar Lighthouse en /contact
2. Ejecutar axe DevTools
3. Verificar navegación por teclado
4. Probar con NVDA/VoiceOver
5. Verificar contraste de colores
6. Generar reporte con todos los problemas
7. Priorizar y corregir problemas críticos
8. Verificar mejoras

### Ejemplo 2: Corrección específica

**Problema:** "El formulario de contacto no es accesible por teclado"

**Correcciones sugeridas:**

1. Agregar etiquetas a todos los campos
2. Implementar manejo de errores con `aria-live`
3. Agregar indicadores de campos requeridos
4. Mejorar indicadores de foco
5. Verificar orden de tabulación
6. Probar con lector de pantalla

### Ejemplo 3: Implementación de mejora

**Mejora:** "Implementar skip links y mejorar navegación por teclado"

**Implementación sugerida:**

1. Agregar skip link al contenido principal
2. Implementar landmarks ARIA
3. Mejorar estructura de encabezados
4. Agregar indicadores de foco visibles
5. Verificar navegación completa por teclado
6. Probar con lector de pantalla

## Recursos adicionales

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

## Notas importantes

- **Nivel AA es el estándar mínimo recomendado** para la mayoría de sitios web
- **Nivel AAA** es ideal pero puede no ser práctico para todo el contenido
- **La verificación manual es esencial** - las herramientas automatizadas no detectan todos los problemas
- **Probar con lectores de pantalla reales** es la mejor forma de verificar la experiencia de usuario
- **La accesibilidad es un proceso continuo**, no una tarea única
- **Involucra a usuarios con discapacidades** en las pruebas cuando sea posible

Implementa accesibilidad desde el inicio del desarrollo para evitar refactorizaciones costosas y crear una experiencia inclusiva para todos los usuarios.
