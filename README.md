# Godfrey Best Portfolio

> View live site: [godfrey.best](https://godfrey.best)

Personal portfolio built with **Astro**.

## Tech

- [Astro](https://astro.build) — static-site framework
- [tsParticles](https://tsparticles.js.org) — hero background particles (`@tsparticles/slim`)
- [AOS](https://michalsnik.github.io/aos/) — scroll reveal animations
- Bootstrap 3 grid + Font Awesome 4 (kept from the original build)

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start dev server at `localhost:4321`     |
| `npm run build`   | Build the production site into `dist/`   |
| `npm run preview` | Preview the production build locally     |
| `npm run check`   | Run `astro check` for type errors        |

## Structure

```
src/
├── layouts/
│   └── BaseLayout.astro   # Head/meta, global CSS, AOS init, footer
├── components/
│   ├── Main.astro         # Hero + nav + particles
│   ├── Navmenu.astro      # Desktop nav + fullscreen mobile menu
│   ├── Particles.astro    # Canvas particle background
│   ├── About.astro
│   ├── Services.astro
│   ├── Contact.astro
│   ├── Form.astro         # Netlify-compatible contact form
│   └── Footer.astro
└── pages/
    ├── index.astro
    └── 404.astro
```

Static assets (CSS, fonts, images) live in [`public/`](./public).

> The original Gatsby "Works" section was commented out in the source and has
> been dropped to keep this build dependency-light.
