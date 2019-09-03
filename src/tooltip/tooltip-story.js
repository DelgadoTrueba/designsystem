import { storiesOf } from '@storybook/html';

storiesOf('Academind Tooltip', module)
  .add('Default', () => `
    <delg-tooltip></delg-tooltip>
  `)
  .add('Custom', () => `
    <p>
    <delg-tooltip class="important" text="Web Components is a set of standards.">
        <span class="highlight">Web Components</span>
    </delg-tooltip>
    are awesome!
    </p>  
  `);