import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importHelpers from "eslint-plugin-import-helpers";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // 1. Ignora pastas de build (opcional, mas recomendado)
  { ignores: ["dist", "node_modules", "build"] },

  // 2. Configurações recomendadas base
  js.configs.recommended,
  react.configs.flat.recommended,

  // O Prettier já tem um atalho pronto para o formato novo!
  // Isso já ativa o plugin e desliga regras do ESLint que brigam com o Prettier
  eslintPluginPrettierRecommended,

  // 3. Suas configurações personalizadas
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Avisa o ESLint que estamos usando React (JSX)
        },
      },
    },
    // Declarando os plugins que não tem configuração "flat" nativa ainda
    plugins: {
      "react-hooks": reactHooks,
      "import-helpers": importHelpers,
    },
    rules: {
      // --- Regras do React Hooks ---
      ...reactHooks.configs.recommended.rules,

      // --- Suas Regras do React ---
      "react/react-in-jsx-scope": "off", // Não precisa importar o React no Vite/Next
      "react/prop-types": "off",

      // --- Suas Regras de Importação ---
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            "/^react/",
            "module",
            "/^@shared/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],

      // --- Suas Regras do Prettier ---
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true, // aspas simples
          trailingComma: "none", // virgula no fim da linha
          arrowParens: "always",
          semi: false, // sem ponto e vírgula no fim
          endOfLine: "auto",
        },
      ],
    },
  },
];
