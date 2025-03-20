// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import deno from '@deno/astro-adapter';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [ remarkMath ],
    rehypePlugins: [ rehypeMathjax ],
  },
  output: "server",
  adapter: deno(),
  image: {
    service: passthroughImageService()
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
