import { configure, addDecorator } from '@storybook/html';

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