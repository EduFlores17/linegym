// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFEB00',    // Amarillo neón (para botones y títulos)
        dark: '#0A0A0A',       // Fondo principal (negro)
        light: '#F9F9F9',      // Textos claros
        accent: '#FFD700',     // Amarillo secundario/dorado (opcional)
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],  // Puedes personalizar también
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
