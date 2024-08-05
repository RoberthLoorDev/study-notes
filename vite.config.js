import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        setupFiles: "./vitest.setup.js",
        globals: true,
        environment: "jsdom",
        exclude: [...configDefaults.exclude, "e2e/*"],
    },

    plugins: [react()],
});
