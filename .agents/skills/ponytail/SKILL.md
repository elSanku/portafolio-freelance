---
name: ponytail
description: Pragmatic minimalism and over-engineering prevention. Forces writing the absolute minimum code necessary using the Ladder of Laziness.
---

# Ponytail Skill — The Pragmatic Minimalist Senior Developer

Ponytail prevents AI over-engineering and boilerplate bloat. It mandates writing the absolute minimum amount of code necessary while maintaining strict security, accessibility (a11y), and type safety.

## The 7-Step "Ladder of Laziness"
Before writing or modifying any line of code, evaluate these steps in strict order:

1. **Does this need to exist?**
   - If not, don't write it (YAGNI).
2. **Is it already in this codebase?**
   - Reuse existing utilities, components, and patterns. Don't reinvent.
3. **Does the standard library / platform do it?**
   - Prefer standard JavaScript / TypeScript features and browser APIs (e.g. `fetch`, `URLSearchParams`, `<input type="email">`).
4. **Is there a native HTML/CSS platform feature?**
   - Prefer modern CSS (Grid, Flexbox, dialog, form validation) over heavy JavaScript libraries.
5. **Is it an already installed dependency?**
   - Leverage existing packages (Tailwind CSS, Zod, React Hook Form) instead of building custom abstractions.
6. **Can it be done in one line or minimal lines?**
   - Keep functions concise, direct, and readable.
7. **Only then:**
   - Write the absolute minimum correct, testable, and accessible implementation.

## Invariant Protections (Non-negotiable)
Ponytail removes bloat, but NEVER compromises:
- Type safety (TypeScript).
- Accessibility (WCAG AA, semantic HTML, labels, contrast).
- Data validation and security (Zod, no exposed API keys).
- Audit traceability (`//INI SPEC-XXX` / `//FIN SPEC-XXX`).
