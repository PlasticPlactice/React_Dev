import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'custom':['10px',{lineHeight:'1rem'}]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-color':'#f9f8f6',
        'custom-color2':'#f5f4f0',
        'custom-color3':'#e68600',
        'custom-color4':'#ff551a',
        'font-custom':'#ff6010'
      },
      spacing:{
        '1.5':'6px',
        '2.5':'10px',
        '30':'30px',
        '38':'151px',
        'custom-11':'11px',
        '53':'53px',
        'h-60':'60px',
        '83':'83px',
        '74':'74px',
        '108':'108px',
        '134':'134px',
        '150':'150px',
        '226':'226px',
        '264':'264px',
        '334':'334px',
        '337':'337px',
        '348':'348px',
        '696':'696px',

      }
    },
  },
  plugins: [],
};
export default config;
