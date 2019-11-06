---
to: packages/<%= name %>/src/index.ts
---
export { default, <%= h.changeCase.pascalCase(name) %>Props } from './<%= name %>';
