import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <AppLink to='/' theme={AppLinkTheme.PRIMARY}>
        Главная
      </AppLink>
      <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>
        О сайте
      </AppLink>
    </div>
  )
}
