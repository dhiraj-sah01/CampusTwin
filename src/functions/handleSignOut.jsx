import { signOut, getAuth } from "firebase/auth";

async function HandleSignOut() {

    const auth = getAuth();
    await signOut(auth);
    return;
}

export default HandleSignOut;