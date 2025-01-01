import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'FranklnMarcelin',
        name: 'Franklin Marcelin',
        isFollowing: true
    },
    {
        userName: 'andyemy',
        name: 'Anderson Emylio',
        isFollowing: false
    },
    {
        userName: 'jsmartinez',
        name: 'Jason Martinez',
        isFollowing: true
    },
    {
        userName: 'johndoe',
        name: 'John Doe',
        isFollowing: false
    },
    {
        userName: 'janedoe',
        name: 'Jane Doe',
        isFollowing: true
    },
    {
        userName: 'johndoejr',
        name: 'John Doe Jr',
        isFollowing: false
    },
    {
        userName: 'janedoeyr',
        name: 'Jane Doe Jr',
        isFollowing: true
    },
    {
        userName: 'johndoeiii',
        name: 'John Doe III',
        isFollowing: false
    },
    {
        userName: 'janedoeiii',
        name: 'Jane Doe III',
        isFollowing: true
    },
    {
        userName: 'johndoeiv',
        name: 'John Doe IV',
        isFollowing: false
    },
    {
        userName: 'janedoeiv',
        name: 'Jane Doe IV',
        isFollowing: true
    },
    {
        userName: 'johndoev',
        name: 'John Doe V',
        isFollowing: false
    }
]


export function App(){
    // const formatUserName = (userName) => `@${userName}`
    return(
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section> 
    )
}