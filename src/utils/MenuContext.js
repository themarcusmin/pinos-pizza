import React, { useState, useContext, createContext } from "react";

/* Function:
    - After mount, get json from  firebase database and load it in MenuContext
 */
const MenuContext = createContext();

export const useMenu = () => {
    return useContext(MenuContext)
}

const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState({});

    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider;