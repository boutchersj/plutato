import React, {useState, useEffect,  createContext} from 'react';
import { auth } from '../Firebase'
export const UserContext = createContext(null);
const UserProvider = (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(setuser)
    },[])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
export default UserProvider;