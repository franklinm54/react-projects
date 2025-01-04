import PropTypes from 'prop-types'
import { useState } from "react"
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)



    const imageSrc = `https://unavatar.io/{userName}`
    const followText = isFollowing ? 'Siguiendo' : 'Seguir'
    const followClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing)
    }



    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"

                    src={imageSrc} alt="User El avatar de FranklnMarcelin" />
                {/* src={'https://unavatar.io/{userName}'} */}

                <div className="tw-followCard-header-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-info-email">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={followClass} onClick={handleFollowClick}>

                    <span className="tw-followCard-text">{followText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,
    userName: PropTypes.string.isRequired,
    initialIsFollowing: PropTypes.bool.isRequired,
}