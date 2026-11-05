# AGENTS.md

Instrucciones para agentes de IA (Claude Code y similares) que trabajen en este repositorio.

## Proyecto

Sitio web oficial del **Club NIoT** de la ESPOL (Escuela Superior Politécnica del Litoral, Guayaquil, Ecuador).

- **NIoT** = Networking + Internet of Things. Se escribe siempre **NIoT** (N, I mayúsculas, o minúscula, T mayúscula). Nunca "NiOT", "NIOT" ni "Niot".
- Se pronuncia "Nayot".
- Lema: **Research. Create. Develop.**
- Descripción oficial: club de investigación, innovación y desarrollo tecnológico en las áreas ICT. Coopera con la sociedad del conocimiento en el desarrollo de aplicaciones web y móviles integradas con servicios telemáticos, Internet de las Cosas y tecnologías de la información y la comunicación, para la formación académica de estudiantes e investigadores.
- Referencia de estructura y tono: el sitio de TAWS (https://taws.espol.edu.ec). Tomar la estructura de secciones como guía, no copiar su diseño.
- Repositorio: `niot_website_design`. Licencia MIT para el código; el logo y la mascota quedan fuera de la licencia (ver "Licencia").

## Stack

- **Next.js** (App Router) con **TypeScript** en modo `strict`.
- **Tailwind CSS** para estilos.
- **pnpm** como gestor de paquetes (igual que TAWS).
- **ESLint** y **Prettier** para lint y formato.
- Deploy previsto en **Vercel**.
- Sin CMS ni base de datos por ahora. El contenido vive en archivos TypeScript tipados dentro del repo. Más adelante se podría agregar Payload CMS, así que mantener el contenido separado de los componentes para que la migración sea simple.

Estructura base:

```
src/
  app/
    layout.tsx        fuentes, metadatos, <html lang="es">
    page.tsx          página de inicio con todas las secciones
    globals.css       Tailwind y tokens de color (@theme)
  components/
    nayo.tsx          sprite de NaYO (client component)
    sections/         una sección por archivo: hero.tsx, nosotros.tsx, areas.tsx, ...
    ui/               piezas reutilizables: button.tsx, tag.tsx, section-heading.tsx
  content/            datos del sitio: proyectos.ts, eventos.ts, blog.ts, directiva.ts, redes.ts
  types/              tipos compartidos (Proyecto, Evento, Post, Miembro)
public/
  images/             logo y fotos del club
```

Reglas:
- Server components por defecto. `'use client'` solo donde haga falta (NaYO, menú móvil).
- Componentes con nombre en PascalCase y archivos en kebab-case.
- Sin `any`. Tipar los datos de `content/` con los tipos de `types/`.
- Imágenes con `next/image`; enlaces internos con `next/link`.
- No instalar librerías nuevas (UI kits, animación, iconos) sin preguntar al usuario.
- Scripts esperados: `pnpm dev`, `pnpm build`, `pnpm lint`. Antes de dar una tarea por terminada, `pnpm lint` y `pnpm build` deben pasar sin errores.

El prototipo en HTML, CSS y JS (`index.html`, `styles.css`, `chip.js`) es solo referencia visual y de contenido. Al migrarlo a Next.js, moverlo a `docs/prototipo/` o borrarlo cuando el usuario lo confirme.

## Secciones del sitio

Inicio (hero con NaYO), Nosotros, Áreas, Proyectos, Eventos, Galería, Blog, Directiva, Súmate (redes del club) y pie de página.

Redes oficiales:
- Instagram: https://www.instagram.com/club.niot.espol/
- X: https://x.com/ClubNiotEspol
- Facebook: https://www.facebook.com/club.niot.espol/

No inventar datos reales del club (nombres de la directiva, fechas, proyectos, cifras de miembros). Si falta un dato, dejar contenido de ejemplo en `src/content/` con `ejemplo: true` (se muestra con la etiqueta "Ejemplo") y un comentario `// EDITAR: ...`. Ningún texto de contenido va escrito directo en los componentes.

## Mascota: NaYO

La mascota se llama **NaYO** (se lee "Nayo"). Su diseño es el sprite **"Chip" de 16 bits**: un microchip con cara, en pixel art. "Chip" era el nombre del boceto; en el sitio, en el código y en los textos se usa siempre **NaYO**.

Ficha del sprite:
- Lienzo de 29x31 px, dibujado en `<canvas>` con `image-rendering: pixelated`.
- Cuerpo: cuadrado de 17x17 px con esquinas muy redondeadas, contorno oscuro de 1 px, luz arriba a la izquierda y sombra abajo a la derecha.
- Punto del pin 1 en la esquina superior izquierda, como en los chips reales.
- Pines: dos por lado, cortos (3 px), lilas con punta redondeada, como "zapatitos".
- Cara: ojos oscuros con brillo blanco, mejillas rosas, boca pequeña.
- Detalles de circuito: dos líneas lilas abajo, a los lados.
- Expresiones disponibles: `neutral`, `happy`, `surprised`, `wink`, `blink`, y `auto` (rota entre ellas).

Reglas:
- El sprite vive en un solo componente: `src/components/nayo.tsx` (client component que dibuja en `<canvas>`). Props: `expression` (las expresiones de arriba, por defecto `auto`), `scale` (entero, por defecto 1) y `className`. Portar la lógica de dibujo desde `chip.js` del prototipo sin cambiar pixeles ni colores, y renombrar toda referencia a `chip`/`Chip` como `nayo`/`NaYO`.
- Usar `useEffect` para el bucle de animación y limpiarlo al desmontar.
- Escalar solo en múltiplos enteros (x2, x4, x6, x8, x10) para que los pixeles no se vean borrosos.
- No redibujar ni "mejorar" el sprite, no cambiar su paleta y no añadir degradados ni sombras suaves. Cualquier cambio al diseño de NaYO lo pide el usuario explícitamente.
- Texto alternativo: "NaYO, la mascota del Club NIoT".

## Paleta de colores del club

Usar estos tokens. No introducir colores nuevos sin que el usuario lo pida.

| Token | Hex | Uso |
|---|---|---|
| `--niot-ink` | `#2A1450` | Texto principal, contornos, fondos oscuros |
| `--niot-outline` | `#1E0F3D` | Contorno del sprite de NaYO |
| `--niot-deep` | `#352983` | Morado profundo del logo |
| `--niot-muted` | `#5E398F` | Texto secundario, fondos de bloque oscuros |
| `--niot-violet` | `#6E37B8` | Botones, enlaces, acentos |
| `--niot-primary` | `#8A50F4` | Morado principal del logo |
| `--niot-body` | `#8A4FD6` | Cuerpo de NaYO |
| `--niot-soft` | `#A874F0` | Brillos, estados hover |
| `--niot-lilac` | `#C79BFF` | Pines de NaYO, bordes suaves, etiquetas |
| `--niot-mist` | `#F1E9FF` | Fondo claro principal |
| `--niot-pink` | `#F06FC8` | Mejillas de NaYO, foco de teclado, acento puntual |
| `--niot-white` | `#FFFFFF` | Superficies, texto sobre oscuro |

Definirlos en `src/app/globals.css` dentro de `@theme` como `--color-niot-ink`, `--color-niot-mist`, etc., para usarlos con clases de Tailwind (`bg-niot-mist`, `text-niot-ink`, `border-niot-lilac`). No usar colores de la paleta por defecto de Tailwind (`purple-500`, `gray-100`...) ni hex sueltos en los componentes.

Reglas de color:
- El rosa es un acento: úsalo poco (foco, detalles), nunca como color dominante.
- Verificar contraste WCAG AA: texto normal mínimo 4.5:1. `--niot-ink` y `--niot-muted` sobre `--niot-mist` o blanco pasan; el lila y el rosa no sirven como color de texto sobre fondos claros.

## Tipografía

- Títulos: **Pixelify Sans** (pixel, combina con NaYO).
- Texto: **Figtree**.
- Cargarlas con `next/font/google` en `layout.tsx` y exponerlas como variables CSS (`--font-pixel`, `--font-sans`) para Tailwind. No usar `<link>` a Google Fonts.

## Skills de frontend

Este proyecto usa skills de diseño instaladas en Claude Code. Úsalas así:

1. **frontend-design** o **ui-ux-pro-max**: al crear una sección o componente nuevo. Antes de escribir código, proponer en pocas líneas la dirección (layout, jerarquía, uso de la paleta) y respetar siempre la paleta y tipografía de este archivo por encima de lo que sugiera la skill.
2. **impeccable**: para revisar y pulir.
   - `/impeccable audit` después de terminar cada sección.
   - `/impeccable polish` antes de cada commit grande o antes de un deploy.
   - El hook de diseño de Impeccable está activo; atender sus hallazgos en vez de ignorarlos.
3. **emil-design-eng** (Emil Kowalski): solo para implementar animaciones, transiciones y microinteracciones **cuando el usuario las indique** (ver "Animaciones").

Si una skill contradice este archivo, gana este archivo.

## Animaciones

Las instrucciones de animación las da el usuario directamente en Claude Code.

- No añadir animaciones, transiciones de entrada, efectos de scroll ni hovers animados por iniciativa propia.
- Mientras no haya instrucciones, NaYO solo usa su animación base del sprite (rebote de 1 px, pasitos, parpadeo, cambio de expresiones) que ya trae su archivo.
- Al implementar lo que pida el usuario, usar la skill emil-design-eng y respetar siempre `prefers-reduced-motion: reduce` (sin movimiento no esencial).

## Calidad mínima

- Responsive desde 360 px de ancho, sin scroll horizontal.
- Navegación usable con teclado y foco visible (`outline` rosa).
- HTML semántico (`header`, `nav`, `main`, `section`, `article`, `footer`) y `lang="es"`.
- Imágenes con `alt` descriptivo; las decorativas con `alt=""` o `aria-hidden="true"`.
- Probar en móvil y escritorio antes de dar una tarea por terminada.

## Textos

- Español neutro, tono cercano y claro, como lo escribiría un estudiante del club.
- Frases en sentence case (solo la primera letra en mayúscula), sin títulos en MAYÚSCULAS.
- Evitar relleno de marketing y frases genéricas de IA ("potencia tu futuro", "descubre un mundo de posibilidades").
- Botones con verbos concretos: "Conoce el club", "Súmate", "Leer artículo".

## Git

- Commits en español con Conventional Commits: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`, `chore:`.
- Commits pequeños, uno por cambio lógico.
- No hacer push ni crear PRs sin que el usuario lo pida.

## Licencia

El código está bajo MIT. El logo, la mascota NaYO y demás elementos de identidad visual del Club NIoT no están cubiertos por esa licencia. Mantener esta aclaración en el README.

## Pendiente (lo decide el usuario)

- Dominio (se planea solicitar un subdominio de la ESPOL).
- Si se agrega Payload CMS más adelante.
- Logo oficial en alta resolución.
- Animaciones.
