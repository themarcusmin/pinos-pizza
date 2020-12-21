import React, { useEffect } from 'react';
import { Redirect } from "@reach/router";
import { useAuth } from "../utils/AuthContext";
import { useMenu } from "../utils/MenuContext";
import { db } from "../firebase";

/* Function:
    - Renders component only for authenticated users
    - Loads menu JSON into MenuContext after successful login
 */

export default function PrivateRoute({ component: Component, path: Path }) {
    const { currentUser } = useAuth();
    const [, setMenu] = useMenu();

    useEffect(() => {
        console.log("loaded");
        const listener = db.on("value", snap => {
            setMenu(snap.toJSON());
        });
        return () => db.off("value", listener)
    }, [setMenu])

    return currentUser ? (
        <Component path={Path} />
    ) : (
            <Redirect to="/login" noThrow />
        )
}