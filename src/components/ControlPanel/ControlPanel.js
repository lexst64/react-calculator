import React from 'react';
import ControlPanelWrapper from "./ControlPanelWrapper";
import './ControlPanel.scss'
import ButtonRow from "./ButtonRow";
import CalculatorButton from "./CalculatorButton/CalculatorButton";

const rowTemplate = [
    ['7', '8', '9', '÷'],
    ['6', '5', '4', '×'],
    ['1', '2', '3', '-'],
    ['0', 'ac', '=', '+'],
]

const ControlPanel = ({ onButtonClick }) => {
    const getButtonRows = (template = []) => {
        return template.map(row => {
            const buttons = row.map(value => {
                return <CalculatorButton
                    variant={"outlined"}
                    onClick={() => onButtonClick(value)}
                >{value}</CalculatorButton>
            })
            return <ButtonRow>{buttons}</ButtonRow>
        })
    }

    return (
        <ControlPanelWrapper>
            {getButtonRows(rowTemplate)}
        </ControlPanelWrapper>
    )
}

export default ControlPanel;
