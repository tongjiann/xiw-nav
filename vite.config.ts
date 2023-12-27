import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path';

const root = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
        alias: [
            {
                find: /\@\//,
                replacement: `${pathResolve('src')}/`
            }
        ]
    },
})

function pathResolve(dir: string) {
    return resolve(root, '.', dir)
}
