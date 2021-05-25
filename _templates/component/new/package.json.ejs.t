---
to: packages/<%= name %>/package.json
---
{
  "name": "@im-ui/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.1",
  "types": "dist/cjs/index.d.ts",
  "module": "dist/esm/index.js",
  "main": "dist/cjs/index.js",
  "author": "InstaMotion Retail GmbH",
  "maintainers": [
    "Dmytro B",
    "Ivan D",
    "Oleg P",
    "Alex S"
  ],
  "repository": "git@github.com:Instamotion/im-components.git",
  "license": "MIT",
  "scripts": {
    "build": "npm run clean && npm run compile:esm && npm run compile:cjs",
    "clean": "rimraf ./dist",
    "compile:esm": "tsc -p build/tsconfig.esm.json",
    "compile:cjs": "tsc -p build/tsconfig.cjs.json",
    "prepublishOnly": "bolt build"
  },
  "files": [
    "dist"
  ],
  "dependencies": {
    "@im-ui/theme": "^2.0.8",
    "@im-ui/utils": "^0.5.5"
  },
  "devDependencies": {
    "@types/jest": "^24.0.21",
    "@types/react": "^16.9.11",
    "@types/styled-components": "^4.1.20",
    "jest": "^24.9.0",
    "typescript": "^3.6.4"
  },
  "peerDependencies": {
    "react": "^16.11.0",
    "react-intl": "^3.4.0",
    "styled-components": "^4.4.1"
  }
}
