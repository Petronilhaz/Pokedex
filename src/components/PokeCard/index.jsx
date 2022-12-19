import { useState, useEffect } from "react"

const pokemonQuantity = 20

async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonQuantity}`)
    let responseJson = await response.json()
    return responseJson.results
}

const PokeCard = () => {

    const [pokemon, setPokemon] = useState({
        name: [],
        description: [],
        skill_1: [],
        skill_2: []
    })

    async function createPokemon() {
        const pokeName = await fetchPokemon()
        const urls = pokeName.map(poke => poke.url)
        const pokeData = await urls.map(async function (url) {
            const response = await fetch(url)
            const responseJson = await response.json()
            console.log('Informações do Pokemon: ', responseJson)
            return responseJson
        })

        setTimeout(()=>{
            console.log("PokeName: ", pokeName, "PokeData: ", pokeData)
        },3000)

        setPokemon({
            name: pokeName.name,
            skill_1: pokeData.abilities[0].ability.name,
            skill_2: pokeData.abilities[1].ability.name
        })
    }

    useEffect(() => {
        createPokemon()
        setTimeout(()=> {
            console.log('pokemon: ', pokemon)
        }, 3000)
    }, [])

    

    return (
        <section>
            {/* {
            pokemon.map( pokemon => {
                return (
                <ul>
                    <li>
                        <p>{pokemon.name}</p>
                        <p>{pokemon.skill_1}</p>
                        <p>{pokemon.skill_2}</p>

                    </li>
                </ul>)
            })} */}

        </section>
    )
}

export { PokeCard }