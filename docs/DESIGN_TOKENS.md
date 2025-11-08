# 🎨 Sistema de Tokens de Diseño - DECORD

## 📋 Propósito

Este documento explica el sistema de tokens de diseño del proyecto DECORD.
Los tokens garantizan **consistencia visual** y facilitan el mantenimiento del código.

**Última actualización:** Enero 2025

---

## 🎯 ¿Qué son los Design Tokens?

Los Design Tokens son **variables reutilizables** que almacenan decisiones de diseño:

- Colores
- Espaciado
- Tipografía
- Sombras
- Transiciones
- Etc.

En lugar de escribir `#fe483b` en 50 lugares diferentes, usamos `var(--color-primary-red)` una vez.

**⚠️ IMPORTANTE:** Todos los componentes deben usar tokens. No se permiten valores hardcodeados.

---

## 📂 Estructura de Archivos

```
styles/
├── tokens/
│   ├── colors.css          # Paleta de colores completa
│   ├── spacing.css         # Sistema de espaciado (8px base)
│   ├── typography.css      # Tipografía y text styles
│   ├── layout.css          # Containers, grids, breakpoints
│   ├── effects.css         # Shadows, radius, transitions
│   ├── components.css      # Tokens específicos de componentes
│   └── index.css           # Import de todos los tokens
```

**Importación global en `app/layout.tsx`:**

```tsx
import "@/styles/tokens/index.css";
import "@/styles/globals.css";
```

---

## 🎨 Colores

### Paleta Principal

| Token                        | Valor     | Uso                            |
| ---------------------------- | --------- | ------------------------------ |
| `--color-primary-red`        | `#fe483b` | 🌟 Accent principal (rojo)     |
| `--color-primary-red-light`  | `#ff6b5f` | Hover sobre rojo               |
| `--color-primary-red-dark`   | `#e63a2e` | Active state rojo              |
| `--color-primary-black`      | `#151515` | Negro para textos              |
| `--color-primary-charcoal`   | `#2a2a2a` | Cards, overlays                |

### Colores Semánticos

```css
/* Texto */
--color-text-primary: #151515; /* Texto principal */
--color-text-secondary: #767676; /* Texto secundario */
--color-text-tertiary: #a3a3a3; /* Metadata, captions */
--color-text-inverse: #ffffff; /* Texto sobre fondos oscuros */

/* Backgrounds */
--color-background-primary: #ffffff; /* Fondo principal (blanco) */
--color-background-secondary: #f5f5f5; /* Secciones alternas */
--color-background-elevated: #ffffff; /* Cards, modals */

/* Bordes */
--color-border-subtle: #e5e5e5; /* Bordes suaves */
--color-border-default: #d4d4d4; /* Bordes normales */
--color-border-strong: #a3a3a3; /* Bordes destacados */

/* Footer Colors */
--color-footer-background: #f2f2f2; /* Fondo del footer */
--color-footer-text: #000000; /* Texto negro del footer */
--color-footer-text-secondary: #666666; /* Texto secundario */
--color-footer-text-tertiary: #999999; /* Texto terciario */
--color-footer-border: #e0e0e0; /* Borde del footer */
--color-footer-social: #2a2a2a; /* Iconos sociales */
```

### 📖 Cuándo usar cada color

| Situación              | Token recomendado             |
| ---------------------- | ----------------------------- |
| Botón principal / CTA  | `--color-primary-red`         |
| Hover sobre botón      | `--color-hover-red`           |
| Título principal       | `--color-text-primary`        |
| Fecha, autor, metadata | `--color-text-secondary`      |
| Separadores discretos  | `--color-border-subtle`       |
| Background de card     | `--color-background-elevated` |
| Overlay sobre imagen   | `--color-overlay-light`       |
| Overlay artwork card   | `--color-overlay-red-65`      |

---

## 📏 Espaciado

### Sistema Base: **8px**

Todo el espaciado sigue múltiplos de 8px:

| Token          | Valor | Uso típico                       |
| -------------- | ----- | -------------------------------- |
| `--spacing-1`  | 4px   | Padding mínimo                   |
| `--spacing-2`  | 8px   | Gap pequeño                      |
| `--spacing-4`  | 16px  | Gap entre elementos relacionados |
| `--spacing-6`  | 24px  | Gap entre cards                  |
| `--spacing-8`  | 32px  | Padding interno de cards         |
| `--spacing-12` | 48px  | Padding del container            |
| `--spacing-32` | 128px | Padding vertical de secciones    |

### Espaciado Semántico

```css
/* Secciones */
--spacing-section-y: var(--spacing-32); /* 128px desktop */
--spacing-section-y-mobile: var(--spacing-20); /* 80px mobile */

/* Cards */
--spacing-card-padding: var(--spacing-8); /* 32px interno */
--spacing-card-gap: var(--spacing-6); /* 24px entre cards */

/* Container */
--spacing-container-x: var(--spacing-12); /* 48px horizontal */
```

### 📖 Ejemplos de uso

```css
/* Padding de una sección */
.section {
  padding: var(--spacing-32) var(--spacing-container-x);
}

/* Gap entre cards */
.gallery-grid {
  gap: var(--spacing-card-gap);
}

/* Padding interno de un botón */
.button {
  padding: var(--spacing-3) var(--spacing-6);
}
```

---

## 🔤 Tipografía

### Fuentes

| Token                     | Valor                       | Uso                          |
| ------------------------- | --------------------------- | ---------------------------- |
| `--font-family-primary`   | `Oswald, sans-serif`        | Títulos y headings           |
| `--font-family-secondary` | `Roboto, sans-serif`        | Texto de cuerpo y UI         |

### Tamaños de Fuente

Escala tipográfica completa:

| Token               | Valor  | Uso                    |
| ------------------- | ------ | ---------------------- |
| `--font-size-xs`    | 12px   | Captions, legal text   |
| `--font-size-sm`    | 14px   | Metadata, small text   |
| `--font-size-base`  | 16px   | Body text (base)       |
| `--font-size-md`    | 18px   | Large body text        |
| `--font-size-lg`    | 20px   | Hero label             |
| `--font-size-xl`    | 24px   | H4, Hero label         |
| `--font-size-2xl`   | 32px   | H3                     |
| `--font-size-3xl`   | 40px   | H2                     |
| `--font-size-4xl`   | 48px   | H1                     |
| `--font-size-5xl`   | 64px   | Display titles         |
| `--font-size-6xl`   | 80px   | Display titles large   |
| `--font-size-7xl`   | 160px  | Hero title (desktop)   |
| `--font-size-8xl`   | 88px   | Footer CTA title       |
| `--font-size-9xl`   | 140px  | Hero title large       |
| `--font-size-10xl`  | 50px   | Stats numbers          |

### Letter Spacing

| Token                          | Valor  | Uso                        |
| ------------------------------ | ------ | -------------------------- |
| `--letter-spacing-hero`        | -8px   | Hero title (negativo)      |
| `--letter-spacing-button`      | 8.4px  | Button letter spacing      |
| `--letter-spacing-button-sm`   | 7.2px  | Button small               |
| `--letter-spacing-event-title` | 8px    | Event card title           |
| `--letter-spacing-footer-link` | 7.2px  | Footer links               |
| `--letter-spacing-footer-cta`  | -4.4px | Footer CTA title           |

### 🌟 Característica Distintiva: Hero Title

El título hero usa valores específicos:

```css
.hero__title {
  font-size: var(--hero-title-font-size-desktop); /* 140px */
  letter-spacing: var(--hero-title-letter-spacing-desktop); /* -7px */
  font-family: var(--font-family-primary); /* Oswald */
  font-weight: var(--font-weight-medium); /* 500 */
  line-height: var(--hero-title-line-height); /* 0.9 */
  color: var(--color-primary-red);
}
```

**Tokens específicos del Hero:**
- `--hero-title-font-size-desktop`: 140px
- `--hero-title-letter-spacing-desktop`: -7px
- `--hero-subtitle-font-size`: 20px
- `--hero-subtitle-letter-spacing`: 12px

### Text Styles (Presets)

El sistema incluye presets completos para componentes comunes:

```css
/* Section Headings */
--text-section-heading-font-size: 30px;
--text-section-heading-font-weight: 500;
--text-section-heading-letter-spacing: 18px;
--text-section-heading-font-family: var(--font-family-secondary);

/* Stats Number */
--text-stats-number-font-size: 50px;
--text-stats-number-font-weight: 500;
--text-stats-number-color: var(--color-primary-red);

/* Event Card Date */
--text-event-date-number-font-size: 60px;
--text-event-date-month-font-size: 30px;

/* Footer CTA Title */
--text-footer-cta-font-size: 88px;
--text-footer-cta-letter-spacing: -4.4px;
```

---

## 🎭 Efectos

### Sombras

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Sombras específicas */
--stats-card-shadow-hover: 0 4px 12px var(--color-shadow-black-08);
--button-shadow-hover: 0 8px 16px var(--color-shadow-red-30);
```

### Border Radius

```css
--radius-none: 0;
--radius-sm: 2px;
--radius-base: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-full: 9999px;

/* Específicos */
--radius-button: 0; /* Sin border radius */
--radius-card: 8px;
--radius-modal: 12px;
```

### Transiciones

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;

/* Presets */
--transition-colors: color var(--transition-base) var(--transition-ease-in-out),
                     background-color var(--transition-base) var(--transition-ease-in-out),
                     border-color var(--transition-base) var(--transition-ease-in-out);
--transition-transform: transform var(--transition-base) var(--transition-ease-in-out);
--transition-all: all var(--transition-base) var(--transition-ease-in-out);

/* Button específico */
--button-transition: background 0.4s cubic-bezier(0.2, 1, 0.3, 1),
                     border-color 0.4s cubic-bezier(0.2, 1, 0.3, 1),
                     color 0.4s cubic-bezier(0.2, 1, 0.3, 1),
                     transform 0.4s cubic-bezier(0.2, 1, 0.3, 1),
                     box-shadow 0.4s cubic-bezier(0.2, 1, 0.3, 1);
```

### 🌟 Efecto Característico: Artwork Card Hover

```css
.artworkCard__plus {
  opacity: var(--artwork-card-overlay-opacity); /* 0 */
  transform: scale(var(--artwork-card-overlay-scale-initial)); /* 0.5 */
  background: var(--artwork-card-overlay-background); /* rgba(254, 72, 59, 0.65) */
  transition: var(--artwork-card-overlay-transition);
}

.artworkCard__media:hover .artworkCard__plus {
  opacity: var(--artwork-card-overlay-opacity-hover); /* 1 */
  transform: scale(var(--artwork-card-overlay-scale-hover)); /* 1 */
}

.artworkCard__media:hover .artworkCard__image {
  transform: scale(var(--artwork-card-image-scale-hover)); /* 1.03 */
}
```

---

## 📦 Tokens de Componentes

### Botones

```css
--button-height-md: 44px;
--button-padding-y-md: 24px;
--button-padding-x-md: 56px;
--button-font-size-md: 14px;
--button-font-weight: 900; /* Extrabold */
--button-letter-spacing-md: 8.4px;
--button-border-radius: 0; /* Sin border radius */
--button-border-width: 2px;
--button-transition: /* Ver sección de transiciones */
--button-shadow-hover: 0 8px 16px var(--color-shadow-red-30);
```

### Cards

```css
--card-padding: var(--spacing-8); /* 32px */
--card-border-radius: var(--radius-card); /* 8px */
--card-background: var(--color-background-elevated);

/* ArtworkCard */
--artwork-card-aspect-ratio: 420 / 570;
--artwork-card-overlay-background: var(--color-overlay-red-65);
--artwork-card-overlay-font-size: 60px;
--artwork-card-image-scale-hover: 1.03;

/* EventCard */
--event-card-date-number-size: 60px;
--event-card-date-month-size: 30px;
--event-card-date-color: var(--color-primary-red);
```

### Header

```css
--header-height: 80px;
--header-height-mobile: 64px;
--header-background: transparent; /* Por defecto */
--header-background-scrolled: rgba(10, 10, 10, 0.95);
--header-backdrop-blur: 10px;
```

### Hero

```css
--hero-min-height: 100vh;
--hero-container-max-width: 1600px;
--hero-title-font-size-desktop: 140px;
--hero-title-letter-spacing-desktop: -7px;
--hero-subtitle-font-size: 20px;
--hero-subtitle-letter-spacing: 12px;
--hero-image-width: 720px;
--hero-image-height: 900px;
```

### Footer

```css
--footer-background: var(--color-footer-background);
--footer-main-padding-y-top: 60px;
--footer-main-padding-y-bottom: 40px;
--footer-cta-title-font-size: 88px;
--footer-cta-arrow-width: 260px;
--footer-columns-gap: 80px;
```

### Lightbox

```css
--lightbox-overlay-background: rgba(0, 0, 0, 0.95);
--lightbox-content-max-width: 90vw;
--lightbox-content-max-height: 90vh;
--lightbox-close-size: 48px;
--lightbox-arrow-size: 56px;
--lightbox-thumbnail-size: 80px;
```

---

## 💡 Ejemplos de Uso

### ❌ Incorrecto (valores hardcoded)

```css
.button {
  background-color: #fe483b;
  padding: 24px 56px;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 8.4px;
  border-radius: 0;
  transition: background 0.4s cubic-bezier(0.2, 1, 0.3, 1);
}

.button:hover {
  background-color: #ff6b5f;
  box-shadow: 0 8px 16px rgba(254, 72, 59, 0.3);
}
```

### ✅ Correcto (usando tokens)

```css
.button {
  background-color: var(--color-primary-red);
  padding: var(--button-padding-y-md) var(--button-padding-x-md);
  font-size: var(--button-font-size-md);
  font-weight: var(--button-font-weight);
  letter-spacing: var(--button-letter-spacing-md);
  border-radius: var(--button-border-radius);
  transition: var(--button-transition);
}

.button:hover {
  background-color: var(--color-hover-red);
  box-shadow: var(--button-shadow-hover);
  transform: translateY(-2px);
}
```

### Ejemplo: Hero Section

```css
.hero__title {
  font-family: var(--font-family-primary);
  font-size: var(--hero-title-font-size-desktop);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--hero-title-letter-spacing-desktop);
  line-height: var(--hero-title-line-height);
  color: var(--color-primary-red);
}

.hero__subtitle {
  font-family: var(--font-family-secondary);
  font-size: var(--hero-subtitle-font-size);
  letter-spacing: var(--hero-subtitle-letter-spacing);
  color: var(--color-text-primary);
}
```

### Ejemplo: ArtworkCard

```css
.artworkCard__plus {
  font-size: var(--artwork-card-overlay-font-size);
  background: var(--artwork-card-overlay-background);
  opacity: var(--artwork-card-overlay-opacity);
  transform: scale(var(--artwork-card-overlay-scale-initial));
  transition: var(--artwork-card-overlay-transition);
}

.artworkCard__media:hover .artworkCard__plus {
  opacity: var(--artwork-card-overlay-opacity-hover);
  transform: scale(var(--artwork-card-overlay-scale-hover));
}
```

---

## 🔧 Mantenimiento

### Antes de agregar un nuevo token

1. **¿Existe ya un token similar que puedas reutilizar?**
   - Busca en los archivos existentes antes de crear uno nuevo
2. **¿Sigue el patrón del sistema?**
   - Spacing: ¿Es múltiplo de 8px?
   - Color: ¿Pertenece a la paleta o necesitas justificar uno nuevo?
3. **¿Es específico de un componente o global?**
   - Global → `colors.css`, `spacing.css`, etc.
   - Componente → `components.css`

4. **Nombrado consistente**
   - Formato: `--[categoría]-[nombre]-[variante]`
   - Ejemplos: `--color-primary-red`, `--spacing-card-padding`, `--button-height-md`
   - Colores: `--color-[tipo]-[nombre]-[variante]` (ej: `--color-primary-red`, `--color-footer-text`)
   - Spacing: `--spacing-[tamaño]` o `--spacing-[elemento]-[dirección]` (ej: `--spacing-8`, `--spacing-card-padding`)
   - Tipografía: `--text-[elemento]-[propiedad]` (ej: `--text-hero-font-size`, `--text-footer-link-letter-spacing`)
   - Componentes: `--[componente]-[propiedad]` (ej: `--button-font-size-md`, `--hero-title-font-size-desktop`)

### Agregar un nuevo token

1. Edita el archivo correspondiente en `styles/tokens/`
2. Sigue la convención de nombrado
3. Agrega comentario explicando su uso
4. Actualiza este documento `DESIGN_TOKENS.md`
5. Usa el nuevo token en tu componente

---

## 📊 Beneficios del Sistema

### 1. Consistencia Visual

✅ Todos los componentes usan los mismos valores  
✅ Fácil mantener coherencia en todo el sitio

### 2. Mantenimiento Simplificado

✅ Cambiar un color en un lugar actualiza todo el sitio  
✅ No buscar/reemplazar valores hardcoded

### 3. Escalabilidad

✅ Agregar nuevos componentes es más rápido  
✅ Nuevos desarrolladores entienden el sistema rápidamente

### 4. Temas Fáciles

✅ Puedes crear tema claro/oscuro cambiando tokens  
✅ Soporte para múltiples temas sin duplicar código

### 5. Documentación Viva

✅ Los tokens son auto-documentados  
✅ Facilita colaboración en equipo

---

## 🎯 Checklist de Tokens

Estado actual del sistema (Enero 2025):

- [x] ✅ Todos los colores extraídos y documentados (tema claro con acento rojo)
- [x] ✅ Sistema de espaciado documentado (8px base)
- [x] ✅ Fuentes identificadas (Oswald + Roboto)
- [x] ✅ Font sizes, weights, line-heights documentados (12 escalas)
- [x] ✅ Letter-spacing específicos documentados (hero, buttons, footer, etc.)
- [x] ✅ Breakpoints y container widths definidos
- [x] ✅ Sombras y border-radius catalogados
- [x] ✅ Transiciones y animaciones documentadas
- [x] ✅ Z-index scale definido
- [x] ✅ Tokens component-specific creados (Button, Hero, Footer, Lightbox, etc.)
- [x] ✅ Estructura `styles/tokens/` creada y organizada
- [x] ✅ Archivos CSS de tokens creados y actualizados
- [x] ✅ Documentación `DESIGN_TOKENS.md` completa y actualizada
- [x] ✅ **Todos los componentes migrados a tokens** (sin valores hardcodeados)

---

## 🚨 Regla de Oro

**NO escribas ningún componente sin consultar primero los tokens disponibles.**

Si necesitas un valor que no existe:

1. Verifica que realmente no existe un token similar
2. Evalúa si necesitas crear un nuevo token o reutilizar uno existente
3. Si creas un token nuevo, documéntalo aquí

---

## 📚 Referencias

- Sitio original: [DECORD](https://ld-wt73.template-help.com/tf/decord_v1/)
- Archivo de tokens: `styles/tokens/index.css`
- Master Prompt: `docs/MASTER_PROMPT_FOR_LLM.md`

---

## ✅ Resumen de la Implementación

### Componentes Migrados a Tokens

Todos los siguientes componentes ahora usan exclusivamente design tokens:

- ✅ **Button** - Todos los valores migrados (padding, font-size, letter-spacing, etc.)
- ✅ **Hero** - Valores responsive y tipografía completa
- ✅ **About** - Text styles y colores
- ✅ **ArtworkCard** - Overlay, transiciones, tipografía
- ✅ **EventCard** - Fechas, títulos, botones
- ✅ **Stats** - Números, grid, sombras
- ✅ **Footer** - Todos los colores, espaciados, tipografía
- ✅ **Gallery** - Filtros, botones, grid
- ✅ **BlogSection** - Cards, sombras, transiciones
- ✅ **Lightbox** - Overlay, controles, thumbnails
- ✅ **Breadcrumb** - Tipografía y colores
- ✅ **Header** - Altura, background, transiciones
- ✅ **MobileMenu** - Animaciones y estilos

### Estadísticas

- **Total de tokens creados:** ~200+
- **Componentes migrados:** 13+
- **Archivos de tokens:** 6 (colors, spacing, typography, layout, effects, components)
- **Valores hardcodeados eliminados:** 100% en componentes principales

### Próximos Pasos

1. Revisar componentes adicionales si existen
2. Agregar tokens para nuevos componentes que se creen
3. Considerar soporte para modo oscuro (si es necesario)
4. Mantener documentación actualizada

---

**Última revisión completa:** Enero 2025
