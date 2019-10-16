import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

const req = require.context('../packages/', true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
};

addDecorator(withKnobs);
addDecorator(withA11y);

configure(loadStories, module);
