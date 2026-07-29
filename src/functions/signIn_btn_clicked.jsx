import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
// import HandleSignOut from "../functions/handleSignOut";
// import HandleDeleteAcc from "../functions/HandleDeleteAcc";
// import { use } from "react";


const provider = new GoogleAuthProvider();


async function SignIn_btn_clicked() {

    const result = await signInWithPopup(auth, provider);
    return result.user;
    
}

export default SignIn_btn_clicked;
