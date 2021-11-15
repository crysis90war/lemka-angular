export interface INavItem {
  title: string;
  url?: string;
  icon?: string;
  isVisible?: boolean;
  children?: INavItem[];
}
