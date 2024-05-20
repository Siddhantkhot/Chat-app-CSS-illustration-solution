/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'PaleViolet':['hsl(276, 100%, 81%)'],
        'Moderate-Violet':['hsl(276, 55%, 52%)'],
        'Desaturated-Dark-Violet':['hsl(271, 15%, 43%)'],
        'Grayish-Blue':['hsl(206, 6%, 79%)'],
        
        'White':['hsl(0, 0%, 100%)'],
        'Light-Grayish-Violet':['hsl(270, 20%, 96%)'],
        'Very-Dark-Desaturated-Violet':['hsl(271, 36%, 24%)'],
        'Very-Light-Magenta':['hsl(289, 100%, 72%)'], 
        'Light-Magenta':['hsl(293, 100%, 63%)'],
        'Light-Violet':['hsl(264, 100%, 61%)'],
        'Dark-Grayish-Violet':['hsl(270, 7%, 64%)'],
      },
      backgroundColor:{
        'Very-Dark-Desaturated-Violet':['hsl(271, 36%, 24%)'],
        
       
      },
      maxWidth:{
        'full':['375px'],
      },
      width:{
        'half':['50%'],
        '105':['32rem'],
      },
      height:{
        'half':['60%'],
        'seventy':['80%'],
      },
      fontSize:{
        'sx':['0.68rem'],
        'sm':['0.5rem'],
        'sk':['0.8rem'],
      },
      fontFamily:{'Rubik':['Rubik']},
      margin:{'22':['5.5rem']},
      fontWeight:{'400':['400'],
        '500':['500'],
        '700':['700'],
      },
    
    },
  },
  plugins: [],
}

