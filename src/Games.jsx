export default function Games({ title, cover, onRemove }) {
    return (
        <div>
            <img src={cover} alt="Capa do Jogo" />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>Remover</button>
            </div>
        </div>
    )
}