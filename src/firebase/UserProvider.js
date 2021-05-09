import React,{ useEffect, useContext, useState, createContext} from "react";
import "firebase/auth"
import firebase from "firebase/app";

export const UserContext = createContext();

export const UserProvider =(props) =>{

const [session, setSession] = useState({user: null, loading: true});


useEffect(()=>{

    

    const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{

        setSession({loading:false, user})
        console.log(`user in state`, user)
    })
    return ()=> unsubscribe();
},[]);

return (
    <UserContext.Provider value={session}>
        {!session.loading && props.children}
    </UserContext.Provider>
)

}

export const useSession =() => {
    const session = useContext(UserContext)
    return session
}