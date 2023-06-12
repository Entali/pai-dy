import {useState} from 'react'
import './App.css'

function App() {
  const [isModal, setModal] = useState(false);

  return (
      <>
        <div className="card">
          <button onClick={() => setModal(!isModal)}>
            {isModal ? 'Close' : 'Open'}
          </button>
        </div>
      </>
  )
}

export default App
