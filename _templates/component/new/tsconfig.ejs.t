---
to: packages/<%= name %>/tsconfig.json
---
{
  "extends": "../../base.json",
  "compilerOptions": {
    "outDir": "dist/"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
