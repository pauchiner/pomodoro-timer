import { BrowserWindow, shell } from 'electron';
import { isDebug } from '../../enviroments';

const buildDefaultTemplate = (mainWindow: BrowserWindow) => {
  const templateDefault = [
    {
      label: '&File',
      submenu: [
        {
          label: '&Close',
          accelerator: 'Ctrl+W',
          click: () => {
            mainWindow.close();
          },
        },
      ],
    },
    {
      label: '&View',
      submenu: isDebug
        ? [
            {
              label: '&Reload',
              accelerator: 'Ctrl+R',
              click: () => {
                mainWindow.webContents.reload();
              },
            },
            {
              label: 'Toggle &Full Screen',
              accelerator: 'F11',
              click: () => {
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
              },
            },
            {
              label: 'Toggle &Developer Tools',
              accelerator: 'Alt+Ctrl+I',
              click: () => {
                mainWindow.webContents.toggleDevTools();
              },
            },
          ]
        : [
            {
              label: 'Toggle &Full Screen',
              accelerator: 'F11',
              click: () => {
                mainWindow.setFullScreen(!mainWindow.isFullScreen());
              },
            },
          ],
    },
    {
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
    },
  ];

  return templateDefault;
};

export default buildDefaultTemplate;
