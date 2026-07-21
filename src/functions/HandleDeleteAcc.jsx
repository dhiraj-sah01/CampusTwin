import { getAuth, deleteUser  } from "firebase/auth";

async function HandleDeleteAcc() {

    const auth = getAuth();
    await deleteUser(auth.currentUser);
    return;
}

export default HandleDeleteAcc;