import React from 'react';
import style from './AppHeader.module.css';

export function AppHeader(props) {
    return (
        <header className={style.AppHeader}>
            {props.children}
        </header>
    )
}
