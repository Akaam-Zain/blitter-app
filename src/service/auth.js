import firebase from "../firebase";

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopUp(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;
