import firebase from "firebase";
import db from "../firebase";

async function socialMediaAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(async (res) => {
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          imageURL: user.photoURL,
        });
      }
      return res.user;
    })
    .catch((err) => {
      return err;
    });
}

export default socialMediaAuth;
