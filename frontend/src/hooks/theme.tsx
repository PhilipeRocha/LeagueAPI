import React, {createContext, useState, useContext } from 'react'

import dark from '../styles/themes/dark'

interface IThemeContext {
    theme: ITheme
    
}

interface ITheme {
    title: string,

    colors: {
        primary: string
        secondary: string,
        tertiary: string,
        quaternary: string,
        
        white: string,
        black: string,
        gray: string,
        
        success: string,
        info: string,
        warning: string
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider : React.FC = ({ children }) => {
    const [theme] = useState<ITheme>(() => {
        return dark
    })

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext)
    
    return context
}

export { ThemeProvider, useTheme }

