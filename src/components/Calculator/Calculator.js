import React, {useCallback, useEffect, useState} from 'react'
import ViewPanel from "../ViewPanel/ViewPanel";
import ControlPanel from "../ControlPanel/ControlPanel";
import {concatNumbers} from "../../utils";
import {CLEAR, DEDUCTION, DIVIDE, MULTIPLY, NUMBER, RESULT, SUMMARY} from "../helpers/actions";
import { calculator } from './../Calculator.module.scss'

const Calculator = () => {
    const [input, setInput] = useState('')
    const [calcInfo, setCalcInfo] = useState({
        currentNumber: 0,
        prevNumber: 0,
        action: null,
        currentResult: null,
        prevResult: null,
    })

    const getResult = useCallback(() => {
        const {action, currentNumber, prevNumber, currentResult, prevResult} = calcInfo

        const firstOperand = prevResult !== null ? prevResult : prevNumber
        const secondOperand = currentNumber

        switch (action) {
            case MULTIPLY:
                return firstOperand * secondOperand
            case DIVIDE:
                return firstOperand / secondOperand
            case DEDUCTION:
                return firstOperand - secondOperand
            case SUMMARY:
                return firstOperand + secondOperand
            default:
                return currentResult
        }
    }, [calcInfo])

    // result updating
    useEffect(() => {
        setCalcInfo(prevState => ({
            ...prevState,
            currentResult: getResult(),
        }))
    }, [calcInfo.currentNumber])

    const numberHandler = (value) => {
        setCalcInfo(prevState => ({
            ...prevState,
            currentNumber: concatNumbers(prevState.currentNumber, value),
        }))
        setInput(prevState => prevState + value)
    }

    const actionHandler = (action, value) => {
        setCalcInfo(prevState => ({
            ...prevState,
            currentNumber: 0,
            prevNumber: prevState.currentNumber,
            action: action,
            currentResult: null,
            prevResult: prevState.currentResult,
        }))
        setInput(prevState => prevState + value)
    }

    const resultHandler = () => {
        setCalcInfo(prevState => ({
            ...prevState,
            prevNumber: 0,
            currentNumber: 0,
            prevResult: null,
            action: null,
        }))
        setInput(calcInfo.currentResult)
    }

    const clearHandler = () => {
        setCalcInfo({
            currentNumber: 0,
            prevNumber: 0,
            action: null,
            prevResult: null,
            currentResult: null,
        })
        setInput('')
    }

    const buttonClickHandler = ({value, action}) => {
        switch (action) {
            case NUMBER:
                numberHandler(value)
                break
            case RESULT:
                resultHandler()
                break
            case CLEAR:
                clearHandler()
                break
            default:
                actionHandler(action, value)
        }
    }

    return (
        <div className={calculator}>
            <ViewPanel value={input}/>
            <ControlPanel onButtonClick={buttonClickHandler}/>
        </div>
    )
}

export default Calculator
