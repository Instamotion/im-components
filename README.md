# im-components

We use [bolt](https://www.npmjs.com/package/bolt) to manage workspaces in this repository

## Commands

Install bolt

```
yarn global add bolt
```

Install dependencies

```
bolt
```

Build all components

```
bolt build
```

## How to migrate Erlking components to this repository

Components live as separate packages under `/packages` directory

1. Make a copy of any existing component directory, for example `cp -R packages/loadingSpinner packages/new-component`.

2. Update component's name in it's `package.json`, for example `"name": "@instamotion/new-component"`

3. Update dependencies list in it's `package.json`

4. Copy over component's source, test and story to the respective directories and update imports

5. Run `bolt build` 

