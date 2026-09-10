import { useContext } from "react";
import { UserContext } from "../Contexts/userContext";

export function useUser() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error ("useUser must be with a valid UserProvider")
    }

    return context
}