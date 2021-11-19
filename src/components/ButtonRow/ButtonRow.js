import React from 'react'
import { buttonRow } from './../Calculator.module.scss'

const ButtonRow = ({ children, ...rest }) => {
    return (
        <div className={buttonRow} {...rest}>
            {children}
        </div>
    )
}

export default ButtonRow
