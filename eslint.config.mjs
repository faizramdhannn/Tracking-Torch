import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Plugin bawaan React untuk deteksi hydration mismatch
import react from "eslint-plugin-react";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      react,
    },
    rules: {
      // ❗ Rule penting untuk mencegah hydration mismatch:
      // – Mencegah conditional render yang berubah antara SSR & Client
      "react/no-danger-with-children": "warn",
      "react/no-unstable-nested-components": "warn",
      "react/jsx-no-leaked-render": "warn",

      // Mendeteksi render yang tergantung browser API
      "react-hooks/exhaustive-deps": "warn",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
