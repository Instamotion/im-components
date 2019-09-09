---
to: packages/<%= name %>/package.json
---
{
  "name": "@insta-ui/<%= name %>",
  "version": "0.0.0",
  "types": "dist/cjs/index.d.ts",
  "module": "dist/esm/index.js",
  "main": "dist/cjs/index.js",
  "author": "InstaMotion Retail GmbH",
  "maintainers": [
  ],
  "license": "MIT",
  "files": [
    "dist"
  ]
}
