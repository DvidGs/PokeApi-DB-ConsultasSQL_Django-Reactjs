
export async function enviarJsonPokemonApi(json) {
    try {
        const formData = new FormData()
        formData.append('nombre', json.nombre)
        formData.append('tipo', json.tipo)
        formData.append('habilidades', json.habilidades)
        formData.append('estadisticas', json.estadisticas)
    
        const url = `http://127.0.0.1:8000/api/poke_db/pokemones`
        const params = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(json)
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    }   catch (error) {
        throw error
    }
}