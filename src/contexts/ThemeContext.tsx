import { createContext, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

type ThemeContextProviderProps = {
    children: ReactNode
}

type ThemeContextType = {
    toggleTheme(): void;
    theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>(
        '@theme',
        light
    );

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };