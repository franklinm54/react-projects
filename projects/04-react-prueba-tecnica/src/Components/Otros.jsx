export function Otro () {
    const { imageUrl } = useCatImage({ fact: 'Random fact' })
    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

    return (
        <>
            {imageUrl && (
                    <img classname='imagen'  // Agrega una clase CSS
                        src={`${imageUrl}`}
                        alt={`imagen extraída usando las primeras tres palabras de: ${fact}`}
                    />
                )}
        </>

    )
}
