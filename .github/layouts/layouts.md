# Notas preliminares
Para más detalles sobre inspección de elementos y pruebas visuales en layouts, consulta la documentación de `devtools.prompt.md` o explora sus opciones desde las herramientas de desarrollo del navegador para obtener recomendaciones e instrucciones interactivas.
Si el servidor de desarrollo ya está corriendo no lo incicies si no lo ves necesario, a no ser que hagas una build, entonces te toca pararlo y volver a iniciarlo después de la build.


**URL de la web ORGINAL para clonar:**
https://ld-wt73.template-help.com/tf/decord_v1/

# INSTRUCCIONES GENERALES PARA CLONAR LAYOUTS

- Lleva un registro de lo hecho en esta carpeta para que en la próxima interación al analizar las imágenes del original y el resultado final en la carpeta `track`. Haz un análisis de las imágenes en terminos de ux/ui. Según ese análisis modifica el prompt layout. Comprueba resultados tanto con capturas de pantalla como mirando el código del original (devtools de chrome) y el clone.

- Asegúrate que las fuentes tipográficas coinciden con las originales, asegúrate de los tamaños de las letras sea como en el original.
---
- Si haces capturas de imagen para comparar el original con el clone reduce el tamaño de la imagen: Asegúrate de que ni el ancho ni el alto superen los 4000 píxeles. Comprueba el formato: Si estás usando base64, verifica que la codificación sea correcta y que no haya errores en el string. Evita imágenes extremadamente grandes: Aunque se vean bien en tu editor, pueden causar problemas al procesarlas en servidores con límites.
- Hazlo todo responsive.
- Corrige posibles errores con next-devtools mcp
- Acuérdate de hacer la WEB SEMÁNTICA y accesible.
- Copia exactamente  las interaciones, las  micronanimaciones y animaciones de cada página. El scroll debe ser el mismo que el scroll original. Itera hasta que se parezca.
- Completa todo el recorrido de esta lista de tareas. Vuelve a revisarlas.
- Corrige errores de typescript y warnings de eslint.
- Corrige errores con next-devtools mcp.
- Haz el build para capturar errores o utiliza next-devtools mcp para capturar errores de producción.

# Metodo de trabajo para corregir layouts
**IMPORTANTE:** Sigue este método de trabajo para cada corrección que realices en los layouts:
**Metodo de trabajo:**
- Inspecciona el original con devtools.
- Inspecciona el clone con devtools.
- Compara ambos códigos y estilos.
- Anota las diferencias y errores.
- Modifica el prompt layout para corregir los errores.
- Repite el proceso hasta que el clone sea idéntico al original.
- Documenta los cambios realizados en la sección de reportes.
- Asegúrate de que todas las correcciones estén reflejadas en el código y estilos.
- Verifica que el clone funcione correctamente en diferentes navegadores y dispositivos.
- Toma capturas de pantalla del original y del clone para documentar las diferencias y mejoras.

# **TAREAS Y CORRECCIONES**

# Página CONTACT. 

### Breadcrumb fixes. ✅ FIXED (2025-11-06)
**Problema:** 
- Inconsistencia a través de la página Contact. El breadcrumb implementado en Contact no tiene la misma posición que el resto de páginas que usan el componente Breadcrumb, resultando en una experiencia de usuario inconsistente. El breadcrumb en Contact estaba más cerca del borde superior de la página en comparación con otras páginas.

**Solución Aplicada:**
- Se añadió `padding-top: var(--header-height);` a `.contactPage` en `app/contact/contact.module.css`
- Esto asegura que el breadcrumb se posicione consistentemente en todas las páginas (80px desde el top, justo después del header fijo)
- Verificado: El breadcrumb ahora tiene la misma posición en Contact, About, Gallery, Blog y Events

**Archivos Modificados:**
- `app/contact/contact.module.css` - Línea 6: Añadido padding-top

### Diseño de Contact fixes.
**Problema:**
- Layout de contact diferente al original. Arreglado.
- Tipografía de Contact ajustada para coincidir con el original.
- Inputs de formulario estilizados para coincidir con el original.

# SOBRE LA GALERÍA DE ARTE - about art gallery page - gallery layout fixes ✅ VERIFIED (2025-11-06)
![original](./original%20-%20about%20art%20gallery.png)

**Archivos Involucrados:**
- `app/about/about.module.css`
- `app/about/page.tsx`

**Recomendación:** Si se desea coincidencia exacta con el original, ajustar `.aboutHero__text` a fontSize: 23px y lineHeight: ~37.57px.
