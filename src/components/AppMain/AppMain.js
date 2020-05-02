import React from 'react';
import Style from './AppMain.module.css'; 

export function AppMain(props) {
    return (
        <main className={Style.AppMain}>
            {props.children}
        </main>
    )
}
