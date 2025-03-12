import { useState } from 'react'
import './App.css'

function App() {
  // Remove unused count and setCount state variables
  const [memeUrl, setMemeUrl] = useState('')

  const fetchMeme = async () => {
    const response = await fetch('https://meme-api.com/gimme')
    const data = await response.json()
    setMemeUrl(data.url)
  }

  return (
    <div className="app-container">
      {/* Fix quote escaping issues */}
      <h1 className="title">🌈No bad days with memes!😂</h1>
      <div className="button-container">
        <button 
          onClick={() => {
            fetchMeme()
          }}
          className="meme-button"
        >
          Show me a meme
        </button>
      </div>
      {memeUrl && <img src={memeUrl} alt="Random Meme" className="meme-image" />}
    </div>
  )
}

export default App