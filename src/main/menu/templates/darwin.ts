import {
  app,
  shell,
  BrowserWindow,
  MenuItemConstructorOptions,
} from 'electron';
import { DarwinMenuItemConstructorOptions } from '../types';
import { isDebug } from '../../enviroments';

const buildDarwinTemplate = (
  mainWindow: BrowserWindow
): MenuItemConstructorOptions[] => {
  const subMenuAbout: DarwinMenuItemConstructorOptions = {
    label: 'Pomodoro Timer',
    submenu: [
      {
        label: 'About Pomodoro Timer',
        selector: 'orderFrontStandardAboutPanel:',
      },
      { type: 'separator' },
      {
        label: 'Settings',
        accelerator: 'Command+,',
        click: () => mainWindow.webContents.send('menu-settings'),
      },
      {
        label: 'Hide Pomodoro Timer',
        accelerator: 'Command+H',
        selector: 'hide:',
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      },
      { label: 'Show All', selector: 'unhideAllApplications:' },
      { type: 'separator' },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
      },
    ],
  };
  const subMenuViewDev: MenuItemConstructorOptions = {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click: () => {
          mainWindow.webContents.reload();
        },
      },
      {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click: () => {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        },
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',
        click: () => {
          mainWindow.webContents.toggleDevTools();
        },
      },
    ],
  };
  const subMenuViewProd: MenuItemConstructorOptions = {
    label: 'View',
    submenu: [
      {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click: () => {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        },
      },
    ],
  };
  const subMenuWindow: DarwinMenuItemConstructorOptions = {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      },
      { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
      { type: 'separator' },
      { label: 'Bring All to Front', selector: 'arrangeInFront:' },
    ],
  };
  const subMenuHelp: MenuItemConstructorOptions = {
    label: 'Help',
    submenu: [
      {
        label: 'Github',
        click() {
          shell.openExternal('https://github.com/pauchiner/pomodoro-timer');
        },
      },
      {
        label: 'Documentation',
        click() {
          shell.openExternal(
            'https://github.com/pauchiner/pomodoro-timer/tree/main/docs#readme'
          );
        },
      },
      {
        label: 'Issues',
        click() {
          shell.openExternal(
            'https://github.com/pauchiner/pomodoro-timer/issues'
          );
        },
      },
    ],
  };

  const subMenuView = isDebug ? subMenuViewDev : subMenuViewProd;

  return [subMenuAbout, subMenuView, subMenuWindow, subMenuHelp];
};

export default buildDarwinTemplate;
