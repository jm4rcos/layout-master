import React, { useReducer } from 'react';
import { themes } from '../themes/themes';

const initialState = { color: themes.dark.colors.background, align: 'center' };

const editorReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return {...state, color: action.color};
        case 'SET_ALIGN':
            return {...state, align: action.align};
        default:
            throw new Error();
    }
};

export const EditorContext = React.createContext();

export function EditorProvider({ children }) {
    const [state, dispatch] = useReducer(editorReducer, initialState);
    const setColor = color => dispatch({ type: 'SET_COLOR', color });
    const setAlign = align => dispatch({ type: 'SET_ALIGN', align });

    return (
        <EditorContext.Provider value={{ color: state.color, align: state.align, setColor, setAlign }}>
            {children}
        </EditorContext.Provider>
    );
}
