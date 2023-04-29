export interface NavItem{
  label: string,
  link: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', link: '/home' },
  { label: 'Reservas', link: '/reservas' },
  { label: 'Login', link: '/login' },
];