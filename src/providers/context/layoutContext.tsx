import { createContext } from "react";

interface LayoutContextType {
    hovered: boolean;
    setHovered: React.Dispatch<React.SetStateAction<boolean>>;
    fixed: boolean;
    setFixed: React.Dispatch<React.SetStateAction<boolean>>
}

interface LayoutProviderProps {
    children: React.ReactNode;
}

export const LayoutContext = createContext<LayoutContextType | null>(null)