import { createContext, useContext} from 'react'

export enum Theme {
    dark = 'dark',
    light = 'light',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: ( Theme: Theme) => void
}


export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.dark, 
    setTheme: theme => console.warn('no theme')
});

export const useTheme = () =>useContext( ThemeContext )