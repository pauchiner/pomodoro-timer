import { Menu, MenuItemConstructorOptions } from 'electron';

export interface DarwinMenuItemConstructorOptions
  extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}
