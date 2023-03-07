import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml'
import Icons from 'unplugin-icons/vite'
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [yaml(), sveltekit(), Icons({ compiler: 'svelte' })]
};

export default config;
