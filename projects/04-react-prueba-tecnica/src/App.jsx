import { useEffect, useState } from "react";
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState();  // Inicializa como null
    const [imageUrl, setImageUrl] = useState();  // Inicializa como null

    // useEfect para recuperar la cita aleatoria al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact);
            });
    }, []);

    // useEffect para recuperar la imagen al cambiar la cita aleatoria
    useEffect(() => {
        if (!fact) return;
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=15&color=white`)
            // .then(res => res.json())
            .then(response => {
                const { url } = response;
                setImageUrl(url);  // Solo guarda la URL sin el prefijo
            })
        }, [fact]);

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && (
                    <img classname='imagen'  // Agrega una clase CSS
                        src={`${imageUrl}`}
                        alt={`imagen extraída usando las primeras tres palabras de: ${fact}`}
                    />
                )}
            </section>
        </main>
    );
}
