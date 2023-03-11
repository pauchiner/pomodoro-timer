import { Menu, BrowserWindow } from 'electron';
import buildDarwinTemplate from './templates/darwin';
import buildDefaultTemplate from './templates/default';

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(): Menu {
    const template =
      process.platform === 'darwin'
        ? buildDarwinTemplate(this.mainWindow)
        : buildDefaultTemplate(this.mainWindow);

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }
}
