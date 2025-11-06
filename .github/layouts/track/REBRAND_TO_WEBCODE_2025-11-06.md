# Rebranding: DECORD → WEBCODE

**Fecha:** 6 de noviembre de 2025  
**Estado:** ✅ **COMPLETADO**

## 📋 Objetivo

Cambiar la marca del proyecto de **DECORD** a **WEBCODE**, donde:

- **"WEB"** aparece en color rojo (`--color-primary-red`)
- **"CODE"** aparece en color negro (#000000)
- Añadir información de contacto: `info@webcode.es` y `www.webcode.es`

## 🎯 Cambios Realizados

### 1. Footer Component (`components/layout/Footer/Footer.tsx`)

- ✅ Logo cambiado de "DECORD" a "WEBCODE"
  - `<span className={footer__logoRed}>WEB</span>`
  - `<span className={footer__logoGray}>CODE</span>` (ahora en negro)
- ✅ Añadida sección de contacto con:
  - Email: `info@webcode.es`
  - Website: `www.webcode.es`
- ✅ Copyright actualizado: `© 2025 WEBCODE`

### 2. Footer CSS (`components/layout/Footer/Footer.module.css`)

- ✅ Comentario de cabecera: "DECORD Style" → "WEBCODE Style"
- ✅ Color de `.footer__logoGray` cambiado de `#999` a `#000000` (negro)
- ✅ Añadidos estilos para `.footer__contact` y `.footer__contactLink`
- ✅ Layout de `.footer__logoSection` actualizado con flexbox para incluir contactos

### 3. Header Component (`components/layout/Header/Header.tsx`)

- ✅ Alt texts de las imágenes del logo:
  - "DECORD Art Gallery" → "WEBCODE Art Gallery"

### 4. CSS Design Tokens (todos los archivos en `styles/tokens/`)

- ✅ `typography.css`: "DECORD TYPOGRAPHY SYSTEM" → "WEBCODE TYPOGRAPHY SYSTEM"
- ✅ `spacing.css`: "DECORD SPACING SYSTEM" → "WEBCODE SPACING SYSTEM"
- ✅ `layout.css`: "DECORD LAYOUT SYSTEM" → "WEBCODE LAYOUT SYSTEM"
- ✅ `index.css`: "DECORD DESIGN TOKENS" → "WEBCODE DESIGN TOKENS"
- ✅ `effects.css`:
  - "DECORD EFFECTS SYSTEM" → "WEBCODE EFFECTS SYSTEM"
  - Comentarios internos "específicas DECORD" → "específicas WEBCODE"
- ✅ `components.css`: "DECORD COMPONENT-SPECIFIC TOKENS" → "WEBCODE COMPONENT-SPECIFIC TOKENS"
- ✅ `colors.css`: "DECORD COLOR SYSTEM" → "WEBCODE COLOR SYSTEM"

### 5. Estilos Globales (`styles/globals.css`)

- ✅ "DECORD - Global Styles" → "WEBCODE - Global Styles"

### 6. Documentación

- ✅ `README.md`:
  - Título: "DECORD" → "WEBCODE"
  - Descripción actualizada mencionando el rebrand
  - Referencias en ejemplos: "DECORD" → "WEBCODE"
  - Licencia con información de contacto
- ✅ `package.json`:
  - `"name": "decord"` → `"name": "webcode"`
- ✅ `scripts/download-images.js`:
  - Añadida nota sobre rebrand

## 🧪 Verificación

### Pruebas Realizadas

- ✅ No hay errores de TypeScript
- ✅ No hay errores de ESLint
- ✅ Servidor de desarrollo iniciado correctamente en `http://localhost:3000`
- ✅ Package.json muestra el nuevo nombre: `webcode@0.1.0`

### Pendiente de Verificación Visual

- [ ] Verificar que el logo "WEBCODE" se muestra correctamente en el footer
- [ ] Confirmar que "WEB" está en rojo y "CODE" en negro
- [ ] Verificar que los links de contacto son funcionales
- [ ] Comprobar en todas las páginas (Home, About, Gallery, Events, Blog, Contact)
- [ ] Verificar responsive en diferentes tamaños de pantalla

## 📊 Archivos Modificados

**Componentes:**

1. `components/layout/Footer/Footer.tsx`
2. `components/layout/Footer/Footer.module.css`
3. `components/layout/Header/Header.tsx`

**Estilos:** 4. `styles/globals.css` 5. `styles/tokens/typography.css` 6. `styles/tokens/spacing.css` 7. `styles/tokens/layout.css` 8. `styles/tokens/index.css` 9. `styles/tokens/effects.css` 10. `styles/tokens/components.css` 11. `styles/tokens/colors.css`

**Documentación:** 12. `README.md` 13. `package.json` 14. `scripts/download-images.js`

**Total:** 14 archivos modificados

## 🎨 Detalles de Diseño

### Logo Typography

```css
.footer__logo {
  font-family: var(--font-family-primary);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.footer__logoRed {
  color: var(--color-primary-red); /* WEB en rojo */
}

.footer__logoGray {
  color: #000000; /* CODE en negro (antes era #999) */
}
```

### Información de Contacto

```css
.footer__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.footer__contactLink {
  font-family: var(--font-family-secondary);
  font-size: 14px;
  color: #666;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.footer__contactLink:hover {
  color: var(--color-primary-red);
}
```

## 🔍 Próximos Pasos

1. **Verificación Visual:**
   - Abrir el sitio en el navegador
   - Tomar capturas de pantalla del antes/después
   - Verificar en diferentes dispositivos

2. **Actualizar Imágenes de Logo:**
   - Crear nuevas imágenes de logo con "WEBCODE"
   - Reemplazar `/images/logo-default-350x70.png`
   - Reemplazar `/images/logo-inverse-343x45.png`

3. **SEO y Metadata:**
   - Actualizar meta tags en `app/layout.tsx`
   - Actualizar favicons si es necesario

4. **Testing Completo:**
   - Verificar todas las páginas
   - Comprobar enlaces de contacto
   - Validar accesibilidad (WCAG 2.2)

## ✅ Conclusión

El rebrand de DECORD a WEBCODE se ha completado exitosamente en el código. Los cambios incluyen:

- Logo visual actualizado en Footer
- Información de contacto añadida
- Todos los comentarios y documentación actualizados
- Sin errores de compilación

**Estado Final:** ✅ Implementación completa, pendiente de verificación visual en navegador.
