import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser:', currentUser)
            setLoading(false)
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;