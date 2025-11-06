---
mode: "agent"
description: "Crea una Pull Request sencilla con GitHub CLI incluyendo etiquetas y asignación"
---

Crea una Pull Request (PR) con GitHub CLI usando los siguientes parámetros:

**Título de la PR:** ${input:title:Ingresa el título de la PR}
**Descripción:** ${input:description:Ingresa la descripción de la PR (opcional)}
**Base branch:** ${input:base:branch:main}
**Head branch:** ${input:head:Ingresa el nombre de la branch (ej: feature/nueva-funcionalidad)}
**Etiquetas (labels):** ${input:labels:Ingresa las etiquetas separadas por comas (ej: enhancement,bug,priority)}
**Asignados (assignees):** ${input:assignees:Ingresa los usuarios separados por comas (ej: usuario1,usuario2)}

## Instrucciones

1. **Verifica que estés en la branch correcta** y que tengas cambios para hacer commit si es necesario.

2. **Sanitiza la descripción** para evitar caracteres especiales problemáticos:

   ```bash
   # Limpia la descripción: elimina caracteres de control, comillas problemáticas y normaliza saltos de línea
   DESCRIPTION_CLEAN=$(echo "${description}" | sed 's/["$`\\]/\\&/g' | tr '\n' ' ' | sed 's/  */ /g' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
   ```

3. **Método recomendado: Usar archivo temporal para la descripción** (más seguro con caracteres especiales):

   ```bash
   # Crear archivo temporal con la descripción
   TEMP_BODY=$(mktemp)
   echo "${description}" > "$TEMP_BODY"

   # Crear la PR usando el archivo
   gh pr create \
     --title "${title}" \
     --body-file "$TEMP_BODY" \
     --base ${base} \
     --head ${head} \
     --label "${labels}" \
     --assignee "${assignees}"

   # Limpiar archivo temporal
   rm "$TEMP_BODY"
   ```

4. **Alternativa: Crear la PR con descripción sanitizada directamente:**

   ```bash
   DESCRIPTION_CLEAN=$(echo "${description}" | sed 's/["$`\\]/\\&/g' | tr '\n' ' ')
   gh pr create \
     --title "${title}" \
     --body "$DESCRIPTION_CLEAN" \
     --base ${base} \
     --head ${head} \
     --label "${labels}" \
     --assignee "${assignees}"
   ```

5. **Alternativa: Crear la PR primero y luego editar para agregar etiquetas y asignados:**

   ```bash
   # Crear archivo temporal para la descripción
   TEMP_BODY=$(mktemp)
   echo "${description}" > "$TEMP_BODY"

   # Crear la PR y guardar el número
   PR_NUMBER=$(gh pr create --title "${title}" --body-file "$TEMP_BODY" --base ${base} --head ${head} --json number -q .number)

   # Limpiar archivo temporal
   rm "$TEMP_BODY"

   # Agregar etiquetas
   gh pr edit $PR_NUMBER --add-label "${labels}"

   # Agregar asignados
   gh pr edit $PR_NUMBER --add-assignee "${assignees}"
   ```

## Ejemplo de uso

Si tienes:

- Título: "Agregar funcionalidad de autenticación"
- Descripción: "Implementa login con JWT\n\n- Usa tokens JWT\n- Incluye refresh tokens"
- Base: main
- Head: feature/auth
- Etiquetas: enhancement,security
- Asignados: johndoe,janedoe

El comando recomendado (usando archivo temporal) sería:

```bash
TEMP_BODY=$(mktemp)
echo "Implementa login con JWT

- Usa tokens JWT
- Incluye refresh tokens" > "$TEMP_BODY"

gh pr create \
  --title "Agregar funcionalidad de autenticación" \
  --body-file "$TEMP_BODY" \
  --base main \
  --head feature/auth \
  --label "enhancement,security" \
  --assignee "johndoe,janedoe"

rm "$TEMP_BODY"
```

## Notas

- **Manejo de caracteres especiales**: Se recomienda usar `--body-file` con un archivo temporal para evitar problemas con comillas, saltos de línea, caracteres especiales ($, `, \, etc.) en la descripción.
- Si no especificas `--head`, GitHub CLI usará la branch actual.
- Las etiquetas deben existir en el repositorio antes de usarlas.
- Los asignados deben ser usuarios válidos con acceso al repositorio.
- Puedes usar `gh pr view` para ver los detalles de la PR creada.
- El método del archivo temporal es más seguro cuando la descripción contiene:
  - Saltos de línea múltiples
  - Comillas dobles o simples
  - Caracteres especiales como `$`, `` ` ``, `\`
  - Caracteres de control o Unicode complejo
