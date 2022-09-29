import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        background: props.colorMode === 'dark' ? '#222' : '#f9f9f9'
      }
    }),
  },
  config: {
    useSystemColorMode: true,
  },
});

export default theme;
