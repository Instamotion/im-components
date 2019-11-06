---
to: packages/<%= name %>/build/tsconfig.cjs.json
---
{
  "extends": "../../../tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "outDir": "../dist/cjs",
    "rootDirs": ["../src", "../stories"]
  },
  "exclude": [
    "../node_modules",
    "../dist"
  ],
  "include": [
    "../src/**/*.ts",
    "../src/**/*.tsx"
  ]
}
