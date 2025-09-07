import { useState } from "react";
import {auth, google} from "./config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Custom hook to manage auth state and handlers
export function useAuthControls() {
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setLogged] = useState(false);

    const googleSignIn = async (e) => {
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

    const emailSignIn = async (e) => {
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

    return {
        emailAddress,
        setEmailAddress,
        password,
        setPassword,
        isLogged,
        googleSignIn,
        emailSignIn,
        back,
    };
}