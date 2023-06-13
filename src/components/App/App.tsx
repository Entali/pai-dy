import {useState} from 'react'
import Text from '../Text'
import Link from '../Link'
import PhoneInput from '../../controls/PhoneInput'
import EmailInput from '../../controls/EmailInput'
import Modal from '../Modal'
import './App.scss'
import Checkbox from "../../controls/Checkbox";
import Button from "../../controls/Button/Button.tsx";

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
            <PhoneInput onChange={() => null} label="携帯電話番号"/>
            <EmailInput onChange={() => null} label="メールアドレス"/>
            <Checkbox onChange={() => null} label="次回から入力を省略"/>
            <div style={{
              marginTop: '5rem'
            }}>
              <Text size="0.75rem" weight="600" align="center">
                <Link to="https://terms.paidy.com/personal-data" target="_blank">
                  利用規約・個人情報取扱条項
                </Link>
                <span>に同意して</span>
              </Text>
              <Button text="次へ" onSubmit={() => null}/>
            </div>
          </form>
        </Modal>
      </section>

  )
}

export default App
