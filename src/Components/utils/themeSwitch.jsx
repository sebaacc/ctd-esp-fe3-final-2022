import React from 'react'

export const themeSwitch = (state, action) => {
    switch (action.type) {
        case 'SWITCH_LIGHT':
            return { theme: action.payload, data: "" }
        case 'SWITCH_DARK':
            return { theme: action.payload, data: "dark" }
        default:
            throw new Error()
    }
}
