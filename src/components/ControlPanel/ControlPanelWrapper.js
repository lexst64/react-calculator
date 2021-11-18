import React from 'react';

const ControlPanelWrapper = ({ children, ...rest }) => (
    <div className={'control-panel'} {...rest}>
        {children}
    </div>
);

export default ControlPanelWrapper;
