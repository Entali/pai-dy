import {useState} from 'react'
import Text from '../Text'
import Link from '../Link'
import PhoneInput from '../../controls/PhoneInput'
import EmailInput from '../../controls/EmailInput'
import Modal from '../Modal'
import './App.scss'

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
          <form>
            <PhoneInput onChange={() => null}/>
            <EmailInput onChange={() => null}/>
            <div>
              <input type="checkbox" />
              <span>次回から入力を省略</span>
            </div>
            <Link to="https://terms.paidy.com/personal-data" target="_blank">
              利用規約・個人情報取扱条項 に同意して
            </Link>
          </form>
        </Modal>
      </section>

  )
}

export default App
