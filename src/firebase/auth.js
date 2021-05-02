import firebase from "firebase/app"

export const signup = async({fisrtName, lastName, email,password}) =>{
    const res = await firebase.auth().createUserWithEmailAndPassword(email,password);
    await res.user.updateProfile({displayName:`${fisrtName} ${lastName}`}) 
}