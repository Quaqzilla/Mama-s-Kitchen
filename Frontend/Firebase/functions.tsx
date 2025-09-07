import { useState } from "react";
import {auth, google} from "./config";
import { signInWithPopup, signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Custom hook to manage auth state and handlers
export function useAuthControls() {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setLogged] = useState(false);
    const auths = getAuth();
    const user = auths.currentUser;

    const googleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLogged) {
            try {
                await signInWithPopup(auth, google);
                setLogged(true);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        } else {
            navigate("/");
        }
    };

    const emailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLogged) {
            try {
                await signInWithEmailAndPassword(auth, emailAddress, password);
                setLogged(true);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        } else {
            navigate("/");
        }
    };

    const back = () => {
        try{
            navigate("/");
        }catch (error){
            console.error((error));
        }
    };

    const logOut = () => {
        signOut(auth).then(
            () => {
                alert("User logged out");
                setLogged(false);
                navigate("/");
            }
        ).catch(
            (error)=>{
                console.error(error);
            }
        )
    };

    const accOpen = () => {

        if(!isLogged){
            navigate("/loginPage");
        }else{
            navigate("/userAccount");
        }

    };

    return {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        isLogged,
        googleSignIn,
        emailSignIn,
        back,
        user,
        logOut,
        accOpen,
    };
}