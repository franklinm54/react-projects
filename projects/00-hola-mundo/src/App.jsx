import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'


export function App(){
    return(
        // <React.Fragment> igual a <>
        <>
            <TwitterFollowCard userName="FranklnMarcelin" name="Franklin Marcelin"/>
            <TwitterFollowCard userName="andyemy" name="Anderson Emylio"/>
            <TwitterFollowCard userName="jsmartinez" name="Jason Martinez"/>
        </>
        // {/* </React.Fragment> igual a </> */}
 
    )
}