/* eslint no-console:0 */

console.log('Hello World from Webpacker')

import Hello from '../components/Hello';
import WebpackerReact from 'webpacker-react';

document.addEventListener('DOMContentLoaded', () => {
  WebpackerReact.setup({ Hello });
});
