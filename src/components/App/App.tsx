import {useState} from 'react'
import Text from '../Text'
import Title from '../Title'
import Modal from '../Modal'
import PhoneEmailForm from '../PhoneEmailForm'
import {IForm} from '../PhoneEmailForm/types.ts'
import './App.scss'

function App() {
  const [isModal, setModal] = useState<boolean>(false)
  const [message, setMessage] = useState<IForm | null>(null)

  const openModal = () => {
    setModal(true)
    setMessage(null)
  }

  return (
      <section className="app">
        <button onClick={openModal}>
          {isModal ? 'Close' : 'Open'}
        </button>
        <Modal
            isModal={isModal}
            setModal={setModal}
            title="ラルフ ローレン松武オンラインストア"
            subTitle={<Text size="1.8rem" weight="700">¥30,800</Text>}
        >
          <PhoneEmailForm setModal={setModal} setMessage={setMessage}/>
        </Modal>
        {message && (
          <section className="app__message">
            <Title level={6}>Form sent with</Title>
            <Text size="0.5rem" weight="100">Phone number: {message.phone}</Text>
            <Text size="0.5rem" weight="100">Email address: {message.email}</Text>
          </section>
        )}
      </section>

  )
}

export default App
