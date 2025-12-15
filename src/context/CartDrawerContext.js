"use client";
import {createContext, useContext, useState} from "react";

const drawerContext = createContext();

export const CartDrawerProvider = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // open and close drawer
    const openDrawer = () => {
        setIsDrawerOpen(true);
    };
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <drawerContext.Provider value={
            {
                isDrawerOpen,
                openDrawer,
                closeDrawer
            }
        }>
            {children} </drawerContext.Provider>
    );
};

export const useCartDrawer = () => {
    const context = useContext(drawerContext);
    if (! context) {
        throw new Error("useCartDrawer must be used within a CartDrawerProvider");
    }
    return context;
};
