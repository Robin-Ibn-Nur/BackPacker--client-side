import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        localStorage.removeItem('user-token')
        setLoading(true)
        return signOut(auth)
    }

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        creatUser,
        user,
        loading,
        register,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;