import PropTypes from 'prop-types';
import { Square } from "./Square"
export function WinnerModal({ winner, resetgame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó'


    return (
        <section className="winner">
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetgame}>Empezar de nuecvo</button>
                </footer>
            </div>
        </section>

    )
}
WinnerModal.propTypes = {
  winner: PropTypes.node.isRequired,
  resetgame: PropTypes.bool.isRequired,
};