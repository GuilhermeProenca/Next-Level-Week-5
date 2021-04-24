import { createContext, useState, ReactNode, useContext } from 'react';

type DarkPlayerContextData = {  
    darkTheme: () => void;
    isDark: boolean
};

export const PlayerContextDarkTheme = createContext({} as DarkPlayerContextData);

type DarkPlayerContextProviderProps = {
    children: ReactNode;
}

export function DarkPlayerContextProvider({ children }: DarkPlayerContextProviderProps) {
    const [isDark, setIsDark] = useState(false);

    function darkTheme() {
        setIsDark(!isDark);
    }
    
    return (
        <PlayerContextDarkTheme.Provider 
            value={{
                darkTheme,
                isDark
            }}
        >
            { children }
        </PlayerContextDarkTheme.Provider>
    )
}

export const DarkUsePlayer = () => {
    return useContext(PlayerContextDarkTheme);
}