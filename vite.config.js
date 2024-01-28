import {resolve} from 'path';
import {defineConfig} from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        outDir,
        rollupOptions: {
            input: {
                sample1: resolve(root, 'multitimer', 'top', 'index.html'),
                sample2: resolve(root, 'multitimer', 'sub', 'index.html'),
            },
        },
    },
})
