import React, { createContext,useEffect,useState} from 'react';
import app from '../Firebase/Firebase.confih';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword , signOut, updateProfile } from 'firebase/auth';
import { set } from 'date-fns';
import { useLocation } from 'react-router';

export const AuthContext = createContext();



const auth = getAuth(app);

const AuthProvider = ({ children }) => {



   
   const updateUser = (userInfo) => {
    return updateProfile (auth.currentUser, userInfo);
   }


    const [user, setUser] = useState (null);

    const [loading, setLoading] = useState(true);

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // console.log (user);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {    const unsubscribe =
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
        signIn,
        loading,
        setLoading,
        updateUser,

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