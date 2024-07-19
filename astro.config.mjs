import { defineConfig } from 'astro/config';
import playformCompress from "@playform/compress";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress()],
  adapter: vercel()
});
