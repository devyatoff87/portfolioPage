import React from 'react'
import { useReducer } from 'react'
import AppStore, { initState } from './appStore'
import { appReducer } from './appReducer'


function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initState)

    return (
        <AppStore.Provider value={{ state, dispatch }}>
            {children}
        </AppStore.Provider>
    )
}

export default AppContextProvider