# 🎨 Sistema de Tokens de Diseño - DECORD

## 📋 Propósito

Este documento explica el sistema de tokens de diseño extraídos del sitio original DECORD.
Los tokens garantizan **consistencia visual** y facilitan el mantenimiento del código.

---

## 🎯 ¿Qué son los Design Tokens?

Los Design Tokens son **variables reutilizables** que almacenan decisiones de diseño:
- Colores
- Espaciado
- Tipografía
- Sombras
- Transiciones
- Etc.

En lugar de escribir `#d4af37` en 50 lugares diferentes, usamos `var(--color-primary-gold)` una vez.

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
import '@/styles/tokens/index.css'
import '@/styles/globals.css'
```

---

## 🎨 Colores

### Paleta Principal

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary-black` | `#0a0a0a` | Background principal del sitio |
| `--color-primary-dark` | `#1a1a1a` | Background secundario |
| `--color-primary-charcoal` | `#2a2a2a` | Cards, overlays |
| `--color-primary-gold` | `#d4af37` | 🌟 Accent principal (dorado) |
| `--color-primary-gold-light` | `#e6c968` | Hover sobre dorado |
| `--color-primary-gold-dark` | `#b8941f` | Active state dorado |

### Colores Semánticos

```css
/* Texto */
--color-text-primary: #fafafa;      /* Texto principal */
--color-text-secondary: #a3a3a3;    /* Texto secundario */
--color-text-tertiary: #737373;     /* Metadata, captions */

/* Backgrounds */
--color-background-primary: #0a0a0a;
--color-background-secondary: #1a1a1a;
--color-background-elevated: #2a2a2a;

/* Bordes */
--color-border-subtle: #262626;
--color-border-default: #404040;
--color-border-strong: #525252;
```

### 📖 Cuándo usar cada color

| Situación | Token recomendado |
|-----------|-------------------|
| Botón principal / CTA | `--color-primary-gold` |
| Hover sobre botón | `--color-hover-gold` |
| Título principal | `--color-text-primary` |
| Fecha, autor, metadata | `--color-text-secondary` |
| Separadores discretos | `--color-border-subtle` |
| Background de card | `--color-background-elevated` |
| Overlay sobre imagen | `--color-overlay-light` |

---

## 📏 Espaciado

### Sistema Base: **8px**

Todo el espaciado sigue múltiplos de 8px:

| Token | Valor | Uso típico |
|-------|-------|-----------|
| `--spacing-1` | 4px | Padding mínimo |
| `--spacing-2` | 8px | Gap pequeño |
| `--spacing-4` | 16px | Gap entre elementos relacionados |
| `--spacing-6` | 24px | Gap entre cards |
| `--spacing-8` | 32px | Padding interno de cards |
| `--spacing-12` | 48px | Padding del container |
| `--spacing-32` | 128px | Padding vertical de secciones |

### Espaciado Semántico

```css
/* Secciones */
--spacing-section-y: var(--spacing-32);  /* 128px desktop */
--spacing-section-y-mobile: var(--spacing-20);  /* 80px mobile */

/* Cards */
--spacing-card-padding: var(--spacing-8);  /* 32px interno */
--spacing-card-gap: var(--spacing-6);  /* 24px entre cards */

/* Container */
--spacing-container-x: var(--spacing-12);  /* 48px horizontal */
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

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-family-primary` | `'Playfair Display', serif` | Títulos y headings elegantes |
| `--font-family-secondary` | `'Inter', sans-serif` | Texto de cuerpo y UI |

### Tamaños de Fuente

Escala tipográfica basada en ratio **1.25 (Fourth)**:

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-size-xs` | 12px | Captions, legal text |
| `--font-size-sm` | 14px | Metadata, small text |
| `--font-size-base` | 16px | Body text (base) |
| `--font-size-xl` | 24px | H4 |
| `--font-size-2xl` | 32px | H3 |
| `--font-size-3xl` | 40px | H2 |
| `--font-size-4xl` | 48px | H1 |
| `--font-size-5xl` | 64px | Hero title desktop |
| `--font-size-7xl` | 96px | 🌟 Hero extra large |

### 🌟 Característica Distintiva: Letter Spacing

El título hero de DECORD usa un `letter-spacing` muy amplio:

```css
.hero__title {
  font-size: var(--font-size-7xl);
  letter-spacing: var(--letter-spacing-widest);  /* 0.1em */
  font-family: var(--font-family-primary);
}
```

**Esto es único y característico de DECORD** - NO olvidar incluirlo.

### Presets de Texto

```css
/* Hero Title - Preset completo */
--text-hero-font-size: var(--font-size-5xl);
--text-hero-font-weight: var(--font-weight-bold);
--text-hero-line-height: var(--line-height-tight);
--text-hero-letter-spacing: var(--letter-spacing-widest);

/* Uso en componente */
.hero__title {
  font-size: var(--text-hero-font-size);
  font-weight: var(--text-hero-font-weight);
  line-height: var(--text-hero-line-height);
  letter-spacing: var(--text-hero-letter-spacing);
}
```

---

## 🎭 Efectos

### Sombras

```css
--shadow-card: 0 4px 12px rgba(0, 0, 0, 0.3);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.4);
--shadow-modal: 0 20px 60px rgba(0, 0, 0, 0.6);
```

### Border Radius

```css
--radius-button: 4px;
--radius-card: 8px;
--radius-modal: 12px;
```

### Transiciones

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;

/* Presets */
--transition-colors: color 200ms ease-in-out,
                     background-color 200ms ease-in-out;

--transition-transform: transform 200ms ease-in-out;
```

### 🌟 Efecto Característico: Hover en Imágenes

```css
.artwork-card__image {
  transition: var(--transition-transform);
}

.artwork-card:hover .artwork-card__image {
  transform: var(--animation-image-zoom);  /* scale(1.05) */
}
```

---

## 📦 Tokens de Componentes

### Botones

```css
--button-height-md: 44px;
--button-padding-x-md: var(--spacing-6);  /* 24px */
--button-font-size-md: var(--font-size-base);
```

### Cards

```css
--card-padding: var(--spacing-8);  /* 32px */
--card-border-radius: var(--radius-card);  /* 8px */
--card-background: var(--color-background-elevated);
```

### EventCard Específico

```css
--event-card-date-size: var(--font-size-4xl);  /* 48px - Fecha destacada */
--event-card-date-color: var(--color-primary-gold);
```

### Header

```css
--header-height: 80px;
--header-height-mobile: 64px;
--header-background: transparent;  /* Por defecto */
--header-background-scrolled: rgba(10, 10, 10, 0.95);
--header-backdrop-blur: 10px;
```

---

## 💡 Ejemplos de Uso

### ❌ Incorrecto (valores hardcoded)

```css
.button {
  background-color: #d4af37;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  transition: all 0.2s;
}

.button:hover {
  background-color: #e6c968;
}
```

### ✅ Correcto (usando tokens)

```css
.button {
  background-color: var(--color-primary-gold);
  padding: var(--spacing-3) var(--button-padding-x-md);
  font-size: var(--button-font-size-md);
  border-radius: var(--radius-button);
  transition: var(--transition-colors);
  
  height: var(--button-height-md);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
}

.button:hover {
  background-color: var(--color-hover-gold);
  transform: translateY(-1px);
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
   - Ejemplos: `--color-primary-gold`, `--spacing-card-padding`, `--button-height-md`

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

Antes de empezar a crear componentes, verifica:

- [x] ✅ Todos los colores extraídos del sitio original
- [x] ✅ Sistema de espaciado documentado (8px base)
- [x] ✅ Fuentes identificadas con fallbacks
- [x] ✅ Font sizes, weights, line-heights documentados
- [x] ✅ Letter-spacing del hero title (CRÍTICO)
- [x] ✅ Breakpoints y container widths definidos
- [x] ✅ Sombras y border-radius catalogados
- [x] ✅ Transiciones y animaciones documentadas
- [x] ✅ Z-index scale definido
- [x] ✅ Tokens component-specific creados
- [x] ✅ Estructura `styles/tokens/` creada
- [x] ✅ Archivos CSS de tokens creados
- [x] ✅ Documentación `DESIGN_TOKENS.md` completa

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
