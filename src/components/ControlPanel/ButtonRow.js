import React from 'react'

const ButtonRow = ({ children, ...rest }) => {
    return (
        <div className={'button-row'} {...rest}>
            {children}
        </div>
    )
}

export default ButtonRow
