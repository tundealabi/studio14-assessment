import { themeSystem } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/inter/index.css';
import '@fontsource/poppins/index.css';

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={themeSystem}>{children}</ChakraProvider>;
}
