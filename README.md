
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

### How to create a new component

We are using [Hygen](https://www.hygen.io/) to generate a new components.

Run the following command passing the new component's name in the end:

```
bolt generate:component <componentsName>
```

Note: *Our custom template is located in `/_templates/component/new` folder. Please, feel free to contribute.*

### Bump the version

After you have added or modified a package, you should run the following commands:

1.  `bolt bump:changeset` - pick the packages to include in a new changeset;
2.  `bump:version` - generates/appends to `changelog.md` filed and bump versions;
3. run `bolt` again just to varify that everything is fine.

### Run Storybook

First, run `bolt` and `bolt build:components`. After everything has been built, you can run Storybook:

```
bolt start
```

### Adding dependency to a package

Let's say, we need to use `@im-iu/utils` within `@im-ui/button`.

```
bolt w @im-ui/button add @im-iu/utils [-P|-D]
```

You can use yarn flags to specify the type of the dependency:
- `-P` for peer dependency;
- `-D` for dev dependency
