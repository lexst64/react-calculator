import React from 'react';
import {TextField} from "@mui/material";

const ViewPanel = ({ value, ...rest }) => {
    return (
        <TextField
            id="fullWidth"
            variant="outlined"
            value={value}
            disabled
            sx={{
                cursor: 'transparent',
                width: '100%',
                opacity: '1',
            }}
            {...rest}
        />
    )
}
//caret-color: transparent;
export default ViewPanel;
