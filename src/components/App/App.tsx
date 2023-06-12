import {useState} from 'react'

function App() {
  const [isModal, setModal] = useState(false)

  return (
      <section className="app">
        <button onClick={() => setModal(!isModal)}>
          {isModal ? 'Close' : 'Open'}
        </button>
      </section>

  )
}

export default App
