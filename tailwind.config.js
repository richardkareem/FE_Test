/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6750A4",
        onPrimary:"#FFFFFF",
        primaryContainer:"#EADDFF",
        onPrimaryContainer:"#4F378B",

        secondary:"#625B71",
        onSecondary:"#FFFFFF",
        secondaryContainer:"#E8DEF8",
        onSecondaryContainer:"#4A4458",

        teritary:"#7D5260",
        onTeritary:"#FFF",
        teritaryContainer:"#FFD8E4",
        onTeritaryContainer:"#633B48",
        
        error:"#B3261E",
        onError:"#FFFFFF",

        surfaceContainer:"#F3EDF7",
        surfaceContainerLow:"#F7F2FA",
        surfaceContainerHigh:"##ECE6F0",
        sirfaceContainerHighest:"##E6E0E9",

        surface:"#FEF7FF",
        surfaceVariant:"#E7E0EC",
        inverseSurface:"#322F35",

        outline: "#79747E",
        outlineVariant:"#CAC4D0",

        
      },
    },
  },
  plugins: [],
};
