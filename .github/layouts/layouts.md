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
- Copia exactamente las interaciones, las micronanimaciones y animaciones de cada página. El scroll debe ser el mismo que el scroll original. Itera hasta que se parezca.
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

---

# **TAREAS Y CORRECCIONES**

# ✅ GALLERY PAGE y HOME PAGE GALLERY SECTION - COMPLETADO

**Estado:** ✅ **RESUELTO** (2025-01-06)

**Problema Identificado:**

- Los filtros no funcionaban debido a un error de coincidencia de mayúsculas/minúsculas entre las categorías en los datos y los nombres de los filtros.
- Las categorías estaban en MAYÚSCULAS ("ANAMORFOSIS") pero los filtros esperaban minúsculas ("anamorfismo").

**Solución Aplicada:**

- Se estandarizaron todas las categorías en `data/artworks.ts` a minúsculas para coincidir con los filtros.
- Se verificó que ambas galerías (Home y Gallery Page) usan el mismo componente `Gallery.tsx` con diferentes props.

**Resultados de Pruebas:**

- ✅ Filtro "anamorfismo": 2 obras mostradas correctamente
- ✅ Filtro "fotorrealismo": 1 obra mostrada correctamente
- ✅ Filtro "surrealismo": 1 obra mostrada correctamente
- ✅ Filtro "hiperrealismo": 0 obras (sin contenido asignado, no crítico)
- ✅ Filtro "obras abstractas": 1 obra mostrada correctamente
- ✅ Filtro "todas las obras": 5 obras mostradas correctamente

**Confirmado:**

- ✅ Los filtros funcionan correctamente en Gallery Page
- ✅ Los filtros funcionan correctamente en Home Page Gallery Section
- ✅ Las imágenes se muestran correctamente al aplicar los filtros
- ✅ El uso del mismo componente en dos lugares es intencional y correcto
- ✅ No hay errores de TypeScript ni ESLint

**Reporte Completo:** Ver `track/GALLERY_FILTERS_FIX_REPORT_2025-01-06.md`

**Recomendaciones Futuras:**

- [ ] Añadir más obras de arte para enriquecer la galería (actualmente solo 5 obras)
- [ ] Asignar al menos una obra a la categoría "hiperrealismo"
- [ ] Considerar optimización de imágenes para mejor rendimiento

---

# PRÓXIMAS TAREAS

- [x] ✅ **COMPLETADO (2025-11-06):** Sustituir DECORD por WEBCODE en todo el proyecto. "WEB" en color rojo y "CODE" en color negro. Ver reporte completo en `track/REBRAND_TO_WEBCODE_2025-11-06.md`
  - [x] Logo del footer cambiado a "WEBCODE"
  - [x] Email añadido: info@webcode.es
  - [x] Web añadida: www.webcode.es
  - [x] Todos los archivos CSS actualizados
  - [x] README.md y package.json actualizados
  - [x] Sin errores de TypeScript ni ESLint
- [ ] **PENDIENTE:** Crear nuevas imágenes de logo para el Header con "WEBCODE" en lugar de las actuales con "DECORD"
  - Reemplazar `/images/logo-default-350x70.png`
  - Reemplazar `/images/logo-inverse-343x45.png`
