import React from 'react';

export function Title(props) {    
    return (
        // React.createElement(props.type, props, props.children)
        <props.element {...props}>{props.children}</props.element>
    )
}
