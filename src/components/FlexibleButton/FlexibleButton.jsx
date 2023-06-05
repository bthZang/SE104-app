import { Typography } from "@mui/material";

import styles from './FlexibleButton.module.scss'

export default function FlexibleButton({ type, label, color, onClick }) {

    let style = {
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center',
        'border-radius': '5px',
        'padding': '8px 0px',
        'width': '100%',
    }

    if (type === 'outlined') {
        style = {
            ...style,
            'background': 'white',
            'border': '2px solid #5971EE',
            'color': '#5971EE'
        }
    }
    else {
        style = { ...style, 'color': 'white', }
        if (color === 'red')
            style = { ...style, 'background': '#FC3E55' }
        else
            if (color === 'green')
                style = { ...style, 'background': '#0BA712' }
            else
                style = { ...style, 'background': '#1233E5' }
    }

    return (
        <div className={styles.customButton} style={style} onClick={onClick}>
            <Typography variant="h6">{label}</Typography>
        </div>
    )
}
