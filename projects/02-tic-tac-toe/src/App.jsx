import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from "./assets/components/Square"
import { TURNS, WINNING_COMBINATIONS } from './assets/components/constants'
import { checkWinnerFrom } from './assets/logic/board'
import { WinnerModal } from './assets/components/WinnerModal'


function App() {
  const [board, setBoard] = useState(() => {
    //recuperamos la partida guardada
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
    })
  
  const [turn, setTurn] = useState(() => {
    //recuperamos el turno guardado
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })


  //null es que no hay ganador, false es que hay empate, X o O es que hay ganador
  const [winner, setWinner] = useState(null)

  

  const resetgame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

const checkGame = (newBoard) => {
  //comprobamos si hay empate
  //si todas las casillas tienen un valor
  //y no hay ganador
  return newBoard.every((square) => square !== null)
}

const negativeConfetti = () => {
  confetti({
    angle: 90,
    spread: 60,
    startVelocity: 30,
    particleCount: 100,
    gravity: 1,
    colors: ['#000000', '#555555', '#888888'],
    origin: { y: 0.8 }
  });
};


  const updateBoard = (index) => {
    //no actualizamos esta casilla si ya tiene un valor
    if (board[index] || winner) {
      return
    }
    //actualizamos el valor de la casilla
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardamos el partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    //comprobamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkGame(newBoard)){
      negativeConfetti(); // Trigger negative confetti effect

      setWinner(false) //empate
    }

  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetgame}>Reset del juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetgame={resetgame} />
    
    </main >
  )
}

export default App
