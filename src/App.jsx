import NewGamesForm from './NewGamesForm'
import Games from './Games'
import useGameCollection from './hooks/useGameCollection'

function App() {

  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div className='app'>
      <h1>Biblioteca de Jogos</h1>
      <NewGamesForm addGame={addGame}/>
      <div className="games">
        {games.map((game) => (
          <Games 
            key={game.id} 
            title={game.title} 
            cover={game.cover} 
            onRemove={() => removeGame(game.id)}/>
        ))}
      </div>
    </div>
  )
}

export default App
