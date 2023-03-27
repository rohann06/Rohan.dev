/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins',
        'Mulish':'Mulish',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'revel': 'revel 1s ease-in-out'
      },
      keyframes:{
        revel:{
          '0%':{
            transform:'translateY(100px)',
            opacity:'0'
          },
          '50%':{
            opacity:'0'
          },
          '100%':{
            transform:'translateY(0px)',
            opacity:'1'
          }
        }
      }
    },
  },
  plugins: [],
}