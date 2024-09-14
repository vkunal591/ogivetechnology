# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname
    }
  }
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules
  }
});
```

#Confuigure Site and full setup with backend

# .env

first create category in mongodb after that you add id in env
add Category from Mongodb category Id

VITE_API_PRODUCT_ID=
VITE_API_INDUSTRY_ID=
VITE_API_SERRVICE_ID=c
VITE_API_CLIENTS_ID=
VITE_API_FAQ_ID=
VITE_API_CAREER_ID=
VITE_API_GALLERY_ID=
VITE_API_WHY_ID=
VITE_API_MEMBERS_ID=
VITE_API_CERTIFICATION_ID=
VITE_API_MEMBERSHIP_ID=

VITE_API_BASE_URL=
VITE_API_BACKEND_BASE_URL=

# In vite.config.ts

base: "Your Website Domain"
backend url for API: "your backend Server url"

after that

# create build

npm install : for install packeges
npm run build : for create build file

# Deploy dist forlder on aws server
