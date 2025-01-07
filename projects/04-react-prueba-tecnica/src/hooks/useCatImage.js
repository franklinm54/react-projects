import { useState, useEffect } from 'react';
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();  // Inicializa como null

    // useEffect para recuperar la imagen al cambiar la cita aleatoria
    useEffect(() => {
        if (!fact) return;
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=15&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data
                setImageUrl(url)
              })
            // .then(response => {
            //     const { url } = response;
            //     setImageUrl(url);  // Solo guarda la URL sin el prefijo
            // })
    }, [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl} }`}


}