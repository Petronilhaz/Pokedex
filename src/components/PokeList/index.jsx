import { useState, useEffect } from "react"
import axios from "axios"
import { PokeCard } from "../PokeCard"
import { Header } from "../Header"
import './index.css'

//const pokemonQuantity = 20

// async function fetchPokemon() {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonQuantity}`)
//     let responseJson = await response.json()
//     return responseJson.results
// }

const PokeList = () => {

    const [pokemons, setPokemons] = useState([]);
    var quantity = 20

    useEffect(() => {
        getPokemons(quantity);
    }, []);

    const getPokemons = (pokeQuantity) => {
        var endpoints = [];
        for (var i = 1; i < pokeQuantity; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const filterPokemons = (name) => {
        console.log(name)
        if (name === '') {
            getPokemons(quantity)
        }
        var filteredPokemons = []
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }


    return (
        <>
            <Header filterPokemons={filterPokemons} />
            <ul className="list">
                {
                    pokemons.map((pokes, key) => {
                        return (
                            <PokeCard
                                key={key}
                                image={pokes.data.sprites.front_default}
                                name={pokes.data.name}
                                type={pokes.data.types[0].type.name}
                                types={pokes.data.types}
                                data={pokes.data}
                            />
                        )
                    })

                }
                <div className="add-more" onClick={() => {
                    let renderizados = document.getElementsByClassName('item')
                    quantity = renderizados.length + 8
                    getPokemons(quantity)
                }}>Mais Pokemons</div>
            </ul>
        </>
    )
}

export { PokeList }