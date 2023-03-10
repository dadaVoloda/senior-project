import { FC, MouseEvent, ReactNode, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props

  const { theme } = useTheme()

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeHandler()
        }
      })
    }
  }, [isOpen, closeHandler])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
