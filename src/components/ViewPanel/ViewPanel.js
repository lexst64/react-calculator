import React from 'react';
import {TextField} from "@mui/material";
import { viewPanel } from './../Calculator.module.scss'

const ViewPanel = ({ value, ...rest }) => {
    return (
        <TextField
            id="fullWidth"
            variant="outlined"
            value={value}
            disabled
            className={viewPanel}
            {...rest}
        />
    )
}

export default ViewPanel;
