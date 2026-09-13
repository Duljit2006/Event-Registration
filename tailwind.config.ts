import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
  "extend": {
    "colors": {
      "on-background": "#1a1b1e",
      "tertiary-fixed-dim": "#fbbc05",
      "surface-container-lowest": "#ffffff",
      "tertiary-fixed": "#ffdfa0",
      "on-tertiary": "#ffffff",
      "secondary": "#006e2c",
      "on-primary": "#ffffff",
      "on-secondary": "#ffffff",
      "secondary-fixed": "#89fa9b",
      "surface-variant": "#e3e2e6",
      "surface-dim": "#dbd9dd",
      "error": "#ba1a1a",
      "on-surface-variant": "#424753",
      "primary-fixed": "#d8e2ff",
      "outline-variant": "#c2c6d5",
      "on-primary-fixed": "#001a41",
      "secondary-fixed-dim": "#6ddd81",
      "tertiary": "#765700",
      "on-tertiary-fixed": "#261a00",
      "on-secondary-fixed": "#002108",
      "on-primary-container": "#fefcff",
      "primary-fixed-dim": "#adc6ff",
      "outline": "#727785",
      "on-secondary-container": "#00722f",
      "surface-tint": "#005ac1",
      "primary-container": "#2771df",
      "on-tertiary-fixed-variant": "#5c4300",
      "secondary-container": "#86f898",
      "surface-container-high": "#e9e7eb",
      "background": "#faf9fd",
      "on-primary-fixed-variant": "#004494",
      "surface-container": "#efedf1",
      "on-secondary-fixed-variant": "#005320",
      "on-error-container": "#93000a",
      "surface-bright": "#faf9fd",
      "primary": "#0058bd",
      "on-tertiary-container": "#fffbff",
      "surface": "#faf9fd",
      "inverse-primary": "#adc6ff",
      "error-container": "#ffdad6",
      "tertiary-container": "#956e00",
      "on-error": "#ffffff",
      "inverse-on-surface": "#f1f0f4",
      "on-surface": "#1a1b1e",
      "surface-container-highest": "#e3e2e6",
      "inverse-surface": "#2f3033",
      "surface-container-low": "#f4f3f7"
    },
    "borderRadius": {
      "DEFAULT": "1rem",
      "lg": "2rem",
      "xl": "3rem",
      "full": "9999px"
    },
    "spacing": {
      "space-lg": "1.5rem",
      "gutter-lg": "2rem",
      "margin": "1.5rem",
      "space-sm": "0.5rem",
      "margin-lg": "5rem",
      "space-md": "1rem",
      "space-2xl": "3rem",
      "margin-md": "3rem",
      "gutter": "1.5rem",
      "space-xl": "2rem",
      "space-3xl": "4.5rem",
      "space-xs": "0.25rem",
      "gutter-sm": "1rem"
    },
    "fontFamily": {
      "label-md": [
        "Plus Jakarta Sans"
      ],
      "headline-sm": [
        "Plus Jakarta Sans"
      ],
      "body-sm": [
        "Roboto Flex"
      ],
      "label-lg": [
        "Plus Jakarta Sans"
      ],
      "label-sm": [
        "Plus Jakarta Sans"
      ],
      "headline-lg": [
        "Plus Jakarta Sans"
      ],
      "headline-lg-mobile": [
        "Plus Jakarta Sans"
      ],
      "body-md": [
        "Roboto Flex"
      ],
      "title-lg": [
        "Plus Jakarta Sans"
      ],
      "headline-md": [
        "Plus Jakarta Sans"
      ],
      "display-lg": [
        "Plus Jakarta Sans"
      ],
      "display-lg-mobile": [
        "Plus Jakarta Sans"
      ],
      "body-lg": [
        "Roboto Flex"
      ]
    },
    "fontSize": {
      "label-md": [
        "12px",
        {
          "lineHeight": "16px",
          "letterSpacing": "0.02em",
          "fontWeight": "600"
        }
      ],
      "headline-sm": [
        "20px",
        {
          "lineHeight": "28px",
          "fontWeight": "600"
        }
      ],
      "body-sm": [
        "12px",
        {
          "lineHeight": "16px",
          "fontWeight": "400"
        }
      ],
      "label-lg": [
        "14px",
        {
          "lineHeight": "20px",
          "letterSpacing": "0.01em",
          "fontWeight": "600"
        }
      ],
      "label-sm": [
        "11px",
        {
          "lineHeight": "14px",
          "letterSpacing": "0.04em",
          "fontWeight": "500"
        }
      ],
      "headline-lg": [
        "36px",
        {
          "lineHeight": "44px",
          "letterSpacing": "-0.015em",
          "fontWeight": "700"
        }
      ],
      "headline-lg-mobile": [
        "28px",
        {
          "lineHeight": "36px",
          "letterSpacing": "-0.01em",
          "fontWeight": "700"
        }
      ],
      "body-md": [
        "14px",
        {
          "lineHeight": "20px",
          "fontWeight": "400"
        }
      ],
      "title-lg": [
        "18px",
        {
          "lineHeight": "26px",
          "fontWeight": "600"
        }
      ],
      "headline-md": [
        "24px",
        {
          "lineHeight": "32px",
          "fontWeight": "600"
        }
      ],
      "display-lg": [
        "56px",
        {
          "lineHeight": "64px",
          "letterSpacing": "-0.02em",
          "fontWeight": "700"
        }
      ],
      "display-lg-mobile": [
        "38px",
        {
          "lineHeight": "46px",
          "letterSpacing": "-0.01em",
          "fontWeight": "700"
        }
      ],
      "body-lg": [
        "16px",
        {
          "lineHeight": "24px",
          "fontWeight": "400"
        }
      ]
    }
  }
}
};
export default config;
