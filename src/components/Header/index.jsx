import './index.css'

const Header = ({ filterPokemons }) => {
    return (
        <header className="header">
            <div className='logo-container'>
                <img className="logo-img" alt='Pokebola' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png'></img>
                <h1 className='logo-text'>Pokedex</h1>
            </div>
            <input onChange={(e)=> filterPokemons(e.target.value)} className='input' type="text" placeholder='Buscar' />
        </header>
    )
}

export { Header }