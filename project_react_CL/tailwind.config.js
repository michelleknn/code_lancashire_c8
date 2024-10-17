/** @type {import('tailwindcss').Config} */
export default {content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", 
  //double * means search all folders. one * means
  //keep searching all subfolders for any files that 
  //you ask it to within {}
],
  theme: {
    extend: {},
  },
  plugins: [],
}

