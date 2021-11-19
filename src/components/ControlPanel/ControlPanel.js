import React from 'react';
import ButtonRow from "../ButtonRow/ButtonRow";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import {CLEAR, DEDUCTION, DIVIDE, MULTIPLY, NUMBER, RESULT, SUMMARY} from "../helpers/actions";
import {buttonValues} from "../helpers/buttonValues";
import { controlPanel } from './../Calculator.module.scss'

const rowTemplate = [
    ['7', '8', '9', DIVIDE],
    ['6', '5', '4', MULTIPLY],
    ['1', '2', '3', DEDUCTION],
    ['0', CLEAR, RESULT, SUMMARY],
]

const ControlPanel = ({ onButtonClick }) => {
    const getButtonRows = (template = []) => {
        return template.map(row => {
            const buttons = row.map(btnValue => {
                const options = {
                    value: '',
                    action: '',
                }

                if (Object.keys(buttonValues).includes(btnValue)) {
                    options.value = buttonValues[btnValue]
                    options.action = btnValue
                } else {
                    options.value = btnValue
                    options.action = NUMBER
                }

                return <CalculatorButton
                    variant={"outlined"}
                    onClick={() => onButtonClick(options)}
                >{options.value}</CalculatorButton>
            })
            return <ButtonRow>{buttons}</ButtonRow>
        })
    }

    return (
        <div className={controlPanel}>
            {getButtonRows(rowTemplate)}
        </div>
    )
}

export default ControlPanel;
