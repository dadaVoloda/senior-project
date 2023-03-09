/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onToggleModal}
      >
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          deserunt, aperiam perferendis voluptatum blanditiis quibusdam minima
          officia quam delectus. Modi optio harum, sapiente fugiat aliquid vero
          laborum corporis architecto doloribus. Aspernatur voluptatibus cumque
          dolorem asperiores iusto nemo, neque rerum veritatis corrupti fugit
          cupiditate iste perferendis aliquid culpa, minima facilis ipsam eius
          blanditiis quo quia ab, fuga odio soluta. Doloribus, animi!
        </div>
      </Modal>
    </div>
  )
}
