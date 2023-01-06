import { useState } from "react";
import { obtenerPokemonesApi, obtenerDatosPokemonApi } from "../api/PokeAPI";

export function PokeHooks() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemones, setPokemones] = useState('')
    const [datosPokemones, setDatosPokemones] = useState('')


    const obtenerPokemones = async(offset) => {
        try {
            setLoading(true)
            const response = await obtenerPokemonesApi(offset)
            setLoading(false)
            setPokemones(response)
        }   catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    const obtenerDatosPokemones = async(datos) => {
        try {
            setLoading(true)
            const response = await obtenerDatosPokemonApi(datos)
            setLoading(false)
            setDatosPokemones(response)
        }   catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        loading,
        error,

        pokemones,
        obtenerPokemones,

        datosPokemones,
        obtenerDatosPokemones,
    }
}