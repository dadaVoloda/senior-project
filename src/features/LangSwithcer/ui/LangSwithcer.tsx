import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwithcer.module.scss'

interface LangSwithcerProps {
  className?: string
}

export const LangSwithcer: React.FC<LangSwithcerProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.langSwithcer, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}>
      {t('Lang')}
    </Button>
  )
}
