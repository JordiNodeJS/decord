# Notas preliminares
Para más detalles sobre inspección de elementos y pruebas visuales en layouts, consulta la documentación de `devtools.prompt.md` o explora sus opciones desde las herramientas de desarrollo del navegador para obtener recomendaciones e instrucciones interactivas.
Si el servidor de desarrollo ya está corriendo no lo incicies si no lo ves necesario.


**URL de la web a clonar:**
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

# TAREAS Y CORRECCIONES

# Breadcrumb fixes. ✅ COMPLETADO (2025-11-06)
**Problema:** 
- Inconsistencia a través de las páginas. No todas las páginas tenían breadcrumbs implementados, o se veían diferentes al original y entre sí.
- Los breadcrumbs no usaban un componente reutilizable, lo que causaba discrepancias en estilos y estructura.
- La página de blog post detail (`/blog/[slug]`) usaba una implementación personalizada en lugar del componente reutilizable `Breadcrumb`.

**Solución implementada:**
- Se actualizó la página `/blog/[slug]/page.tsx` para usar el componente `Breadcrumb` reutilizable.
- Se eliminaron los estilos personalizados del breadcrumb en `post.module.css`.
- Ahora todas las páginas (Contact, Blog, Events, Gallery, About, y Blog Posts) usan el mismo componente `Breadcrumb`.
- El componente `Breadcrumb` ya tenía los estilos correctos que coinciden con el original:
  - Font size: 12px
  - Text transform: uppercase
  - Letter spacing: 7.2px
  - Separator: "|" (pipe character) con posicionamiento absoluto
  - Link color: rgb(0, 0, 0)
  - Active/current color: rgb(254, 72, 59)

**Verificación:**
- ✅ Contact page: Breadcrumb consistente (INICIO | CONTACTO)
- ✅ Blog page: Breadcrumb consistente (INICIO | BLOG)
- ✅ Blog post detail: Breadcrumb con 3 niveles (INICIO | BLOG | POST TITLE)
- ✅ About page: Breadcrumb consistente (INICIO | SOBRE NOSOTROS)
- ✅ Events page: Breadcrumb consistente (INICIO | EVENTOS)
- ✅ Gallery page: Breadcrumb consistente (INICIO | GALERÍA)

**Archivos modificados:**
- `app/blog/[slug]/page.tsx` - Importado y usado el componente Breadcrumb
- `app/blog/[slug]/post.module.css` - Eliminados estilos personalizados del breadcrumb

# CONOCE AL EQUIPO. MEET THE TEAM GRID FIXES
![original](./original-meet-the-team-grid.png.png)
- No coincidía el diseño de la cuadrícula del equipo con el original. Arreglado.
- Las tarjetas del equipo no tenían el mismo diseño que el original. Arreglado.
- Los textos de las tarjetas del equipo no coincidían con los del original. Arreglado.