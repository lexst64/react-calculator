import React, {useState} from 'react'
import ViewPanel from "../ViewPanel/ViewPanel";
import ControlPanel from "../ControlPanel/ControlPanel";
import {controlButtons} from "../ControlPanel/CalculatorButton/buttonTypes";
import {concatNumbers} from "../../utils";
import {DIVIDE, MULTIPLY, RESULT} from "../ControlPanel/CalculatorButton/actions";
import './Calculator.scss'

const SPACE = ' '

const Calculator = () => {
    const [input, setInput] = useState('')
    const [calcInfo, setCalcInfo] = useState({
        currentNumber: null,
        numbers: [],
        actions: [],
    })

    const updateInput = (value, action) => {
        switch (action) {
            case MULTIPLY:
            case DIVIDE:
                setInput(input + SPACE + value + SPACE)
                break
            case RESULT:
                setInput(value)
                break
            default: setInput(input + value)
        }
    }

    const multiplyHandler = () => {
        setCalcInfo(prevState => ({
            currentNumber: null,
            actions: [...prevState.actions, MULTIPLY],
            numbers: [...prevState.numbers, prevState.currentNumber],
        }))
        return {
            value: controlButtons.multiply,
            action: MULTIPLY,
        }
    }

    const divideHandler = () => {
        setCalcInfo(prevState => ({
            currentNumber: null,
            actions: [...prevState.actions, DIVIDE],
            numbers: [...prevState.numbers, prevState.currentNumber],
        }))
        return {
            value: controlButtons.divide,
            action: DIVIDE,
        }
    }

    const resultHandler = () => {
        const numbers = [...calcInfo.numbers, calcInfo.currentNumber]

        const result = numbers.reduce((res, num, index) => {
            if (!res) return num
            switch (calcInfo.actions[index - 1]) {
                case MULTIPLY: return res * num
                case DIVIDE: return res / num
                default: return res
            }
        }, null)

        setCalcInfo({
            currentNumber: result,
            numbers: [],
            actions: [],
        })

        return {
            value: result,
            action: RESULT,
        }
    }

    const buttonClickHandler = (btnValue) => {
        let actionInfo
        switch (btnValue) {
            case controlButtons.multiply: {
                actionInfo = multiplyHandler()
                break
            }
            case controlButtons.divide: {
                actionInfo = divideHandler()
                break
            }
            case controlButtons.result: {
                actionInfo = resultHandler()
                break
            }
            default: {
                const currentNumber = concatNumbers(calcInfo.currentNumber || 0, btnValue || 0)
                setCalcInfo({ ...calcInfo, currentNumber })
                actionInfo = { value: btnValue }
            }
        }
        updateInput(actionInfo.value, actionInfo.action)
    }

    return (
        <div className={'calculator'}>
            <ViewPanel value={input} />
            <ControlPanel onButtonClick={buttonClickHandler} />
        </div>
    )
}

export default Calculator
