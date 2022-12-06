import React from 'react'

export const themeSwitch = (state, action) => {
    switch(action.type) {
        case 'SWITCH_DAY':
            return {url: action.payload, api: 'dog'} //esto hay que ponerle reglas css
        case 'SWITCH_NIGHT':
            return {url: action.payload, api: 'cat'} //esto hay que ponerle reglas css
        default: 
            throw new Error()
    }
}
