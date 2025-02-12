import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/mv_appBg.png')",
      },
      fontSize:{
        'custom':['10px',{lineHeight:'1rem'}],
        'custom2':['40px',{lineHeight:'2.5rem'}],
        'custom3':['26px',{lineHeight:'2rem'}],
        'custom4':['32px',{lineHeight:'2rem'}],

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-color':'#f9f8f6',
        'custom-color2':'#f5f4f0',
        'custom-color3':'#e68600',
        'custom-color4':'#ff551a',
        'custom-color5':'#ff9950',
        'custom-color6':'#cccccc',
        'font-custom':'#ff6010',
        'font-custom2':'#666666',
        'border':'#B3BAD',
      },
      spacing:{
        'custom-5':'5px',
        '1.5':'6px',
        'custom-7':'7px',
        'custom-9':'9px',
        'custom-11':'11px',
        'custom-38':'38px',
        'custom-13':'13px',
        '2.5':'10px',
        '18':'18px',
        '4.5':'19px',
        '30':'30px',
        '38':'151px',
        '42':'42px',
        '53':'53px',
        'h-60':'60px',
        '83':'83px',
        '70':'70px',
        '74':'74px',
        '77':'77px',
        '103':'103px',
        '108':'108px',
        '120':'120px',
        '122':'122px',
        '130':'130px',
        '134':'134px',
        '137':'137px',
        '148':'148px',
        '150':'150px',
        '166':'166px',
        '170':'170px',
        '200':'200px',
        '230':'230px',
        '226':'226px',
        '215':'215px',
        '245':'245px',
        '260':'260px',
        '264':'264px',
        '269':'269px',
        '280':'280px',
        '287':'287px',
        '310':'310px',
        '320':'320px',
        '334':'334px',
        '337':'337px',
        '345':'345px',
        '348':'348px',
        '363':'363px',
        '350':'350px',
        '532':'532px',
        '600':'600px',
        '696':'696px',
        '960':'960px',
        '980':'980px',
        '1024':'1024px',
      }
    },
  },
  plugins: [],
};
export default config;
