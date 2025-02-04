import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: vercel()
});