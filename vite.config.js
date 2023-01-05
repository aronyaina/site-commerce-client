import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  envPrefix: "REACT_APP",
  build: {
    outDir: "build",
  },
  server: {
    watch:{
      usePolling:true,
    },
    host:true,
    strictPort:true,
    port:5173,
    proxy: {
      // Server configuration
      "/api": {
        // "http://node-server:5000"
        target:  "http://node-server:5000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [
    react(),
    envCompatible(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
