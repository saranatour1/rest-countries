/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      colors: {
        'dark-mode-elements':'hsl(209, 23%, 22%)',
        'dark-mode-background':'hsl(207, 26%, 17%)',
        'light-mode-input':'hsl(0, 0%, 52%)',
        'light-mode-background':'hsl(0, 0%, 98%)',
        'white':'hsl(0, 0%, 100%)',
      },
      fontFamily: { 'primary':['Nunito Sans']},
      spacing:{
        'sm-space':'14px',
        'md-space':'16px',
      },
      transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
          'background-color':'color,background-color',
          
      }
    }
	},
	plugins: [],
  darkMode: 'class',
};
