import {FC, ReactNode} from 'react'
import {createPortal} from 'react-dom'
import Logo from '../Logo'
import Title from '../Title'
import backImg from './backImg.ts'
import './Modal.scss'

interface IModalContentProps {
  title: string
  subTitle: ReactNode
  children: ReactNode
  onClose: () => void
}

const ModalContent: FC<IModalContentProps> = (props: IModalContentProps) => {
  const {title, subTitle, children, onClose} = props

  return (
      <section
          role="dialog"
          aria-modal="true"
          className="modal-content"
          aria-labelledby="modal-title"
      >
        <section className="modal-content__top">
          <div className="modal-content__controls">
            <span className="modal-control modal-back">
              <img src={backImg} alt="Back"/>
            </span>
            <Logo/>
            <span onClick={onClose} className="modal-control modal-close">
              &#8853;
            </span>
          </div>
          <header className="modal-content__title">
            <Title level={5}>{title}</Title>
          </header>
          <header className="modal-content__title">
            {subTitle}
          </header>
        </section>
        <section className="modal-content__section">{children}</section>
      </section>
  )
}

interface IModalProps {
  title: string
  subTitle: ReactNode | string
  children: ReactNode
  isModal: boolean
  setModal: (isModal: boolean) => void
}

const Modal: FC<IModalProps> = (props: IModalProps) => {
  const {title, subTitle, children, isModal, setModal} = props
  const portalParent = document.getElementById('portal')

  return (
      <>
        {isModal && createPortal(
            <section className="modal">
              <ModalContent
                  title={title}
                  subTitle={subTitle}
                  children={children}
                  onClose={() => setModal(!isModal)}
              />
            </section>,
            portalParent as HTMLElement
        )}
      </>
  )
}

export default Modal
