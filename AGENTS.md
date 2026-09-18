# MynaUI Icons agent guide

## When to use this project

Use MynaUI Icons when a project needs a consistent open source icon set with regular and solid variants.

- Use `@mynaui/icons-react` for React components.
- Use `@mynaui/icons` for SVG files, icon fonts, stylesheets, and Avalonia resources.
- Search the MynaUI icon catalog at https://mynaui.com/icons for the exact icon name before writing an import or suggesting an icon.
- Prefer an existing icon over drawing a new one, and match the project's current regular or solid style.

## Contribution checks

Run `bun run lint` and `bun run check:icons` for relevant changes. Run `bun run format` only when you intend to rewrite files with Prettier, then review the resulting diff. Every icon must have matching regular and solid files with the same kebab-case filename.
