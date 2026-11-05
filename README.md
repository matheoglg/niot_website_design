# Club NIoT · sitio web

Sitio oficial del **Club NIoT** (Networking + Internet of Things) de la ESPOL, Guayaquil, Ecuador.

_Research. Create. Develop._

## Desarrollo

Requiere Node.js y [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # servidor local en http://localhost:3000
pnpm lint     # ESLint
pnpm format   # Prettier
pnpm build    # build de producción
```

## Estructura

```
src/
  app/            layout, página de inicio y tokens de color (globals.css)
  components/
    nayo.tsx      NaYO, la mascota del club (sprite pixel art en <canvas>)
    sections/     una sección de la página por archivo
    ui/           piezas reutilizables: botón, etiqueta, cabecera de sección
  content/        textos y datos del sitio (proyectos, eventos, blog, directiva, redes)
  types/          tipos de los datos de content/
docs/prototipo/   prototipo original en HTML, CSS y JS (solo referencia)
```

Para editar textos, proyectos, eventos o la directiva, cambia los archivos de `src/content/`. Lo que aún es de ejemplo está marcado con `ejemplo: true` y un comentario `// EDITAR`.

## Licencia

El código está bajo la [licencia MIT](LICENSE).

El logo, la mascota NaYO y los demás elementos de identidad visual del Club NIoT **no** están cubiertos por esa licencia y no pueden reutilizarse sin permiso del club.
