# DECORD - Especificaciones de Animaciones y Microinteracciones

## Extraído del sitio original: https://ld-wt73.template-help.com/tf/decord_v1/

---

## 🎯 Gallery Cards (Product Media)

### Estructura HTML
```html
<article class="artworkCard">
  <a href="#" class="artworkCard__media">
    <img src="..." alt="..." />
  </a>
  <div class="artworkCard__content">
    <h6 class="artworkCard__title">
      <a href="#">Título</a>
    </h6>
    <div class="artworkCard__meta">Artista, Año</div>
  </div>
</article>
```

### Estilos del Hover Overlay
```css
.artworkCard__media {
  position: relative;
  display: block;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  aspect-ratio: 420 / 570;
}

/* Overlay con "+" usando ::before */
.artworkCard__media::before {
  content: "+";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Typography */
  font-size: 60px;
  font-weight: 300;
  line-height: 96px;
  color: white;
  
  /* Background */
  background: rgba(254, 72, 59, 0.8); /* Red con 80% opacidad */
  
  /* Animation States */
  opacity: 0;
  transform: scale(0.5);
  transition: 0.25s;
  z-index: 1;
}

.artworkCard__media:hover::before {
  opacity: 1;
  transform: scale(1);
}
```

**Características clave:**
- ✅ Sin SVG - usa texto "+" directamente
- ✅ Escala de 0.5 a 1.0 en hover
- ✅ Opacidad de 0 a 1 en 0.25s
- ✅ Fondo rojo rgba(254, 72, 59, 0.8)
- ✅ Flex center para centrar el "+"
- ✅ Font size 60px, weight 300

---

## 🔘 Buttons

### Primary Button Specs
```css
.button {
  /* Typography */
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 8.4px;
  text-transform: uppercase;
  
  /* Spacing */
  padding: 24px 56px;
  
  /* Border */
  border: 2px solid;
  border-radius: 0;
  
  /* Transition - CRITICAL: Cubic Bezier */
  transition: 
    background 0.4s cubic-bezier(0.2, 1, 0.3, 1),
    border-color 0.4s cubic-bezier(0.2, 1, 0.3, 1),
    color 0.4s cubic-bezier(0.2, 1, 0.3, 1);
}
```

**Características:**
- ✅ Letter spacing MUY amplio: 8.4px
- ✅ Font weight 900 (no 700)
- ✅ Cubic-bezier específico: `(0.2, 1, 0.3, 1)`
- ✅ Border radius 0 (cuadrado)

---

## 🎨 Gallery Isotope Items

### Transitions
```css
.isotope-item {
  transition: 
    opacity 0.4s ease-in,
    transform 0.4s ease-in;
}

.isotope-filters button {
  transition: 0.3s ease-in-out;
}
```

---

## 📅 Event Cards

### Estructura de Fecha
```html
<div class="blurb-event">
  <div class="blurb-event-item">
    <div class="blurb-event-date">
      <span class="blurb-event-day">21</span>
      <span class="blurb-event-month">/02</span>
    </div>
  </div>
  <div class="blurb-event-body">
    <div class="blurb-event-title h4">
      <a href="#">Título del Evento</a>
    </div>
  </div>
</div>
```

### Estilos de Fecha
```css
.blurb-event-day {
  font-family: Oswald;
  font-size: 60px;
  font-weight: 500;
  line-height: 60px;
  color: rgb(254, 72, 59); /* Red accent */
  display: inline;
}

.blurb-event-month {
  font-size: 30px;
  font-weight: 500;
  color: rgb(254, 72, 59);
}
```

### Título del Evento
```css
.blurb-event-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 33.6px; /* 1.4 ratio */
  margin-bottom: 0;
}
```

**Características:**
- ✅ Día: 60px Oswald, weight 500, rojo
- ✅ Mes: 30px, weight 500, rojo
- ✅ Título: 24px, weight 500

---

## 📐 Section Padding

```css
section {
  padding: 189px 15px; /* Exacto del original */
}
```

**Medida extraída:**
- ✅ 8 secciones analizadas
- ✅ Todas usan 189px vertical padding
- ❌ NO 128px (era el valor previo incorrecto)

---

## 🎭 Typography System

### Hero Title
```css
.hero__title {
  font-family: Oswald;
  font-size: 160px;
  font-weight: 500;
  letter-spacing: -8px;
  line-height: 172px;
}
```

### Section Headings (GALLERY, EVENTS, etc.)
```css
.section__label {
  font-family: Roboto; /* NOT Oswald! */
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 18px; /* Very wide */
  text-transform: uppercase;
  line-height: 1.172;
}
```

### Stat Numbers
```css
.stat__number {
  font-family: Oswald;
  font-size: 50px;
  font-weight: 500;
  color: rgb(254, 72, 59); /* Red */
}
```

---

## 🎨 Color System

### Primary Red
```css
--color-primary-red: #fe483b;
--color-primary-red-rgb: rgb(254, 72, 59);
--color-primary-red-alpha: rgba(254, 72, 59, 0.8);
```

### Hover Red (lighter)
```css
--color-hover-red: #ff6b5f;
```

---

## ✨ Animation Timing Functions

### Standard Transitions
- **Fast**: `0.25s`
- **Medium**: `0.3s ease-in-out`
- **Slow**: `0.4s ease-in`

### Custom Cubic Bezier
```css
cubic-bezier(0.2, 1, 0.3, 1) /* Para buttons */
```

---

## 📊 Layout System

### Grid - Gallery
```css
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6); /* ~30px */
}
```

### Container Max Width
```css
.container {
  max-width: 1200px; /* Típico bootstrap */
  margin: 0 auto;
}
```

---

## 🔍 Aspectos Clave Descubiertos

1. **Hover Overlay**: Usa `::before` con texto "+", NO SVG
2. **Transform Scale**: De 0.5 a 1.0 (no 0 a 1)
3. **Section Headings**: Roboto, NOT Oswald (critical!)
4. **Letter Spacing**: Muy amplio en headings (18px) y buttons (8.4px)
5. **Button Transition**: Cubic-bezier específico
6. **Section Padding**: 189px exacto
7. **Event Dates**: 60px day, 30px month, ambos en Oswald red
8. **Isotope**: Opacity + Transform transitions de 0.4s ease-in

---

## 📝 Estado de Implementación

### ✅ Completado
- Gallery card hover overlay exacto
- Button transitions con cubic-bezier
- Typography system (Oswald + Roboto)
- Color system (red accent)
- Section padding (189px)
- Event date typography
- Stat numbers styling

### 🔄 En Progreso
- Responsive breakpoints
- Scroll animations (WOW.js?)
- Testimonials slider
- Menu mobile animations

### ⏳ Pendiente
- Parallax effects (si aplica)
- Smooth scroll behavior
- Form interactions
- Loading animations

---

**Última actualización:** $(date)
**Fuente:** Chrome DevTools inspection del sitio original
