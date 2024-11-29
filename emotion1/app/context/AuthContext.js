'use client'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, {useContext, useState, useEffect} from 'react';
import { auth, db } from '@/firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userDataObj, setUserDataObj] = useState({});
    const [loading, setLoading] = useState(true);

    //Auth Handlers
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        setUserDataObj({});
        setCurrentUser(null);
        return signOut(auth);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
        try {
            setLoading(true);  
            setCurrentUser(user); 
            if (!user){
                console.log('No User Found');
                return;
            }
            console.log ('Fetching User Data');
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
            let firebaseData = docSnap.data();
            if (docSnap.exists()) {
                console.log('User Data Fetched');
                firebaseData = docSnap.data();
            } 
            setUserDataObj(firebaseData);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    })
    return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userDataObj,
        setUserDataObj,
        signup,
        logout,
        login,
        loading
    }
    
    return (
        <AuthContext.Provider value={{value}}>{children}</AuthContext.Provider>
    )
}