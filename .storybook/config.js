import { configure, addDecorator } from '@storybook/html';
import { setOptions } from "@storybook/addon-options";

import { version } from "../package.json";

const CenterDecorator = (storyFn) => {
  return `<div style="margin: 2%;">
      ${storyFn()}
    </div>`;
}

addDecorator(CenterDecorator)

function loadStories() {
  require('../stories/button-story.js');
  require('../src/tooltip/tooltip-story.js');
  require('../src/modal/modal-story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

setOptions({
  showAddonPanel: false,
  name: `Delgado Trueba Design System v${version}`,
  url: "https://google.com",
  sidebarAnimations: false
});