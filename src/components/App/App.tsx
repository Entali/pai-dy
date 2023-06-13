import {useState} from 'react'
import Text from '../Text'
import Modal from '../Modal'
import './App.scss'
import PhoneEmailForm from "../PhoneEmailForm";

function App() {
  const [isModal, setModal] = useState(false)

  return (
      <section className="app">
        <button onClick={() => setModal(!isModal)}>
          {isModal ? 'Close' : 'Open'}
        </button>
        <Modal
            isModal={isModal}
            setModal={setModal}
            title="ラルフ ローレン松武オンラインストア"
            subTitle={<Text size="1.8rem" weight="700">¥30,800</Text>}
        >
          <PhoneEmailForm />
        </Modal>
      </section>

  )
}

export default App
