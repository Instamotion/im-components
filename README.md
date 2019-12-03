
# im-components

We use [bolt](https://www.npmjs.com/package/bolt) to manage workspaces in this repository.

## Using components

First of all, in the root of your project: `touch .npmrc` with the following content:
```
@im-ui:registry=https://registry.npmjs.org
//registry.npmjs.org/:_authToken=${NPM_RO_TOKEN}
```

Note: *Because the repository is private, you are going to need to `export NPM_RO_TOKEN=<token>`, where `<token>` is stored in LastPass*

Note: *Because of the way `npm` resolves the dependencies, when runnning `npm install` it is better to omit cache by specifying `--cache=/tmp/npm_$(date +%s)`*

```
npm i @im-ui/... --cache=/tmp/npm_$(date +%s)
```

## Contributing

### First things first

Please, install [bolt](https://www.npmjs.com/package/bolt).
```
yarn global add bolt
```

Install dependencies and build all the packages:

```
$ bolt
$ bolt build
```

### Creating a new component

We are using [Hygen](https://www.hygen.io/) to generate a new components.

Run the following command passing the new component's name in the end:

```
bolt generate:component <componentsName>
```

Note: *Our custom template is located in `/_templates/component/new` folder. Please, feel free to contribute.*

### Last step, brefore creating a PR

After you have added or modified a package, you should run the following command:

`yarn changeset` - pick the packages to include in a new changeset. This will give you the following prompt:

```
Which packages would you like to include? …
- changed packages
  ✔ @im-ui/accordion
- unchanged packages
    @im-ui/branding-logo
    @im-ui/button
    ...
```

Using up, down and space keys select the packages you want to include in the changeset (pick all :).

```
Which packages should have a major bump? …
✔ @im-ui/accordion@0.1.4
```

Using up, down and space keys select the packages that will receive a major change (same for minor and patch).

Finish up by writing a (more-or-less) meaningful message. Push your branch. Done.

### Running the Storybook

First, run `bolt` and `bolt build:components`. After everything has been built, you can run Storybook:

```
yarn start
```

### Adding dependency to a package

Let's say, we need to use `@im-iu/utils` within `@im-ui/button`.

```
bolt w @im-ui/button add @im-iu/utils [-P|-D]
```

You can use yarn flags to specify the type of the dependency:
- `-P` for peer dependency;
- `-D` for dev dependency
