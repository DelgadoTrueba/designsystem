import { configure } from '@storybook/html';

function loadStories() {
  require('../stories/button-story-angular.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);