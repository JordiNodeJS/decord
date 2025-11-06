# WCAG 2.2 Quick Reference Guide - DECORD

**Quick accessibility checklist for developers working on DECORD**

---

## ✅ Quick Checks Before Committing Code

### 1. Keyboard Accessibility

- [ ] Can you reach all interactive elements with Tab key?
- [ ] Is the tab order logical (follows visual flow)?
- [ ] Can you activate buttons/links with Enter or Space?
- [ ] Can you close modals/menus with ESC?
- [ ] Is there a visible focus indicator on all elements?

### 2. ARIA and Semantics

- [ ] Used semantic HTML first? (`<button>`, `<nav>`, `<main>`, etc.)
- [ ] ARIA labels on landmarks? (`<nav aria-label="...">`)
- [ ] Icons have `aria-hidden="true"` or `aria-label`?
- [ ] Interactive elements have descriptive labels?
- [ ] Forms have proper `<label>` elements?

### 3. Images and Media

- [ ] All images have `alt` attribute?
- [ ] Decorative images use `alt=""` (empty)?
- [ ] Complex images have detailed descriptions?
- [ ] SVG icons marked as `aria-hidden="true"`?

### 4. Forms

- [ ] All fields have associated `<label>`?
- [ ] Required fields marked with `aria-required="true"`?
- [ ] Error messages use `role="alert"` and `aria-live`?
- [ ] Errors linked to fields via `aria-describedby`?
- [ ] Autocomplete attributes where appropriate?

### 5. Target Sizes (WCAG 2.2)

- [ ] Interactive elements at least 24x24px?
- [ ] Touch targets at least 44x44px (recommended)?
- [ ] Adequate spacing between clickable elements?

### 6. Focus Indicators (WCAG 2.2)

- [ ] Focus outline at least 3px thick?
- [ ] High contrast against all backgrounds?
- [ ] Visible on all interactive elements?

---

## 🔧 Common Patterns

### Skip Link (already implemented)

```tsx
<a href="#main-content" className="skip-link">
  Saltar al contenido principal
</a>
```

### Accessible Button

```tsx
// ✅ Good - Semantic button with ARIA label
<button onClick={handleClick} aria-label="Cerrar modal">
  <CloseIcon aria-hidden="true" />
</button>

// ❌ Bad - Div as button, no label
<div onClick={handleClick}>
  <CloseIcon />
</div>
```

### Accessible Form Field

```tsx
// ✅ Good - Proper label, error handling
<label htmlFor="email">
  Email <span aria-label="requerido">*</span>
</label>
<input
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
  aria-invalid={hasError ? 'true' : 'false'}
  aria-describedby={hasError ? 'email-error' : undefined}
  autoComplete="email"
/>
{hasError && (
  <span id="email-error" role="alert">
    Error message
  </span>
)}
```

### Accessible Navigation

```tsx
// ✅ Good - Semantic nav with ARIA label
<nav aria-label="Navegación principal">
  <Link href="/">Inicio</Link>
  <Link href="/about">Sobre Nosotros</Link>
</nav>

// ✅ Better - Add aria-current for active page
<nav aria-label="Navegación principal">
  <Link href="/" aria-current={isHome ? 'page' : undefined}>
    Inicio
  </Link>
</nav>
```

### Modal/Dialog

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-description">Modal content</p>
  <button aria-label="Cerrar modal">×</button>
</div>
```

### Image with Alt Text

```tsx
// ✅ Descriptive alt text
<Image
  src="/artwork.jpg"
  alt="Pintura abstracta con colores vibrantes por María García"
  width={500}
  height={400}
/>

// ✅ Decorative image
<Image
  src="/decoration.jpg"
  alt=""
  width={100}
  height={100}
/>
```

---

## 🧪 Quick Testing Commands

### 1. Run Dev Server

```bash
pnpm dev
```

### 2. Lighthouse Audit

1. Open http://localhost:3000 in Chrome
2. F12 → Lighthouse tab
3. Select "Accessibility" only
4. Click "Analyze page load"
5. Target: 95+/100

### 3. Keyboard Test

1. Click in address bar
2. Press Tab repeatedly
3. Verify:
   - Skip link appears first
   - All interactive elements reachable
   - Focus indicator visible
   - Logical tab order

### 4. Screen Reader Test (NVDA - Windows)

```bash
# Download: https://www.nvaccess.org/download/
# Start NVDA: Ctrl+Alt+N
# Navigate: Arrow keys, Tab
# Read all: Insert+Down Arrow
```

---

## 📊 WCAG 2.2 Success Criteria Quick Reference

| Criterion                       | Level | Description                    | Status |
| ------------------------------- | ----- | ------------------------------ | ------ |
| 1.1.1 Non-text Content          | A     | All images have alt text       | ✅     |
| 1.3.1 Info and Relationships    | A     | Proper HTML structure          | ✅     |
| 2.1.1 Keyboard                  | A     | All functionality via keyboard | ✅     |
| 2.4.1 Bypass Blocks             | A     | Skip navigation link           | ✅     |
| 2.4.3 Focus Order               | A     | Logical tab order              | ✅     |
| 2.4.7 Focus Visible             | AA    | Visible focus indicator        | ✅     |
| 2.4.11 Focus Not Obscured (Min) | AA    | Focus not hidden               | ✅     |
| 2.4.13 Focus Appearance         | AA    | 3px minimum outline            | ✅     |
| 2.5.8 Target Size (Min)         | AA    | 24x24px minimum                | ✅     |
| 3.2.4 Consistent Identification | AA    | Consistent UI elements         | ✅     |
| 3.3.1 Error Identification      | A     | Errors clearly identified      | ✅     |
| 3.3.2 Labels or Instructions    | A     | Form labels present            | ✅     |
| 3.3.3 Error Suggestion          | AA    | Error messages helpful         | ✅     |
| 3.3.7 Redundant Entry           | A     | No duplicate data entry        | ✅     |
| 4.1.2 Name, Role, Value         | A     | Proper ARIA usage              | ✅     |

---

## 🚫 Common Mistakes to Avoid

### 1. Don't Use `<div>` or `<span>` as Buttons

```tsx
// ❌ Bad
<div onClick={handleClick}>Click me</div>

// ✅ Good
<button onClick={handleClick}>Click me</button>
```

### 2. Don't Forget Alt Text

```tsx
// ❌ Bad - Missing alt
<img src="/photo.jpg" />

// ✅ Good
<Image src="/photo.jpg" alt="Description" />
```

### 3. Don't Use Placeholders as Labels

```tsx
// ❌ Bad - No label
<input type="email" placeholder="Email" />

// ✅ Good
<label htmlFor="email">Email</label>
<input type="email" id="email" placeholder="ejemplo@correo.com" />
```

### 4. Don't Trap Keyboard Focus

```tsx
// ❌ Bad - No way to close with keyboard
<Modal onClose={() => {}} />

// ✅ Good - ESC key closes modal
<Modal onClose={handleClose} onEscKey={handleClose} />
```

### 5. Don't Rely on Color Alone

```tsx
// ❌ Bad - Only color indicates error
<input style={{ borderColor: 'red' }} />

// ✅ Good - Color + icon + text + ARIA
<input aria-invalid="true" aria-describedby="error" />
<ErrorIcon aria-hidden="true" />
<span id="error" role="alert">Error: ...</span>
```

---

## 🔍 Debugging Tips

### Can't find accessibility issue?

1. Check browser console for ARIA errors
2. Run Lighthouse audit for specific issues
3. Use axe DevTools for detailed scan
4. Test with actual screen reader

### Focus indicator not showing?

1. Check if `:focus-visible` is overridden
2. Verify outline hasn't been removed
3. Test with keyboard (Tab key)
4. Check z-index conflicts

### Screen reader not announcing?

1. Check ARIA attributes are correct
2. Verify `role` and `aria-label` spelling
3. Use `aria-live="polite"` for dynamic content
4. Check element is not `display: none`

---

## 📚 Quick Links

- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Articles](https://webaim.org/articles/)
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/accessibility/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🎯 Remember

1. **Accessibility is not optional** - It's a legal requirement in many countries
2. **Test early and often** - Don't wait until the end
3. **Use semantic HTML first** - ARIA is a supplement, not replacement
4. **Keyboard test everything** - If you can't keyboard navigate, it's broken
5. **Real users matter** - Automated tools catch ~30-40% of issues

---

**For detailed implementation guide, see:**

- `docs/WCAG_2.2_ACCESSIBILITY_AUDIT_REPORT.md`
- `docs/WCAG_2.2_IMPLEMENTATION_REPORT.md`
