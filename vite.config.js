import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
css: {
    modules: {
      scopeBehaviour: 'local', // Це поведінка за замовчуванням, але перевірка не завадить
    }
  }
});