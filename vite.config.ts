import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill' 


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({ buffer: true }),
  Unfonts({
    custom: {
      families: [
        {
          name: 'Geist',
          src: './src/assets/fonts/geist/*.woff2',
        },
      ],
    },
  }),
],
});
