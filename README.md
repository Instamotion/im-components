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

... of the package you've worked on.

1. Run `bolt version:bump` and follow the instructions. It will ask you which package to bump, what should be the new version and will bump the versions in the dependant packages. Here is the "screenshot":

```
$ bolt version:bump
? Which pkg to bump (Use arrow keys)
❯ @im-ui/accordion
  @im-ui/branding-logo
  @im-ui/button
  ...
  @im-ui/utils

? Old version is @im-ui/utils@0.3.0. What's new ver? 0.3.1

Bumping dev dep in @im-ui/accordion : ^0.3.0 -> 0.3.1
Bumping dep in @im-ui/carousel : ^0.3.0 -> 0.3.1
Bumping dep in @im-ui/checkbox : ^0.3.0 -> 0.3.1
...
Done in Xs.
```

As such, all the packages will have the latest version.

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

## How to update the version of a package

Run the following command:

```
bolt version:bump
```

It will ask you what package's version you want to bump and what would be the new version.
It will bump the version of the package you've selected, and will find all the dependant packages and bump the version for them as well
