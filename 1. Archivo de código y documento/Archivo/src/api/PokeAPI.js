export const BASE_API = "https://pokeapi.co/api/v2"


export async function obtenerPokemonesApi(offset) {
    try {
        const url = `${BASE_API}/pokemon?limit=${'4'}&offset=${offset}`
        const response = await fetch(url)
        console.log(url)
        const result = await response.json()
        return result
    }   catch (error) {
        throw error
    }
}

export async function obtenerDatosPokemonApi(datos) {
    try {
        const url = `${datos}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    }   catch (error) {
        throw error
    }
}