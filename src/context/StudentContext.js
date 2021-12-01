import { createContext, useReducer } from 'react'

// create context
export const StudentContext = createContext()

// create reducer
export const studentReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return { ...state, allTags: action.payload }
        case 'ADDTAG':
            return { ...state, allTags: action.payload }
        default:
            return state;
    }
}

// assign context and reducer to provider
export const StudentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(studentReducer, {
        allTags: {}
    })

    console.log('Context state: ', state)

    return (
        <StudentContext.Provider value={{ ...state, dispatch }}>
            {children}
        </StudentContext.Provider>
    )
}