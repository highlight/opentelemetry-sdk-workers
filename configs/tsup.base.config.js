import { defineConfig } from "tsup";

export default defineConfig({
    entry: ['src/index.ts'],
    format: ["esm"],
    splitting: true,
    clean: false,
    dts: true,
    esbuildOptions(options) {
        options.conditions ??= [];
        options.conditions.push("worker", "browser");
    }
});
