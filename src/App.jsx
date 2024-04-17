import { useState } from 'react'

function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames(state => [...state, game])
  }

  const removeGame = (id) => {
    setGames(state => state.filter(game => game.id !== id))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle('')
    setCover('')
  }

  return (
    <div className='app'>
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input 
            type="text" 
            name='title' 
            id='title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa (URL):</label>
          <input 
            type="text" 
            name='cover'
            id='cover'
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button>Adicionar à Biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="Capa do Jogo" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
