import languageTypescript from '@iconify/icons-mdi/language-typescript';
import graphqlIcon from '@iconify/icons-mdi/graphql';
import reactIcon from '@iconify/icons-mdi/react';
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql';
import nodejsIcon from '@iconify/icons-mdi/nodejs';
import gatsbyIcon from '@iconify/icons-mdi/gatsby';
import netlifyIcon from '@iconify/icons-simple-icons/netlify';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import serverlessIcon from '@iconify/icons-simple-icons/serverless';
import styledComponentsIcon from '@iconify/icons-simple-icons/styled-components';
import hasuraIcon from '@iconify/icons-logos/hasura';
import logoPwa from '@iconify/icons-ion/logo-pwa';
import tailwindIcon from '@iconify/icons-mdi/tailwind';
import jestIcon from '@iconify/icons-simple-icons/jest';
import svelteIcon from '@iconify/icons-simple-icons/svelte';
import sassIcon from '@iconify/icons-mdi/sass';


export const particlesParams = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ddd",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#888888",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#777",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
}

export const TAGS = {
  typescript: {name: '#Typescript', logo: languageTypescript, bgColor: '#0078CF'},
  graphql: {name: '#GraphQL', logo: graphqlIcon, bgColor: '#E536AB'},
  react: {name: '#React', logo: reactIcon, bgColor: '#00D8FE'},
  postgres: {name: '#PostgreSQL', logo: postgresqlIcon, bgColor: '#346790'},
  node: {name: '#Node', logo: nodejsIcon, bgColor: '#549E43'},
  gatsby: {name: '#Gatsby', logo: gatsbyIcon, bgColor: '#744C9E'},
  netlify: {name: '#Netlify', logo: netlifyIcon, bgColor: '#4CB6C2'},
  nextjs: {name: '#Nextjs', logo: nextjsIcon, bgColor: '#A2A2A2'},
  serverless: {name: '#Serverless', logo: serverlessIcon, bgColor: '#F26D61'},
  styledComponents: {name: '#Styled', logo: styledComponentsIcon, bgColor: '#EFA6E9'},
  hasura: {name: '#Hasura', logo: hasuraIcon, bgColor: '#99895d'},
  pwa: {name: '#PWA', logo: logoPwa, bgColor: '#726c59'},
  tailwind: {name: '#Tailwind', logo: tailwindIcon, bgColor: '#1ABEB8'},
  jest: {name: '#Jest', logo: jestIcon, bgColor: '#99425B'},
  svelte: {name: '#Svelte', logo: svelteIcon, bgColor: '#FF3F01'},
  sass: {name: '#Sass', logo: sassIcon, bgColor: '#CE6799'},
}