import { doc, setDoc } from 'firebase/firestore';
import { db } from './Firebase';

export async function addUser(user) {
    const googleUser = {
        email: user.providerData[0].email, 
        display_name: user.providerData[0].displayName, 
        photo_url: user.providerData[0].photoURL
    }

    await setDoc(doc(db, "users", user.providerData[0].uid), googleUser);
}