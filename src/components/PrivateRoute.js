import React, { useEffect } from 'react';
import { Redirect } from "@reach/router";
import { useAuth } from "../utils/AuthContext";
import { useMenu } from "../utils/MenuContext";
import { db } from "../firebase";

/* Function:
    - Renders component only for authenticated users
 */

export default function PrivateRoute({ component: Component, path: Path }) {
    const { currentUser } = useAuth();
    const [menu, setMenu] = useMenu();

    useEffect(() => {
        console.log(menu);
        console.log(" menu loaded");
        const listener = db.on("value", snap => {
            setMenu(snap.toJSON());
        });
        return () => db.off("value", listener)
    }, [])

    console.log("test70 from private");

    return currentUser ? (
        <Component path={Path} />
    ) : (
            <Redirect to="/login" noThrow />
        )
}