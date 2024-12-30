export function TwitterFollowCard({userName, name, isFollowing}){
    const imageSrc = `https://unavatar.io/{userName}`
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" 
            
            src={imageSrc} alt="User El avatar de FranklnMarcelin" />
            {/* src={'https://unavatar.io/{userName}'} */}

            <div className="tw-followCard-header-info">
                <strong>{name}</strong>
                <span className="tw-followCard-info-email">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}