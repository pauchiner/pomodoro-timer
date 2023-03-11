/* eslint global-require: off, no-console: off, promise/always-return: off */

import { isDebug, isProduction } from './enviroments';
import createMainWindow from './windows';
import { app } from 'electron';

let mainWindow = createMainWindow();

if (isProduction) {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (isDebug) {
  require('electron-debug')();
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createMainWindow();
    app.on('activate', () => {
      if (mainWindow === null) createMainWindow();
    });
  })
  .catch(console.error);
