import { useState } from "react";
import { enviarJsonPokemonApi } from "../api/DataBaseApi";

export function DataBaseHooks() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [añadirPokemon, setAñadirPokemon] = useState('')

    const añadirPokemonInformacion = async(json) => {
        try {
            setLoading(true)
            const response = await enviarJsonPokemonApi(json)
            setLoading(false)
            setAñadirPokemon(response)
        }   catch(error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        loading,
        error,
        añadirPokemon,
        añadirPokemonInformacion,
    }
}