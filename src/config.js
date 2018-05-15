import { themeManager } from 'nachos-ui';

export function configTheme() {
  const buttonTheme = themeManager.getStyle('Button')

  const newButtonTheme = {
    ...buttonTheme,
  }

  themeManager.setSource('Button', () => (newButtonTheme))
}
