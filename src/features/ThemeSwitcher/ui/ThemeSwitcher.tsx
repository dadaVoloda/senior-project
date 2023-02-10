import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import ThemeIcon from 'shared/assets/icons/theme-icon.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}>
      <ThemeIcon className={classNames('', { [cls.dark]: theme === Theme.DARK }, [])} />
    </Button>
  )
}
