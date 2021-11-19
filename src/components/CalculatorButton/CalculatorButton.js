import Button from "@mui/material/Button";
import { button } from './../Calculator.module.scss'

const CalculatorButton = ({ children, ...rest }) => {
    return <Button className={button} {...rest}>{children}</Button>
}

export default CalculatorButton;
