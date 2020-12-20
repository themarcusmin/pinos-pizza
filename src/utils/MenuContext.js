import React, { useState, useContext, createContext } from "react";

/* Function:
    - After mount, get json from  firebase database and load it in MenuContext
 */

const MenuContext = createContext();

export const useMenu = () => {
    return useContext(MenuContext);
}

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState();

    // useEffect(() => {
    //     console.log(" menu loaded");
    //     const listener = db.on("value", snap => {
    //         setMenu(snap.toJSON());
    //     });
    //     return () => db.off("value", listener)
    // }, [])

    return (
        <MenuContext.Provider value={[menu, setMenu]}>
            {children}
        </MenuContext.Provider>
    )
}