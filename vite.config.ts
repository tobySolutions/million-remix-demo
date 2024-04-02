import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import million from "million/compiler";
import MillionCompiler from "@million/lint";

installGlobals();

export default defineConfig({
  plugins: [MillionCompiler.vite(), million.vite({ auto: true }), remix(), tsconfigPaths()],
});
