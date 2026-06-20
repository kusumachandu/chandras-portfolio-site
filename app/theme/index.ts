import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      accent:     "#7C6AF7",
      accent2:    "#A78BFA",
      accentGlow: "rgba(124,106,247,0.15)",
      bg:         "#080C14",
      bg1:        "#0D1117",
      bg2:        "#111827",
      bg3:        "#1A2234",
      border:     "rgba(255,255,255,0.07)",
      border2:    "rgba(255,255,255,0.12)",
      text:       "#F1F5F9",
      text2:      "#94A3B8",
      text3:      "#4B5563",
      green:      "#10B981",
      greenBg:    "rgba(16,185,129,0.08)",
    },
  },
  fonts: {
    heading: `'ClashDisplay', 'Inter', sans-serif`,
    body:    `'Inter', sans-serif`,
    mono:    `'JetBrains Mono', monospace`,
  },
  styles: {
    global: {
      "html, body": {
        bg:    "#080C14",
        color: "#F1F5F9",
        scrollBehavior: "smooth",
        WebkitFontSmoothing: "antialiased",
      },
      "*": { boxSizing: "border-box" },
      "@font-face": {
        fontFamily: "ClashDisplay",
        src: "url('https://cdn.jsdelivr.net/npm/clash-display@1.0.0/fonts/ClashDisplay-Variable.woff2') format('woff2')",
        fontWeight: "100 900",
        fontStyle:  "normal",
        fontDisplay: "swap",
      },
    },
  },
  components: {
    Button: {
      baseStyle: { borderRadius: "10px", fontWeight: 500, _focus: { boxShadow: "none" } },
      variants: {
        accent: {
          bg: "brand.accent", color: "white",
          _hover: { bg: "brand.accent2", transform: "translateY(-2px)", boxShadow: "0 8px 32px rgba(124,106,247,0.25)" },
          transition: "all 0.25s",
        },
        ghost_dark: {
          bg: "transparent", color: "brand.text2",
          border: "1px solid", borderColor: "brand.border2",
          _hover: { color: "brand.text", borderColor: "brand.accent" },
          transition: "all 0.2s",
        },
      },
    },
  },
});

export default theme;
