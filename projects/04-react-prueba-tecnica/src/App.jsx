import './App.css';
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFacts.js'
import { Otro } from './Components/Otros.jsx';

// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {
    const { fact, refreshFact } = useCatFact()


    const handleClick = async () => {
       refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && (
                    <img classname='imagen'  // Agrega una clase CSS
                        src={imageUrl}
                        alt={`imagen extraída usando las primeras tres palabras de: ${fact}`}
                    />
                )}
            </section>
            <Otro />
        </main>
    );
}
