import { storiesOf } from '@storybook/html';
import { useEffect } from "@storybook/client-api";

storiesOf('Academind Modal', module)
  .add('Default', () => {
    useEffect(() => {
        const confirmButton = document.querySelector('button');
        const modal = document.querySelector('uc-modal');
  
        modal.addEventListener('confirm', () => {
          console.log('Confirmed...');
        });
  
        modal.addEventListener('cancel', () => {
          console.log('Cancelled...');
        });
  
        confirmButton.addEventListener('click', () => {
          //  modal.setAttribute('opened', '');
          if (!modal.isOpen) {
            modal.open();
            console.log('Opening...');
          }
        });
    }, []);

    return `
        <p>Please confirm your choice.</p>
        <button>Show Details & Confirm</button>

        <uc-modal>
        </uc-modal>
    `
  })
  .add('Custom', () => {
    useEffect(() => {
        const confirmButton = document.querySelector('button');
        const modal = document.querySelector('uc-modal');
  
        modal.addEventListener('confirm', () => {
          console.log('Confirmed...');
        });
  
        modal.addEventListener('cancel', () => {
          console.log('Cancelled...');
        });
  
        confirmButton.addEventListener('click', () => {
          //  modal.setAttribute('opened', '');
          if (!modal.isOpen) {
            modal.open();
            console.log('Opening...');
          }
        });
    }, []);

    return `
        <p>Please confirm your choice.</p>
        <button>Show Details & Confirm</button>

        <uc-modal>
            <h1 slot="title">Please Confirm</h1>
            <p>With your confirmation you agree to pay the full amount!</p>
        </uc-modal>
    `
  });