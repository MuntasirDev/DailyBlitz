import React, { createContext,useEffect,useState} from 'react';
import app from '../Firebase/Firebase.confih';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword , signOut } from 'firebase/auth';

export const AuthContext = createContext();



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState (null);

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    console.log (user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {    const unsubscribe =
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
return () => {

        unsubscribe();
    };


    }, []);

    

    const authInfo = {
        user,
        setUser,
        createUser,
        logout,
        signIn
    };
   

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;