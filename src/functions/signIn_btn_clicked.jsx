import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
// import HandleSignOut from "../functions/handleSignOut";
// import HandleDeleteAcc from "../functions/HandleDeleteAcc";
// import { use } from "react";


const provider = new GoogleAuthProvider();


async function SignIn_btn_clicked() {
    // const navigate = useNavigate();


    console.log("Opening popup...");
    const result = await signInWithPopup(auth, provider);
    // const user = result.user;
    return result.user;


    // if (user && !user.email.endsWith("@kiit.ac.in")) {
    //   alert("Only KIIT email addresses are allowed.");
    // //   await HandleSignOut();
    //   await HandleDeleteAcc();
    //   return;
    // }

    // navigate("/home");

    

}

export default SignIn_btn_clicked;
