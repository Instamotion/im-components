# Erlking - Instamotion frontend server
[![](https://ci.tools.instamotion.com/buildStatus/icon?job=IM-Teams%2FTeam+Hulk%2Ferlking%2Fmaster)](https://ci.tools.instamotion.com/blue/organizations/jenkins/IM-Teams%2FTeam%20Hulk%2Ferlking/activity?branch=master)

## Quick Start

After cloning the repository, just run `npm install` and after that either `npm run sb`
to start the Storybook server or `npm run dev` to start erlking in development mode.

## Erlking Architecture

The Architecutre consists of a few runners located in `src/runners` that are triggered
via npm scripts that all pass through `index.ts`, these are the Runners:

* `app.ts`: This file contains the core of erlking, the `build` function starts
webpack and outputs the static files in `dist` but it also exports the middleware
`app` that runs in the Koa as a middleware to serve the pages pre-rendererd and contains
the GraphQL server
* `build.ts`: This script *just* calls the before mentioned `build` function
* `development.ts`: Starts the server with a development middleware
* `production.ts`: Creates the `dist` files when necessary and starts the server
in production mode

### Build process (Webpack)

The `build` function we mentioned before basically just calls Webpack,
once for the client (`src/Entry/Client.tsx`) and for the server (`src/Entry/Server.tsx`).
Those entry files are responsible for the client and server bundles resulting in the `dist` folder.

In the `src/webpack` folder are the configuration files for webpack:
* `common.ts`: Shared (common) configuration like the loader for `.tsx` files or the aliases
that are the same for the client and server
* `client.ts`: Client specific configuration like file-loaders for static files
* `server.ts`: Server specifig configuration
* `css.ts`: Configuration around css, some leftovers like sass and less loaders can be found
there if wanted

### Babel

[Babel](https://babeljs.io) is the heart of our build operation, transpiling typescript, jsx and styled components via plugins declared in `.babelrc`

### React

The frontend consists of two main concepts:

* `src/screens`: Components that can be accessed directly with the router
* `src/components`: The components that are composed inside a screen

The above mentioned `Entry` files wrap all the required hocs like `<ApolloProvider>`,
`<ThemeProvider>` around the `src/components/root.tsx`component while the `root` only routes to screens and injects the `<GlobalStyle>`

### Styling

We use [styled-components](https://styled-components.com) with a `<ThemeProvider>` that injects
our `theme` located in `src/themes/default` into all components as a prop so you
can style compontents like this:

```js
const button = styled.button`
  color: ${(theme: { button }) => button.oil };
`;

// or

const button = styled.button`
  ${({ theme: { button }, active }) => css`
    color: ${button.oil};
    border: ${button.primary.border.width}px solid ${button.primary.border.color};

    // styles that are only applied when `active` is true by using short-circuit evaluation
    // https://en.wikipedia.org/wiki/Short-circuit_evaluation
    ${active && css`
      background: red;
    `}

    :hover {
      // cool, sass like nesting
      background: hotpink;
    }
  `}
`;
```

### Webserver (Koa)

To serverside render out app and provide a GraphQL server, we use [koa](https://koajs.com)

### Known issues, gotchas and ideas:

* To enable session sharing between services (showroom, erlking) look for solutions like
https://github.com/koajs/koa-redis

* Since this is a 100% SPA, google analytics has to be triggered manually for every view, i would suggest looking at https://github.com/ReactTraining/history#listening


## Contentful

To allow the company to deliver fast content in a flexible way we use [contentful](https://contentful.com) as a headless cms

### Structure

Here is the breakdown of the current Structure in contentful:
* `Screen`: Just like in our codebase, a screen is the "endpoint" the user can access.
Every screen has a slug that allows the Erlking to look up for new routes online and immediatly
display them without any code deployment. The only excemption so far is the `System: Make Page` and `System: Model Page` screen, those should NOT be accessed directly but are a "template" for every make and model page, getting served by a dedicated `Make/Model.tsx` sceen that looks for the slug and render the `content` from their related `Make` or `Model`
* `Screen *`: Components that the content team can to all pages. The data will be mapped by the
`contentfulMapper` and rendered by the `contentfulRenderer`
* `DynamicComponent`: An empty shell with either the type `makeContent` or `modelContent`,
this tells our renderer to look for the `Make` or `Model` in contentful and dynamically render
its content. (Why? That way you can add or remove components above the make or model content by editing 1 or 2 content types instead of all 400+)

That allows the content team to work together with the development team by clearly separating structure and content from technology

For Example:

* Marketing wants to add a slider to the bottom of the page on EVERY model,
instead of manually going over 400 models, marketing can edit the
`System: Model Page` and add it below the `DynamicComponent(modelContent)` Entry.
The Slider then has to be rendered (see contentfulMapper/Renderer) and get the model
passed in by the context (see DynamicComponent) and can decide on its own which pictures to
show based on the make/model props. The current solution can defeintely use some optimization
because of time constraints so please feel free to refactor the way the renderer and the
dyanmic component work currently. (Dynamic Component is the default case in the renderer,
maybe not such a great idea in the long run)
