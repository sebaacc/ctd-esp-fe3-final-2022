import React from 'react'

export const themeSwitch = (state, action) => {
    switch (action.type) {
        case 'SWITCH_LIGHT':
            return { theme: action.payload}
        case 'SWITCH_DARK':
            return { theme: action.payload }
        default:
            throw new Error()
    }
}
