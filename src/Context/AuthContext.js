import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState(false);

    function signIn() {
        console.log("ik ben ingelogd");
        toggleIsAuth(true);
        history.push("/");
    }

    function signOut() {
        console.log("ik ben uitgelogd")
        toggleIsAuth(false);
        history.push("/welcome");
    }

    const data = {
        isAuthenticated: isAuth,
        signInTrue: signIn,
        signOuFalse: signOut,
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;