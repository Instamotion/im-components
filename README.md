# im-components

We use [bolt](https://www.npmjs.com/package/bolt) to manage workspaces in this repository

## Using components

Because of the way `npm` resolves the dependencies, when runnning `npm install` it is better to omit cache by specifying `--cache=/tmp/npm_$(date +%s)`

```
npm i @im-ui/... --cache=/tmp/npm_$(date +%s)
```

## Contributing

### First things first

Please, install [bolt](https://www.npmjs.com/package/bolt).

```
yarn global add bolt
```

Install dependencies and build all components:

```
$ bolt
$ bolt build
```

### Run Storybook

```
bolt start
```

### Bump the version

1. `bolt bump:changeset` - pick the packages to include in the changeset
2. `bump:version` - generate changelog fiels and bump versions

### Adding dependency to a package

Let's say, we need to use `@im-iu/utils` within `@im-ui/button`.

```
bolt w @im-ui/button add @im-iu/utils
```

You can use yarn flags to specify the type of the dependency: `-P` for peer dependency and `-D` for dev dependency

## How to migrate Erlking components to this repository

Components live as separate packages under `/packages` directory

1. Make a copy of any existing component directory, for example `cp -R packages/loadingSpinner packages/new-component`.

2. Update component's name in it's `package.json`, for example `"name": "@im-ui/new-component"`

3. Update dependencies list in it's `package.json`

4. Copy over component's source, test and story to the respective directories and update imports

5. Run `bolt build`

## How to create a new component

We are using [Hygen](https://www.hygen.io/) to generate new IM components.

Run the following command passing newComponent's name in the end:

```
bolt generate:component
```

Our custom template is located in `/_templates/component/new` folder of the repo. Feel free to contribute.

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
