export const saveGameStorage = ({ board, turn }) => {
    // guardamos el partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    //borramos la partida
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}