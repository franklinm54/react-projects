import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('efecto', { enabled })


    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMouseMove)
    }

    // Limpieza o Cleanup
    // Cuando el componente se desmonte
    // Cuando cambien las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      console.log('limpieza')
      window.removeEventListener('pointermove', handleMouseMove)
    }
  }
    , [enabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero

      </button>
    </main>
  )

}

function App() {
  // const [mounted, setMounted] = useState(true)
  return (
    <main>
      <FollowMouse />
      {/* <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button> */}
    </main>
  )

}

export default App
