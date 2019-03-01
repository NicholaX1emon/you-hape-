import React from 'react'

const Link = ({active, children, onLinkClick}) => {
    const handleLinkClick = e => {
        e.preventDefault();
        onLinkClick();
    }

    return (
        <div>
            {active
            ?<span>{children}</span>
            :<a href='' 
                onClick={handleLinkClick}> 
                {children}
             </a>}
        </div>
    )
}

export default Link