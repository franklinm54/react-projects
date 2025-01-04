import { WINNING_COMBINATIONS } from "../components/constants"

export const checkWinnerFrom = (boardToCheck) => {
    //comprobamos todas las combinaciones ganadoras 
    // para ver si X u O gano
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (boardToCheck[a] && //si hay un valor en la casilla
        boardToCheck[a] === boardToCheck[b] && //si los tres valores son iguales
        boardToCheck[a] === boardToCheck[c] // si los tres valores son iguales
      ) {
        //si hay ganador
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }