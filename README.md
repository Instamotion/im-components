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

## How to update the version of a package

Run the following command:

```
bolt version:bump
```

It will ask you what package's version you want to bump and what would be the new version.
It will bump the version of the package you've selected, and will find all the dependant packages and bump the version for them as well

## How to use

1. Generate a "Personal access token".

  - In GitHub go to `Settings -> Developer settings -> Personal access tokens`
  - Click "Generate new token"
  - Tick all the `*:package` checkboxes as well as `repo` checkbox;

2. `touch ~/.npmrc` with the following content:

```
@instamotion:registry=https://npm.pkg.github.com/instamotion
//npm.pkg.github.com/:_authToken=TOKEN
//npm.pkg.github.com/instamotion/:_authToken=TOKEN
always-auth=true
```

3. In the root of your project: `touch .npmrc` with the following content:

```
scripts-prepend-node-path=true
@instamotion:registry=https://npm.pkg.github.com/instamotion
```
