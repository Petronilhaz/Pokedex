import './index.css'
const PokeCard = ({ name, image, type, types }) => {
    return (
        <li className='item'>
            <img src={image} alt={name} />
            <p className='name'>{name}</p>
            
            <div className='type-container'>
                <p className={types[0].type.name + ' type'}>{type}</p>
                {types[1] !== undefined && (
                    <p className={types[1].type.name + ' type'}>{types[1].type.name}</p>
                )}
            </div>
        </li>
    )
}

export { PokeCard }