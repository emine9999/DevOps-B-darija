module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",  
    "./public/index.html",  
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#525CEB',  
        'menu': '#BFCFE7',
        'second': '#3D3B40',
        'lgg': '#F8EAdd',
        'violet': '#7a6ad8',
        'light':'#6082B6'
      },
      
      keyframes: {
        spinGrowShrink: {
          '25%': {
            transform: ' scale(1)',  
          },
        
          '50%': {
            transform: ' scale(2)',  
          },
          '75%': {
            transform: ' scale(2)',  
          },
          '100%': {
            transform: ' scale(3)',  
          },
        },
      },
      animation: {
        'spinGrowShrink': 'spinGrowShrink 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
