import React from 'react';

export function Desc(props) {
    return (
        <props.element {...props}>{props.children}</props.element>
    )
}
