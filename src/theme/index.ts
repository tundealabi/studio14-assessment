import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    keyframes: {
      card: {
        '0%': { transform: 'scaleY(1)' },
        '50%': { transform: 'scaleY(1.5)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
    tokens: {
      animations: {
        cardAnim: { value: 'card .6s ease-in-out' },
      },
      fonts: {
        body: { value: 'Inter, sans-serif' },
        heading: { value: 'Poppins, sans-serif' },
      },
    },
  },
});

export const themeSystem = createSystem(defaultConfig, config);
