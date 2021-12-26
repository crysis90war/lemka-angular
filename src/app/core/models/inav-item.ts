export interface INavItem {
  title: string;
  url?: string | null;
  icon?: string | null;
  isVisible?: boolean;
  children?: INavItem[] | null;
}
