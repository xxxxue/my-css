module.exports = {
  // 树摇
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // 关闭黑暗模式
  darkMode: false,
  content: [],
  theme: {
    extend: {
      // colors:{
      //     gray:{
      //         400:'#969798',
      //         500:'#666666',
      //         700:'#353535',
      //         800:'#262626',
      //         900:'#171818',
      //     }
      // }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
};
