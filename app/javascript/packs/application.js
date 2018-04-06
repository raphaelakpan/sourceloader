/* eslint no-console:0 */

import App from '../components/App';
import WebpackerReact from 'webpacker-react';

document.addEventListener('DOMContentLoaded', () => {
  WebpackerReact.setup({ App });
});
